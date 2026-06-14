---
source: "Clean Code — Chapter 14: Successive Refinement"
topics: [refactoring, case-study, args, iterative-design]
priority: medium
added: 2026-06-14
---

## Summary

Case study of the **Args** command-line parser — from rough draft (boolean/string/int maps, tangled parsing) through successive refactors to a clean design with **ArgumentMarshaler** strategy objects, schema-driven parsing, and **ArgsException** with error codes. Demonstrates **successive refinement**: make it work, then make it right in small steps with tests. Shows how incremental extraction of abstractions beats one-shot "perfect" design.

## Actionable rules

1. **Successive refinement** — working mess → tests → small refactors → clean structure.
2. **Extract when types diverge** — separate marshalers per argument type.
3. **Schema drives parsing** — `"l,p#,d*"` encodes type in format string.
4. **Exception taxonomy for callers** — `ArgsException.ErrorCode` + context parameter.
5. **Delete the rough draft path** — don't carry two implementations; refactor in place with tests.
6. **One abstraction per change** — ArgumentMarshaler interface isolates type-specific logic.

## Quotes / anchors

> "It is not enough for code to work. Code that works is often badly broken."

## Cross-links

- Related pattern: [patterns/code-smells-refactoring.md](../../patterns/code-smells-refactoring.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
