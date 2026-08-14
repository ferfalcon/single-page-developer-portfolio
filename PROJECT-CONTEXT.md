---
artifact: PROJECT-CONTEXT
project: Single-page developer portfolio
profile: Full
execution_mode: Gated
created: 2026-08-14
updated: 2026-08-14
---

# Project Context

## 1. Project

- **Project name:** Single-page developer portfolio.
- **Goal:** Implement the provided Design source.
- **Project type:** Static, single-page developer portfolio in an existing Astro application.
- **Selected profile:** Full, pending completion of `PROFILE-001` through the Gated human approval process.
- **Profile rationale:** The supplied page remains one route with three responsive compositions and reusable stateful patterns. The user has now confirmed frontend-only IndexedDB persistence for contact submissions. The workflow's Full profile is required for persistence and the resulting data-ownership, privacy, reliability, and architecture review—even though no server API, authentication, or external service is in scope.
- **Created and last updated:** 2026-08-14.

## 2. Source Baseline

The detailed baseline is `SOURCE-BASELINE.md`. This artifact uses `SRC-DS-001`, `SRC-REPO-001`, `SRC-DOC-001`, `SRC-DOC-002`, and `SRC-ASSET-001`.

`SRC-DS-001` and `SRC-REPO-001` are the active upstream inputs in the CLI record. The documentation and asset snapshots are immutable supporting sources pinned to the same repository commit; they are not a substitute for the Figma design or repository baseline.

## 3. Design Scope

- **Included:** The supplied Figma root node `7:2`; the Product / Home Desktop (`7:687`), Tablet (`7:226`), and Mobile (`7:3`) frames; plus Components (`42:3249`) and Design System / Documentation (`62:5602`) only as supporting references needed to interpret the portfolio page.
- **Explicitly excluded:** Creating extra public routes for Figma Components or Design System / Documentation canvases; behavior that is not visible or documented; Figma-file changes; and implementation work before a later approved task.
- **Access limitations:** Read inspection was available through Figma MCP. No named Figma version, immutable capture, full prototype audit, or durable export is available at this stage.
- **Known design-source dependencies:** Local Figma component variants, temporary asset URLs returned by Figma, and the repository-embedded starter asset bundle. Their implementation mapping remains unverified until the design audit.

## 4. Repository Scope

- **Target branch:** `main` (tracking `origin/main`) at the pinned `SRC-REPO-001` commit.
- **Relevant application:** `frontend/`, using Astro `^7.2.2`; application entry point `frontend/src/pages/index.astro` and document layout `frontend/src/layouts/Layout.astro`.
- **Existing implementation state:** Generated Astro starter page only; no portfolio implementation exists yet.
- **Known technical constraints:** `frontend/` is the sole implementation source of truth; retain Astro static-site architecture; use NVM-managed Node; use `pnpm` or the local Astro binary for verification; do not add a parallel app/framework/build layer; and preserve supplied asset filenames unless deliberately replaced.
- **Access or tooling limitations:** No test, lint, or accessibility checker is configured. The workflow artifacts now present in the worktree are expected process output and not application code.

## 5. Runtime References

No production, preview, staging, or local runtime snapshot exists or was created for Stage 0.

## 6. Requested Scope

### Included

- Translate the supplied portfolio page's approved visual source into the existing `frontend/` Astro application after the workflow reaches an authorized implementation task.
- Preserve the supplied page's desktop, tablet, and mobile design-source scope, including header/identity, hero, skills, projects, contact, and footer as observed at the high level.
- Use repository conventions and source-supported assets, typography, and content only after they are audited and planned.
- Implement the contact flow as frontend-only persistence in IndexedDB after its behavior, schema, privacy, and failure handling are specified and approved.
- Use literal `#` placeholders for social, project, and code links until real destinations are supplied.

### Excluded

- Design audit, requirements, design-intent documentation, behavioral specification, architecture decision, plan, task decomposition, or implementation code during this Stage 0 request.
- New product pages, authentication, server-side APIs, external persistence services, deployment, production publication, and Figma-file edits unless later authorized by a defined requirement.
- Inventing IndexedDB record schema/versioning, data retention, data export/deletion behavior, form state behavior, analytics, browser support targets, or data/privacy rules.

### Deferred

- Exact component structure, breakpoints, IndexedDB record schema/versioning, form validation and state behavior, data retention/deletion, accessibility treatment, replacement link destinations, and test plan. These require later-stage evidence and explicit ownership.

## 7. Authoritative Sources

| Source | Authority | Scope | Notes |
|---|---|---|---|
| User request | Project scope | Implement the exact provided design source in the current repository | Highest authority for the requested goal and execution boundary. |
| User follow-up decision | Product and data scope | Frontend-only contact persistence in IndexedDB; literal `#` placeholders for unavailable external links | Highest authority for these decisions; not derived from the Figma or starter-content snapshot. |
| `SRC-DS-001` | Design | Visible page composition, supplied responsive frames, component variants, and content examples | Time-bound Figma source; does not establish nonvisual behavior. |
| `SRC-REPO-001` | Current implementation and technical constraints | Astro structure, dependencies, commands, repository conventions, and starter state | Current code is evidence of what exists, not proof of target behavior. |
| `SRC-DOC-001` | Workflow governance | Process, stage permissions, evidence, and Gated approval requirements | Normative process source only. |
| `SRC-DOC-002` | Informative supplied content | Portfolio copy, labels, and project lists | Does not provide link destinations or form behavior. |
| `SRC-ASSET-001` | Supporting implementation input | Supplied icons, images, decorations, thumbnails, and font | Exact asset mapping remains a later audit item. |

