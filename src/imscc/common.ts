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

export function getRandomNumberInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Converts a string to kebab-case (lowercase and separated by hyphens).
 * @param input The input string to format.
 * @returns The formatted string.
 */
export function toKebabCase(input: string): string {
  return input
    .trim() // Remove leading and trailing whitespace
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, "") // Remove any non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
}
