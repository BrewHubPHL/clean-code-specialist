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

## Bad comments

- Restate the code: `i++ // increment i`
- Changelog diary at top of file (use git)
- Commented-out code — delete
- Lie: comment says X, code does Y

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

- *Clean Code* — Ch. 4 Comments
- *A Philosophy of Software Design* — Ch. 3 on comments
