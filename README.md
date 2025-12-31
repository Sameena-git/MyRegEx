# MyRegEx
Simple app to understand Regular expression using javascript and handle basic logics

## Regular Expression Patterns

Here two Regular expressions are used to handle the logics:

**Regex1** - `str.match(/\d+/g)` - Extracts all numbers from a string

| Regex Pattern | Component | Explanation |
|---|---|---|
| `/\d+/g` | `\d` | Matches any single digit (0-9) |
| | `+` | Matches one or more of preceding character |
| | `g` | Global flag - find all matches |




**Regex2** - `str.replace(/\b\w/g, ...)` - Capitalizes the first letter of each word


| Regex Pattern | Component | Explanation |
|---|---|---|
| `/\b\w/g` | `\b` | Word boundary (start of word) |
| | `\w` | Matches word character [a-zA-Z0-9_] |
| | `g` | Global flag - find all matches |


**Regex3** - `str.replace(/\s+/g, '_').replace(/[A-Z]/g, letter => \${letter.toLowerCase()}\).replace(/^_+/, '')`

| Regex Pattern | Component | Explanation |
|---|---|---|
| `/\s+/g` | `\s` | Matches any whitespace character (spaces, tabs, etc.) |
| | `+` | Matches one or more of preceding character |
| | `g` | Global flag - find all matches |
| `/[A-Z]/g` | `[A-Z]` | Matches any uppercase letter |
| | `g` | Global flag - find all matches |
| `/^_+/` | `^` | Asserts position at the start of the string |
| | `_` | Matches underscore character |
| | `+` | Matches one or more of preceding character |


**Regex4** - `str.replace(/\s+/g, '_').replace(/-/g, '_').replace(/[A-Z]/g, letter => _${letter}).replace(/^_+/, '').toUpperCase()`

| Pattern                          | Description                                                                                     |
|----------------------------------|-------------------------------------------------------------------------------------------------|
| `\s+`                            | Matches one or more whitespace characters (spaces, tabs, etc.) and replaces them with an underscore (`_`). |
| `-`                              | Matches hyphens and replaces them with an underscore (`_`).                                   |
| `[A-Z]`                          | Matches any uppercase letter. The replacement function transforms it to `_` followed by the letter itself. |
| `letter => _${letter}`          | A function that takes the matched uppercase letter and prepends it with an underscore (`_`).   |
| `^_+`                            | Matches one or more underscores at the start of the string and removes them.                  |
| `.toUpperCase()`                | Converts the entire resulting string to uppercase.                                            |

**Regex5** - `str.replace(/[*_](\S(?:.*?\S)?)[*_]/g, '<i>$1</i>')`

| Pattern | Meaning |
|---------|---------|
| `/` | Regex delimiter (start) |
| `[*_]` | Match either `*` or `_` (opening delimiter) |
| `(\S(?:.*?\S)?)` | Capture group for italic text: |
| `\S` | Non-whitespace character (required start) |
| `(?:.*?\S)?` | Optional non-capturing group: any characters (lazy) followed by non-whitespace (required end) |
| `[*_]` | Match either `*` or `_` (closing delimiter, must match opening) |
| `/g` | Global flag (replace all matches) |
| `$1` | Replace with captured group (the italic text) |
| `<i>$1</i>` | Replacement: wrap text in HTML italic tags |

**Example matches:**
- `*hello*` → `<hello>`
- `_world_` → `<i>world</i>`
- `*foo bar*` → `<i>foo bar</i>`