---
artifact: PLAN
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

# Implementation Plan

## 1. Document Information

- **Status:** Draft.
- **Scope:** Replace the existing Astro starter page with the approved responsive portfolio, local JSON project metadata, and browser-only IndexedDB contact flow.
- **Last updated:** 2026-08-14.
- **Source baseline:** `SOURCE-BASELINE.md`; active inputs are `SRC-DS-001` and `SRC-REPO-001`.
- **Repository verification:** `VER-017` — current `frontend/` remains unchanged from the pinned starter baseline; later work is expected workflow output only.
- **Source documents:** `PROJECT-CONTEXT.md`, `REQUIREMENTS.md`, `DESIGN.md`, `SPEC.md`, `DOCUMENT-REVIEW.md`, and approved `ARCHITECTURE.md`.

## 2. Objective and Scope

### Included

- The one semantic Astro page: identity/social header, hero, skills, projects, contact, and footer.
- Source-backed responsive desktop/tablet/mobile compositions, local durable asset integration, and a reusable visual token/style layer.
- A build-time local JSON authority for project technology labels and image alternative treatment.
- Native form validation, accessible field/status feedback, browser-only IndexedDB v1 persistence, success reset, failure preservation, and retry by resubmission.
- Repository-prescribed build, diff, visual, responsive, keyboard, accessibility, IndexedDB, and no-transport validation.

### Excluded

- A client framework, server/API, database outside the browser, authentication, remote content, analytics, deployment configuration, or a second application/page.
- Unprovided real URLs, final local JSON values/hero treatment, a data lifecycle/privacy policy, browser support matrix, a `CONTACT ME` target, and an approved error-icon asset.
- Changes to Figma, generated workflow projections, or code implementation during the current planning stage.

## 3. Current Repository State

**Observed at immutable `SRC-REPO-001` commit `5f7ec3d0781d4a3237d051e00e8893c68f0a23b0`, rechecked by `VER-017`:**

| Area | Existing state | Planning consequence |
|---|---|---|
| Application root | `frontend/` is the canonical Astro application. | All implementation stays under `frontend/`; no root `index.html` or new framework. |
| Route/layout | `frontend/src/pages/index.astro` imports the generated `Welcome.astro` component through `frontend/src/layouts/Layout.astro`. | Modify the existing route/layout rather than add a route; replace starter composition through new semantic components. |
| Dependencies/scripts | `frontend/package.json` declares Astro `^7.2.2` only and `dev`, `build`, `preview`, `astro` scripts; strict Astro TypeScript config is present. | Use Astro and browser platform APIs only; no new package or test command is planned. |
| Components/styles | `frontend/src/components/Welcome.astro` contains only generated starter UI and local styles. No shared tokens, data module, client script, or state convention exists. | Create small portfolio-specific components, one shared stylesheet, and narrow data/persistence modules. |
| Assets | Starter Astro assets exist in `frontend/src/assets/`; supplied portfolio font/images/icons/patterns exist under `docs/starter-code/assets/`. | Intentionally copy selected supplied assets into a proposed portfolio asset directory while preserving filenames; do not use temporary Figma URLs. |
| Tests/runtime | No automated test/lint/accessibility tool, backend, API, or deployment/runtime configuration exists. | Use confirmed production build, `git diff --check`, and defined manual validation; do not claim unconfigured automation or deployment coverage. |

The supplied starter `Welcome.astro` and Astro artwork need not be deleted to complete the page; leaving them unreferenced avoids unnecessary destructive scope. Proposed paths below do not exist yet.

## 4. Technical Approach

