export const randomId = (prefix?: string) =>
  (prefix ? prefix + "_" : "") + Math.random().toString(36).slice(2);

export function strippedUuid() {
  return crypto.randomUUID().replace(/-/g, "");
}

export function containsHTML(str: string) {
  // Regular expression to match any HTML tags
  const regex = /<\/?[a-z][\s\S]*?>/i;
  return regex.test(str);
}

export function wrapHtmlwithCData(html: string) {
  return `<![CDATA[${html}]]>`;
}
