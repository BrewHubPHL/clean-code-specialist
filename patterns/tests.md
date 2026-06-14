# Tests

**Impact:** HIGH  
**Tags:** testing, tdd, first

Tests enable the **-ilities** — flexibility, maintainability, refactorability. Without them, "clean up" is gambling.

## Three Laws of TDD

1. No production code until you have a **failing** test
2. Write only enough test to **fail** (compile failures count)
3. Write only enough production code to **pass**

Then refactor. Repeat.

## Clean tests

Test code is as important as production code — **dirty tests rot** and get ignored. Clarity beats DRY in tests; duplication is OK if it aids readability.

**Dual standard:** tests may be more verbose than production when that makes the spec obvious.

## Test DSL

Build a **domain-specific testing language** — helpers that express intent:

```typescript
await givenUserWithCart({ items: 2 });
await whenCheckout();
await expectOrderTotal(42.00);
```

Readers should learn intended behavior from test names and helpers alone.

## F.I.R.S.T.

| Letter | Meaning |
|--------|---------|
| **F**ast | Unit tests seconds; no network by default |
| **I**ndependent | Order-free; own fixtures |
| **R**epeatable | Same result in CI and locally |
| **S**elf-validating | Pass/fail without manual log reading |
| **T**imely | Write before or with the change — not months after |

## One concept per test

Name tests as spec: `rejects_refund_when_square_payment_missing`, not `test1`.

## Test doubles

| Double | Use |
|--------|-----|
| Stub | Fixed return for dependency |
| Mock | Assert interaction (use sparingly) |
| Fake | In-memory DB or clock |
| Real | Integration tests — fewer, slower |

Prefer **fakes** over mocks for Supabase/HTTP when behavior matters.

## Characterization tests

Before refactoring legacy handler: lock current behavior with inputs/outputs you don't fully understand yet — then refactor.

## What to test at each layer

| Layer | Focus |
|-------|-------|
| Pure functions | Examples + edge cases |
| Handlers | Auth gate, status codes, idempotency |
| RLS | SQL policy tests with role JWT |
| UI | Behavior (Playwright); not CSS pixels unless VR |

## Coverage

Coverage is a **lagging indicator**. Required: money path, auth, webhooks. Skip trivial getters.

## References

- *Clean Code* — Ch. 9 Unit Tests (`references/book-summaries/cc-ch09-tests.md`)
- BrewHub `.agents/skills/testing/SKILL.md` for project conventions
