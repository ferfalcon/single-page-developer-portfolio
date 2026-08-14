---
artifact: TASK
id: P01-T02
design:
  - SRC-DS-001
repository:
  - SRC-REPO-001
runtime: []
documentation:
  - SRC-DOC-001
  - SRC-DOC-002
assets:
  - SRC-ASSET-001
created: 2026-08-14
updated: 2026-08-14
project: Single-page developer portfolio
profile: Full
execution_mode: Gated
---

# Phase 01 — Task 02: Implement data-driven hero and project presentation

## 1. Status

`Complete` — the CLI registry records `P01-T02` complete with implementation output `SRC-REPO-003` at commit `30c36791ce46af13be1f3d7124a8fde7aff6446e`.

## 2. Objective

Implement the source-backed hero and all six project cards using durable local assets and one build-time frontend-local JSON authority for technology labels and image alternative treatments. Fer approved starter-page-derived mock records as the current local-content authority and set `CONTACT ME` to `#contact`.

## 3. Source References

- Source baseline: `SOURCE-BASELINE.md`; `SRC-DS-001`, `SRC-REPO-001`, `SRC-DOC-002`, and `SRC-ASSET-001`.
- `PLAN.md`: `PLAN-002`; `PLAN-REVIEW.md`: `PLANREV-001`, `PLANREV-002`, and `PLANREV-005`.
- Requirement IDs: `REQ-FR-001`–`REQ-FR-003`, `REQ-BR-001`–`REQ-BR-002`, `REQ-AR-001`, `REQ-AR-003`, `REQ-NFR-001`, `REQ-NFR-003`, and `REQ-CON-002`–`REQ-CON-003`, `REQ-CON-006`–`REQ-CON-007`.
- Specifications/acceptance: `SPEC-BEH-001`–`SPEC-BEH-003`, `SPEC-BEH-006`–`SPEC-BEH-007`, `SPEC-INT-001`–`SPEC-INT-002`, `SPEC-ACC-001`, and `SPEC-DATA-002`; `AC-014`–`AC-017`, `AC-023`–`AC-025`.
- `DESIGN.md`: `DES-003`, `DES-004`, `DES-006`, `DES-RWD-002`–`DES-RWD-003`, and `DES-INT-002`/`DES-INT-004`.
- Design evidence: scoped desktop `7:687`, tablet `7:226`, mobile `7:3`; fresh verification `VER-022` confirms the Time-bound source showed no material drift before implementation.
- Architecture: ADR-001/002; `ARCHITECTURE.md` §§9–10, 13, and 17.
- Related tasks: requires `P01-T01`; enables `P01-T04`; must not take contact persistence from `P01-T03`.

### Approved mock local-content record set

Fer confirmed on 2026-08-14 that the local JSON uses mock records from `docs/starter-code/index.html` (`SRC-DOC-002`, unchanged as `VER-019`). Project titles and technology labels are **Observed** starter-page content; IDs and alternatives below are **mock content derived from those titles** and approved by Fer for this implementation scope.

| Stable ID | Observed title | Observed technologies | Approved mock image alternative |
|---|---|---|---|
| `design-portfolio` | Design portfolio | HTML, CSS | Preview of the Design portfolio project. |
| `e-learning-landing-page` | E-learning landing page | HTML, CSS | Preview of the E-learning landing page project. |
| `todo-web-app` | Todo web app | HTML, CSS, JavaScript | Preview of the Todo web app project. |
| `entertainment-web-app` | Entertainment web app | HTML, CSS, JavaScript | Preview of the Entertainment web app project. |
| `memory-game` | Memory Game | HTML, CSS, JavaScript | Preview of the Memory Game project. |
| `art-gallery-showcase` | Art gallery showcase | HTML, CSS, JavaScript | Preview of the Art gallery showcase project. |

