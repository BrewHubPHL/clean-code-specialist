---
source: "Clean Code — Chapter 10: Classes"
topics: [classes, srp, cohesion, encapsulation, organization]
priority: high
added: 2026-06-14
---

## Summary

Classes should be **small** — measured by responsibilities, not line count. **Single Responsibility Principle (SRP)**: a class should have one reason to change; name it so one person can describe it without "and." **High cohesion** — methods use instance fields; many small cohesive classes beat one large weakly cohesive class. **Encapsulation** — hide internals; don't expose fields for convenience. **Organizing for change** — isolate volatility behind interfaces (Open-Closed). Structure classes like newspaper: public API at top, privates below.

## Actionable rules

1. **Classes should be small** — one responsibility; if the name needs "and," split.
2. **SRP** — one reason to change per class/module.
3. **High cohesion** — if methods don't share fields, they may belong elsewhere.
4. **Many small classes** — composition over god classes; each does one thing well.
5. **Encapsulate** — prefer hiding over exposing for test convenience.
6. **Organize for change** — depend on abstractions; new behavior via new types, not edits.
7. **Newspaper order** — public methods first, details last.

## Quotes / anchors

> "A class should have only one reason to change."

> "We want our systems to be composed of many small classes, not a few large ones."

## Cross-links

- Related pattern: [patterns/boundaries-architecture.md](../../patterns/boundaries-architecture.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
