export const randomId = (prefix?: string) =>
  (prefix ? prefix + "_" : "") + Math.random().toString(36).slice(2);

export function generateId() {
  return crypto.randomUUID().replace(/-/g, "");
}
