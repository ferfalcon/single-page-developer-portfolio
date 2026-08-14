---
artifact: TASK
id: P01-T04
design:
  - SRC-DS-001
repository:
  - SRC-REPO-001
runtime: []
documentation:
  - SRC-DOC-001
  - SRC-DOC-002
assets: []
created: 2026-08-14
updated: 2026-08-14
project: Single-page developer portfolio
profile: Full
execution_mode: Gated
---

# Phase 01 — Task 04: Perform integrated portfolio validation and correction

## 1. Status

`Not started` — it requires completed P01-T02 and P01-T03, current Figma/repository verification, and resolution of their acceptance-specific owner inputs. The CLI task registry is authoritative.

## 2. Objective

Validate the completed Astro page as one integrated static output against the scoped responsive design, local data/asset authority, accessibility/interaction expectations, and no-transport IndexedDB contact boundary. Correct only defects found in the owning implementation modules; do not add scope or conceal upstream omissions.

## 3. Source References

- Source baseline: `SOURCE-BASELINE.md`; `SRC-DS-001`, `SRC-REPO-001`, and approved mock-content source `SRC-DOC-002` (`VER-019`) plus P01-T02/P01-T03 implementation outputs.
- `PLAN.md`: `PLAN-004`; `PLAN-REVIEW.md`: all findings, especially `PLANREV-003`–`PLANREV-005`.
- Requirement IDs: all in-scope `REQ-*`, with Must requirements `REQ-FR-001`–`REQ-FR-005`.
- Specifications/acceptance: `SPEC-BEH-001`–`SPEC-BEH-007`, `SPEC-INT-001`–`SPEC-INT-003`, `SPEC-ACC-001`–`SPEC-ACC-002`, `SPEC-DATA-001`–`SPEC-DATA-002`, `SPEC-VAL-001`–`SPEC-VAL-004`; `AC-014`–`AC-025`.
- Design: `DES-001`–`DES-006`, `DES-RWD-001`–`DES-RWD-004`, `DES-INT-001`–`DES-INT-004`; current scoped source check required.
- Architecture: ADR-001–ADR-004 and `ARCHITECTURE.md` §§17–21.
- Related tasks: requires P01-T02/P01-T03, which already require P01-T01; final implementation review follows this work.

## 4. Snapshot Verification

- Reverify `SRC-DS-001` immediately before validation because it is Time-bound; rebaseline a material Figma difference before comparing/correcting.
- Verify the task-start commit equals the expected, recorded combined output lineage of P01-T02/P01-T03 and descends from `SRC-REPO-001`.
- Classify only declared prior task output as expected; unexpected concurrent/frontend changes stop validation pending reconciliation.

## 5. Prerequisites

- P01-T02 and P01-T03 complete with all declared task validation passed and output lineage recorded.
- Fresh Figma and repository snapshot verification.
- The approved mock JSON table, informative hero alternative, `#contact` CTA, and verified durable asset paths must be present. Browser-native error feedback and native invalid-control focus are the approved contact behavior; no error icon/custom focus decision remains.

## 6. Scope

### Included

- Run the supported build/diff and comprehensive manual visual, responsive, keyboard/accessibility, JSON/asset, IndexedDB/failure/retry, and network/no-transport checks.
- Make narrowly scoped defect fixes in components/styles/scripts/data readers already owned by P01-T01–P01-T03.
- Update task lineage, findings, deviations, and upstream documentation if implementation exposes an error.

### Excluded

- New features, external link URLs, new persistence/data policy, new testing framework, architecture replacement, remote services, generated-workflow edits, or content/asset/focus decisions owned by Fer/content owner.

## 7. Repository Context

The task starts from the completed output of the preceding tasks, not the starter in isolation. The repository supports Astro build and `git diff --check`; it has no configured test/lint/E2E/accessibility suite. Manual browser/devtools checks are therefore required evidence, while unconfigured automation remains unavailable.

## 8. Files and Modules

| Path | Action | State | Responsibility | Evidence |
|---|---|---|---|---|
| Files changed by P01-T01–P01-T03 | Modify only if a finding requires it | Existing/proposed by upstream tasks | Correct owning-module defects. | `PLAN-004` |
| Task/index/upstream documents | Modify when a discovery needs propagation | Existing | Record evidence, lineage, and deviations. | Workflow rules |

No new broad cleanup abstraction, route, framework, backend, or generated workflow file is in scope.

## 9. Dependencies and Interfaces

