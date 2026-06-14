# Boundaries & Architecture

**Impact:** HIGH  
**Tags:** solid, layers, dependencies

## Dependency rule

**Source dependencies point inward** — UI and handlers depend on domain contracts; domain does not import React, Supabase client, or Twilio SDK.

```
UI (React) → application services → domain rules → ports
                                      ↑
                              adapters (DB, HTTP, queue)
```

In practice for BrewHub-style stacks: **Postgres RPC + handlers are the inner ring** for money and permissions; UI is a thin interpreter.

## SOLID (practical subset)

| Principle | Agent rule |
|-----------|------------|
| **S**ingle responsibility | One reason to change per module |
| **O**pen/closed | Extend via new handlers/tools, not `if (brand === …)` sprawl |
| **L**iskov | Substitutable adapters behind one interface |
| **I**nterface segregation | Narrow RPCs; no god `manageEverything` |
| **D**ependency inversion | Handlers depend on `getAdminClient()`, not global singletons in tests |

## Where logic belongs

| Concern | Layer |
|---------|--------|
| Price totals | Server handler / RPC recompute |
| "Is user staff?" | JWT + server role check |
| Button disabled state | UI (UX only; not security) |
| Allergen refusal | Shared regex + server audit |
| LLM tool args | Untrusted — revalidate server-side |

## Coupling smells

- Handler imports from `src/components/`
- Python tool imports Next.js module
- Shared `types.ts` that pulls in half the monorepo

## Modules

- **High cohesion** — files that change together live together.
- **Acyclic imports** — break cycles with a port interface or move shared types to a leaf package.

## References

- *Clean Architecture* (Martin) — summarize in `book-summaries/`
- *A Philosophy of Software Design* — Ch. 4–6 on complexity
