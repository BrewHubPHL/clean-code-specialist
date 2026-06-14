# Naming

**Impact:** CRITICAL  
**Tags:** naming, readability, intent

## Rules

1. **Reveal intent** — `elapsedTimeInDays` not `d`; `customerId` not `id` in wide scope.
2. **Avoid disinformation** — don't call a `List` a `accountGroup` if it isn't one.
3. **Meaningful distinctions** — `getActiveOrders` vs `getOrders` only when behavior differs.
4. **Pronounceable** — `generationTimestamp` not `genTs`.
5. **Searchable** — single-letter names only in tiny loops; never `e` for entity in handlers.
6. **One word per concept** — pick `fetch` or `get` or `load` per codebase; don't mix casually.
7. **Class = noun, method = verb** — `Customer`, `calculateTotal`; one name per abstraction across the codebase.

## Avoid

- **Encodings** — prefixes (`str`, `m_`, `I` for interface) duplicate what types express
- **Mental mapping** — reader must translate `r` → "user record"; use the domain word
- **Cute puns** — `whack()`, `eatMyShorts()` age badly; humour doesn't scale across teams

## Per-language notes

| Language | Convention |
|----------|------------|
| TypeScript/React | `camelCase` functions/vars; `PascalCase` components/types; `SCREAMING_SNAKE` true constants |
| Python | `snake_case`; `PascalCase` classes; module names short, lowercase |
| SQL/RPC | Verb-first RPCs: `upsert_device_token`, `check_rate_limit` |
| Files | Match default export or primary symbol; no `utils2.ts` |

## Scope and length

- Short names OK in **small scope** (`i`, `row`, `err` in 5-line block).
- Function names = **verb + object**: `calculateTotals`, `verifyWebhookSignature`.
- Booleans read as questions: `isOpen`, `hasPermission`, `canRefund`.

## When renaming

Rename before adding features on top of a misleading name. Use IDE refactor + tests; update OpenAPI and RPC names in the same PR when public.

## Smell → action

| Smell | Action |
|-------|--------|
| Comment "/* not really a cache */" | Rename type/module |
| `data`, `info`, `temp` in API layer | Name the domain object |
| Hungarian notation | Remove; types live in the type system |
| Encoded prefixes (`strName`, `m_count`) | Idiomatic names per language |
| Cute or insider pun names | Rename to domain vocabulary |

## References

- *Clean Code* — Ch. 2 Meaningful Names (`references/book-summaries/cc-ch02-names.md`)
