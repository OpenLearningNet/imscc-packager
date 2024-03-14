import { COURSE } from './exampleStructure';
import { generateImscc } from './imscc-packager';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <textarea id="courseInput" placeholder="Course Structure Here" cols="90" rows="40"></textarea>
  </div>
  <div>
    <button id="packageButton">Package</button>
  </div>
`

const courseInput = document.querySelector<HTMLTextAreaElement>('#courseInput')!;
const packageButton = document.querySelector<HTMLButtonElement>('#packageButton')!;

window.addEventListener('load', () => {
  courseInput.value = JSON.stringify(COURSE, null, 2);
})

const parseCourseStructure = () => {
  try {
    return JSON.parse(courseInput.value);
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message

    console.error(error);
    alert(`Invalid JSON: ${message}`);
  }

  return null;
}

packageButton.addEventListener('click', async () => {
  const courseStructure = parseCourseStructure();

  if (courseStructure) {
    const zipBlob = await generateImscc(courseStructure);
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'course.imscc';
    a.click();
  }
});
