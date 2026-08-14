---
artifact: REQUIREMENTS
  design:
    - SRC-DS-001
  repository:
    - SRC-REPO-001
  runtime: []
  documentation: []
  assets: []
created: 2026-08-14
updated: 2026-08-14
project: Single-page developer portfolio
profile: Full
execution_mode: Gated
---

# Project Requirements

## 1. Document Information

- Scope: Single-page developer portfolio in the existing Astro application.
- Last updated: 2026-08-14.
- Owners: User/product owner for product decisions; future specification, architecture, and implementation owners for the remaining detail.
- Project context: `PROJECT-CONTEXT.md`
- Source baseline: `SOURCE-BASELINE.md`
- Evidence baseline: `DESIGN-AUDIT.md`

## 2. Overview and Problem

The project replaces the generated Astro starter with the supplied developer-portfolio experience. Visitors need to discover the portfolio owner, skills, projects, and a contact route across the supplied desktop, tablet, and mobile compositions. The contact route is explicitly frontend-only and persists submitted contact information in IndexedDB; it must not rely on a server endpoint. The design source supplies visual evidence, while the user supplies the IndexedDB and `#` placeholder boundaries.

## 3. Goals and Non-goals

### Goals

- Deliver one portfolio page that preserves the approved source scope: identity/social links, hero, skills, projects, contact, and footer.
- Preserve the demonstrated content hierarchy, visual states, and responsive outcomes at the supplied viewport examples.
- Provide a frontend-only contact interaction whose submitted data is persisted in IndexedDB.
- Keep unavailable social, project, and code destinations as literal `#` placeholders until the user supplies real URLs.
- Meet the repository’s documented keyboard, focus, semantic, responsive, asset, and production-build expectations.

### Non-goals

- Additional public pages, authentication, server-side APIs, remote databases, external contact-storage services, deployment, analytics, or Figma-file changes.
- Inventing real link destinations, contact data retention/deletion policy, browser-support matrix, performance threshold, tracking, or a detailed persistence schema.
- Treating Figma’s Components or Design System canvases as public website routes.

## 4. Users and Needs

| User or actor | Need | Evidence or snapshot |
|---|---|---|
| Portfolio visitor | Read who the developer is, their skills, and project work at the supplied responsive compositions. | `EVD-001`, `EVD-002`, `EVD-003`, `EVD-009` |
| Portfolio visitor | Find understandable project/social actions and a visible contact route. | `EVD-001`, `EVD-007`, `EVD-008`, `AUD-002` |
| Visitor contacting the owner | Enter name, email, and message and receive accessible feedback if input is invalid. | `EVD-006`, `AUD-004`, `AUD-005` |
| Portfolio owner | Keep contact submissions on the visitor’s device in IndexedDB, with no server or external-storage flow. | User decision dated 2026-08-14; `AUD-004` |
| Keyboard user | Operate interactive elements with a visible focus state. | `EVD-006`, `EVD-007`, `EVD-008` |

## 5. Functional Requirements

### REQ-FR-001 — Present the complete portfolio composition

- **Classification:** Confirmed.
- **Priority:** Must.
- **Description:** The portfolio shall expose one continuous page containing the identity/social lockup, hero, skills, projects, contact, and footer content present in the approved Figma scope.
- **Rationale:** These are the material content regions in every supplied Product / Home composition.
- **Evidence:** `EVD-001`, `EVD-002`, `EVD-003`, `EVD-009`.
- **Acceptance criteria:** `AC-001`, `AC-010`.

### REQ-FR-002 — Present the supplied skills and project collection

- **Classification:** Confirmed for the visual collection; the technology-label conflict is open.
- **Priority:** Must.
- **Description:** The page shall present the six observed skills and the six observed project cards with their titles, media, technology labels, and project/code action labels. The Figma-versus-starter technology-label conflict must be resolved before final content acceptance.
- **Rationale:** Skills and projects are the primary repeated information groups in the approved source.
- **Evidence:** `EVD-001`, `EVD-002`, `EVD-003`, `EVD-009`, `EVD-010`, `AUD-008`.
- **Acceptance criteria:** `AC-002`, `AC-012`.

