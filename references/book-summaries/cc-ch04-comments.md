---
source: "Clean Code — Chapter 4: Comments"
topics: [comments, documentation, intent, noise]
priority: medium
added: 2026-06-14
---

## Summary

Comments do not make up for bad code — express yourself in code first. Good comments are rare: legal, informative (non-obvious), intent, clarification, warning, TODO with ticket, amplification, and public API docs. Bad comments are abundant: redundant, misleading, mandated noise, journal entries, commented-out code, HTML in source, attributions, and function headers that repeat the signature. The best comment is the one you found a way not to write.

## Actionable rules

1. **Explain yourself in code** — rename or extract before commenting.
2. **Good comments only** — legal, intent, warning, TODO with owner/ticket, public API contract.
3. **Delete commented-out code** — version control remembers.
4. **No redundant comments** — if the comment repeats the code, fix the code.
5. **No noise** — closing-brace comments, position markers, and attribution blocks are clutter.
6. **Don't use a comment when a function or variable will do** — `isSlaughterable()` beats a comment on `i`.
7. **Keep non-local information out of line comments** — document at the right boundary.

## Quotes / anchors

> "Don't comment bad code — rewrite it."

> "The only truly good comment is the comment you found a way not to write."

## Cross-links

- Related pattern: [patterns/comments-documentation.md](../../patterns/comments-documentation.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
