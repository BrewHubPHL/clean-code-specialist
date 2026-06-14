# clean-code-specialist

[![Agent Skills](https://img.shields.io/badge/Agent%20Skills-compatible-5c4ee5)](https://agentskills.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Readable, maintainable code patterns — naming, functions, boundaries, tests, refactoring. Part of the [BrewHub PHL](https://github.com/brewhubphl) specialist fleet.

## Install

```bash
npx skills add brewhubphl/clean-code-specialist
```

## Contents

- `SKILL.md` — routing + progressive disclosure
- `patterns/` — seven focused rule files
- `references/book-summaries/` — chapter summaries you author (no copyrighted PDFs)
- `examples/brew-hub-integration.md` — abstract layering for hybrid stacks

## Related specialists

Full fleet index: [references/specialist-fleet.md](references/specialist-fleet.md)

| Repo | Domain |
|------|--------|
| [supabase-specialist](https://github.com/brewhubphl/supabase-specialist) | Postgres, RLS, migrations |
| [nextjs-specialist](https://github.com/brewhubphl/nextjs-specialist) | App Router, Server Actions, `use cache` |
| [cloudflare-specialist](https://github.com/brewhubphl/cloudflare-specialist) | Workers, wrangler, Zero Trust |
| [coolify-hetzner-specialist](https://github.com/brewhubphl/coolify-hetzner-specialist) | Coolify, Hetzner, tunnels |
| [python-ai-agents-specialist](https://github.com/brewhubphl/python-ai-agents-specialist) | ADK, MCP, Python tools |
| [raspberry-pi-specialist](https://github.com/brewhubphl/raspberry-pi-specialist) | Pi edge, LAN APIs |
| [capacitor-mobile-specialist](https://github.com/brewhubphl/capacitor-mobile-specialist) | iOS/Android shell |
| [twilio-elevenlabs-resend-specialist](https://github.com/brewhubphl/twilio-elevenlabs-resend-specialist) | Email, SMS, TTS |

## Validate locally

```bash
node scripts/validate-skill.mjs
```

## License

MIT
