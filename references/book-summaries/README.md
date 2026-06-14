# Book summaries

Drop **one file per chapter** (or per book section) here. Do not paste entire books into `SKILL.md` or commit PDFs to this public repo.

## Template

Copy this into `references/book-summaries/<source-slug>.md`:

```markdown
---
source: "Clean Code — Chapter 3: Functions"
topics: [functions, srp]
priority: high
added: 2026-06-14
---

## Summary

3–5 sentences capturing the chapter's core argument.

## Actionable rules

1. Rule statement → promoted to `patterns/<file>.md` when adopted
2. ...

## Quotes / anchors

> Optional short quote (fair use) with page number.

## Cross-links

- Related pattern: [patterns/functions.md](../../patterns/functions.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
```

## Suggested sources

| Book | License | Repo policy |
|------|---------|-------------|
| *Clean Code* (Martin) | Commercial | Buy → summarize only |
| *Clean Architecture* (Martin) | Commercial | Buy → summarize only |
| *Refactoring* (Fowler) | Commercial | Buy → summarize; catalog is online |
| *A Philosophy of Software Design* (Ousterhout) | Commercial | Buy → summarize only |
| *The Pragmatic Programmer* | Commercial | Buy → summarize only |
| Google / MDN style guides | Open web | Link + excerpt short rules |

See [sources.md](sources.md) for the canonical index.

## Promotion workflow

```
book summary → patterns/ (if durable) → anti-patterns.md (if mistake) → SKILL.md (one-line pointer only)
```

Run `node scripts/validate-skill.mjs` after adding files.