No source conflict is currently confirmed. Any mismatch between Figma and the starter content/assets will be recorded and resolved by the owning later-stage artifact rather than silently chosen during implementation.

## 8. Quality Baseline

- **Accessibility expectations — Confirmed:** Repository guidance requires semantic structure, a clear heading hierarchy, keyboard-accessible links/form controls, visible focus states, useful image alternative text, contrast, and accessible form labels/validation feedback. The design itself cannot prove full accessibility behavior.
- **Responsive coverage — Observed:** Figma supplies 1440 px desktop, 768 px tablet, and 375 px mobile page compositions. Intermediate, unusually narrow, and wide behavior are not shown and must not be assumed as fixed breakpoints.
- **Browser and device coverage — Open question:** No browser support matrix is provided.
- **Performance expectations — Open question:** No measurable performance target is provided. New assets must be optimized before they are added, per repository guidance.
- **Security and privacy expectations — Partly confirmed:** Contact data is stored only in the browser's IndexedDB; no server endpoint or external storage service is in scope. Retention, deletion/export behavior, sensitive-data policy, and privacy notice requirements remain open.
- **Testing expectations — Confirmed:** Before any implementation is accepted, run the production build, `git diff --check`, and the repository-prescribed manual keyboard/accessibility and responsive checks. No automated suite is presently configured.
- **Deployment expectations — Open question:** No deployment target or release process is supplied.

## 9. Constraints and Dependencies

| ID | Constraint or dependency | Evidence | Impact | Classification |
|---|---|---|---|---|
| `REQ-CON-001` | `frontend/` is the implementation source of truth; no alternate root app, framework, or build layer may be added. | `SRC-REPO-001` | Governs all later file and architecture decisions. | Confirmed |
| `REQ-CON-002` | Supplied starter assets remain source material until an approved task intentionally integrates them; preserve filenames unless replacement is intentional. | `SRC-REPO-001`, `SRC-ASSET-001` | Prevents premature or accidental asset migration. | Confirmed |
| `REQ-CON-003` | Only the supplied Figma node/frame scope is an approved visual target; a mutable Figma URL must be reverified before material work. | `SRC-DS-001` | Protects visual traceability. | Confirmed |
| `REQ-CON-004` | The contact flow is frontend-only and persists submissions in IndexedDB. Exact schema, versioning, retention, deletion/export, validation, error/success behavior, and availability handling remain unspecified. | User follow-up decision; `SRC-REPO-001` | Requires Full-profile architecture, specification, and validation coverage; it does not authorize implementation in Stage 0. | Confirmed boundary / open details |
| `REQ-CON-005` | Generated workflow views are read-only and code edits are forbidden at this stage. | `SRC-DOC-001` | Constrains current work to registered Stage 0 narrative artifacts and CLI state changes. | Confirmed |
| `REQ-CON-006` | Until real external destinations are supplied, social, project, and code links use literal `#` placeholders. | User follow-up decision | Prevents inventing URLs while providing a specified frontend placeholder. | Confirmed |

## 10. Known Decisions

| Decision | Owner | Evidence | Status |
|---|---|---|---|
| Implement the supplied Figma portfolio source in the current repository. | User | User request; `SRC-DS-001`; `SRC-REPO-001` | Confirmed |
| Upgrade Standard to Full because browser persistence is now in scope. | Workflow control record; pending human transition approval | User follow-up decision; `SRC-DOC-001`; `PROFILE-001` | In progress |
| Use Gated execution mode. | User and workflow control record | User request; `SRC-DOC-001` | Confirmed |
| Keep contact data frontend-only in IndexedDB. | User | User follow-up decision | Confirmed boundary |
| Use `#` while external destinations are unavailable. | User | User follow-up decision | Confirmed |
| Treat Product / Home frames as web-page target and component/design-system canvases as implementation reference rather than public pages. | Design documentation owner | `SRC-DS-001` | Inferred; verify in Stage 1 |
| Complete the Full-profile architecture artifact and decision when Stage 6 is reached. | Architecture decision owner | `REQ-CON-004`; Full-profile rules | Required later |

## 11. Initial Risks and Questions

### Blocking for later decisions, not for Stage 0 capture

- `Q-001`: What IndexedDB record schema, versioning/migration strategy, retention/deletion behavior, validation, error/success states, and privacy requirements apply? Required before the contact flow is specified or completed.
- `Q-002`: What real destinations will replace the approved `#` placeholders? Required before final external-link validation, but not before placeholder implementation.

### Non-blocking

- The Figma design is Time-bound rather than version-pinned; reverify it before later stage closure and task work.
- Exact Figma-to-starter-asset mapping and responsive transformations require the Stage 1 audit.
- The full font-license text referenced by the supplied font readme is absent from the bundle.
- A non-material concurrent `AGENTS.md` edit is present in the worktree; it removed only a redundant path sentence and did not change the scoped application baseline.

## 12. Stage 0 Completion

- [x] Scope is explicit and bounded to the supplied portfolio design source and existing Astro application.
- [x] `SOURCE-BASELINE.md` exists and identifies all sources used by this context.
- [x] Active design and repository snapshots have honest pin strengths and recorded CLI verification.
- [x] The repository baseline is pinned to its recorded Git commit.
- [x] Full-profile transition rationale and Gated execution mode are documented.
- [x] Source-supported quality expectations, constraints, limitations, risks, and unresolved decisions are visible.
- [x] `WORKFLOW-STATE.md` references the same inputs and records the remaining decision path.
- [ ] Human completion of `PROFILE-001`, source/context approval, and the Stage 0 gate are pending in Gated mode.
