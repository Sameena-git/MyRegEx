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