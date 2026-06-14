---
source: "Clean Code — Chapter 7: Error Handling"
topics: [exceptions, error-handling, null, try-catch, context]
priority: high
added: 2026-06-14
---

## Summary

Prefer **exceptions over return codes** — they separate error handling from happy path. Write **try-catch-finally first** when working with code that can fail (TDD-friendly). Use **unchecked exceptions** for most application code; checked exceptions can create dependency pollution. Define **exception classes for callers' needs** (e.g. `DeviceResponseException`), not by component. Provide **context** in messages. Define the **normal flow** without exceptions where possible (`tryEatFood` vs `isHungry`). **Don't return null; don't pass null** — Null Object pattern or fail fast.

## Actionable rules

1. **Exceptions, not error codes** — keeps callers readable.
2. **Try-catch-finally first** — forces thinking about failure modes before success path.
3. **Unchecked by default** — wrap checked exceptions at boundaries if needed.
4. **Caller-centric exception types** — group by how the caller recovers.
5. **Include context** — operation, input snippet, stage of pipeline.
6. **Special case, not special exception** — control flow with clear APIs when normal.
7. **Never return null** — empty collection, optional, or throw.
8. **Never pass null** — fail fast at API edge.

## Quotes / anchors

> "Return codes clutter the caller. The caller must deal with the error immediately — if it forgets, bad things happen silently."

## Cross-links

- Related pattern: [patterns/error-handling.md](../../patterns/error-handling.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