- **Component/module boundaries:** Compose `index.astro` from semantic header, hero, skills, project, contact, and footer components. Keep source-wide tokens/normalization in one portfolio stylesheet; leave section-specific styling with the component that owns it. Keep project-data reading and contact persistence outside presentational components.
- **Data and state flow:** Import `portfolio.json` at Astro build time through a narrow typed/validated reader. Resolve each project by stable identity, then pass technology labels/alternative treatment as props. Keep contact values/errors/status in the form/controller; call the IndexedDB adapter only after valid local submission.
- **Styling and design-system integration:** Establish Space Grotesk/approved local asset use, color/spacing/type tokens, focus/error state selectors, intrinsic image sizing, and grid/flex layouts. Use the source viewport frames as outcomes, not literal media-query values.
- **Responsive strategy:** Preserve DOM/keyboard order. Use grid for skill/project collections, flex/block flow for one-dimensional header/hero/contact layouts, intrinsic sizing, `min-inline-size: 0` for overflow-prone flex children, and content-driven transitions. Verify 3/2/1 skill and 2/2/1 project outcomes at 1440/768/375 px without declaring those widths as breakpoints.
- **Accessibility strategy:** Use semantic landmarks/headings, visible labels, native controls, meaningful/intentional image alternatives, named icon links, `:focus-visible`, non-color error cues, and a programmatic status region. Native validity plus a small controller keeps visible invalid state and `aria-invalid`/error relationships aligned after interaction. Do not add a first-error focus strategy until it is decided.
- **Error/state handling:** Empty/malformed input prevents persistence. Completed IndexedDB transaction clears all three fields and announces success. Any local storage failure preserves values, announces failure, and leaves the native submit path available to retry. Missing JSON values or asset mapping block related acceptance rather than silently falling back.
- **Testing and validation strategy:** Do not add a test framework just for this page. Run the confirmed build/diff checks and manually inspect source viewport layouts, intermediate widths, keyboard/focus/accessibility tree, local storage contents, failure/retry behavior, and browser network activity.

The Stage 6 web-form guidance influenced the plan by keeping a native form and controls, native constraints, module-based listeners, non-color/associated feedback, and a no-transport local-submit path. Its normal server fallback is intentionally inapplicable because remote contact transport is prohibited.

## 5. Files and Modules

| Path | Action | Existing or proposed | Responsibility | Repository evidence |
|---|---|---|---|---|
| `frontend/src/pages/index.astro` | Modify | Existing | Replace starter import/composition with the one-page portfolio component tree and global portfolio stylesheet import. | Existing starter route; `SRC-REPO-001`. |
| `frontend/src/layouts/Layout.astro` | Modify | Existing | Set portfolio document metadata/language/body baseline while preserving the layout slot. | Existing generated layout; `SRC-REPO-001`. |
| `frontend/src/styles/portfolio.css` | Create | Proposed | Shared font-face, tokens, reset/base rules, container/section primitives, shared CTA/focus/error styles. | No existing shared style layer; repository permits clearly named shared stylesheet. |
| `frontend/src/components/PortfolioHeader.astro` | Create | Proposed | Identity and four named social links using literal `#` placeholders. | Design audit/social evidence; `SPEC-BEH-003`. |
| `frontend/src/components/Hero.astro` | Create | Proposed | Hero copy, portrait/decorations, and visibly styled `CONTACT ME` control; receives the local content record’s approved portrait treatment without inventing its unresolved target. | `DES-003`, `DES-RWD-002`, `SPEC-DATA-002`, `DOC-007`. |
| `frontend/src/components/Skills.astro` | Create | Proposed | Semantic six-skill collection and responsive grid behavior. | `DES-004`, `DES-RWD-003`, `SPEC-BEH-001`. |
| `frontend/src/components/Projects.astro` | Create | Proposed | Projects section/list, maps stable project identities to cards and local data. | `DES-004`, `SPEC-BEH-002`. |
| `frontend/src/components/ProjectCard.astro` | Create | Proposed | Source-backed media/title/action presentation plus data-supplied labels/alternative treatment and responsive hover/focus behavior. | `DES-004`, `DES-INT-002`, `SPEC-INT-002`. |
| `frontend/src/components/ContactForm.astro` | Create | Proposed | Semantic contact form markup, labels, field-error/status regions, and browser-script hook. | `DES-005`, `SPEC-INT-003`, `SPEC-ACC-002`. |
| `frontend/src/components/PortfolioFooter.astro` | Create | Proposed | Final identity/footer region and source-consistent decoration. | `DES-001`, `SPEC-BEH-001`. |
| `frontend/src/data/portfolio.json` | Create | Proposed | Approved local source for stable project IDs, technology-label collections, and image alternatives/hero treatment where applicable. | User decision; ADR-002; `SPEC-DATA-002`. |
| `frontend/src/data/portfolio.ts` | Create | Proposed | Typed local-data reader/shape validation and stable-ID lookup; rejects incomplete/mismatched records without fallback. | No current data layer; ADR-002. |
| `frontend/src/lib/contact-store.ts` | Create | Proposed | Browser-only IndexedDB v1 open/upgrade/write adapter, isolated from UI. | No current persistence layer; ADR-003. |
| `frontend/src/scripts/contact-form.ts` | Create | Proposed | Native submit/input/blur handling, validity/ARIA synchronization, status updates, reset-on-completed-write, and retryable failure behavior. | No current client script; ADR-003/004. |
| `frontend/src/assets/portfolio/` | Create | Proposed | Copies of intentionally integrated supplied fonts, portraits, thumbnails, social icons, and patterns, preserving filenames and keeping source material intact. | `docs/starter-code/assets/`; repository asset instructions; `AC-024`. |

