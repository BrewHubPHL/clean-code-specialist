---
name: clean-code-specialist
description: Readable, maintainable code — naming, functions, boundaries, error handling, tests, refactoring, and code smells for TypeScript, Python, and hybrid stacks.
version: "1.0.0"
tags:
  - clean-code
  - refactoring
  - solid
  - testing
  - naming
  - architecture
when_to_use:
  - Reviewing PRs for readability, coupling, or hidden complexity
  - Naming variables, functions, modules, or API surfaces
  - Splitting god functions, fat handlers, or 500-line components
  - Designing layer boundaries (UI, domain, infrastructure)
  - Writing or restructuring unit and integration tests
  - Deciding when to refactor vs ship a minimal fix
invocation_examples:
  - "Review this Netlify handler for single-responsibility violations"
  - "Rename these symbols so intent is obvious without comments"
  - "Where should this pricing logic live — hook, RPC, or handler?"
  - "Suggest a refactor plan for this 200-line Server Action"
disable-model-invocation: true
---

# Clean Code Specialist

Guidance for **readable, changeable code** in polyglot stacks (TypeScript/React, Node serverless, Python ADK). Optimizes for the next engineer and the next incident — not cleverness.

## Progressive disclosure map

| Need | Load |
|------|------|
| Names & vocabulary | `patterns/naming.md` |
| Function size & shape | `patterns/functions.md` |
| Layers & dependencies | `patterns/boundaries-architecture.md` |
| Errors & null handling | `patterns/error-handling.md` |
| Tests that earn their keep | `patterns/tests.md` |
| Smells → refactor moves | `patterns/code-smells-refactoring.md` |
| Comments & docstrings | `patterns/comments-documentation.md` |
| Mistakes | [anti-patterns.md](anti-patterns.md) |
| Abstract product wiring | [examples/brew-hub-integration.md](examples/brew-hub-integration.md) |
| Book chapter drops | `references/book-summaries/` |
| Other fleet repos | [references/specialist-fleet.md](references/specialist-fleet.md) |
| Links | [references/official-docs-links.md](references/official-docs-links.md) |

## Core principles

1. **Code is read more than written** — optimize for the reader at 2 a.m. during an outage.
2. **One level of abstraction per function** — mix SQL, HTTP, and JSX in one block only at the outermost glue.
3. **Names are documentation** — if you need a comment to explain a name, rename first.
4. **Boundaries protect invariants** — money, auth, and permissions cross one narrow API.
5. **Tests describe behavior** — not implementation; not coverage theater.
6. **Refactor in small steps** — green tests, one smell at a time; no "big bang" rewrites in hot paths.

## Integration

See [references/specialist-fleet.md](references/specialist-fleet.md) for all eight domain repos and install commands.

| Skill | Handoff |
|-------|---------|
| `supabase-specialist` | Push invariants to RLS/RPC instead of "clean" app-only checks |
| `nextjs-specialist` | Server Actions vs routes; component boundaries |
| `cloudflare-specialist` | Worker handler shape; wrangler config clarity |
| `python-ai-agents-specialist` | Tool surfaces, ADK module layout |
| `capacitor-mobile-specialist` | Native vs web import gates |
| `twilio-elevenlabs-resend-specialist` | Fail-soft comms helpers |
| `raspberry-pi-specialist` | Thin LAN client hooks |
| `coolify-hetzner-specialist` | Deploy/runbook structure |
| Your `testing` skill | Playwright, Jest, function tests |

## Book-to-skill

Commercial titles (*Clean Code*, *Refactoring*, *A Philosophy of Software Design*) → **your summaries** in `references/book-summaries/`, never full PDFs. See [references/book-summaries/README.md](references/book-summaries/README.md).

Run `node scripts/validate-skill.mjs` after adding files.
