---
artifact: TASKS-INDEX
design:
  - SRC-DS-001
repository:
  - SRC-REPO-001
created: 2026-08-14
updated: 2026-08-14
project: Single-page developer portfolio
profile: Full
execution_mode: Gated
---

# Tasks Index

## 1. Document Information

- Version: 1.0 draft for Stage 9 review.
- Project: Single-page developer portfolio.
- Source plan/review: approved `PLAN.md` and `PLAN-REVIEW.md`; architecture decision Required with approved `ARCHITECTURE.md` ADR-001–ADR-004.
- Baseline: `SRC-DS-001` (Time-bound Figma; latest scope verification `VER-014`) and immutable `SRC-REPO-001` (original commit `5f7ec3d0781d4a3237d051e00e8893c68f0a23b0`; latest reinspection `VER-018`).
- Stage 9 repository observation: HEAD `3f3190b7428d152b329933f840845bf18a23810f` was expected workflow output and has no committed or working-tree `frontend/` change relative to the input baseline.

## 2. Scope

### Included

- Replace the Astro starter with one semantic responsive portfolio page.
- Implement starter-page-derived mock local JSON technology labels/image alternatives, a hero alternative, `#contact` CTA, and durable asset integration.
- Implement the frontend-only IndexedDB contact flow with accessible validation, success clear/message, failure preserve/message/retry, and no contact transport.
- Validate visual, responsive, accessibility, data/asset, IndexedDB, security, and regression behavior within the existing Astro repository.

### Excluded

- Server/API, remote database/content, authentication, deployment, analytics, additional routes/frameworks, real external URLs, lifecycle/privacy features, custom error icon/summary/focus behavior, or generated workflow projections.

## 3. Execution Rules

- The CLI registry owns task status, prerequisites, validation status, and output lineage; this document owns narrative coordination only.
- Before every implementation task, freshly verify its task-start repository commit and the relevant Figma scope. The mutable Figma URL is never an immutable snapshot.
- Treat a preceding committed task result as expected only when it has recorded lineage; pause/rebaseline unexpected material source or frontend change.
- Use the approved starter-page-derived mock records, title-derived image alternatives, hero alternative, `#contact` CTA, and browser-native invalid-control focus. Do not guess future replacement content, real external URLs, or data-lifecycle rules.
- Execute only an in-progress Stage 10 task after human approval of the Stage 9 gate. Generated workflow files remain read-only projections.
- Each task integrates its own responsive, accessibility, state/error, and validation work; P01-T04 verifies but does not introduce omitted feature behavior.

## 4. Phase Summary

| Phase | Objective | Depends on | Parallel work | Completion criteria |
|---|---|---|---|---|
| Phase 01 | Deliver the single portfolio as four independently verifiable results. | Approved plan/architecture and current snapshots. | After P01-T01, P01-T02 and P01-T03 may execute serially in the CLI but have no owned implementation-file overlap except coordinated page/shared-style integration. | All four tasks complete with declared validation, recorded output lineage, resolved acceptance inputs, and no high blocker. |

## 5. Phase Details

### Phase 01 — Build then integrate the portfolio

- Entry criteria: the Stage 9 gate is human-approved and the workflow has entered Stage 10; the task selected in the CLI has fresh task-start source/repository evidence.
- Ordered intent:
  1. `P01-T01` establishes semantic shell, shared visual foundation, header/skills/footer, and selected foundation assets.
  2. `P01-T02` builds the data-owned hero/projects/cards after P01-T01 using the approved starter-page-derived mock records and `#contact` CTA.
  3. `P01-T03` builds the native IndexedDB contact flow after P01-T01; it remains independent of project JSON.
  4. `P01-T04` runs only after P01-T02/P01-T03 outputs; it compares/corrects the integrated output without expanding scope.
- Coordination: the CLI permits only one task in progress. P01-T02/P01-T03 must preserve P01-T01's shared-style/page interface; a required interface change is a documented finding, not a hidden simultaneous edit.
- Phase completion: all canonical task records are Complete, all declared required checks Passed, the approved mock/native-error decisions are implemented, and P01-T04 has recorded integrated results.

## 6. Task Register

