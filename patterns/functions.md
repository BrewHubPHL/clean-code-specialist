# Functions

**Impact:** CRITICAL  
**Tags:** functions, srp, abstraction

## Size and shape

- **Small** — aim for a screenful; hard max ~40 lines for business logic.
- **Do one thing** — if you can extract another function with a name that isn't a restatement of the caller, the caller does too much.
- **One level of abstraction** — don't mix `fetch(url)` with `total += line.price * qty` in the same function.
- **Top-down narrative** — read like a story: `getHtml` → `findParagraphs` → `renderPage`; callers above callees.

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

## Error handling in functions

- **Extract try/catch** — error-handling functions are separate from happy-path logic; don't bury catches in business flow.
- **Prefer exceptions over error codes** at the app layer — keeps callers readable (see `patterns/error-handling.md`).
- **DRY** — duplicated logic in functions is a smell; extract when the same steps appear twice.

## Structured shape

- One entry, one exit — avoid deep nesting; prefer guard clauses and early return.
- Blocks in `if` / `else` / `while` stay one line when possible — extract when they grow.

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

- *Clean Code* — Ch. 3 Functions (`references/book-summaries/cc-ch03-functions.md`)
- *A Philosophy of Software Design* — deep modules vs shallow APIs
