# AGENTS.md

Navigation for `clean-code-specialist`.

## Load order

1. `SKILL.md` — when_to_use + map
2. One `patterns/*.md` matching the review task
3. `anti-patterns.md` before large refactors
4. `examples/brew-hub-integration.md` for BrewHub layering context

## Specialist fleet

All BrewHub open skills: [references/specialist-fleet.md](references/specialist-fleet.md) (8 domain repos + this one).

## Pair with

- Domain specialists — **where** logic must live (`supabase-specialist`, `nextjs-specialist`, etc.)
- your project's testing skill/conventions — test shape after refactor

## Book ingestion

Add `references/book-summaries/<slug>.md` using the template in that folder. Promote durable rules into `patterns/`.

## Operating principles

The fleet-wide philosophy (zero-trust the client, fail closed, idempotency on the money
path, etc.) lives in [PRINCIPLES.md](PRINCIPLES.md). Apply it on top of the domain
patterns in this repo.
