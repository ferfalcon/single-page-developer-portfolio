---
artifact: TASK
id: P01-T03
design:
  - SRC-DS-001
repository:
  - SRC-REPO-001
runtime: []
documentation:
  - SRC-DOC-001
assets: []
created: 2026-08-14
updated: 2026-08-14
project: Single-page developer portfolio
profile: Full
execution_mode: Gated
---

# Phase 01 — Task 03: Implement the accessible IndexedDB contact flow

## 1. Status

`Not started` — it requires completed P01-T01 and fresh source/repository verification. The CLI task registry is authoritative.

## 2. Objective

Implement the frontend-only contact form: browser-native constraint-validation errors and native invalid-control focus, accessible labels/status feedback, one browser-local IndexedDB v1 write boundary, reset only after completed local persistence, failure preservation, and retry by resubmission. It must not transport contact data or add alternate persistence.

## 3. Source References

- Source baseline: `SOURCE-BASELINE.md`; `SRC-DS-001` and `SRC-REPO-001`.
- `PLAN.md`: `PLAN-003`; `PLAN-REVIEW.md`: `PLANREV-003`–`PLANREV-005`.
- Requirement IDs: `REQ-FR-001`, `REQ-FR-004`–`REQ-FR-005`, `REQ-BR-003`, `REQ-DR-001`–`REQ-DR-002`, `REQ-AR-001`–`REQ-AR-002`, `REQ-SEC-001`–`REQ-SEC-002`, `REQ-CON-001`, `REQ-CON-004`, and `REQ-CON-007`.
- Specifications/acceptance: `SPEC-BEH-004`–`SPEC-BEH-005`, `SPEC-BEH-007`, `SPEC-INT-003`, `SPEC-ACC-001`–`SPEC-ACC-002`, `SPEC-DATA-001`, `SPEC-VAL-001`–`SPEC-VAL-004`; `AC-015`–`AC-016`, `AC-018`–`AC-022`.
- `DESIGN.md`: `DES-005`, `DES-RWD-004`, and `DES-INT-003`; Figma confirms active/error variants but not persistence success/failure UX.
- Architecture: ADR-003/004; `ARCHITECTURE.md` §§11, 12, 15, 17–19, and 21.
- Related tasks: requires P01-T01; runs independently of P01-T02 after shared interfaces stabilize; enables P01-T04.

## 4. Snapshot Verification

- Reinspect the Figma contact/component states and current scoped frames before implementation; latest `VER-014` is Time-bound evidence only.
- Verify the P01-T01/current commit as an expected, recorded descendant of `SRC-REPO-001`; pause for unexpected frontend/source changes.
- The task's immutable baseline remains `SRC-REPO-001`; actual task-start commit and difference classification are recorded at execution.

## 5. Prerequisites

- P01-T01 complete with its form/shared-feedback styling interface documented.
- Fresh design/repository snapshot verification.
- The approved architecture constraints: browser-only IndexedDB v1, one store, visitor name/email/message plus a generated technical key, no timestamp/extra fields, no server/remote/localStorage fallback, no automatic retry.
- Fer confirmed browser-native error behavior on 2026-08-14: use native constraint-validation error feedback and native invalid-control focus. Do not add a custom error icon, error summary, or focus relocation. This is an intentional user-approved deviation from the source's icon treatment, not an unresolved asset blocker.

## 6. Scope

### Included

- Create semantic `ContactForm.astro`, isolated `contact-store.ts`, and module `contact-form.ts`; wire them into the existing page/shared styles.
- Use native labels, Name/Email/Message fields, types/autocomplete/required constraints, browser-native validation feedback/focus for invalid input, and a programmatic status region for local persistence outcomes.
- Configure the native form for a no-transport local-submit path, invoke IndexedDB only when valid, clear only on transaction completion, and retain values for all persistence failures with retry-by-resubmission.
- Test invalid, valid, failure/retry, keyboard/accessibility, responsive, IndexedDB, and network/no-transport behavior.

### Excluded

- Server/API, remote database, accounts/auth, analytics, queues, service-worker/offline synchronization, localStorage/cookie fallback, automatic retry, loading/disabled behavior, duplicate handling, privacy-copy/lifecycle/export/deletion/encryption claims, and any custom error icon/summary/focus behavior.
- Hero/project data work owned by P01-T02 and global shell work owned by P01-T01.

## 7. Repository Context

`SRC-REPO-001` has no contact component, client script, persistence layer, backend, test/lint tooling, or dependency other than Astro. P01-T01 will add the shared page/style interface. Browser platform IndexedDB and native form APIs are the available implementation boundary; no package addition is planned. Confirmed automated checks remain the Astro production build and `git diff --check`.

