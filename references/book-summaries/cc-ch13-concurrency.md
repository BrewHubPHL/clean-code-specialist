---
source: "Clean Code — Chapter 13: Concurrency"
topics: [concurrency, threading, srp, shared-state, testing]
priority: medium
added: 2026-06-14
---

## Summary

Concurrency is hard — keep **concurrent code small** and **separate** from the rest (SRP). **Limit scope of shared data**; prefer copies and thread-safe collections over ad-hoc locking. Know your execution models and libraries. **Write thread-aware code as POJOs first**, then integrate. Test on **all target platforms**; use **instrumentation** (yield/sleep/jiggle) to expose timing bugs. Clean structure dramatically improves odds of correct concurrent code.

## Actionable rules

1. **SRP for threads** — keep concurrent code separate and small.
2. **Limit shared mutable state** — narrow scope; prefer immutable/copied data.
3. **POJO first** — business logic without threads, then wrap.
4. **Know your library** — executors, concurrent collections, policies.
5. **Test on target platforms** — threading behavior varies by OS/JVM.
6. **Instrument to force failures** — jiggle timing during tests.
7. **Keep synchronized sections tiny** — lock only what must be locked.

## Quotes / anchors

> "If you take a clean approach, your chances of getting it right increase drastically."

## Cross-links

- Related pattern: [patterns/boundaries-architecture.md](../../patterns/boundaries-architecture.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