## 6. Plan Items

### PLAN-001 — Establish the portfolio document shell and visual foundation

- **Objective:** Replace the generated Astro page shell with semantic portfolio composition and the reusable visual foundation needed by every section.
- **Requirement and specification references:** `REQ-FR-001`, `REQ-NFR-001`, `REQ-NFR-002`, `REQ-AR-001`, `SPEC-BEH-001`, `SPEC-BEH-006`, `SPEC-BEH-007`, `SPEC-ACC-001`.
- **Design references:** `DES-001`, `DES-002`, `DES-004`, `DES-RWD-001`, `DES-RWD-003`, `DES-RWD-004`.
- **Source snapshots:** `SRC-DS-001` (`VER-014`), `SRC-REPO-001` (`VER-017`).
- **File impact:** Modify `frontend/src/pages/index.astro` and `frontend/src/layouts/Layout.astro`; create `frontend/src/styles/portfolio.css`, `PortfolioHeader.astro`, `Skills.astro`, and `PortfolioFooter.astro`; integrate only verified foundation assets under `frontend/src/assets/portfolio/` without removing source assets.
- **Dependencies:** Approved local asset mapping for each asset used. Content data is not required for the header/skills/footer foundation; data-bound hero rendering belongs to PLAN-002.
- **Implementation approach:** Define design tokens and document baseline first, then compose ordered semantic landmarks/headings and source-backed foundation sections. Use component-local styles for section geometry and shared class-based tokens for common action/focus/error treatment.
- **Integrated accessibility, responsive, state, and error work:** Keep one `h1`, semantic header/main/footer/sections, named social icons, decorative-asset empty alternatives, source-consistent focus treatment, and source-driven header/skills transformations. Preserve DOM order when layouts stack; select media-query transition values from content/layout failure after comparison—not from familiar device widths.
- **Validation:** Build production output; inspect order/landmarks/heading hierarchy; keyboard-tab through social actions; compare header/skills/footer at 1440, 768, and 375 px; check no horizontal overflow at extra narrow/medium/wide widths.
- **Risks:** Exact source-asset mapping remains open; hero content/portrait treatment and CTA behavior are deliberately owned by PLAN-002 and its listed decisions.

### PLAN-002 — Integrate data-driven imagery and project cards