## 8. Files and Modules

| Path | Action | State | Responsibility | Evidence |
|---|---|---|---|---|
| `frontend/src/pages/index.astro` | Modify | Existing after P01-T01 | Compose contact section in existing semantic order. | `PLAN-003` |
| `frontend/src/styles/portfolio.css` | Modify | Proposed after P01-T01 | Shared control/focus/error/status primitives only. | P01-T01 interface |
| `frontend/src/components/ContactForm.astro` | Create | Proposed | Native form markup, labels, errors, status, and script hook. | `DES-005`; `SPEC-INT-003` |
| `frontend/src/lib/contact-store.ts` | Create | Proposed | Browser-only IndexedDB v1 open/upgrade/write boundary. | ADR-003 |
| `frontend/src/scripts/contact-form.ts` | Create | Proposed | Valid-submit controller, native validity boundary, persistence-status/reset/failure retry behavior. | ADR-004 |

No custom error-icon asset, error summary, or focus relocation is permitted. No server or storage fallback module is permitted.

## 9. Dependencies and Interfaces

- `ContactForm` exposes stable DOM hooks/data attributes for one client module; it does not contain persistence logic.
- `contact-store` is the only module that opens/upgrades/writes IndexedDB. It resolves only after a successful completed transaction and rejects all failure paths.
- Native constraint validation owns invalid-submit feedback and invalid-control focus. The controller calls the repository only for valid input, then resets/statuses only after repository completion.
- The static form configuration prevents accidental GET/POST transport. Network activity must remain free of contact data.
- P01-T04 consumes behavior/validation evidence, not the right to alter the schema or add recovery features.

## 10. Implementation Steps

1. Verify P01-T01 lineage, Figma scope, repository state, and the user-approved native-error/native-focus decision.
2. Inspect the existing route/styles and confirm no package/server/data boundary has appeared.
3. Add semantic native form markup, intentional no-transport configuration, labels, constraints, browser-native invalid feedback/focus behavior, persistence status, and responsive styling.
4. Implement the narrow IndexedDB v1 adapter, then the browser module that uses native validity and the transaction-completion success boundary.
5. Implement blank/malformed errors, valid local save/clear/message, and unavailable/blocked/failed persistence value preservation/message/resubmission without unapproved fallback.
6. Run declared validation including browser-native invalid behavior, IndexedDB, and network inspection; record the intentional source-icon deviation, then commit and record lineage.

## 11. State, Responsive, and Accessibility Requirements

### States and errors

- Default/focus: labeled controls and visible focus follow the source-supported treatment.
- Invalid: blank fields or malformed Email block storage; browser-native validation exposes the error and keeps focus on the invalid control. No custom icon or focus movement is added.
- Valid submit: one local persistence attempt; only completed transaction clears all three values and exposes a status message.
- Persistence failure: unavailable, blocked, quota/transaction failure keeps all values, exposes an accessible failure status, never reports success, and lets the same send action retry.
- Loading/disabled: Not applicable unless a later approved product decision changes the design; do not add either state.
- JavaScript unavailable: no local persistence path is allowed without violating no-server scope; retain native form semantics but make no unapproved fallback claim.

### Responsive behavior

- Small: one-column, readable/touch-operable controls with source mobile order and no horizontal overflow.
- Intermediate/large: source contact arrangement/spacing remains readable; DOM and tab order do not change.
- Edge cases: long messages and error text wrap without clipping or overlaying controls; status remains perceptible.

### Accessibility

- Semantic structure: form region/heading, `label`-associated controls, appropriate native input types and `autocomplete` values.
- Keyboard/focus: native tab/submit flow works and browser-native validation keeps its normal invalid-control focus. Do not move focus beyond native behavior.
- Relationships: controls retain explicit labels and native constraints; validation feedback is browser-native rather than custom field-error markup. Persistence success/failure remains in a separate status region.
- Announcements: one status region exposes local save success/failure without falsely announcing invalid-submit persistence.
- Reflow/touch: maintain usable targets/reflow and source reading order at 375/768/1440 px.

## 12. Validation

### Automated validation

- Build — in `frontend/`, run `pnpm build` or the local Astro fallback. Expected: production static page builds successfully.
- Diff — `git diff --check`. Expected: no whitespace errors.
- Unit/component/E2E/type/lint — Not configured at task start; do not claim.

### Manual validation

