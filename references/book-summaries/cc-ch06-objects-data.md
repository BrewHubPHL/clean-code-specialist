---
source: "Clean Code — Chapter 6: Objects and Data Structures"
topics: [objects, data-structures, law-of-demeter, abstraction, dtos]
priority: high
added: 2026-06-14
---

## Summary

**Data abstraction** hides implementation behind behavior, not mere getters/setters — expose operations on the essence of data (`getPercentFuelRemaining` vs gallons). **Data/object anti-symmetry**: objects hide data and expose behavior; data structures expose data and have no behavior — they are opposites with opposite extension costs. **Law of Demeter** — a method should only talk to friends, not strangers (`a.getB().getC().doSomething()` is a train wreck). DTOs are fine for wire formats; **Active Record** mixes data access with domain — use cautiously.

## Actionable rules

1. **Hide implementation** — abstract interfaces, not public fields with accessors bolted on.
2. **Objects vs data structures** — pick one model per type; don't hybridize casually.
3. **Law of Demeter** — no train wrecks; `ctx.getCustomer().getAddress().getZip()` violates encapsulation.
4. **Hybrids are the worst** — half object, half data structure gets both downsides.
5. **DTOs for transfer only** — public fields acceptable on boundary structs, not domain cores.
6. **Active Record** — convenient but couples persistence to entities; isolate if used.

## Quotes / anchors

> "Objects hide their data behind abstractions and expose functions that operate on that data. Data structures expose their data and have no meaningful functions."

## Cross-links

- Related pattern: [patterns/boundaries-architecture.md](../../patterns/boundaries-architecture.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
