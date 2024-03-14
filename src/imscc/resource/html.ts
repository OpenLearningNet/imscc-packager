import { Page } from "../types";

const templateHtml = (page: Page, id: string) => `<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>${page.title}</title>
<meta name="identifier" content="${id}"/>
<meta name="editing_roles" content="teachers"/>
</head>
<body>
${page.content}
</body>
</html>`;

export const htmlDocument = (page: Page, id: string) => ({
  "ext": "html",
  "content": templateHtml(page, id)
});