- Invalid cases: submit each blank required field and malformed email; expected browser-native validation feedback/focus and zero IndexedDB records.
- Success: submit valid values; expected one record with name/email/message and technical key only, cleared fields only after completion, accessible success status, no remote contact transport.
- Failure/retry: simulate unavailable/blocked/failed IndexedDB; expected retained values, accessible failure, no false success/no fallback, and successful reattempt when available.
- Accessibility/interaction: keyboard traverse controls/errors/status, inspect associations/visible focus; verify only approved/native focus behavior.
- Responsive/visual: compare contact states/arrangement against 1440/768/375 and check long content/no overflow.
- Security/regression: inspect network activity and source for contact data transport/logging; page foundation and project work remain unaffected.

## 13. Acceptance Criteria

- [ ] `AC-018` and `AC-019` invalid inputs prevent storage and show the approved browser-native validation feedback/focus.
- [ ] `AC-020` valid values persist only to IndexedDB, then clear and expose an accessible message after completed transaction.
- [ ] `AC-021` every local persistence failure preserves values, announces failure, has no fallback/false success, and retries by resubmission.
- [ ] `AC-022` contact controls/errors/status are keyboard and assistive-technology accessible.
- [ ] `AC-015`/`AC-016` responsive/focus states avoid overflow and pointer dependence.
- [ ] Fresh snapshots, declared validation, output lineage, and task/index documentation are complete.

## 14. Risks and Considerations

| Risk or assumption | Impact | Mitigation or validation |
|---|---|---|
| User data never leaves the visitor browser. | Portfolio owner cannot receive submissions in current scope. | Confirmed user constraint; do not add remote path. |
| Browser-specific IndexedDB failures occur. | Form must recover without false success. | Explicit simulated failure/retry validation. |
| Browser-native errors differ visually by browser and from Figma's icon treatment. | Pixel parity for invalid-field feedback is intentionally limited. | Fer approved native errors/focus; validate browser-native behavior, not a custom icon. |
| Lifecycle/privacy policy is absent. | Data-management claims could be misleading. | Store only specified values/key; add no retention/export/deletion/privacy claims. |

## 15. Implementation Discoveries

- `DISC-P01-T03-001`: Fresh Figma reinspection of desktop `7:687`, tablet `7:226`, and mobile `7:3` found no material drift in the contact composition, responsive desktop/stacked layouts, fields, send action, or illustrated field states (`VER-024`). The task began at clean expected descendant `9ec41c968d74d32a149b48cbc047dcf3d74e56ec` (`VER-025`).
- `DISC-P01-T03-002`: `ContactForm.astro` can retain native semantic controls and validation while `method="dialog"` plus the module submit listener prevents contact transport. The controller invokes its sole IndexedDB boundary only after a valid native submission; it clears only after the transaction completes.
- `DISC-P01-T03-003`: The adapter uses one version-1 `portfolio-contact` database and one `contact-entries` store. Records contain a generated technical `id` plus Name, Email, and Message only; no timestamp, analytics, fallback store, transport, or console logging path was introduced.
- `DISC-P01-T03-004`: Headless Chrome checks covered blank and malformed invalid submissions, successful local persistence, an unavailable-IndexedDB failure/retry path, form keyboard traversal, 375/768/1440 px reflow, network activity, and console output. The checks observed no invalid writes, correct local record shape, clear-on-success/preserve-on-failure behavior, no submit-time request, no console error, visible keyboard focus, and no horizontal overflow.

## 16. Deviations

User-approved deviation: browser-native validation errors and native invalid-control focus replace the source error icon/custom error UI. Native invalid feedback is supplemented only by the standard browser presentation and an accent/error divider treatment; no custom field-error text, icon, summary, or focus relocation was added. Any alternative storage, remote transport, extra data, retry mechanism, dependency, custom error icon/summary, or custom focus behavior requires explicit approval.

## 17. Output Lineage

- Parent task-start snapshot: the current verified committed descendant after P01-T01 (and any previously completed sibling task), recorded at execution.
- Implementation output snapshot/commit: pending.
- Produced by task: `P01-T03`.
- Approved as next task start: pending successful completion/validation.

## 18. Definition of Done

- [ ] The contact objective and all stated acceptance criteria pass.
- [ ] Required source/repository verification and output lineage are recorded.
- [ ] No contact data transport, fallback, or unapproved state/focus behavior is introduced.
- [ ] Task/index documentation and remaining visual/focus risk records are updated.

## 19. Completion Report

- Files, input/output snapshots, behavior, validation, deviations, and risks: pending execution.
- Next unblocked task: `P01-T04` after P01-T02 also completes.
