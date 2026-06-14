---
source: "Clean Code — Chapter 8: Boundaries"
topics: [boundaries, third-party, learning-tests, adapters]
priority: high
added: 2026-06-14
---

## Summary

Third-party code is a **boundary** — you don't control it, so isolate it. **Explore boundaries** with learning tests (e.g. log4j behavior) before committing; they document assumptions and catch upgrade breakage. **Using code that doesn't exist yet** — define your interface first, write tests against it, stub until the real dependency arrives. **Clean boundaries** mean your domain speaks your language; adapters translate at the edge.

## Actionable rules

1. **Wrap third-party APIs** — single adapter module; don't leak vendor types into domain.
2. **Learning tests** — small tests that pin vendor behavior before integration.
3. **Interface-first for missing deps** — design your side, stub the other.
4. **Minimize surface area** — expose only what the app needs from a library.
5. **Upgrade path** — learning tests fail early when vendor changes semantics.

## Quotes / anchors

> "Learning tests are better than free."

## Cross-links

- Related pattern: [patterns/boundaries-architecture.md](../../patterns/boundaries-architecture.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
