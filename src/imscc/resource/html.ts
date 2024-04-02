import { Page } from "../types";

const templateHtml = (page: Page, id: string, css?: string) => {
  const styleTag = css ? `\n<style>\n${css}\n</style>\n` : "";
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

export const htmlDocument = (page: Page, id: string, css?: string) => ({
  ext: "html",
  content: templateHtml(page, id, css),
});
