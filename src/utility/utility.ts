// interface String {
//   toTitleCase(): string;
// }

// String.prototype.toTitleCase = function (): string {
//   return this.toLowerCase().replace(/\b[a-z]/g, (match) => match.toLocaleUpperCase());
// }

export function toTitleCase(s: string): string {
  return s.toLowerCase().replace(/\b[a-z]/g, (match) => match.toLocaleUpperCase());
}

export function formatOracleTitle(title: string): string {
  return toTitleCase(title.slice(title.lastIndexOf(':') + 1).trim());
}