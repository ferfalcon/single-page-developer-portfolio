---
artifact: TASK
id: P01-T01
design:
  - SRC-DS-001
repository:
  - SRC-REPO-001
runtime: []
documentation:
  - SRC-DOC-001
assets:
  - SRC-ASSET-001
created: 2026-08-14
updated: 2026-08-14
project: Single-page developer portfolio
profile: Full
execution_mode: Gated
---

# Phase 01 — Task 01: Establish the responsive portfolio foundation

## 1. Status

`Not started` — the CLI task registry is authoritative.

## 2. Objective

Replace the generated Astro starter composition with the source-backed semantic document foundation: identity/social header, skills section, footer, shared visual tokens, and responsive layout rules. It deliberately establishes the interfaces that the hero, project presentation, and contact work will consume without rendering those data-bound or persistent features.

## 3. Source References

- Source baseline: `SOURCE-BASELINE.md`; `SRC-DS-001`, `SRC-REPO-001`, `SRC-DOC-001`, and `SRC-ASSET-001`.
- `PLAN.md`: `PLAN-001`; `PLAN-REVIEW.md`: `PLANREV-001`, `PLANREV-002`, `PLANREV-004`, and `PLANREV-005`.
- Requirement IDs: `REQ-FR-001`, `REQ-FR-003`, `REQ-AR-001`, `REQ-NFR-001`–`REQ-NFR-003`, `REQ-CON-001`–`REQ-CON-003`, and `REQ-CON-006`–`REQ-CON-007`.
- Specifications/acceptance: `SPEC-BEH-001`, `SPEC-BEH-003`, `SPEC-BEH-006`, `SPEC-BEH-007`, `SPEC-ACC-001`, `SPEC-INT-001`; `AC-014`–`AC-017` and `AC-024`.
- `DESIGN.md`: `DES-001`, `DES-002`, `DES-004`, `DES-RWD-001`, `DES-RWD-003`, `DES-RWD-004`, and `DES-INT-001`.
- Design evidence: scoped desktop `7:687`, tablet `7:226`, mobile `7:3`; latest Time-bound scope verification is `VER-014`.
- Architecture: ADR-001 and the shared styling/data boundary in `ARCHITECTURE.md` §§9, 10, and 17.
- Related tasks: enables `P01-T02` and `P01-T03`; `P01-T04` validates the integrated output.

## 4. Snapshot Verification

Complete immediately before implementation, not during decomposition.

- Design inputs applicable: Yes. Reinspect the scoped Figma root and relevant desktop/tablet/mobile frames; Figma has no immutable named version or checksum.
- Repository commit checked out: Unverified at task start. Verify the clean current commit descends from `SRC-REPO-001` and classify any difference from it.
- Expected difference: Stage 9 workflow output only. No frontend change was observed by `VER-018`; an unexpected frontend or source change requires pause/rebaseline handling.
- Upstream rebaseline required: No unless that verification finds a material Figma or application change.
- Limitation: the canonical task baseline remains `SRC-REPO-001`; the committed P01-T01 output becomes the expected starting state for dependent tasks.

## 5. Prerequisites

- Fresh task-start verification of `SRC-DS-001` and the repository commit.
- A durable mapping for every foundation asset actually copied from `docs/starter-code/assets/`; retain supplied source material and original filenames.
- No project JSON values, hero treatment, CTA target, error icon, or contact-storage implementation is required for this task.

## 6. Scope

### Included

- Modify the existing Astro route/layout and create the shared portfolio stylesheet.
- Create `PortfolioHeader`, `Skills`, and `PortfolioFooter` components, compose their semantic landmarks in source order, and render the six observed skill entries.
- Integrate only verified foundation assets, including font treatment where the mapping is confirmed.
- Establish class-based tokens, page/container/section primitives, visible focus treatment, placeholder external links (`#`), intrinsic sizing, and source-outcome responsive rules.
- Build and manual semantic, keyboard, responsive, visual, and overflow checks described below.

### Excluded

- Hero portrait/CTA binding, project cards, local JSON, IndexedDB, client scripts, and contact markup; those belong to `P01-T02` or `P01-T03`.
- Real URLs, arbitrary breakpoints, a new client framework, dependency changes, removal of unused starter files, remote assets, or an implementation fallback for unresolved decisions.

## 7. Repository Context

At `SRC-REPO-001` (rechecked by `VER-018`), `frontend/` is an Astro 7 application with only Astro in `package.json`; `src/pages/index.astro` renders `Welcome.astro` through `layouts/Layout.astro`. There is no shared stylesheet, portfolio component, test/lint/accessibility command, client framework, or data/store module. `frontend/src/assets/` holds generated starter artwork; supplied portfolio material is under `docs/starter-code/assets/`. The confirmed commands are the Astro production build and `git diff --check`; no unconfigured tool may be claimed as validation.

## 8. Files and Modules