### REQ-FR-003 — Provide portfolio navigation and action affordances

- **Classification:** Confirmed for the visible actions; destination behavior is partly confirmed by the user.
- **Priority:** Must.
- **Description:** The page shall expose the supplied `CONTACT ME`, `VIEW PROJECT`, `VIEW CODE`, and social actions. Before real destinations are supplied, social, project, and code actions shall use literal `#` placeholders. The behavior of `CONTACT ME` is not yet specified beyond being a visible action associated with the portfolio contact experience.
- **Rationale:** The source repeatedly exposes these actions but does not demonstrate their destinations.
- **Evidence:** `EVD-001`, `EVD-007`, `EVD-008`, `AUD-002`, `AUD-009`; user decision dated 2026-08-14.
- **Acceptance criteria:** `AC-003`, `AC-006`.

### REQ-FR-004 — Provide the visible contact form fields and feedback states

- **Classification:** Confirmed for visible fields and state affordances; validation triggers remain open.
- **Priority:** Must.
- **Description:** The contact experience shall provide name, email, and message input controls plus a send action. It shall support the source-demonstrated focus/active appearance and error feedback pattern; the exact validation rules, messages, and submit-success experience require specification.
- **Rationale:** All Product / Home frames include this form-like interaction, and Figma includes input and textarea Active/Error variants.
- **Evidence:** `EVD-001`, `EVD-002`, `EVD-003`, `EVD-006`, `AUD-004`.
- **Acceptance criteria:** `AC-004`, `AC-007`.

### REQ-FR-005 — Persist contact submissions in IndexedDB

- **Classification:** Confirmed boundary; data lifecycle details are open.
- **Priority:** Must.
- **Description:** A submitted contact entry shall be persisted in the browser’s IndexedDB. The contact flow shall remain frontend-only and shall not depend on a server submission or external persistence service.
- **Rationale:** This is the user’s explicit product and data-scope decision.
- **Evidence:** User decision dated 2026-08-14; `AUD-004` documents the design-source gap.
- **Acceptance criteria:** `AC-005`, `AC-013`.

## 6. Acceptance Criteria

### AC-001 — Complete source-backed composition

At each supplied design viewport, one page exposes identity/social, hero, skills, projects, contact, and footer in the source-backed content order.

### AC-002 — Complete skills and project collection

The page exposes all six observed skills and six observed projects, with each project’s final approved title, media, technology labels, and action labels.

### AC-003 — Visible portfolio actions

The supplied contact, social, project, and code action labels are present and their interaction role is not conveyed by hover alone.

### AC-004 — Contact controls and state affordances

Name, email, and message controls plus the send action are available; the final experience can present the source-supported active/focus and error feedback treatment.

### AC-005 — Browser-local persistence on a successful submission

When the later specification defines a contact submission as successful, its name, email, and message values are persisted in IndexedDB without requiring a remote endpoint.

### AC-006 — Approved unavailable destinations

Every unresolved social, project, and code destination uses literal `#`; no destination is inferred from a name or source lookup.

### AC-007 — Accessible contact feedback

Contact controls have associated labels and an invalid state provides a visible non-color-only cue plus programmatically available error text.

### AC-008 — Keyboard access and focus

Keyboard navigation can reach each interactive action and control, and visible focus remains apparent for social links, CTAs, project actions, and form controls.

### AC-009 — Intentional image alternatives

Every final image has a documented meaningful alternative or is deliberately excluded as decorative, consistent with its final role.

### AC-010 — Responsive source outcomes without overflow

The desktop, tablet, and mobile source outcomes are visually checked at 1440, 768, and 375 px, and the page has no horizontal overflow in required narrow, medium, and wide checks.

### AC-011 — Durable asset source

