import he from "he";

export const randomId = (prefix?: string) =>
  (prefix ? prefix + "_" : "") + Math.random().toString(36).slice(2);

export function strippedUuid() {
  return crypto.randomUUID().replace(/-/g, "");
}

export function containsEscapedHTML(jsonField: string) {
  // Commonly escaped HTML entities
  const escapedHtmlPattern = /&lt;|&gt;|&amp;|&quot;|&#39;/;

  // Check if the field contains any HTML entities
  const containsEscapedHtml = escapedHtmlPattern.test(jsonField);
  return containsEscapedHtml;
}

export function isEscapedProperly(jsonField: string) {
  // Decode the string to check if it results in HTML tags
  const decoded = he.decode(jsonField);

  // Create a temporary element to see if the decoded string contains valid HTML tags
  const tempElement = document.createElement("div");
  tempElement.innerHTML = decoded;
  const containsValidHtml = tempElement.children.length > 0;
  return containsValidHtml;
}
