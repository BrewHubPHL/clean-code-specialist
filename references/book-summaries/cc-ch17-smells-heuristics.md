---
source: "Clean Code — Chapter 17: Smells and Heuristics"
topics: [code-smells, heuristics, refactoring-catalog, review]
priority: high
added: 2026-06-14
---

## Summary

Comprehensive catalog of **code smells and heuristics** — extends Fowler's *Refactoring* list with Martin's review instincts. Organized by concern: **general** (multiple languages in one source, obvious behavior), **names** (unclear, too cute), **functions** (too many arguments, flag args, dead functions), **comments** (inappropriate information), **source structure** (vertical/horizontal), **tests** (insufficient tests), etc. Use as a **review checklist** — each smell links to a reason you'd change the code.

## Actionable rules

1. **Obvious behavior** — standard names (`close`, `delete`) must do what readers expect.
2. **One language per file** — don't mix SQL/JS/Java in one source file.
3. **Too many arguments** → parameter object; **flag arguments** → split methods.
4. **Dead code** — delete; git is the archive.
5. **Magic numbers** — named constants with domain meaning.
6. **Inappropriate intimacy** — classes shouldn't know each other's internals.
7. **Feature envy** — move method to the data owner.
8. **Selector arguments** — boolean/enum switching behavior → separate methods.
9. **Insufficient tests** — near a bug, add a test that would have caught it.

## Quotes / anchors

> "The list that follows includes many of Martin's smells and adds many more of my own. It also includes other pearls and heuristics that I use to practice my trade."

## Cross-links

- Related pattern: [patterns/code-smells-refactoring.md](../../patterns/code-smells-refactoring.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