Integrated assets are verified durable local/approved assets; implementation does not depend on temporary Figma MCP URLs.

### AC-012 — Resolved project technology content

The four technology-label conflicts between Figma and starter source have an explicit approved resolution before final content acceptance.

### AC-013 — No remote contact transmission

Contact fields and stored submissions are not sent to a remote endpoint, third-party service, analytics collector, or remote database within this project scope.

## 7. Business Rules

### REQ-BR-001 — Use approved unavailable-destination placeholders

- **Description:** Use literal `#` for each social, project, and code destination until the user supplies a real destination. Do not derive URLs from brand names, project names, or outside research.
- **Evidence:** User decision dated 2026-08-14; `AUD-009`.
- **Affected requirements:** `REQ-FR-003`.

### REQ-BR-002 — Preserve source authority boundaries

- **Description:** Figma governs the approved visible composition and demonstrated visual states. The starter-content file is supporting content/asset evidence only. The four conflicting technology-label lists require an explicit later decision rather than a silent implementation choice.
- **Evidence:** `EVD-001`–`EVD-003`, `EVD-010`, `AUD-008`; `SOURCE-BASELINE.md`.
- **Affected requirements:** `REQ-FR-002`.

### REQ-BR-003 — Keep contact handling local to the frontend

- **Description:** Contact submissions must not be transmitted to a remote service or treated as server-side enquiries within this scope.
- **Evidence:** User decision dated 2026-08-14; project scope in `PROJECT-CONTEXT.md`.
- **Affected requirements:** `REQ-FR-005`, `REQ-SEC-001`.

## 8. Data Requirements

### REQ-DR-001 — Capture the supplied contact information

- **Classification:** Inferred from the visible form and confirmed persistence boundary.
- **Description:** A stored contact submission shall include the visitor-provided values corresponding to the visible Name, Email, and Message controls. Record identifiers, timestamps, schema version, optional fields, and migration behavior are not yet defined.
- **Required and optional data:** Name, email, and message are the only source-demonstrated values. All other data fields are open.
- **Validation or ownership:** Future specification owns input validation; architecture owns data representation and versioning.
- **Privacy or retention evidence:** The user confirmed local IndexedDB only. Retention, deletion/export, sensitive-data policy, and privacy notice requirements are open.
- **Evidence:** `EVD-006`; user decision dated 2026-08-14; `AUD-004`.

### REQ-DR-002 — Keep persisted contact data local

- **Classification:** Confirmed.
- **Description:** Contact data shall be owned by the browser-local IndexedDB boundary for this project. No remote synchronization, account association, authentication, or shared persistence is in scope.
- **Required and optional data:** Local storage boundary is required; lifecycle details are open.
- **Validation or ownership:** Architecture must define available-storage, versioning, migration, and failure treatment before implementation.
- **Privacy or retention evidence:** User decision dated 2026-08-14; `AUD-004`.

## 9. Accessibility Requirements

### REQ-AR-001 — Make every interactive action keyboard operable with visible focus

- **Description:** Social links, all CTAs, project actions, and contact controls shall be operable by keyboard and retain a visible focus treatment. Desktop project actions must remain reachable even though their visual source uses a hover/focus media overlay.
- **Rationale:** Figma explicitly supplies Focus variants; repository guidance requires keyboard access and visible focus.
- **Evidence or standard:** `EVD-006`, `EVD-007`, `EVD-008`; `SRC-REPO-001` repository guidance.
- **Acceptance criteria:** `AC-008`.

### REQ-AR-002 — Provide semantic form labels and accessible error feedback

- **Description:** Contact controls shall have associated labels. Invalid input shall expose text feedback programmatically as well as visually, must not rely on color alone, and retain the source-supported error cue.
- **Rationale:** Figma documents its error pattern as text-plus-icon-plus-color and explicitly requires assistive-technology exposure; repository guidance requires labels and clear validation feedback.
- **Evidence or standard:** `EVD-006`, `AUD-005`; `SRC-REPO-001` repository guidance.
- **Acceptance criteria:** `AC-007`.

