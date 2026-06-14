# Comments & Documentation

**Impact:** MEDIUM  
**Tags:** comments, docs, docstrings

## Good comments

| OK | Example |
|----|---------|
| Legal / compliance | CAN-SPAM classification note |
| Non-obvious invariant | "Square sends duplicate webhooks; idempotency key is event_id" |
| Warning | "Do not call without manager PIN — bypasses RLS" |
| TODO with ticket | `// BRE-123: remove after DNS flip` |
| Clarification / amplification | Non-obvious regex, performance trade-off, intent behind odd-looking code |
| Public API contract | JSDoc on exported surfaces only |

**Rule:** don't comment bad code — rewrite it. The best comment is the one you found a way not to write.

## Bad comments

- Restate the code: `i++ // increment i`
- Changelog diary at top of file (use git)
- Commented-out code — delete
- Lie: comment says X, code does Y
- **Closing-brace comments** (`} // end if`) — structure should be obvious from formatting
- **Position markers** (`// actions go here`) — organize with functions instead
- **Attributions / bylines** — git blame has this
- **Function headers** that repeat the signature — name the function well instead
- **HTML in source** (`<!-- ... -->` in `.ts`) — breaks tooling; use markdown docs
- **Non-local information** — document invariants at the module or API boundary, not inline

Prefer code over comments: `isEligibleForRefund()` beats `// only if paid and within 30 days`.

## Docstrings / JSDoc

Document **contracts at boundaries**:

- Public RPC parameters and failure modes
- Server Action preconditions
- Python ADK tool: what is trusted vs server-rechecked

Skip JSDoc on obvious private helpers.

## Markdown vs code

Per BrewHub `AGENT-ARCHITECTURE.md`: rules that must hold need **enforcement in code** — docs are the index. Comment "never trust client price" without `_pricing.js` is a wish.

## API docs

OpenAPI entries for Netlify/Worker routes — five lines beats a novel in handler header.

## References

- *Clean Code* — Ch. 4 Comments (`references/book-summaries/cc-ch04-comments.md`)
- *A Philosophy of Software Design* — Ch. 3 on comments
