---
source: "Clean Code — Chapter 11: Systems"
topics: [architecture, separation-of-concerns, dependency-injection, bootstrap]
priority: medium
added: 2026-06-14
---

## Summary

Building a system is like building a city — grow it with **separation of concerns**, not big upfront design alone. **Separate constructing from using** — startup/binding is a distinct problem from runtime logic; defer decisions with **dependency injection** and factories. **Boostrap** code belongs at the edges (main, composition root), not scattered. **AOP** cross-cuts (persistence, security) should not pollute domain. Scale through clean boundaries and incremental growth, not monolithic planning.

## Actionable rules

1. **Separate construction from use** — composition root wires dependencies once.
2. **Defer decisions** — DI and factories avoid hard-coding implementations.
3. **Keep bootstrap at the edge** — `main`, server entry, or `app/` wiring only.
4. **Separation of concerns** — each module owns one axis of change.
5. **Grow by policy** — standards + incremental clean-up, not rewrite-from-scratch.
6. **Cross-cutting via aspects/adapters** — not copy-paste in every handler.

## Quotes / anchors

> "Software systems are unique compared to physical systems in that they have no natural seams. We have to be very careful about how we think about separation of concerns."

## Cross-links

- Related pattern: [patterns/boundaries-architecture.md](../../patterns/boundaries-architecture.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
