# Mission 08 — static product website and engineering case study

## Fresh baseline and Mission 07 closure

Authenticated connector audit on 2026-11-07 confirmed public Telegram product,
master `ff40b17077c15ac721e1cef522bf3843ef4468ee`, empty Homepage, active protection,
no open product PRs and merged PRs through #14. CI 42108362140 and Pages
42098050086 succeeded. The private portfolio was at
`92ec8c69e3773d9fcce06b3e331f1876e92c6e58`, with only unrelated Dependabot #186 open.
Product requires PHP 8.0–8.4 checks. Both require PRs, have no bypass actors and
require zero approving reviews; portfolio permits squash only. No rules changed.

Mission 07 was independently closed: SMS PR #9 merged
`f63683214fd96b40fd53d1ead89cbb77fcb0296a`; portfolio #196 merged
`92ec8c69e3773d9fcce06b3e331f1876e92c6e58`. Product CI/Pages
42359725210/42359725235 and portfolio deploy/QA 42361577907/42361577866 passed.
Final Lighthouse 42361578039 completed successfully. Public SMS/private portfolio
visibility, default branches, Homepage and published CTA/image hash were verified;
the published portfolio also passed the seven-width, both-theme browser suite.
No Mission 07 redesign or new SMS operation was performed.

## Actual engineering audit

Read README, SECURITY, Composer metadata/lock, environment example, both PHP entry
points, all src/ and commands/ modules, SQL/bootstrap/migration, retention script,
all PHP tests, CI/Pages, old docs and relevant private portfolio implementation.
The real software is a Persian routing gateway, not a course-delivery platform,
AI tutor or browser chat client.

Verified source strengths: fail-closed default production secret configuration,
POST/header authentication with hash_equals, bounded input and JSON depth,
private-chat scoping, explicit routing, configured own deep links, static Markdown
responses, parameterized SQL, transactional receipts and state, rollback/503 on
failed delivery, bounded cURL timeouts/cleanup, generic errors, redacted text and
scheduled purge support. Missing chat type remains intentionally compatible.
Commit/acknowledgement ambiguity and retention-bounded deduplication are disclosed.

No confirmed backend defect requiring a change was found. All PHP source,
dependencies, schema, configuration defaults and existing PHP tests are unchanged.
No production database, credentials, live bot or Telegram API was used. Reading
the public Bot API documentation is distinct from calling an operational API.

## Design skill application and before/after audit

Read both pinned skills and their guidelines, plus brand/layout/polish references.
Ran the full context loader: no PRODUCT.md or DESIGN.md. Pins remain
`5e85045d96662605f33e12150cdc6d00cb04dc0a`. Brand voice is quiet, structured and
precise. Preserve the existing green/light palette, Georgia headings and system
body under identity preservation. This is an engineering case study, with a
source map and chapter index rather than copied SMS/crawler composition.

Before (baseline):

- `docs/index.html:1` — simulator title/description and app.js entry obscure the
  installable PHP product; no architecture or installation destination.
- `docs/index.html:2` — chat input, Send/reset, fake online dot and conversation
  map are the primary public experience, contrary to the approved direction.
- `docs/app.js:1` — fictional English Python/web-development routes do not reflect
  the real Persian course modules.
- `docs/style.css:1` — heading clamp reaches 62px, with a simulator-centered layout.

After:

- `docs/index.html:17` — architecture-first hero, GitHub secondary, PHP/MySQL and
  explicit no-live-service disclosure; source files are visible in a static map.
- `docs/index.html:21` — semantic ordered architecture labels external Telegram,
  authenticated entry, PHP, InnoDB and reply boundaries; prose states actual
  transaction timing and exactly-once limitations.
- `docs/index.html:24` — real command table and attributed Persian excerpts use
  lang=fa and dir=rtl. No availability claim or active external bot CTA is made.
- `docs/index.html:34` — Windows/macOS/Linux installation, actual SQL/migration,
  public/ deployment, maintenance and privacy guidance use native disclosures.
- `docs/style.css:18` — bounded 56px desktop / 40px mobile headline, readable body,
  clear focus, wrapped code, responsive semantic diagram and named scroll region.
- `docs/app.js` removed; simulator tests retired. No chat/reply/form/Send controls,
  fake state, third-party assets, analytics or JS dependencies remain. CSP now
  denies scripts entirely and retains connect-src none.

Final file-level review found no remaining applicable focus/label/RTL/anchor,
heading/contrast/overflow defect. Real Chromium screenshots were inspected at all
seven widths, including architecture, Persian excerpt and expanded setup. Axe
reported zero A/AA violations before and after disclosures open. Native table
scroll is keyboard-accessible and intentional; page width never overflows.

## Tests and release procedure

Local PHP 8.2: all four offline PHP test programs pass; database_test reports an
explicit skip without an isolated DSN. Composer validate, locked installation,
all PHP syntax checks and Composer audit pass (no vulnerability advisories).
The unchanged required PHP 8.0–8.4 CI matrix supplies isolated MySQL 8.0, with
mandatory database tests, syntax, audit, token-pattern and privacy checks.
No local or production MySQL service was started for this mission.

Six replacement Node contracts verify static identity/assets/anchors, source
excerpts, requirements, privacy, CSP and simulator absence. Focused browser QA
checks 320/375/390/768/1024/1440/1920px, keyboard, focus, reduced motion, RTL,
disclosures, no console errors, missing resources or external requests. Pages
now verifies on PR and push, and deploy needs that successful verification.
Browser tooling is isolated/pinned on Ubuntu 24.04; no runtime dependencies added.
Generated browser evidence is ignored and uploaded as 14-day workflow artifacts.

Local Lighthouse mobile 100/100/100/92, desktop 98/100/100/92. The local SEO note
is robots.txt; no unrelated domain configuration is changed to improve a score.
Homepage is set to the canonical product URL via the authorized browser workflow
because the connector exposes no repository-metadata mutation. It is checked
again through authenticated metadata during release verification.

Private portfolio updates are Telegram-specific: product CTA, technical content,
existing analytics opt-out, actual published-site screenshot and targeted QA.
No other entries or default local-software actions are changed. No paid hosting,
backend, webhook registration, real learner data or Mission 09 work is included.
