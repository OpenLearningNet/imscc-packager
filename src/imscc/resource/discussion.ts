import { Page } from "../types";
import DOMPurify from "dompurify";

const safeTags = (str: string) =>
  str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const discussionDocument = (page: Page, _id: string) => ({
  content: `<?xml version="1.0" encoding="UTF-8"?>
<topic xmlns="http://www.imsglobal.org/xsd/imsccv1p1/imsdt_v1p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsccv1p1/imsdt_v1p1 http://www.imsglobal.org/profile/cc/ccv1p1/ccv1p1_imsdt_v1p1.xsd">
  <title>${page.title}</title>
  <text texttype="text/html">${safeTags(
    typeof page.content === "string" ? DOMPurify.sanitize(page.content) : ""
  )}</text>
</topic>`,
  ext: "xml",
});
