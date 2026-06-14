#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const NAME = 'clean-code-specialist';
const REQUIRED = [
  'SKILL.md', 'README.md', 'AGENTS.md', 'anti-patterns.md',
  'patterns/naming.md', 'patterns/functions.md',
  'patterns/boundaries-architecture.md', 'patterns/error-handling.md',
  'patterns/tests.md', 'patterns/code-smells-refactoring.md',
  'patterns/comments-documentation.md',
  'examples/brew-hub-integration.md',
  'references/official-docs-links.md',
  'references/book-summaries/README.md',
];

function fm(c) {
  const m = c.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const r = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    r[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"|"$/g, '');
  }
  return r;
}

let fail = false;
for (const f of REQUIRED) {
  if (!existsSync(join(root, f))) { console.error('MISSING:', f); fail = true; }
}
const meta = fm(readFileSync(join(root, 'SKILL.md'), 'utf8'));
if (!meta?.name || !meta?.description || meta.name !== NAME) fail = true;
if (fail) process.exit(1);
console.log('validate-skill: OK');
