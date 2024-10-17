import he from "he";

export const randomId = (prefix?: string) =>
  (prefix ? prefix + "_" : "") + Math.random().toString(36).slice(2);

export function strippedUuid() {
  return crypto.randomUUID().replace(/-/g, "");
}

export function isEscapedHtml(input: string): boolean {
  // Decode the input string using he
  const decoded = he.decode(input);

  // Check if the decoded version contains potential HTML tags
  const hasHtmlTags = /<[^>]+>/g.test(decoded);

  // If the decoded version contains HTML tags, return true
  return hasHtmlTags;
}
