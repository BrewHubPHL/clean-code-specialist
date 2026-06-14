# Code Smells & Refactoring

**Impact:** HIGH  
**Tags:** refactoring, smells, tech-debt

## When to refactor

| Do now | Defer |
|--------|-------|
| Same file you're editing for a feature | Unrelated module "while we're here" |
| Smell blocks correct fix | Cosmetic rename across 80 files |
| Test exists or you'll add one first | Hot path during incident |

**Boy Scout rule:** leave the file slightly cleaner than you found it — one smell, not a rewrite.

## Common smells → moves

| Smell | Refactoring move |
|-------|------------------|
| Long method | Extract Method |
| Large class | Extract Class / Module |
| Duplicate code | Extract Function; shared helper if 3+ sites |
| Feature envy | Move Method to module that owns data |
| Primitive obsession | Small value types (`Money`, `Email`) |
| Switch on type | Polymorphism or dispatch table |
| Parallel inheritance | Replace with composition |
| Speculative generality | Delete unused abstraction |
| Dead code | Delete — git remembers |

## Refactoring workflow

1. Green bar (tests or characterization)
2. One mechanical change (IDE refactor)
3. Green bar
4. Commit
5. Repeat

No "refactor" PR that also changes behavior — split PRs.

## Agent discipline

When asked to "clean up" a handler:

1. List smells (max 5)
2. Propose ordered steps with risk
3. Execute smallest step with test
4. Stop when task goal is met — don't gold-plate

## References

- *Refactoring* (Fowler) — catalog in `book-summaries/` as you read
- [refactoring.com/catalog](https://refactoring.com/catalog/)