| Task | Objective | Prerequisites | Primary result | Validation ownership |
|---|---|---|---|---|
| `P01-T01` | Establish the responsive semantic foundation. | Fresh snapshots and verified assets as used. | Astro shell, header, skills, footer, shared styles. | Build/diff and shell visual/keyboard/overflow checks. |
| `P01-T02` | Implement data-driven hero/projects/cards. | P01-T01; fresh snapshots; approved mock records/hero alternative/`#contact`; asset verification. | JSON reader/data, hero/projects/card components, related assets. | Build/data integrity and visual/keyboard/content/asset checks. |
| `P01-T03` | Implement accessible local contact persistence. | P01-T01; fresh snapshots; architecture constraints; approved browser-native error/focus behavior. | Contact component, IndexedDB repository, browser controller. | Build/diff plus form/IndexedDB/failure/network/accessibility checks. |
| `P01-T04` | Validate and correct the integrated portfolio. | P01-T02 and P01-T03; fresh snapshots; approved mock/native-error decisions. | Finding-driven corrections and complete integrated evidence. | Build/diff plus full visual/responsive/accessibility/data/contact/security matrix. |

## 7. Plan Coverage

| `PLAN.md` item | Task or tasks | Coverage status | Notes |
|---|---|---|---|
| `PLAN-001` foundation | `P01-T01`, `P01-T04` | Complete | Hero was intentionally removed from foundation during plan review. |
| `PLAN-002` data-driven hero/projects | `P01-T02`, `P01-T04` | Complete | Fer approved starter-page-derived mock values/title-derived alternatives, informative hero alternative, and `#contact`; durable asset paths remain task-start verification. |
| `PLAN-003` accessible IndexedDB contact | `P01-T03`, `P01-T04` | Complete with intentional visual deviation | Fer selected browser-native invalid feedback/focus instead of a custom error icon/summary. |
| `PLAN-004` integrated validation | `P01-T04` | Complete | It follows all feature tasks and does not own new behavior. |

## 8. Requirement and Specification Coverage

| Requirement/specification | Priority | Task or tasks | Validation task | Coverage status |
|---|---|---|---|---|
| `REQ-FR-001`; `SPEC-BEH-001`; `SPEC-ACC-001`; `AC-014` | Must | P01-T01, P01-T02 | P01-T01/P01-T04 | Complete |
| `REQ-FR-002`; `REQ-BR-002`; `SPEC-BEH-002`; `SPEC-DATA-002`; `AC-023`, `AC-025` | Must | P01-T02 | P01-T02/P01-T04 | Complete with approved mock content |
| `REQ-FR-003`; `REQ-BR-001`; `SPEC-BEH-003`; `SPEC-INT-001`; `AC-017` | Must | P01-T01, P01-T02 | P01-T01/P01-T02/P01-T04 | Complete with approved `#contact`; external actions are `#` |
| `REQ-FR-004`; `REQ-AR-001`–`REQ-AR-002`; `SPEC-BEH-004`; `SPEC-ACC-002`; `SPEC-VAL-001`–`002`; `AC-018`, `AC-019`, `AC-022` | Must | P01-T03 | P01-T03/P01-T04 | Complete with user-approved browser-native error/focus deviation |
| `REQ-FR-005`; `REQ-BR-003`; `REQ-DR-001`–`002`; `REQ-SEC-001`; `SPEC-BEH-005`; `SPEC-DATA-001`; `SPEC-VAL-003`–`004`; `AC-020`, `AC-021` | Must | P01-T03 | P01-T03/P01-T04 | Complete |
| `REQ-NFR-001`; `SPEC-BEH-007`; `AC-015` | Must quality outcome | P01-T01–P01-T03 | P01-T01–P01-T04 | Complete |
| `REQ-NFR-002`–`003`; `REQ-CON-001`–`004`, `REQ-CON-006`–`007`; `SPEC-BEH-006`; `AC-016`, `AC-024` | Constraint | P01-T01–P01-T03 | P01-T01–P01-T04 | Complete |
| `REQ-AR-003` | Accessibility | P01-T02 | P01-T02/P01-T04 | Complete with approved mock alternatives |
| `REQ-SEC-002` | Constraint | P01-T03/P01-T04 | P01-T03/P01-T04 | Complete: defer, do not invent lifecycle policy |

The canonical CLI chain is `REQ-FR-001`–`REQ-FR-005` → relevant `SPEC-*` → `AC-014`–`AC-025` → `PLAN-001`–`PLAN-004` → the four task records. Each five Must requirement is marked required only after this full path existed.

## 9. Cross-Cutting Coverage

