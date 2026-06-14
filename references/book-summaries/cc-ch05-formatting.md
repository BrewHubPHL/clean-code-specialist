---
source: "Clean Code — Chapter 5: Formatting"
topics: [formatting, readability, vertical-density, team-rules]
priority: medium
added: 2026-06-14
---

## Summary

Formatting serves communication, not aesthetics alone. Use the **newspaper metaphor**: high-level summary at top, details below. **Vertical formatting** groups related concepts with blank-line openness, tight vertical density within a concept, and top-to-bottom call-chain ordering. **Horizontal formatting** keeps lines short (~120 chars), avoids misleading alignment, and uses consistent indentation. Team rules beat personal preference — agree once, automate with formatters.

## Actionable rules

1. **Newspaper layout** — file reads top-down: overview → details.
2. **Vertical openness** — blank lines separate concepts; no blank lines inside a concept.
3. **Vertical proximity** — related lines stay close; variables declared near use.
4. **Vertical ordering** — callers above callees where possible.
5. **Horizontal density** — short lines; don't align variable columns for decoration.
6. **Indentation expresses structure** — never collapse nesting to save space.
7. **Team rules + automation** — one style, enforced by formatter/linter.

## Quotes / anchors

> "Code formatting is about communication, and communication is the professional developer's first order of business."

## Cross-links

- Related pattern: [patterns/comments-documentation.md](../../patterns/comments-documentation.md) (readability alongside docs)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
