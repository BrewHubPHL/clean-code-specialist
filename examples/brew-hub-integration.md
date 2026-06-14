# BrewHub Integration (Abstract)

## Layering in the hybrid stack

```
Capacitor UI ──▶ Next.js static / hooks
                      │
                      ▼
              Worker / Netlify handlers  ← auth, recompute, webhooks
                      │
                      ▼
              Postgres RPC + RLS         ← SSOT for permissions & totals
                      │
        Python ADK (Coolify) ◀── HMAC MCP (staff tools only)
```

**Clean-code rule:** UI and LLM tools stay **thin**; invariants live one ring inward.

## Review checkpoints

| Surface | Ask |
|---------|-----|
| `usePOSCheckout.ts` | Does it trust client totals? (should call server recompute) |
| `netlify/functions/_process-payment.js` | Single responsibility per extracted helper? |
| `src/app/api/chat/route.ts` | Allergen + injection layers separate from streaming glue? |
| `python-agents/tools/` | Tool args revalidated server-side? |
| Migrations | One concern per migration file? |

## Triple-copy helpers

`_send-email.js`, `src/lib/email/send.ts`, Deno shared — **behavioral parity** is the contract. Clean code here means identical signatures and error shapes, not premature shared npm package until a fourth consumer exists.

## Audit log discipline

`FULLSTACK-LOGIC.md` entries are **operational docs**, not substitutes for readable code. Write the enforcement first; log the change second.

## When this skill defers

- Postgres index DDL → `supabase-specialist`
- Wrangler bindings → `cloudflare-specialist`
- Square idempotency contract → `square-payments` skill

## Anti-pattern specific to BrewHub

"Clean" refactors that move pricing or auth **out of** the SSOT layer into "simpler" React — always reject.
