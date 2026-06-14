---
source: "Clean Code — Chapter 12: Emergence"
topics: [emergence, simple-design, kent-beck, rules]
priority: medium
added: 2026-06-14
---

## Summary

Clean design **emerges** from four rules (Kent Beck): (1) runs all tests, (2) contains no duplication, (3) expresses intent, (4) minimizes classes and methods. Following tests + no duplication + clear names naturally drives simple, flexible structures — not upfront over-engineering. **Getting clean via emergent design** means refactoring toward these rules continuously rather than designing the perfect architecture on day one.

## Actionable rules

1. **Runs all tests** — correctness gate for any design change.
2. **No duplication** — every concept has a single authoritative representation.
3. **Expresses intent** — names and structure communicate purpose.
4. **Minimal elements** — fewest classes/methods that satisfy 1–3; delete speculative code.
5. **Emergence over big design up front** — let structure appear through refactors.

## Quotes / anchors

> "The emergence of a simple design comes from following these rules: Runs all the tests, Contains no duplication, Expresses the intent, Minimizes the number of classes and methods."

## Cross-links

- Related pattern: [patterns/code-smells-refactoring.md](../../patterns/code-smells-refactoring.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