- **Objective:** Render the data-bound hero imagery and all six project cards from source-backed presentation plus approved local JSON technology/alternative metadata without silently resolving conflicts.
- **Requirement and specification references:** `REQ-FR-001`, `REQ-FR-002`, `REQ-BR-002`, `REQ-AR-003`, `REQ-NFR-003`, `SPEC-BEH-001`, `SPEC-BEH-002`, `SPEC-INT-002`, `SPEC-DATA-002`, `AC-023`–`AC-025`.
- **Design references:** `DES-003`, `DES-004`, `DES-006`, `DES-RWD-002`, `DES-RWD-003`, `DES-INT-002`.
- **Source snapshots:** `SRC-DS-001` (`VER-014`), `SRC-REPO-001` (`VER-017`).
- **File impact:** Create `frontend/src/data/portfolio.json`, `frontend/src/data/portfolio.ts`, `Hero.astro`, `Projects.astro`, and `ProjectCard.astro`; modify `index.astro` and shared/component styles; copy verified portrait, thumbnail, and associated decorative assets under `frontend/src/assets/portfolio/` while retaining `docs/starter-code/assets/`.
- **Dependencies:** Stable identity mapping between each rendered card and its local record; user/content owner must supply complete approved technology-label arrays and project/hero alternative treatments before data-bound imagery is implemented or related acceptance can pass; Fer must decide the `CONTACT ME` target before that action is bound.
- **Implementation approach:** Validate local JSON at build/development time, resolve records by stable ID rather than card position, and pass only data-owned fields to hero/project components. Keep title/media/action text in the existing source-backed scope. Use imported durable local assets, not remote Figma URLs.
- **Integrated accessibility, responsive, state, and error work:** Provide intentional project-image alternatives and hero treatment from local records, empty alternatives for approved decoration, named action context, desktop hover/focus overlay that remains keyboard reachable, and tablet/mobile visible actions. Use source hero movement and 2/2/1 project outcomes with content-driven breakpoints; prevent long labels/titles from producing overflow.
- **Validation:** Verify exactly six cards/skills; compare hero/project labels and alternatives with the JSON records; inspect image/asset paths; keyboard-test project actions and desktop focus overlay; visually compare supplied viewport outcomes; test incomplete/malformed JSON handling without a fallback; test the CTA only after its destination is approved.
- **Risks:** Actual local values, hero treatment, CTA target, exact asset mappings, and durable error-icon source remain open; final destinations remain literal `#` for social/project/code actions.

### PLAN-003 — Implement the accessible local contact form and IndexedDB boundary

- **Objective:** Add the approved frontend-only contact form behavior with native validation, local v1 persistence, accessible feedback, and recovery that never transports contact data.
- **Requirement and specification references:** `REQ-FR-004`, `REQ-FR-005`, `REQ-BR-003`, `REQ-DR-001`, `REQ-DR-002`, `REQ-AR-001`, `REQ-AR-002`, `REQ-SEC-001`, `SPEC-BEH-004`–`SPEC-BEH-006`, `SPEC-INT-003`, `SPEC-ACC-001`, `SPEC-ACC-002`, `SPEC-DATA-001`, `SPEC-VAL-001`–`SPEC-VAL-004`, `AC-018`–`AC-022`.
- **Design references:** `DES-005`, `DES-INT-003`, `DES-RWD-004`.
- **Source snapshots:** `SRC-DS-001` (`VER-014`), `SRC-REPO-001` (`VER-017`).
- **File impact:** Create `ContactForm.astro`, `frontend/src/lib/contact-store.ts`, and `frontend/src/scripts/contact-form.ts`; modify `index.astro`, shared styles, and contact section styling. Add the field-error icon only after its durable approved source is identified.
- **Dependencies:** PLAN-001 visual foundation; approved architecture ADR-003/004; user decision on first-error focus before final accessibility acceptance. No backend/API dependency exists.
- **Implementation approach:** Use a native form with visible associated labels, appropriate native types/autocomplete, `required` constraints, a module-based submit listener, and the architecture’s no-transport form configuration. The controller synchronizes post-interaction invalid state/ARIA relationships, invokes the local store only for valid data, and treats IndexedDB transaction completion as the success boundary. The v1 adapter owns opening/upgrading the one-store database and writes only the approved three visitor values plus its generated key.
- **Integrated accessibility, responsive, state, and error work:** Preserve native keyboard submission/focus; use non-color field error text/cues and programmatic associations; update one status region for local success/failure; do not clear fields before confirmed transaction completion; retain values on all local failures; keep the form readable/operable in source desktop/tablet/mobile arrangements and at touch/narrow widths. Do not invent focus relocation, whitespace normalization, automatic retry, duplicate handling, disabled/loading, remote fallback, retention, deletion/export, or privacy copy.
- **Validation:** Submit blank and malformed-email cases and confirm no record; submit valid data and inspect one IndexedDB record plus cleared fields/accessible confirmation; simulate unavailable/blocked/failed persistence and confirm retained values, accessible failure, no false success, and retry by resubmission; inspect browser network to confirm no contact transport; keyboard and accessibility-tree checks; production build and responsive inspection.
- **Risks:** Browser-support policy and exact error icon are open. JavaScript-disabled local persistence cannot be offered without violating the no-server boundary; no unapproved alternate behavior may be added.