Hero treatment is informative with approved mock alternative text: **“Portrait of Adam Keyes, front-end developer.”** The `CONTACT ME` control has the approved internal target `#contact`. Social/project/code actions retain the already-approved literal `#` placeholders.

## 4. Snapshot Verification

- Design inputs applicable: Yes. Reinspect root `7:2` and the relevant responsive frames immediately before work.
- Repository commit checked out: `12581470c0506f403bf059af2fdf11df88c51bac` at task start, verified clean and an expected descendant of `SRC-REPO-001` (`VER-023`).
- Upstream rebaseline: required for material unexpected source or frontend changes; otherwise no.
- Limitation: a task-output snapshot does not replace the immutable input baseline. Do not use temporary Figma image URLs.

## 5. Prerequisites

- `P01-T01` complete with its shared shell/style interface recorded.
- Fresh design and task-start repository verification.
- The approved mock record set above and `#contact` target must be copied accurately into the local JSON; they are the acceptance baseline until Fer replaces them through the source-change process.
- Fresh verification that the durable supplied portrait/thumbnails/decorations exist and their ordinal mapping is safe to integrate; do not use temporary Figma URLs.

## 6. Scope

### Included

- Create a typed/validated build-time local JSON reader and the JSON content source for the approved dynamic fields only.
- Create `Hero`, `Projects`, and `ProjectCard`; render the source-backed titles/media/actions and all six observed project identities.
- Copy only verified supplied portrait/thumbnail/decorative assets into the portfolio asset directory, preserving filenames.
- Make project actions visible/reachable at keyboard focus and on small/touch layouts; preserve the source desktop overlay outcome without pointer-only access.
- Validate exact records, alternatives, destination placeholders/CTA behavior after content approval, source viewport outcomes, and long-title/label overflow.

### Excluded

- Header/skills/footer foundation except coordinated consumption of its declared interfaces.
- Contact form, IndexedDB, remote data, runtime fetching, inferred URL values, guessed JSON values/alts, automatic content fallback, or a new data service/framework.

## 7. Repository Context

The original repository is the unmodified Astro starter described in `VER-018`; `P01-T01` is expected to add the page shell, portfolio components, shared stylesheet, and selected foundation assets. No existing data convention, JSON reader, card component, client framework, or test tooling exists. Local JSON must therefore be imported at build time through a narrow module rather than fetched remotely; implementation must use confirmed Astro/browser APIs only.

## 8. Files and Modules

| Path | Action | State | Responsibility | Evidence |
|---|---|---|---|---|
| `frontend/src/pages/index.astro` | Modify | Existing after P01-T01 | Compose hero and projects in page order. | `PLAN-002` |
| `frontend/src/styles/portfolio.css` | Modify | Proposed after P01-T01 | Shared tokens/utility only; component geometry remains owned locally. | P01-T01 interface |
| `frontend/src/components/Hero.astro` | Create | Proposed | Hero copy, portrait/decorations, approved CTA treatment. | `DES-003`; `SPEC-DATA-002` |
| `frontend/src/components/Projects.astro` | Create | Proposed | Projects section and stable-ID record-to-card mapping. | `DES-004` |
| `frontend/src/components/ProjectCard.astro` | Create | Proposed | Card media/title/actions/data labels/alternatives and focus/hover behavior. | `DES-INT-002` |
| `frontend/src/data/portfolio.json` | Create | Proposed | Fer-approved mock stable IDs, technology labels, project alternatives, hero alternative/treatment, and `#contact` target. | User decision; `SRC-DOC-002`; `VER-019`; ADR-002 |
| `frontend/src/data/portfolio.ts` | Create | Proposed | Typed local record reader/shape validation and stable-ID lookup. | ADR-002 |
| `frontend/src/assets/portfolio/` | Add selectively | Proposed | Approved portrait/thumbnails/icons/decorations only. | `SRC-ASSET-001`; `AC-024` |

## 9. Dependencies and Interfaces

