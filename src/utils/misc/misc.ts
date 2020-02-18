// interface String {
//   toTitleCase(): string;
// }

// String.prototype.toTitleCase = function (): string {
//   return this.toLowerCase().replace(/\b[a-z]/g, (match) => match.toLocaleUpperCase());
// }

const toTitleCase = function(s: string): string {
  return s.toLowerCase().replace(/\b[a-z]/g, (match) => match.toLocaleUpperCase());
}

const formatOracleTitle = function(title: string): string {
  return toTitleCase(title.slice(title.lastIndexOf(':') + 1).trim());
}

const formatOracleTitleAsUrl = function(title: string): string {
  return title.slice(title.lastIndexOf(':') + 1).trim().toLowerCase().replace(/\s/g, (match) => '-');
}

export default {
  toTitleCase,
  formatOracleTitle,
  formatOracleTitleAsUrl
}