---
source: "Clean Code — Chapter 3: Functions"
topics: [functions, srp, abstraction, arguments, side-effects]
priority: high
added: 2026-06-14
---

## Summary

Functions should be **small**, do **one thing**, sit at **one level of abstraction**, and read like a top-down narrative (`getHtml` → `findParagraphs` → `renderPage`). Prefer fewer arguments (0–2 ideal), avoid flag arguments and output parameters, and separate **command** from **query**. Side effects must not surprise readers — names must not lie. Structured programming: every function has one entry, one exit, and no deep nesting. Error handling is a separate concern (see Ch. 7).

## Actionable rules

1. **Keep functions small** — if you can extract another function whose name isn't a restatement of the caller, the caller does too much.
2. **Do one thing** — one level of abstraction per function; no mixing HTTP, SQL, and business math.
3. **Limit arguments** — 0–2 ideal; 3+ suggests a parameter object.
4. **No flag arguments** — split `sendEmail(user, true, false)` into named operations.
5. **Prefer exceptions to error codes** — keeps callers clean (expanded in Ch. 7).
6. **Command/query separation** — either change state or return data, not both invisibly.
7. **Extract try/catch** — error handling functions should be their own functions.
8. **Don't repeat yourself** — duplication in functions is a smell for extraction.

## Quotes / anchors

> "Functions should do one thing. They should do it well. They should do it only."

> "The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that."

## Cross-links

- Related pattern: [patterns/functions.md](../../patterns/functions.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