### PLAN-004 — Perform integrated visual, responsive, content, and regression validation

- **Objective:** Validate the completed single page as one integrated Astro output and correct residual defects without introducing new scope.
- **Requirement and specification references:** All in-scope `REQ-*`; `SPEC-BEH-001`–`SPEC-BEH-007`, `SPEC-INT-001`–`SPEC-INT-003`, `SPEC-ACC-001`–`SPEC-ACC-002`, `SPEC-DATA-001`–`SPEC-DATA-002`, `SPEC-VAL-001`–`SPEC-VAL-004`, `AC-014`–`AC-025`.
- **Design references:** `DES-001`–`DES-006`, `DES-RWD-001`–`DES-RWD-004`, `DES-INT-001`–`DES-INT-004`.
- **Source snapshots:** Reverify the Time-bound `SRC-DS-001` before this work; use a task-start repository commit derived from `SRC-REPO-001` as required by the workflow.
- **File impact:** Modify only implementation files identified by findings in PLAN-001 through PLAN-003; do not create a separate cleanup abstraction or alter generated workflow files.
- **Dependencies:** PLAN-001 through PLAN-003 completed; complete approved JSON values/alternatives, resolved CTA target, and asset decisions required for corresponding final acceptance.
- **Implementation approach:** Compare behavior/visual outcome against supplied viewport evidence, inspect DOM/accessibility/network/IndexedDB results, and make narrowly scoped corrections in the owning component/style/script rather than masking issues globally.
- **Integrated accessibility, responsive, state, and error work:** Verify—not first introduce—semantics, focus, visual error/non-color cues, status feedback, image alternatives, keyboard operation, source states, and no-overflow behavior across affected components.
- **Validation:** From `frontend/`, run `pnpm build` (or local `./node_modules/.bin/astro build` when the WSL `pnpm` wrapper fails), `git diff --check`, desktop/tablet/mobile screenshots/comparisons, narrow/medium/wide overflow checks, manual keyboard/accessibility tree review, console review, JSON completeness check, IndexedDB success/failure/retry, and browser network inspection.
- **Risks:** This item cannot convert unresolved product/content decisions into implementation assumptions. Open decisions remain blockers only to the acceptance that requires them.

## 7. Recommended Phase Shape

1. **Foundation:** PLAN-001 establishes semantic structure, source tokens/styles, verified foundation assets, and responsive base behavior.
2. **Data-driven imagery/projects:** PLAN-002 establishes the local JSON boundary, hero imagery, and project cards with integrated alternatives and responsive interaction.
3. **Local contact interaction:** PLAN-003 adds validated IndexedDB behavior, accessible feedback, and failure recovery within the contact feature itself.
4. **Integrated verification:** PLAN-004 verifies and corrects cross-section regressions after the behaviors exist; it does not defer the initial accessibility/responsive/error work to this phase.

## 8. Responsive Decision Process