| Path | Action | State | Responsibility | Evidence |
|---|---|---|---|---|
| `frontend/src/pages/index.astro` | Modify | Existing | Replace starter composition with the ordered portfolio shell and import section components/styles. | `SRC-REPO-001` |
| `frontend/src/layouts/Layout.astro` | Modify | Existing | Portfolio document metadata, language, and body baseline while preserving its slot. | `SRC-REPO-001` |
| `frontend/src/styles/portfolio.css` | Create | Proposed | Tokens, font-face, normalization, focus/error/action primitives, containers, and responsive foundations. | `PLAN-001` |
| `frontend/src/components/PortfolioHeader.astro` | Create | Proposed | Identity and four named social links using confirmed `#` placeholders. | `DES-001`; `SPEC-BEH-003` |
| `frontend/src/components/Skills.astro` | Create | Proposed | Semantic six-item skill collection and 3/2/1 layout outcome. | `DES-004`; `DES-RWD-003` |
| `frontend/src/components/PortfolioFooter.astro` | Create | Proposed | Source-backed closing identity/footer region. | `DES-001` |
| `frontend/src/assets/portfolio/` | Create selectively | Proposed | Only verified foundation copies, preserving source filenames. | `SRC-ASSET-001`; `AC-024` |

`Hero.astro`, projects/data modules, contact modules, and selected non-foundation assets are intentionally not modified here.

## 9. Dependencies and Interfaces

- `index.astro` owns landmark order and composes section components. Components expose no client-state contract in this task.
- `portfolio.css` supplies stable custom properties and shared class hooks that later tasks may consume without taking ownership of another component's geometry.
- Header social actions receive accessible names and literal `#`; real destinations are not inferred. The `CONTACT ME` CTA is not created here because its target remains unresolved.
- `P01-T02` consumes the shell/content container and style tokens; `P01-T03` consumes the contact-area and feedback primitives. Any change to those interfaces after completion must be coordinated through the task index.

## 10. Implementation Steps

1. Reverify the Time-bound Figma scope and task-start repository commit; record the result before code changes.
2. Inspect the current route, layout, supplied asset inventory, and existing Astro conventions again.
3. Create the semantic shell and foundational components with one clear `h1`, header/main/footer landmarks, ordered sections, and source-backed skill/footer content.
4. Establish only reusable global visual rules and component-owned responsive geometry; copy only assets with a documented durable mapping.
5. Confirm `#` placeholders and visible keyboard focus; do not add the unresolved hero CTA or any guessed links/content.
6. Execute declared build/diff and manual checks, document discoveries/deviations, commit, and record the resulting implementation-output snapshot.

## 11. State, Responsive, and Accessibility Requirements

### States and errors

- Default: header, skills, and footer render as static source-backed content.
- Hover/focus: social links expose visible source-consistent interaction and keyboard focus; hover never carries exclusive meaning.
- Loading, empty, success, disabled, and persistence error: Not applicable; this task introduces no asynchronous or form behavior.
- Asset-mapping error: do not copy or render an unverified foundation asset; record the blocker rather than substitute a remote/Figma URL.

### Responsive behavior

- Small: preserve reading/tab order while stacked header/footer layout and single-column skill collection remain legible.
- Intermediate: preserve the source's two-column skill outcome where content fits.
- Large: preserve the three-column skill outcome and desktop header spacing.
- Edge cases: use intrinsic sizes, wrapping, and `min-inline-size: 0` where needed; test long text and ensure no horizontal page overflow. Transition thresholds arise from content failure, not conventional device sizes.

### Accessibility

- Semantic structure: one `h1`, logical headings, header/main/footer and a labeled skills section in DOM reading order.
- Keyboard/focus: every social link is reachable and has visible `:focus-visible` treatment.
- Names/relationships: social icons have meaningful accessible names; decorative assets use empty alternatives.
- Announcements: Not applicable because this task has no dynamic status.
- Reflow/touch: retain readable reflow at 375/768/1440 px and support non-pointer activation without hover dependence.

## 12. Validation

### Automated validation

- Build — from `frontend/`, source NVM and run `pnpm build`; if the WSL pnpm wrapper fails, run `./node_modules/.bin/astro build`. Expected: one static page builds with no error.
- Diff — run `git diff --check`. Expected: no whitespace errors.
- Unit/component/E2E/type/lint — Not configured in the task-start repository; do not claim them.

### Manual validation

- Visual: compare header, skills, footer, and section order with `SRC-DS-001` at 1440, 768, and 375 px.
- Responsive: inspect additional narrow, medium, and wide widths with long skill text; expected no horizontal overflow, clipping, or overlap.
- Accessibility/interaction: tab through every social action; expected meaningful name, visible focus, and literal `#` destination.
- Regression: confirm the route no longer renders `Welcome.astro`, but leave unused starter files untouched unless a justified later change requires them.

## 13. Acceptance Criteria

