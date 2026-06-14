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

**LeBlanc's law:** later equals never — defer cleanup and you never return.

## Simple design (Kent Beck)

A design is clean when it:

1. **Runs all tests**
2. **Contains no duplication**
3. **Expresses intent** (names, structure)
4. **Minimizes** classes and methods — delete speculative code

Emergence beats big-design-up-front: let structure appear through refactors guided by these four rules.

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
| Obvious behavior violated | `close()` must close; `delete()` must delete — match reader expectations |
| One language per file | Don't mix SQL, JSX, and Java in one source file |
| Selector arguments | `process(order, true, false)` — split methods or strategy objects |
| Inappropriate intimacy | Classes knowing each other's internals — move method or introduce port |
| Insufficient tests | Near a bug, add the test that would have caught it |
| Magic numbers | Named constants with domain meaning |

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

- *Clean Code* — Ch. 1, 12, 17 (`references/book-summaries/cc-ch01-clean-code.md`, `cc-ch12-emergence.md`, `cc-ch17-smells-heuristics.md`)
- *Refactoring* (Fowler) — catalog in `book-summaries/` as you read
- [refactoring.com/catalog](https://refactoring.com/catalog/)