### REQ-AR-003 — Make an intentional alternative-text decision for supplied imagery

- **Description:** Each project image and portrait shall receive a documented alternative-text treatment appropriate to its final role; decorative rings and circle shall be excluded from the accessibility tree if they remain decorative.
- **Rationale:** Figma shows the assets but does not define their text alternatives; repository guidance requires informative images to have useful alt text and decorative images to have empty alt text.
- **Evidence or standard:** `EVD-009`, `EVD-010`, `AUD-005`; `SRC-REPO-001` repository guidance.
- **Acceptance criteria:** `AC-009`.

## 10. Other Non-functional Requirements

### REQ-NFR-001 — Preserve supplied responsive outcomes

- **Category:** Compatibility / responsive quality.
- **Description:** The page shall preserve the evidenced desktop, tablet, and mobile compositions without horizontal overflow at the supplied widths. It shall preserve content priority and the observed transformations—skills 3/2/1 columns, projects 2/2/1 columns, and contact horizontal/stacked/stacked—without treating 1440, 768, or 375 px as mandatory breakpoint values.
- **Measurement conditions:** Compare the built page at the three supplied viewport widths and inspect narrower/medium/wider sizes for overflow as required by repository guidance. Intermediate transformation rules are to be specified later.
- **Evidence:** `EVD-001`, `EVD-002`, `EVD-003`, `EVD-009`, `AUD-003`; `SRC-REPO-001` repository guidance.

### REQ-NFR-002 — Retain the existing application architecture and quality checks

- **Category:** Maintainability / reliability.
- **Description:** The portfolio shall remain in the existing `frontend/` Astro application, with no second root app, framework, or build layer. Before acceptance, the Astro production build, whitespace check, and documented manual keyboard/accessibility and responsive checks shall succeed.
- **Measurement conditions:** Use the repository’s documented frontend commands and manual validation checklist; no new performance threshold is implied.
- **Evidence:** `SRC-REPO-001`; repository guidelines.

### REQ-NFR-003 — Use durable, optimized implementation assets

- **Category:** Performance / maintainability.
- **Description:** Committed implementation assets shall be drawn from verified durable sources and optimized before integration. Temporary Figma MCP asset URLs shall not be treated as permanent dependencies.
- **Measurement conditions:** Verify asset mapping and availability before integration; do not introduce an unapproved size or performance threshold.
- **Evidence:** `EVD-010`, `AUD-007`; `SRC-REPO-001` repository guidance.
- **Acceptance criteria:** `AC-011`.

## 11. Security Requirements

### REQ-SEC-001 — Prevent remote contact-data submission within scope

- **Description:** The contact experience shall not send contact fields or persisted submissions to an external endpoint, third-party service, analytics collector, or remote database.
- **Evidence:** User decision dated 2026-08-14; `REQ-FR-005`, `REQ-DR-002`.
- **Affected boundaries:** Browser form controls and browser-local IndexedDB only.

### REQ-SEC-002 — Defer unprovided data-lifecycle policy rather than invent it

- **Description:** No retention duration, deletion/export feature, privacy notice, encryption claim, or sensitive-data policy shall be asserted until the user supplies it or an approved later artifact establishes it.
- **Evidence:** User decision dated 2026-08-14; `AUD-004`; `PROJECT-CONTEXT.md` open question `Q-001`.
- **Affected boundaries:** IndexedDB records and user-facing contact expectations.

## 12. Responsive and Content Requirements

