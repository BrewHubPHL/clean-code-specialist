# Error Handling

**Impact:** CRITICAL  
**Tags:** errors, exceptions, boundaries

## Prefer exceptions to error codes (app layer)

In TypeScript/Python application code, use typed errors or Result patterns at boundaries — not `if (status === -1)` through ten layers.

Return codes force every caller to handle errors inline — forget once and failures go silent.

## Try-catch-finally first

When adding code that can fail, write the **try-catch-finally skeleton first** (TDD-friendly) — forces you to define the failure contract before the happy path.

## Caller-centric exceptions

Group errors by **how the caller recovers**, not by which component threw:

```typescript
// Bad — component-shaped
class PostgresException extends Error {}
class StripeException extends Error {}

// Better — caller-shaped
class PaymentFailedException extends Error {}
class OrderNotFoundException extends Error {}
```

**Unchecked by default** in app code — wrap checked/vendor exceptions at the boundary adapter, not through ten layers.

## Special case, not special exception

If a condition is part of normal flow, use a clear API (`isEligible()`, empty result) — don't throw for control flow the caller always expects.

## Try/catch scope

Wrap **only** the call you expect to fail — not the whole handler.

```javascript
try {
  await chargeCard(order);
} catch (err) {
  await logSystemError(supabase, { order_id: order.id, stage: 'charge' }, event);
  return paymentFailed(err);
}
```

## Don't return null

Return `Optional`, empty array, or `Result` — force callers to handle absence. Use `.maybeSingle()` consciously in Supabase reads.

Prefer **Null Object** over null when "nothing" is a valid, recurring case (`EmptyCart`, `NoOpNotifier`).

## Don't pass null

Reject null at the **API edge** — validate inputs before they propagate. Callers should never wonder "is null allowed here?"

## Context at boundaries

Translate low-level errors at the edge:

| Internal | External |
|----------|----------|
| Postgres unique violation | `409 Conflict` + safe message |
| ElevenLabs 429 | `429` + user-friendly quota copy |
| Unknown throw | `500` + logged fingerprint; no stack to client |

## Money-adjacent

- Never catch-and-ignore on payment webhooks
- Idempotency before retry
- `logSystemError` + PostHog on critical paths (BrewHub convention)

## Validation

Fail fast on bad input at handler entry — before DB writes. One validation module per endpoint shape.

## References

- *Clean Code* — Ch. 7 Error Handling (`references/book-summaries/cc-ch07-errors.md`)
