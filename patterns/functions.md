# Functions

**Impact:** CRITICAL  
**Tags:** functions, srp, abstraction

## Size and shape

- **Small** — aim for a screenful; hard max ~40 lines for business logic.
- **Do one thing** — if you can extract another function with a name that isn't a restatement of the caller, the caller does too much.
- **One level of abstraction** — don't mix `fetch(url)` with `total += line.price * qty` in the same function.

## Arguments

| Count | Guidance |
|-------|----------|
| 0–2 | Ideal |
| 3 | OK with a value object |
| 4+ | Refactor — grouped params or context object |

Avoid **output arguments** — return values instead of mutating passed-in aggregates unless language idioms require it.

## Flag arguments

```typescript
// Bad
sendEmail(user, true, false);

// Better
sendTransactionalEmail(user);
sendCommercialEmail(user);
```

## Command vs query

Functions should **either** change state **or** return data — not both without making that obvious (`pop` is the classic exception, documented).

## Side effects

Name must not lie: `checkPasswordAndInitializeSession` should be split if initialization is surprising from `checkPassword`.

## Error paths

Prefer **guard clauses** at the top:

```typescript
if (!orderId) return badRequest('order_id required');
if (!await canAccess(user, orderId)) return forbidden();
// happy path, unindented
```

## Serverless handlers

Thin `handler` → `parseRequest` → `authorize` → `execute` → `mapResponse`. Money logic lives in `_process-payment.js`-style modules, not inline in export wrapper.

## References

- *Clean Code* — Ch. 3 Functions
- *A Philosophy of Software Design* — deep modules vs shallow APIs