- Retain every source-demonstrated content group at desktop, tablet, and mobile: identity/social lockup, hero, six skills, six projects, contact, and footer. `EVD-001`–`EVD-003`.
- Preserve source-demonstrated layout outcomes without inventing a breakpoint: desktop skills use three columns; tablet two; mobile one. Projects are two columns at desktop/tablet and one column at mobile. `EVD-001`–`EVD-003`, `EVD-009`.
- Preserve the desktop project-card Default/Hover/Focus contrast with its overlay actions, while tablet/mobile retain visible project/code actions in their compact presentation. `EVD-007`.
- Preserve the supplied visible text hierarchy, field labels, project action labels, and accent/error/focus visual language. `EVD-001`–`EVD-009`.
- Do not finalize project technology labels until `AUD-008` is resolved.

## 13. Constraints

### REQ-CON-001 — Use the existing Astro application only

- **Description:** `frontend/` is the application source of truth. Do not add a second root `index.html`, a separate framework, or a new build layer.
- **Evidence:** `SRC-REPO-001` repository guidance.
- **Impact:** Governs later design, planning, and implementation work.

### REQ-CON-002 — Preserve supplied assets until intentionally integrated

- **Description:** The supplied asset bundle remains source material until an approved implementation task integrates verified assets. Preserve supplied filenames unless replacement is intentional.
- **Evidence:** `EVD-010`; `SRC-REPO-001` repository guidance.
- **Impact:** Prevents accidental asset mutation and temporary-URL dependency.

### REQ-CON-003 — Respect the Time-bound Figma baseline

- **Description:** Only the approved Figma scope is the visual target. The Figma file lacks an immutable named version, so it must be reverified before later gates and material implementation work; a material upstream change requires a new snapshot rather than silently replacing `SRC-DS-001`.
- **Evidence:** `AUD-001`, `VER-008`, `SOURCE-BASELINE.md`.
- **Impact:** Protects visual traceability and prevents unrecorded design drift.

### REQ-CON-004 — Keep contact persistence frontend-only in IndexedDB

- **Description:** The contact flow is frontend-only and persists submissions in IndexedDB. Schema, versioning, retention, deletion/export, validation, error/success behavior, and browser-availability handling remain unspecified.
- **Evidence:** User decision dated 2026-08-14; `AUD-004`.
- **Impact:** Requires Full-profile specification, architecture, and validation coverage without authorizing an unrecorded behavior.

### REQ-CON-005 — Keep workflow state controlled and implementation deferred

- **Description:** Canonical workflow state remains in the CLI-managed record and generated workflow views are read-only. Application code edits are forbidden until a later authorized implementation task.
- **Evidence:** `SRC-DOC-001` process governance; current CLI context.
- **Impact:** Restricts current work to approved workflow artifacts and prevents premature implementation.

### REQ-CON-006 — Use literal placeholders for unavailable external destinations

- **Description:** Until real external destinations are supplied, social, project, and code links shall use literal `#` placeholders.
- **Evidence:** User decision dated 2026-08-14; `AUD-009`.
- **Impact:** Prevents invented URLs while providing the approved placeholder behavior.

### REQ-CON-007 — Do not invent unresolved product behavior

- **Description:** Do not invent real URLs, input validation rules, success/failure states, browser support, IndexedDB schema/versioning, data retention/deletion/export behavior, privacy policy, or performance targets.
- **Evidence:** `AUD-002`–`AUD-005`, `AUD-009`; user decision dated 2026-08-14.
- **Impact:** The owning specification/architecture artifacts must resolve or explicitly defer these details.

## 14. Dependencies

| Dependency | Snapshot or evidence | Purpose | Availability | Risk |
|---|---|---|---|---|
| Time-bound Figma design | `SRC-DS-001`, `VER-008` | Visual source, responsive frames, components, visual states | Readable through Figma MCP; no immutable revision | Upstream visual drift cannot be compared pixel-for-pixel to a version. |
| Existing Astro app | `SRC-REPO-001` | Canonical implementation target and verification scripts | Present at pinned commit | Starter page has no target implementation yet. |
| Starter assets | `EVD-010`, `SRC-REPO-001` | Durable candidate images, icons, decorations, font | Present under `docs/starter-code/assets/` | Exact Figma mapping/error icon unresolved. |
| Space Grotesk licensing record | `EVD-010` | Required typeface candidate | Font/readme present | Full OFL file absent from bundle. |
| User-supplied real URLs | `AUD-009` | Final destinations for social/project/code links | Not supplied | Placeholder-only actions cannot pass final destination validation. |

