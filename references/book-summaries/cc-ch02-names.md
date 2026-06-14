---
source: "Clean Code — Chapter 2: Meaningful Names"
topics: [naming, readability, intent, searchability]
priority: high
added: 2026-06-14
---

## Summary

Names are the primary documentation. The chapter builds a discipline of **intention-revealing**, pronounceable, searchable names scoped appropriately — short only in tight lexical scope. Avoid encodings, mental mapping, and cute puns. Class names are nouns; method names are verbs. Pick one word per concept (`fetch` vs `get` vs `retrieve`) and one name per abstraction across the codebase.

## Actionable rules

1. **Use intention-revealing names** — `elapsedTimeInDays`, not `d`.
2. **Avoid disinformation** — don't call a non-`List` structure `accountList`.
3. **Make meaningful distinctions** — `getActiveOrders` vs `getOrders` only when behavior differs.
4. **Use pronounceable names** — `generationTimestamp`, not `genTs`.
5. **Use searchable names** — no single-letter identifiers outside tiny loops.
6. **One word per concept** — pick `fetch`/`get`/`load` and stay consistent.
7. **Class = noun, method = verb** — `Customer`, `calculateTotal`.
8. **Rename on discovery** — a misleading name costs more than a refactor.

## Quotes / anchors

> "The name of a variable, function, or class should answer all the big questions. It should tell you why it exists, what it does, and how it is used."

## Cross-links

- Related pattern: [patterns/naming.md](../../patterns/naming.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