| Concern | Integrated tasks | Final validation | Gap |
|---|---|---|---|
| Source verification/rebaseline | P01-T01–P01-T04 | P01-T04 repeats current Figma/repository verification. | Figma is mutable; each task start must recheck. |
| Accessibility | P01-T01–P01-T03 | P01-T04 keyboard, semantics, names/alts, labels/native errors/status. | Browser-native invalid-control focus is the approved behavior. |
| Responsive/reflow | P01-T01–P01-T03 | P01-T04 source widths plus extra overflow cases. | Exact breakpoints are intentionally content-driven. |
| Loading/empty/error/success | P01-T02 data integrity; P01-T03 invalid/success/failure/retry. | P01-T04 checks actual states. | No loading/disabled state is approved. |
| Security/privacy | P01-T03 | P01-T04 network/no transport and record-shape check. | Lifecycle/privacy policy remains deferred. |
| Performance/assets | P01-T01/P01-T02 | P01-T04 local-asset/source inspection. | No performance threshold/tool configured. |
| Documentation/lineage | Every task | P01-T04 confirms task/index/upstream updates. | No gap if actual outputs are recorded. |
| Regression | P01-T01–P01-T03 own their checks. | P01-T04 full integrated pass. | No automated test suite exists. |

## 10. Blocked Work and Coordination Risks

| Task | Blocker or coordination risk | Decision owner | Required action | Impact | Status |
|---|---|---|---|---|---|
| P01-T02 | Starter-page mock content may later be replaced by final records. | Fer/content owner | Use the approved mock table now; follow source-change handling for a later replacement. | Requires targeted content/visual regression validation if changed. | Resolved for current scope |
| P01-T03 | Browser-native errors differ from Figma's icon treatment. | Fer | Implement and validate the user-approved native error/focus behavior; do not add a custom icon/summary. | Intentional visual deviation, not a blocker. | Resolved |
| P01-T04 | Upstream mock/native-error decisions must be present in the implemented output. | Implementation task | Validate the decisions as approved behavior. | Does not block task readiness. | Resolved |
| All | Figma is Time-bound and no named version/checksum exists. | Source owner / workflow | Reinspect before each task; rebaseline material change. | Stale comparison risk. | Open |

## 11. Source-change Log

| Date | Changed snapshot | Affected tasks | Impact and action | Status |
|---|---|---|---|---|
| 2026-08-14 | `SRC-REPO-001` rechecked as `VER-018` | All | HEAD contained expected workflow output only; frontend remains unchanged from immutable input. | Complete |
| 2026-08-14 | `SRC-DS-001` rechecked as `VER-014` | All | Scoped root/desktop/tablet/mobile/component references unchanged; still Time-bound. | Complete for decomposition; recheck at task starts |
| 2026-08-14 | `SRC-DOC-002` rechecked as `VER-019` | P01-T02/P01-T04 | Starter page remains unchanged and supplies user-approved mock titles/technologies; title-derived alternatives, hero alternative, and CTA behavior are recorded in P01-T02. | Complete |

## 12. Overall Completion Criteria

- [ ] Every canonical task is Complete with required validation Passed and output lineage recorded.
- [ ] Every Must requirement has a validated canonical trace path.
- [ ] Every source/task-start snapshot is current or approvedly rebased.
- [ ] Approved mock content/CTA and browser-native-error decisions are implemented and any later replacement is controlled/revalidated.
- [ ] No critical/high blocker, contact transport, unsupported fallback, or undocumented deviation remains.
- [ ] Final implementation review can begin.

## 13. Index Validation

### Review pass 1 — Completeness and correctness

- [x] Every `PLAN-*` maps to one or more coherent tasks.
- [x] Every task has source references, scope/files, prerequisites, interfaces, states, responsive/accessibility requirements, validation, and acceptance criteria.
- [x] The CLI task registry, validation definitions, and generated projections are current.
- [x] Known owner decisions are recorded as approved mock/native behavior or visible future-change risks, not invented implementation scope.

**Pass 1 result:** Complete after correction. The initial attempted task creation exposed missing canonical `PLAN-*` trace definitions; the requirement → specification → acceptance → plan → task chain was then recorded before task creation. `VER-018` rechecked the frontend and `VER-019` rechecked the approved starter-page mock source. No implementation code was created.

### Review pass 2 — Consistency, traceability, source integrity, risks, and uncertainty

- [x] Must requirements trace through canonical specification/acceptance/plan/task paths.
- [x] Task boundaries avoid overlapping data/contact feature ownership and preserve foundation interfaces.
- [x] Task references use only active snapshots; Figma immutability is not claimed.
- [x] Cross-cutting accessibility/responsive/error/privacy behavior is feature-owned and rechecked by P01-T04.
- [x] Open risks remain visible and prevent affected acceptance from being claimed.

**Pass 2 result:** Consistent after correction. Dependent task lineage now requires the current verified upstream descendant rather than assuming a fixed P01-T01 output order; `AC-020` also traces through `SPEC-INT-003`. Starter-page mock records/alternatives, `#contact`, and browser-native invalid feedback/focus are confirmed user decisions; remaining risks are Figma mutability, browser-native visual variation, and future controlled content replacement.