## 15. Assumptions and Open Questions

### Assumptions

- **Inferred:** `CONTACT ME` likely targets the page’s contact experience, but source evidence does not demonstrate its navigation behavior.
- **Inferred:** Name, email, and message are the values intended for a stored contact record because they are the only displayed fields; storage metadata remains open.
- **Inferred:** Decorative rings/circle will remain decorative, subject to final alternative-text review.

### Blocking questions

- `Q-001`: What IndexedDB schema, versioning/migration, validation, submit success/failure, retention/deletion/export, data sensitivity, browser-availability, and privacy-notice requirements apply? Owner: user/product owner and later architecture/specification owners. Required before contact behavior is complete.
- `Q-003`: Which project technology labels are final for the four Figma/starter conflicts? Owner: user/product owner. Required before content acceptance.
- `Q-004`: What semantic alternative text is appropriate for the portrait and project images? Owner: user/product owner with accessibility review. Required before accessibility acceptance.

### Non-blocking questions

- `Q-002`: What real URLs will replace `#`? Required before final external-link acceptance, not before placeholder use.
- `Q-005`: What responsive rules apply between and beyond the three supplied widths? Required before responsive acceptance, not before source-backed planning.
- `Q-006`: Is a committed approved source for the field-error icon available? Required before exact error-state visual parity.

## 16. Risks

| Risk | Impact | Likelihood | Mitigation | Blocking |
|---|---|---|---|---|
| Figma changes without a named version | Visual evidence may drift | Medium | Reverify/rebaseline before each later gate and task. | No for requirements; yes if material upstream change occurs. |
| IndexedDB lifecycle is unspecified | Contact flow could become inconsistent or privacy-incomplete | High | Resolve `Q-001` in specification and architecture. | Yes for contact completion. |
| Real destinations are absent | Links cannot be finally validated | High | Use confirmed `#` placeholders; collect real URLs later. | No for placeholder work; yes for final link acceptance. |
| Figma/starter technology conflict | Project-card content can be inconsistent | Medium | Resolve `Q-003` before final content acceptance. | Yes for final content. |
| Temporary Figma assets/error icon | Visual implementation could break or drift | Medium | Map verified local assets or obtain an approved durable export. | Yes for exact asset parity. |
| Semantics/accessibility are not proved by Figma | Visual parity might exclude keyboard or assistive-tech access | High | Carry `REQ-AR-*` into specification, task validation, and manual checks. | Yes for acceptance. |

## 17. Definition of Done

- [ ] All Must requirements and referenced acceptance criteria pass.
- [ ] The full approved page composition, content groups, and source-demonstrated interaction states are present at the supplied viewport examples.
- [ ] Contact submissions follow the approved frontend-only IndexedDB boundary and the final specified validation/status behavior.
- [ ] Keyboard access, visible focus, meaningful/empty image alternatives as appropriate, associated labels, and accessible error feedback are verified.
- [ ] Responsive validation finds no horizontal overflow at narrow, medium, and wide checks.
- [ ] Final social/project/code destinations are verified or their unresolved status is explicitly accepted before release.
- [ ] The Astro production build, `git diff --check`, and approved manual validations pass.
- [ ] Approved workflow documentation is synchronized and no critical/high blocker remains.

## 18. Traceability