- The JSON reader accepts local records keyed by stable project identity; it rejects incomplete/mismatched data rather than positional or source-based fallback.
- Presentation components receive only the data-owned label/alternative fields. Source-backed title/media/action presentation remains in the component/source scope.
- `Hero` consumes the approved mock portrait alternative and `#contact` target. `Projects` maps each fixed identity to one complete record.
- `P01-T04` consumes the rendered page and task validation evidence; it does not redefine the JSON schema or substitute missing data.

## 10. Implementation Steps

1. Confirm P01-T01 lineage, fresh Figma scope/repository state, the approved mock table, and durable asset mappings.
2. Inspect the shared styles/route and source material; reconcile any unexpected changes before editing.
3. Define the narrow local data contract and validation path, then add the complete approved mock JSON values without a source-conflict fallback.
4. Implement hero, projects, and cards using source-backed layout/media/action design and imported local assets.
5. Implement accessible alternatives, named actions, desktop focus/hover presentation, and source-outcome responsive reflow.
6. Run declared build/diff/manual validations against the approved mock table, commit, and record output lineage.

## 11. State, Responsive, and Accessibility Requirements

### States and errors

- Default: one hero and six cards render with their approved local records.
- Desktop interaction: pointer hover and keyboard focus show the project action treatment; actions remain keyboard reachable.
- Small/touch: actions remain visible/operable without hover.
- Data/asset error: missing/malformed/mismatched JSON or unmapped asset prevents related acceptance; no guessed labels, alts, or remote URL fallback.
- Loading, persistence success/failure, disabled: Not applicable; content is build-time local and this task creates no async persistence.

### Responsive behavior

- Small: hero stacks/moves according to source outcome; projects render one column and actions remain visible.
- Intermediate: preserve the source tablet hero and two-card project outcomes where content fits.
- Large: preserve the desktop hero and two-card project outcome with accessible overlay actions.
- Edge cases: long labels/titles wrap without clipping/overflow; image sizing remains intrinsic and alternatives do not alter reading order.

### Accessibility

- Semantic structure: hero heading and projects heading/list maintain page order.
- Keyboard/focus: every action has a visible focus state; desktop overlay cannot conceal keyboard access.
- Names/alternatives: project image and possibly hero portrait treatment comes from approved local data; approved decoration is empty-alt.
- Announcements: Not applicable to static build-time content.
- Reflow/touch: cards remain usable across target widths and touch interfaces without reliance on hover.

## 12. Validation

### Automated validation

- Build — from `frontend/`, run `pnpm build` or local Astro fallback. Expected: static page builds successfully using local JSON/assets.
- Diff — `git diff --check`. Expected: no whitespace errors.
- Data check — the reader's supported build/development validation must reject incomplete/mismatched records with a clear local error and no fallback. Expected: complete approved records succeed.
- Unit/component/E2E/lint — Not configured; do not claim.

### Manual validation

- Visual/responsive: compare hero and six cards at 1440/768/375 plus narrow/medium/wide overflow cases.
- Content/accessibility: compare every rendered label/alternative to the approved mock table/JSON; inspect image alternatives, named actions, decoration treatment, and local asset paths.
- Interaction: keyboard-test every card action and desktop focus overlay; verify social/project/code `href` values are `#` and `CONTACT ME` targets `#contact`.
- Regression: ensure foundation remains intact and no remote requests/Figma URLs are introduced.

## 13. Acceptance Criteria

- [x] `AC-014` all hero/projects render in source-backed page order at target viewports.
- [x] `AC-015` and `AC-016` responsive cards/actions have no overflow or pointer-only behavior.
- [x] `AC-017` every unresolved external social/project/code link is literal `#`; `CONTACT ME` targets approved `#contact`.
- [x] `AC-023` every visual alternative is intentionally sourced from local data or decorative treatment.
- [x] `AC-024` every integrated asset is durable/local and source-mapped.
- [x] `AC-025` complete approved JSON records resolve technology-label conflicts without a silent fallback.
- [x] Snapshot verification, declared validation, output lineage, and task/index documentation are complete.