| Region | Observed outcome/evidence | Content or layout failure condition | Proposed selection process | Validation |
|---|---|---|---|---|
| Header/social | `DES-RWD-001`; 1440/768/375 frames | Identity and social actions no longer fit in one readable row. | Use wrapping/stacking at the narrowest width where space fails; preserve DOM order. | Source widths plus intermediate/zoom check. |
| Hero | `DES-RWD-002` | Portrait/copy/CTA overlap or reduce readable line length. | Move from side-by-side to mobile portrait-first stacked flow based on content width, not a copied canvas width. | Source frames and narrow no-overflow check. |
| Skills/projects | `DES-RWD-003`; `SPEC-BEH-007` | Three/two columns cannot maintain readable cards/gaps. | Use grid tracks and transition through observed 3/2/1 skills and 2/2/1 projects only when tracks would otherwise fail. | 1440/768/375 and long content labels/titles. |
| Contact | `DES-RWD-004` | Intro/form columns cannot maintain readable controls/action access. | Switch from horizontal desktop arrangement to observed stacked arrangement before controls crowd or overflow. | Source frames, keyboard, 200% zoom, and touch-width check. |

No numeric breakpoint is approved by this plan. The implementation task records selected values and evidence after layout/content testing.

## 9. Dependencies and Ordering

| Plan item | Depends on | May run in parallel | Reason |
|---|---|---:|---|
| `PLAN-001` | Approved architecture; source asset mapping as used | No | Establishes document/style/component foundation used by all UI work. |
| `PLAN-002` | `PLAN-001`; complete local content records for final acceptance | Limited | It can prepare JSON/card boundaries after foundation, but final content acceptance waits for supplied values. |
| `PLAN-003` | `PLAN-001`; approved architecture | Yes, after shared CSS interface is stable | Contact scripts/storage do not depend on project-card data, but share visual tokens/layout shell. |
| `PLAN-004` | `PLAN-001`, `PLAN-002`, `PLAN-003` | No | It validates the integrated result and must not precede owned behavior. |

## 10. Architecture Handling

- **Separate `ARCHITECTURE.md`:** Required and approved.
- **Reason:** User-approved browser persistence and local data require explicit ownership, migration, privacy, reliability, no-transport, and dependency-boundary decisions. PLAN-001 through PLAN-004 implement those decisions; they do not replace them.

## 11. Migration, Compatibility, Deployment, and Rollback

- **Migration:** The initial implementation creates IndexedDB schema version 1 and has no baseline data to migrate. Future incompatible changes require a versioned upgrade path and reviewed architecture decision; do not clear records silently.
- **Compatibility:** No browser-support policy is supplied. Use platform features identified in the approved architecture and record any needed fallback only after a support policy is confirmed; do not promise unsupported-browser behavior.
- **Deployment/runtime:** No deployment/runtime snapshot or hosting configuration was inspected. The plan is limited to the confirmed static Astro build output; it does not add deployment settings, remote environment variables, migrations on a server, or rollback procedures.
- **Rollback:** Before release, version control provides code rollback. Do not define a browser-data deletion/rollback policy without the unresolved lifecycle decision.

## 12. Source-change Handling

- **Snapshot verification required before implementation:** Reverify `SRC-DS-001` immediately before material visual implementation because it is Time-bound. Pin a new task-start Git commit and compare it with `SRC-REPO-001` before implementation tasks begin.
- **Material changes that invalidate this plan:** Figma scope/content changes; supplied local content values; real URLs; approved CTA destination; error-icon/asset source; a change to IndexedDB lifecycle or browser support; backend/remote data scope; pre-existing frontend implementation or dependency changes.
- **Earliest stage to revisit:** Return to Stage 6 for structural scope/persistence changes; return to Stage 7 for repository/file/order changes; update the owning requirements/design/specification artifact for product or source decisions before task execution.

## 13. Risks and Open Questions

| Risk or question | Impact | Blocking | Mitigation or owner |
|---|---|---:|---|
| Complete local JSON technology/alternative values and hero treatment are not supplied. | Prevents final project/image acceptance and safe data population. | Yes, for related implementation/acceptance | Fer/content owner provides approved records; do not guess. |
| `CONTACT ME` target remains open. | Prevents testing/implementing CTA behavior. | Yes, before CTA implementation | Fer decides whether it scrolls to `#contact` or another approved action. |
| Error-icon asset/mapping is unresolved. | May prevent exact form-error visual parity. | Yes, for exact visual acceptance | Fer/asset owner confirms a durable source; text/ARIA behavior remains separately required. |
| IndexedDB lifecycle/privacy policy is open. | No retention/deletion/export/privacy claim can be made. | No for initial local-save scope; yes for data-management claims | Carry `Q-001`; stage later policy decision before adding such features. |
| Browser support matrix absent. | Could alter fallback/acceptance obligations. | No for baseline-first implementation; yes for non-Baseline claims | Fer/product owner defines release support policy. |
| Mutable Figma design changes. | Invalidates visual comparison/asset mapping. | Yes, before material visual task | Reverify/rebaseline per this plan’s §12 source-change handling. |
| External URLs are unavailable. | Final external navigation cannot be accepted. | No for placeholder implementation; yes before release | Keep literal `#` until Fer supplies destinations. |

