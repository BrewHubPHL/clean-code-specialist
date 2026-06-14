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
- **Train wrecks** — `ctx.getCustomer().getAddress().getZip()` chains through strangers

## Law of Demeter

A method should talk to **friends**, not strangers:

- OK: `order.getTotal()` on an object you own or were passed
- Avoid: reaching through two+ getters to call a method on a distant object

Refactor train wrecks with a method on the right object (`customer.getZip()`) or a narrow query at the boundary.

## Data vs objects

| | Objects | Data structures |
|---|---------|-----------------|
| Expose | Behavior (methods) | Data (fields) |
| Hide | Implementation | — |
| Adding a **type** | Change every function | No function changes |
| Adding a **function** | Change every type | One new function |

Pick one model per type — **hybrids** (half object, half struct) get both downsides.

- **DTOs** — public fields OK on wire/boundary structs; not domain cores
- **Active Record** — persistence mixed with entity; isolate behind a port if used
- **Abstraction** — `getPercentFuelRemaining()` beats raw gallon getters bolted on

## Third-party boundaries

Wrap vendor SDKs in **one adapter module** — domain never imports Stripe/Twilio/Supabase types directly.

| Technique | When |
|-----------|------|
| **Learning tests** | Before committing to a library — pin behavior you depend on |
| **Interface-first** | Dep doesn't exist yet — design your port, stub until real impl arrives |
| **Minimal surface** | Expose only what the app needs; upgrade pain stays in the adapter |

Learning tests fail early when a vendor upgrade changes semantics — cheaper than production surprises.

## Modules

- **High cohesion** — files that change together live together.
- **Acyclic imports** — break cycles with a port interface or move shared types to a leaf package.
- **Many small modules** — one responsibility beats a god class; compose at the edge.
- **Newspaper order** — public API at top of file, privates below.

## References

- *Clean Code* — Ch. 6, 8, 10 (`references/book-summaries/cc-ch06-objects-data.md`, `cc-ch08-boundaries.md`, `cc-ch10-classes.md`)
- *Clean Architecture* (Martin) — summarize in `book-summaries/`
- *A Philosophy of Software Design* — Ch. 4–6 on complexity
