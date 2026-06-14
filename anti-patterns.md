# Anti-patterns — Clean Code

## CRITICAL

| Anti-pattern | Why | Fix |
|--------------|-----|-----|
| God function / god component | Untestable, merge conflicts, hidden side effects | Extract by responsibility; one level of abstraction |
| Comments explaining bad names | Noise rots; names lie | Rename; delete comment |
| Business rules only in UI | Bypassed by API, LLM tools, webhooks | Enforce at DB/RPC/handler SSOT |
| `catch (e) {}` / swallowed errors | Silent money and auth bugs | Log + track; rethrow or mapped domain errors |
| Refactor without tests on hot path | Regressions ship | Characterization test first; then refactor |
| "We'll clean it up later" | **LeBlanc's law:** later equals never; mess compounds | Boy Scout rule on every touch; never defer cleanup you can do now |
| Grand redesign in the sky | Rewrite races maintenance; often fails for same reasons | Incremental refactor with tests; no parallel greenfield rescue |

## HIGH

| Anti-pattern | Fix |
|--------------|-----|
| Boolean flag parameters (`process(order, true, false)`) | Split functions or small strategy objects |
| Deep nesting (>3 levels) | Guard clauses, early return, extract function |
| Magic numbers/strings | Named constants at point of use or config |
| Duplicate triple-copy helpers | One contract; shared package if runtimes allow |
| "Utility" modules that import everything | Split by boundary; forbid infra → UI imports |
| Tests that mirror private implementation | Assert observable behavior and contracts |

## MEDIUM

| Anti-pattern | Fix |
|--------------|-----|
| Over-abstraction for one call site | Inline until second use proves pattern |
| Prefix noise (`strName`, `m_count`) | Idiomatic names per language |
| Javadoc on every getter | Document invariants at boundary only |
| Premature micro-optimization | Measure; readability wins until profile says otherwise |
| `# TODO: fix later` in money path | Ticket + enforcement or fix now |
| Noise comments (closing braces, position markers) | Delete; fix structure or names instead |
| Train-wreck accessors (`a.getB().getC().doX()`) | Law of Demeter — add method on the right object |
