# BrewHub PHL specialist fleet

Cross-repo index for the open **Agent Skills** fleet. Install any skill with:

```bash
npx skills add brewhubphl/<repo-name>
```

Project-local (recommended for BrewHub monorepo):

```bash
npx skills add brewhubphl/<repo-name> --path .agents/skills
```

## Fleet map

| Repo | Domain | Install |
|------|--------|---------|
| [supabase-specialist](https://github.com/brewhubphl/supabase-specialist) | Postgres, RLS, migrations, pooling, Supabase Auth | `npx skills add brewhubphl/supabase-specialist` |
| [nextjs-specialist](https://github.com/brewhubphl/nextjs-specialist) | Next.js 16 App Router, RSC, Server Actions, `use cache`, Workers | `npx skills add brewhubphl/nextjs-specialist` |
| [cloudflare-specialist](https://github.com/brewhubphl/cloudflare-specialist) | Workers, wrangler, Zero Trust, OpenNext edge | `npx skills add brewhubphl/cloudflare-specialist` |
| [coolify-hetzner-specialist](https://github.com/brewhubphl/coolify-hetzner-specialist) | Coolify on Hetzner, cloudflared, fleet deploy | `npx skills add brewhubphl/coolify-hetzner-specialist` |
| [python-ai-agents-specialist](https://github.com/brewhubphl/python-ai-agents-specialist) | Python ADK, MCP servers, HMAC bridge, agent tools | `npx skills add brewhubphl/python-ai-agents-specialist` |
| [raspberry-pi-specialist](https://github.com/brewhubphl/raspberry-pi-specialist) | Pi 5 edge services, LAN APIs, systemd, shop hardware | `npx skills add brewhubphl/raspberry-pi-specialist` |
| [capacitor-mobile-specialist](https://github.com/brewhubphl/capacitor-mobile-specialist) | Capacitor 8 iOS/Android, push, OAuth, TestFlight | `npx skills add brewhubphl/capacitor-mobile-specialist` |
| [twilio-elevenlabs-resend-specialist](https://github.com/brewhubphl/twilio-elevenlabs-resend-specialist) | Resend email, Twilio SMS, ElevenLabs TTS, quotas | `npx skills add brewhubphl/twilio-elevenlabs-resend-specialist` |
| [clean-code-specialist](https://github.com/brewhubphl/clean-code-specialist) | Naming, functions, boundaries, tests, refactoring | `npx skills add brewhubphl/clean-code-specialist` |

## How skills compose

```
clean-code-specialist     ← readability & layer boundaries (this repo)
        │
        ├── supabase-specialist      ← SSOT in Postgres
        ├── nextjs-specialist        ← UI + server routes
        ├── cloudflare-specialist    ← edge API + tunnels
        ├── python-ai-agents-specialist
        ├── capacitor-mobile-specialist
        ├── twilio-elevenlabs-resend-specialist
        ├── raspberry-pi-specialist
        └── coolify-hetzner-specialist
```

**Rule:** Domain specialists own *what* must be true; `clean-code-specialist` owns *how* code should read and change safely.

## Shared scaffold

Every repo in the fleet shares:

- `SKILL.md`, `README.md`, `AGENTS.md`, `anti-patterns.md`
- `patterns/`, `references/`, `examples/brew-hub-integration.md`
- `brew-hub-overrides/` (private overlay placeholder)
- `scripts/validate-skill.mjs`, `.github/workflows/ci.yml`

## Organization

All repos: [github.com/brewhubphl](https://github.com/brewhubphl)