| Requirement | Snapshot or evidence | Design decision | Specification | Validation |
|---|---|---|---|---|
| `REQ-FR-001` | `EVD-001`–`EVD-003`, `EVD-009` | Pending Stage 3 | Pending Stage 4 | Pending Stage 10 |
| `REQ-FR-002` | `EVD-001`–`EVD-003`, `EVD-010`, `AUD-008` | Pending Stage 3 | Pending Stage 4 | Pending Stage 10 |
| `REQ-FR-003` | `EVD-007`, `EVD-008`, `AUD-002`, `AUD-009` | Pending Stage 3 | Pending Stage 4 | Pending Stage 10 |
| `REQ-FR-004` | `EVD-006`, `AUD-004` | Pending Stage 3 | Pending Stage 4 | Pending Stage 10 |
| `REQ-FR-005`, `REQ-DR-001`, `REQ-DR-002` | User decision; `EVD-006`, `AUD-004` | Pending Stage 3 | Pending Stage 4 | Pending Stage 6/10 |
| `REQ-AR-001`–`REQ-AR-003` | `EVD-006`–`EVD-010`, `AUD-005` | Pending Stage 3 | Pending Stage 4 | Pending Stage 10 |
| `REQ-NFR-001`–`REQ-NFR-003` | `EVD-001`–`EVD-003`, `EVD-010`, `AUD-003`, `AUD-007` | Pending Stage 3 | Pending Stage 4 | Pending Stage 10 |
| `REQ-SEC-001`, `REQ-SEC-002` | User decision; `AUD-004` | Pending Stage 3 | Pending Stage 4 | Pending Stage 6/10 |
| `REQ-CON-001`–`REQ-CON-007` | `SRC-REPO-001`, `AUD-001`–`AUD-009`, user decision | Applies throughout | Applies throughout | Applies throughout |

## 19. Review

### Pass 1 — Completeness and correctness

- [x] Requirements cover the agreed page scope, project collection, action labels, contact, data boundary, accessibility, responsive, security, quality, asset, and source-integrity concerns.
- [x] Must-have requirements are outcome-focused and use acceptance criteria or later-owner boundaries.
- [x] Unprovided URLs, validation, retention, browser, performance, privacy, and schema rules remain open rather than invented.
- [x] Active snapshots and approved Stage 1 evidence are explicitly referenced.

**Pass 1 corrections:** separated Figma-visible form states from unproven validation behavior; marked contact record fields as an inference; and carried the Figma/starter technology conflict as a blocking content question rather than choosing a source silently.

### Pass 2 — Consistency, traceability, source integrity, risks, and uncertainty

- [x] Requirement, acceptance-criterion, question, and source/evidence identifiers follow the canonical namespaces.
- [x] Every material visual requirement references approved `EVD-*`/`AUD-*` or an identified direct user decision.
- [x] `SRC-DS-001` remains Time-bound (`VER-008`) and `SRC-REPO-001` remains pinned to the verified commit (`VER-009`); no source is presented as silently updated.
- [x] Confirmed, inferred, recommended, and open information remain distinct.
- [x] Blocking questions, dependencies, risks, and later-stage ownership are explicit.

**Pass 2 corrections:** reconciled `REQ-CON-001`–`REQ-CON-006` with the identifiers already introduced in the approved Stage 0 context, added `REQ-CON-007` for the new non-invention guardrail, limited the no-remote-submission requirement to the user-approved project scope, removed implied retention, encryption, browser-support, or performance thresholds, and clarified that final destination validation is deferred even while `#` is required now.

## 20. Completion Summary

- Files created or modified: `REQUIREMENTS.md`.
- Inputs used: `SRC-DS-001` (`VER-008`), `SRC-REPO-001` (`VER-009`), `EVD-001`–`EVD-010`, `AUD-001`–`AUD-009`, and the user’s 2026-08-14 decisions.
- Major confirmed requirements: full single-page portfolio scope, `#` placeholders, frontend-only IndexedDB contact persistence, no remote submission, responsive source outcomes, and accessibility expectations.
- Material inferred requirements: the three visible fields comprise the stored contact content; CTA/contact relationship; decorative image treatment.
- Blocking later decisions: `Q-001`, `Q-003`, `Q-004`.
- Ready for design-intent work: **Yes, with recorded blocking questions carried forward.**
