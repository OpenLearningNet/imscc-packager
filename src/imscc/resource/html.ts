import { FILEBASE_PLACEHOLDER } from "../constants";
import { Config, Page } from "../types";

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
${page.content}
</body>
</html>`;
};

export const htmlDocument = (page: Page, id: string, options?: Config) => ({
  ext: "html",
  content: templateHtml(page, id, options),
});
