---
source: "Clean Code — Chapter 16: Refactoring SerialDate"
topics: [refactoring, case-study, domain-model, naming, comments]
priority: low
added: 2026-06-14
---

## Summary

Critique and refactor of **SerialDate** (Common Grounds library) — a date class with muddled responsibilities, misleading names (`Day.FRIDAY` as index 6), magic numbers, and comment noise. Martin walks through what the class *should* express, identifies smells (dead code, confusing statics, poor abstraction), and sketches a cleaner domain-oriented design. Reinforces that **naming and comments on comments** reveal deeper design problems.

## Actionable rules

1. **Name domain concepts precisely** — `Day` enum vs integer indices with misleading constants.
2. **Comments on comments signal rot** — when you explain why comments are wrong, redesign.
3. **Question third-party domain models** — wrap or replace if semantics don't match your needs.
4. **Static vs instance** — serial day number may belong on instance, not only static utilities.
5. **Delete dead and commented code** — SerialDate carried unused paths and noise.
6. **Refactor toward ubiquitous language** — method names match how product talks about dates.

## Quotes / anchors

> "It is not enough for code to work. Code that works is often badly broken."

## Cross-links

- Related pattern: [patterns/code-smells-refactoring.md](../../patterns/code-smells-refactoring.md)
- Related pattern: [patterns/naming.md](../../patterns/naming.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
