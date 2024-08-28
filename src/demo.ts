import { COURSE, PAGE } from "./exampleStructure";
import { generateImscc, generateQtiQuiz } from "./imscc-packager";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div><button id="courseButton">Package Course</button><button id="pageButton">Package Page</button></div>
    <textarea id="courseInput" placeholder="Course Structure Here" cols="90" rows="40"></textarea>
  </div>
  <div>
    <button id="packageButton">Export Package</button>
  </div>
`;

let exportMode = "course";

const courseInput =
  document.querySelector<HTMLTextAreaElement>("#courseInput")!;
const packageButton =
  document.querySelector<HTMLButtonElement>("#packageButton")!;

const toggleCourseExample = () => {
  courseInput.value = JSON.stringify(COURSE, null, 2);
  packageButton.innerHTML = "Export Course";
  exportMode = "course";
};

const togglePageExample = () => {
  courseInput.value = JSON.stringify(PAGE, null, 2);
  packageButton.innerHTML = "Export Page";
  exportMode = "page";
};

window.addEventListener("load", toggleCourseExample);

document
  .getElementById("courseButton")!
  .addEventListener("click", toggleCourseExample);
document
  .getElementById("pageButton")!
  .addEventListener("click", togglePageExample);

const parseStructure = () => {
  try {
    return JSON.parse(courseInput.value);
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;

    console.error(error);
    alert(`Invalid JSON: ${message}`);
  }

  return null;
};

packageButton.addEventListener("click", async () => {
  const resourceInputData = parseStructure();

  let zipBlob = null;

  if (exportMode === "page") {
    zipBlob = await generateQtiQuiz(
      resourceInputData,
      "Page generated by web demo"
    );
  } else if (resourceInputData) {
    zipBlob = await generateImscc(
      resourceInputData,
      "Generated by web demo",
      "1.1.0",
      {
        classes: { container: "background-color: lightblue" },
        cssMode: "stylesheet-link",
      }
    );
  }

  if (zipBlob) {
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = exportMode + ".zip";
    a.click();
  }
});
