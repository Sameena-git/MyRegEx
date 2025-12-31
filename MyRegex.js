// REGEX PATTERNS TABLE
// ┌──────────────────┬─────────────┬────────────────────────────────────────┐
// │ Regex Pattern    │ Component   │ Explanation                            │
// ├──────────────────┼─────────────┼────────────────────────────────────────┤
// │ /\d+/g           │ \d          │ Matches any single digit (0-9)         │
// │                  │ +           │ Matches one or more of preceding char  │
// │                  │ g           │ Global flag - find all matches         │
// │ /\b\w/g          │ \b          │ Word boundary (start of word)          │
// │                  │ \w          │ Matches word character [a-zA-Z0-9_]    │
// │                  │ g           │ Global flag - find all matches         │
// └──────────────────┴─────────────┴────────────────────────────────────────┘

// function that takes a string and returns the sum of all numbers found in the string
function stringSum(str) {
  let output = 0;  
  const numberLists = str.match(/\d+/g) || [];
  output = numberLists.reduce((sum, num) => sum + parseInt(num), 0);
  return output;
}

// function that takes a string and capitalizes the first letter of each word
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase()).toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

// function that converts a camelCase string to snake_case
function toSnakeCase(str) {
  return str
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`) // Add underscore before uppercase letters and convert to lowercase
    .replace(/^_+/, ''); // Remove leading underscores if any
}

// function that converts a string to SCREAMING_SNAKE_CASE
function ScreamingSnakeCase(str) {
  return str
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/-/g, '_') // Replace hyphens with underscores
    .replace(/[A-Z]/g, letter => `_${letter}`) // Add underscore before uppercase letters
    .replace(/^_+/, '') // Remove leading underscores if any
    .toUpperCase(); // Convert all letters to uppercase
}
