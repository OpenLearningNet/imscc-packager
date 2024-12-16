import { FILEBASE_PLACEHOLDER } from "../constants";
import { Config, Page } from "../types";
import DOMPurify from "dompurify";

export const cssFromConfig = (config?: Config) => {
  if (!config) {
    return "";
  }

  return Object.entries(config.classes)
    .map(([key, value]) => `.${key} { ${value} }`)
    .join("\n");
};

const templateHtml = (page: Page, id: string, options?: Config) => {
  const css = cssFromConfig(options);
  let styleTag = "";

  if (options?.cssMode === "stylesheet-link" && css) {
    styleTag = `\n<link rel="stylesheet" href="${FILEBASE_PLACEHOLDER}/style.css" />\n`;
  } else if (options?.cssMode === "stylesheet-tag" && css) {
    styleTag = `\n<style>\n${css}\n</style>\n`;
  }

  return `<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>${page.title}</title>
<meta name="identifier" content="${id}"/>
<meta name="editing_roles" content="teachers"/>${styleTag}
</head>
<body>
${
  typeof page.content === "string"
    ? DOMPurify.sanitize(page.content)
    : page.content
}
</body>
</html>`;
};

const processHtml = (content: string, options?: Config): string => {
  if (!options) {
    return content;
  }

  if (
    options.cssMode === "stylesheet-tag" ||
    options.cssMode === "stylesheet-link"
  ) {
    return content;
  }

  const classes = options.classes;

  const document = new DOMParser().parseFromString(content, "text/html");

  for (const [className, style] of Object.entries(classes)) {
    const elements = document.getElementsByClassName(className);
    for (const element of elements) {
      if (options.cssMode === "inline-replace") {
        element.classList.remove(className);
      }
      const existingStyle = element.getAttribute("style") || "";
      element.setAttribute("style", `${existingStyle}${style}`);
    }
  }

  return document.documentElement.outerHTML;
};

export const htmlDocument = (page: Page, id: string, options?: Config) => ({
  ext: "html",
  content: processHtml(templateHtml(page, id, options), options),
});