- [ ] `PLAN-001` and `AC-014` foundation regions render in the required source-backed order without replacing task-owned later sections.
- [ ] `AC-015` and `SPEC-BEH-007` responsive skills/shell behavior is verified without page overflow.
- [ ] `AC-016` and `AC-017` social actions are keyboard reachable, visibly focused, and use literal `#` placeholders.
- [ ] `AC-024` every integrated foundation asset has a durable documented local mapping.
- [ ] Fresh snapshot verification, declared validation, output lineage, and task/index documentation are complete.

## 14. Risks and Considerations

| Risk or assumption | Impact | Mitigation or validation |
|---|---|---|
| Figma is Time-bound. | Visual scope can drift before implementation. | Reinspect at task start; rebaseline material changes. |
| Asset mapping may be incomplete. | Exact visual parity can be blocked. | Integrate only verified source assets; record unmapped assets. |
| Hero/data/contact concerns share layout tokens. | Overlapping edits could produce regressions. | This task owns only shared primitives; dependent tasks preserve the interface or coordinate changes. |
| Real destinations are unknown. | Link behavior cannot be inferred. | Use confirmed `#` only for social/project/code actions; omit unresolved CTA binding. |

## 15. Implementation Discoveries

- `DISC-P01-T01-001`: Fresh inspection verified the scoped desktop (`7:687`), tablet (`7:226`), and mobile (`7:3`) Figma foundations without material drift (`VER-020`). Repository verification (`VER-021`) confirmed that the task began from the expected Stage 9 descendant of `SRC-REPO-001`, with no prior frontend implementation.
- `DISC-P01-T01-002`: The durable foundation asset mapping is exact and local: `docs/starter-code/assets/fonts/SpaceGrotesk-VariableFont_wght.ttf` maps to `frontend/src/assets/portfolio/fonts/SpaceGrotesk-VariableFont_wght.ttf`; the four supplied social SVGs map from `docs/starter-code/assets/images/` to `frontend/src/assets/portfolio/icons/`, retaining their filenames. Each source/destination pair has an identical SHA-256 checksum. Hero, project, decoration, form, JSON, IndexedDB, and remote Figma assets remain intentionally unmapped.
- `DISC-P01-T01-003`: The WSL `pnpm` wrapper still fails with `ERR_SQLITE_ERROR` while opening its package-manager database. The repository-prescribed local Astro CLI fallback completed the production build successfully, so no dependency or application change was needed.
- `DISC-P01-T01-004`: `index.astro` provides the temporary visually hidden page `h1` needed for the semantic foundation. `P01-T02` owns replacing it with the visible hero `h1`; it must keep exactly one page heading.

## 16. Deviations

None. The implementation stays within P01-T01: it introduces no hero, project, contact, client-side, persistence, remote-asset, or destination-guessing behavior.

## 17. Output Lineage

- Parent task-start verification: `VER-020` reconfirmed `SRC-DS-001`; `VER-021` reconfirmed the repository starting state at `52f1380d6f3e976561ce9d46e31073a334780517`, an expected Stage 9 descendant of `SRC-REPO-001`.
- Implementation output snapshot/commit: immutable `SRC-REPO-002` at `61858844bb83ace50961fa2cf312794c83bf11d8`, created by the CLI after all required checks passed.
- Produced by task: `P01-T01`.
- Downstream interface: `P01-T02` and `P01-T03` may consume `portfolio.css` tokens, `.site-container`, `.portfolio-main`, and the shared interaction/error hooks while preserving P01-T01-owned header, skills, and footer geometry.

## 18. Definition of Done

- [x] The objective, acceptance criteria, and declared validation pass.
- [x] Required snapshot verification and output lineage are recorded.
- [x] No unverified asset, source change, or hidden cross-task change remains.
- [x] Task/index documentation, deviations, and downstream interface notes are updated.

## 19. Completion Report

- Files and output: `frontend/src/pages/index.astro`, `frontend/src/layouts/Layout.astro`, `frontend/src/styles/portfolio.css`, `PortfolioHeader.astro`, `SocialLinks.astro`, `Skills.astro`, `PortfolioFooter.astro`, and only the five mapped local portfolio assets; immutable implementation output `SRC-REPO-002` at `61858844bb83ace50961fa2cf312794c83bf11d8`.
- Behavior: the source order is semantic header, main/interim `h1`, skills, then footer. Both identity regions contain the four named `#` social actions; skill copy is HTML, CSS, Javascript, and Accessibility with four years of experience, plus React and Sass with three years.
- Validation: the local `./node_modules/.bin/astro build` fallback generated one static page successfully; `git diff --check` passed. Headless production captures at 1440, 768, and 375 px verified the intended 3/2/1 skill layouts and readable mobile identity/footer. Runtime checks found no horizontal overflow at 1440, 1024, 768, 520, or 375 px, including a long skill name. Keyboard navigation reached GitHub, Frontend Mentor, LinkedIn, and Twitter in the header and then footer, with all eight links reporting `:focus-visible`.
- Assets: the font and four social SVG checksum mappings are recorded in `DISC-P01-T01-002`; no other starter or Figma asset was introduced.
- Deviations: none.
- Next unblocked task: `P01-T02` and `P01-T03`, subject to their own fresh entry verification.