- Preserve the public/shared interfaces established by upstream tasks unless a validated defect requires a coordinated correction.
- Treat local JSON reader, asset mapping, native form controller, and IndexedDB repository as the authority boundaries; do not bypass them in validation fixes.
- Any material inconsistency in requirements/design/spec/architecture requires the owning artifact update and approval path rather than silent code divergence.

## 10. Implementation Steps

1. Verify all upstream task outputs, current Figma scope, current repository state, and the approved mock/native-error decisions.
2. Run build/diff; serve the page locally for visual, interaction, accessibility, IndexedDB, and network inspection.
3. Compare desktop/tablet/mobile and intermediate widths; validate every static/data/form state and source authority boundary.
4. Make only finding-driven corrections in the owning file; rerun affected checks after every correction.
5. Record findings/deviations/lineage, complete declared checks, commit, and create the task output snapshot.

## 11. State, Responsive, and Accessibility Requirements

### States and errors

- Verify default, hover/focus, card action, form focus, blank/malformed invalid, local success, and local persistence failure/retry states; do not add new states at this stage.
- Missing approved mock JSON or durable asset mapping is an acceptance blocker, not a candidate for a fallback implementation. Browser-native error feedback/focus is an intentional accepted visual deviation.

### Responsive behavior

- Compare source outcomes at 375, 768, and 1440 px; inspect additional narrow/medium/wide widths and long text.
- Expected: no horizontal page overflow, clipping, overlap, reordered reading/tab sequence, or hover-only action.

### Accessibility

- Verify one `h1`, landmarks/headings, image/decoration alternatives, link/action names, visible focus, native form labels/constraints, browser-native invalid feedback, and persistence-status feedback.
- Verify keyboard operation and browser-native invalid-control focus throughout; no custom first-error focus strategy is in scope.

## 12. Validation

### Automated validation

- Build — run the supported production build from `frontend/`. Expected: exactly one static page in `frontend/dist/` with no build error.
- Diff — `git diff --check`. Expected: no whitespace errors.
- Unit/component/E2E/type/lint — Not configured; document as unavailable rather than passed.

### Manual validation

- Visual/responsive: source viewport comparisons and no-overflow checks across extra widths, long labels/titles/messages.
- Keyboard/accessibility: all links/CTAs/card actions/forms; inspect landmarks, focus, names, alternatives, errors, and status.
- Data/assets: compare rendered labels/alts to complete JSON, confirm durable local asset paths and no temporary Figma URLs.
- Contact: blank/malformed prevention; valid IndexedDB write/clear/message; failed storage retain/message/retry; inspect record shape.
- Security/regression: browser network shows no contact transport; no console errors; no regression to source-backed page order/states.

## 13. Acceptance Criteria

- [ ] Every applicable `AC-014`–`AC-025` is checked with observed evidence or explicitly blocked by a documented owner decision.
- [ ] Build/diff pass and all permitted manual checks pass after final corrections.
- [ ] No upstream source conflict, hidden placeholder, contact transport, or unapproved behavior remains concealed.
- [ ] Fresh snapshot verification, output lineage, task/index documentation, discoveries, and deviations are complete.

## 14. Risks and Considerations

| Risk or assumption | Impact | Mitigation or validation |
|---|---|---|
| Approved mock content is later replaced. | Visual/content checks need revalidation. | Treat replacement as a controlled local-content change and rerun P01-T02/P01-T04 checks. |
| Figma may change after upstream implementation. | Comparison could use stale evidence. | Reverify before work and rebaseline material changes. |
| No automated browser test suite exists. | Manual evidence is essential. | Follow the complete manual matrix and retain actual results. |
| Cross-task fixes can blur ownership. | Scope/regression risk. | Fix narrowly in owning modules and update upstream docs when necessary. |

## 15. Implementation Discoveries

No discovery exists yet. Propagate a confirmed documentation/source defect to its owner before masking it in code.

## 16. Deviations

None planned. This task may correct validated defects, not introduce a new feature or decision.

## 17. Output Lineage

- Parent task-start snapshot: combined completed upstream output/current verified descendant, recorded at execution.
- Implementation output snapshot/commit: pending.
- Produced by task: `P01-T04`.
- Approved as next task start: final implementation review pending.

## 18. Definition of Done

- [ ] All applicable acceptance checks have actual evidence and pass; blockers are surfaced, not hidden.
- [ ] Every declared validation passes or is explicitly unavailable/not applicable with evidence.
- [ ] Output lineage, documentation, discoveries, risks, and deviations are current.

## 19. Completion Report

- Files, snapshots, validation, evidence, deviations, and final-review handoff: pending execution.
- Next unblocked work: Stage 11 final implementation review after its human gate.
