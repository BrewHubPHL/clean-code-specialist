---
source: "Clean Code — Chapter 9: Unit Tests"
topics: [tdd, tests, first, clean-tests, test-dsl]
priority: high
added: 2026-06-14
---

## Summary

**Three Laws of TDD**: (1) no production code until a failing test, (2) write only enough test to fail, (3) write only enough production code to pass. Tests enable the **-ilities** — flexibility, maintainability, refactorability. Keep tests **as clean as production** — dirty tests rot and are ignored. Build a **domain-specific testing language** so tests read like specs. **F.I.R.S.T.**: Fast, Independent, Repeatable, Self-validating, Timely. One assert per test is a goal, not dogma — **one concept per test** matters more.

## Actionable rules

1. **Three Laws of TDD** — red → minimal green → refactor; repeat.
2. **Clean tests** — clarity over DRY in test code; duplication OK for readability.
3. **Build a test DSL** — helpers that express domain (`givenUserWithCart`).
4. **F.I.R.S.T.** — fast, independent, repeatable, self-validating, timely.
5. **One concept per test** — multiple asserts OK if one behavior.
6. **Dual standard** — tests can be more verbose than production if clearer.
7. **Tests are documentation** — future readers learn intended behavior here.

## Quotes / anchors

> "The cleanliness of the tests is paramount."

> "Tests enable all the other -ilities."

## Cross-links

- Related pattern: [patterns/tests.md](../../patterns/tests.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
