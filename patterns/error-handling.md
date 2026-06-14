# Error Handling

**Impact:** CRITICAL  
**Tags:** errors, exceptions, boundaries

## Prefer exceptions to error codes (app layer)

In TypeScript/Python application code, use typed errors or Result patterns at boundaries — not `if (status === -1)` through ten layers.

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

- *Clean Code* — Ch. 7 Error Handling