## 14. Risks and Considerations

| Risk or assumption | Impact | Mitigation or validation |
|---|---|---|
| Mock records later need replacement. | Content can drift from future final records. | The current mock table is approved authority; replace it only through the documented source/content-change process. |
| Figma/starter labels conflict. | Incorrect content authority. | Fer explicitly selected starter-page-derived mock values for local JSON; do not silently fall back to Figma labels. |
| Figma is mutable. | Layout/assets can drift. | Reverify before task start and follow rebaseline protocol for material changes. |

## 15. Implementation Discoveries

- `DISC-P01-T02-001`: Fresh design-context inspection of desktop `7:687`, tablet `7:226`, and mobile `7:3` found no material drift in the source-backed hero, project grid, portrait, decorations, or action treatments (`VER-022`). The task started at clean commit `12581470c0506f403bf059af2fdf11df88c51bac`, an expected descendant of `SRC-REPO-001` containing only recorded P01-T01/workflow output (`VER-023`).
- `DISC-P01-T02-002`: The portrait variants, circle/rings decorations, and all twelve project thumbnails map one-to-one from `docs/starter-code/assets/images/` into `frontend/src/assets/portfolio/images/`, retaining their supplied filenames. Source/destination SHA-256 values match for every copied file; no temporary Figma asset URL is used.
- `DISC-P01-T02-003`: The local JSON reader validates the complete approved six-record set at build time, rejects missing, duplicate, unsupported, or incomplete records with an explicit local error, and exposes no remote/fallback content path.
- `DISC-P01-T02-004`: Headless Chrome validated 2/2/1 project grids and no horizontal overflow at 1440/768/375 px. It also confirmed visible small/touch actions; desktop overlay actions are hidden by default, shown on hover or keyboard focus, and every lazy project image loads after scrolling into view.

## 16. Deviations

None. The approved mock-record set and `#contact` are user decisions, not guessed fallbacks. A different data loading method, remote content, or unapproved replacement values would be a scope/architecture deviation.

## 17. Output Lineage

- Parent task-start verification: `VER-023`, at clean descendant `12581470c0506f403bf059af2fdf11df88c51bac` of immutable input `SRC-REPO-001`.
- Implementation output snapshot/commit: `SRC-REPO-003`, immutable implementation output at `30c36791ce46af13be1f3d7124a8fde7aff6446e`.
- Produced by task: `P01-T02`.
- Approved as next task start: `P01-T03` is Ready. `P01-T04` remains dependent on both `P01-T02` and `P01-T03`.

## 18. Definition of Done

- [x] The approved mock records, alternatives, hero treatment, and `#contact` target were verified before binding related output.
- [x] Objective, acceptance criteria, and declared validation pass.
- [x] No missing data/asset is silently substituted; output lineage and task/index documentation are recorded.

## 19. Completion Report

- Implemented `Hero`, `Projects`, `ProjectCard`, a validated build-time local JSON reader/data source, the responsive project/hero styles, and all verified local portrait, decoration, and thumbnail assets. `frontend/src/pages/index.astro` now composes the new sections in page order.
- Fresh source/task-start verification is recorded in `VER-022` and `VER-023`; the output is `SRC-REPO-003` at `30c36791ce46af13be1f3d7124a8fde7aff6446e`. No deviations were recorded.
- Passed build, local data-contract, and Headless Chrome checks. Chrome covered 1440/768/375 px layouts, no horizontal overflow, placeholder and CTA destinations, keyboard-focus-visible desktop overlays, touch-visible actions, and lazy project-image loading after scroll.
- Remaining risk: the approved starter-derived mock content is deliberately local and must be replaced only through the documented source/content-change process.
- Next unblocked task: `P01-T03`; `P01-T04` becomes startable only after `P01-T03` also completes.
