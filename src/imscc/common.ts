export const randomId = (prefix?: string) =>
  (prefix ? prefix + "_" : "") + Math.random().toString(36).slice(2);

export function strippedUuid() {
  return crypto.randomUUID().replace(/-/g, "");
}

export function containsEscapedHTML(str: string) {
  const escapedHtmlPattern = /&lt;|&gt;|&amp;|&quot;|&#39;/;
  return escapedHtmlPattern.test(str);
}