## 14. Definition of Done

- [x] Every must-have requirement and material specification has a mapped plan item.
- [x] Every plan item identifies file impact, dependencies, accessibility/responsive/state/error work, validation, and risks.
- [x] Existing and proposed paths are clearly distinguished.
- [x] Architecture requirements, migration, privacy/no-transport, compatibility limits, and validation are addressed at the appropriate level.
- [x] Repository command choices are confirmed from `frontend/package.json`/repository guidance; no new command or dependency is invented.
- [x] Active source IDs exist and the repository baseline was reverified by `VER-017`.

## 15. Review

### Pass 1 — Feasibility and completeness

- [x] The plan reflects the pinned Astro starter and distinguishes it from all proposed components/modules/assets.
- [x] Scope, ordering, dependencies, integration, migration, no-transport behavior, and validation are complete for the approved work.
- [x] Plan items are coherent, independently verifiable, and decomposable without becoming isolated accessibility/responsive cleanup work.
- [x] Accessibility, responsive behavior, states, errors, local data, persistence, and tests are integrated in the affected plan item.

**Pass 1 corrections:** Replaced scaffold-only source fields with active CLI baseline IDs; used confirmed `frontend/` paths/scripts rather than generic paths; kept supplied assets as source material until an explicit copy step; and separated project-data acceptance dependencies from the static component foundation.

### Pass 2 — Consistency, traceability, source integrity, risks, and uncertainty

- [x] `PLAN-001`–`PLAN-004` identifiers follow the plan namespace and map to approved requirements/specifications and relevant source evidence.
- [x] `VER-017` verifies the repository used for file/command claims; Figma remains explicitly Time-bound at `VER-014` and is required to be rechecked before material visual work.
- [x] No proposed file, framework, dependency, endpoint, fallback store, breakpoint value, focus rule, URL, content value, retention policy, or deployment behavior is presented as existing/approved.
- [x] Architecture handling is consistent with approved `ARCHITECTURE.md`; implementation remains forbidden in the current workflow stage.
- [x] Risks, blocking inputs, and accepted no-server/no-JavaScript tradeoff remain visible.

**Pass 2 corrections:** Kept `CONTACT ME` explicitly unbound pending `DOC-007`; made local JSON a build-time data source rather than a runtime fetch; excluded unconfigured automated tests and deployment claims; and applied current web-form guidance only where it does not conflict with the approved no-transport/no-server boundary.

## 16. Completion Summary

- **File created:** `PLAN.md`.
- **Inputs used:** Approved architecture, requirements, design, specification, documentation review; `SRC-DS-001` (`VER-014`, Time-bound) and `SRC-REPO-001` (`VER-017`, Astro starter reverified).
- **Plan shape:** Four integrated items: visual/semantic foundation, data-driven projects, accessible local contact persistence, and integrated regression validation.
- **Proposed file impact:** Existing Astro route/layout modified; portfolio styles/components/data/contact scripts/assets created; no existing generated starter file requires deletion; no dependency change.
- **Validation:** Confirmed Astro build/diff plus manual visual, keyboard, accessibility, IndexedDB, network, content, and responsive checks.
- **Open implementation inputs:** `CONTACT ME` target, local JSON values/hero treatment, durable error icon, data lifecycle/privacy policy, browser matrix, and real URLs.
- **Ready for Stage 7 review:** **Yes, with explicit task-level blockers carried forward rather than guessed.**
