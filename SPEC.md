---
artifact: SPEC
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

# Specification

## 1. Document Information

- Scope: Observable behavior of the approved single-page developer portfolio, including its visible actions, responsive behavior, accessibility, and frontend-only contact submission.
- Last updated: 2026-08-14.
- Source baseline: `SOURCE-BASELINE.md`; active inputs are `SRC-DS-001` and `SRC-REPO-001`.
- Related requirements: `REQUIREMENTS.md`.
- Related design intent: `DESIGN.md`.
- Current implementation: the pinned application baseline is an Astro starter; this specification defines target behavior, not current behavior.

## 2. Purpose and Scope

### Included

- The one continuous identity/social, hero, skills, projects, contact, and footer experience.
- Source-demonstrated responsive layouts, visible interactive states, and content patterns.
- Literal `#` destinations for unavailable social, project, and code links.
- Contact validation for blank fields and malformed email, visible/programmatic field feedback, and browser-local IndexedDB persistence.
- Frontend-local JSON content for project technology labels and image alternative text.
- Keyboard, focus, label, image-alternative, and overflow expectations.

### Excluded

- Other public routes, authentication, remote API/database/contact delivery, analytics, deployment, or Figma-file updates.
- Real external destinations until supplied, a detailed IndexedDB schema/versioning/migration strategy, retention/deletion/export, privacy policy, performance threshold, and browser-support matrix.
- Final project technology labels, final portrait/project-image alternatives, and the source/ownership implied by “dynamic” content until clarified below.

## 3. Terminology

| Term | Definition |
|---|---|
| Contact entry | The three visitor-entered values corresponding to Name, Email, and Message. |
| Valid contact entry | An entry with no blank required field and an email address in a valid email format. Whitespace-only treatment is not yet specified. |
| Local submission | An attempt to persist a valid contact entry in the browser’s IndexedDB; it sends no data to a remote system. |
| Successful local submission | A local submission whose IndexedDB write completes; it clears the three fields and exposes a confirmation message. |
| Failed local submission | A local submission whose IndexedDB write cannot complete; it preserves field values, exposes a failure message, and can be retried by resubmitting. |
| Local content data | A frontend-local JSON data source that supplies project technology labels and image alternative text without a remote request. |
| Placeholder link | A social, project, or code action whose literal destination is `#` until a real destination is supplied. |
| Source viewport | One supplied Figma composition: desktop 1440 px, tablet 768 px, or mobile 375 px. These are comparison conditions, not prescribed breakpoint values. |
| Source-visible error | The Figma error treatment: coral divider, error icon, and visible caption in addition to an accessible text relationship. |

## 4. Behavioral Specifications

### SPEC-BEH-001 — Render the complete continuous portfolio

- **Requirement references:** `REQ-FR-001`, `REQ-NFR-001`.
- **Design references:** `DES-001`, `DES-002`, `DES-RWD-001`.
- **Source snapshots:** `SRC-DS-001`.
- **Required behavior:** At each source viewport, the page exposes identity/social, hero, six skills, six projects, contact, and footer in the observed order. Components and Design System reference canvases do not become website routes.
- **Applicable states:** Default page composition at desktop, tablet, and mobile.
- **Acceptance criteria:** `AC-001`, `AC-010`, `AC-014`, `AC-015`.

### SPEC-BEH-002 — Render the observed repeated collections without silently resolving conflicts

- **Requirement references:** `REQ-FR-002`, `REQ-BR-002`.
- **Design references:** `DES-004`, `DES-006`, `DES-RWD-003`.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **Required behavior:** Render six skill entries and six project cards with media, title, technology labels, and project/code action labels. Project technology labels are supplied from approved frontend-local JSON content. The values in that data become the final content authority for Todo, Entertainment, Memory, and Art Gallery; neither conflicting source list is silently hard-coded as an alternative authority.
- **Applicable states:** Default/hover/focus card presentations appropriate to the source viewport.
- **Acceptance criteria:** `AC-002`, `AC-012`, `AC-025`.

### SPEC-BEH-003 — Provide only approved placeholder external destinations

- **Requirement references:** `REQ-FR-003`, `REQ-BR-001`, `REQ-CON-006`.
- **Design references:** `DES-004`, `DES-006`, `DES-INT-004`.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **Required behavior:** Every unresolved social, project, and code action has literal destination `#`; no URL is derived from content, brand, or external search. `CONTACT ME` is visibly present, but its target behavior remains open because no source demonstrates it.
- **Applicable states:** Default, hover, focus; no final external-navigation state is specified.
- **Acceptance criteria:** `AC-003`, `AC-006`, `AC-017`.

### SPEC-BEH-004 — Validate contact entries before local persistence

- **Requirement references:** `REQ-FR-004`, `REQ-AR-002`.
- **Design references:** `DES-005`, `DES-INT-003`.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **Required behavior:** Submitting a contact entry with a blank Name, Email, or Message, or an incorrectly formatted Email, produces field-specific error feedback and does not create a local submission. The root repository brief explicitly requires errors for empty fields and incorrect email format; Figma supplies the field-error visual pattern.
- **Applicable states:** Default, active/focus, and error. A combined blank-and-malformed-email submission may show every applicable field error; error prioritization is not prescribed.
- **Acceptance criteria:** `AC-004`, `AC-007`, `AC-018`, `AC-019`.

### SPEC-BEH-005 — Persist valid contact entries locally and never remotely

- **Requirement references:** `REQ-FR-005`, `REQ-DR-001`, `REQ-DR-002`, `REQ-SEC-001`.
- **Design references:** `DES-005`, `DES-INT-004`.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **Required behavior:** When Name, Email, and Message are valid, a local submission persists those three visitor-provided values in IndexedDB. Only after that write succeeds, clear the three fields and expose a confirmation message. The flow must not submit these values or saved entries to an endpoint, third-party service, analytics collector, or remote database.
- **Applicable states:** Valid pre-submit, persisted-success, and local-persistence failure.
- **Acceptance criteria:** `AC-005`, `AC-013`, `AC-020`, `AC-021`.

### SPEC-BEH-006 — Preserve observable source interaction states

- **Requirement references:** `REQ-FR-003`, `REQ-FR-004`, `REQ-AR-001`, `REQ-AR-002`.
- **Design references:** `DES-003`, `DES-004`, `DES-INT-001`–`DES-INT-003`.
- **Source snapshots:** `SRC-DS-001`.
- **Required behavior:** Text CTAs and social icons expose source-consistent accent hover/focus treatment. Desktop project-card hover/focus exposes the dark media overlay and actions. Tablet/mobile project actions remain visibly available. Active fields use the accent divider; error fields use the source-visible error treatment plus accessible error text.
- **Applicable states:** Default, hover, focus, active, error. Loading, disabled, selected, and success visual states are not supplied.
- **Acceptance criteria:** `AC-003`, `AC-004`, `AC-007`, `AC-008`, `AC-016`.

## 5. Interaction Specifications

### SPEC-INT-001 — Operate visible links and CTAs

- **Source snapshots and evidence:** `SRC-DS-001`; `EVD-007`, `EVD-008`; `REQ-AR-001`.
- **Trigger:** Pointer activation or keyboard activation of a social, project, code, or text CTA action.
- **Preconditions:** The action is enabled and reachable in the page reading order.
- **Result:** Social/project/code actions use their confirmed literal `#` destination. `CONTACT ME` target behavior is not specified; it must not be tested as a scroll/navigation contract until resolved.
- **Keyboard behavior:** Every action is reachable by sequential keyboard navigation and may be activated using its native control behavior.
- **Focus behavior:** Focus remains visibly apparent using the accent source treatment. No modal, menu, focus trap, or focus relocation is specified.
- **Closing or cancellation behavior:** Not applicable; no transient overlay/dialog is specified.
- **Accessible state and relationships:** Each action has an accessible name matching its visible label or the destination it represents; icon-only social actions need an accessible name.
- **Failure behavior:** A `#` destination is an approved temporary condition, not a derived real destination. Final external navigation is deferred to `Q-002`.

### SPEC-INT-002 — Expose project actions on hover and keyboard focus without pointer dependence

- **Source snapshots and evidence:** `SRC-DS-001`; `EVD-007`; `REQ-AR-001`.
- **Trigger:** Pointer hover or keyboard focus within a desktop project-card action area; passive viewing on tablet/mobile.
- **Preconditions:** A project card is present at its source-appropriate viewport presentation.
- **Result:** Desktop shows the 75%-black media overlay with project/code actions; tablet/mobile retain visible actions outside the overlay.
- **Keyboard behavior:** Project actions are separately reachable by keyboard, including desktop overlay actions.
- **Focus behavior:** Keyboard focus makes the source’s focus/overlay affordance visible; focus must not rely on pointer hover.
- **Closing or cancellation behavior:** Removing pointer hover or moving focus away restores default visual card state.
- **Accessible state and relationships:** Project title, media alternative treatment, and each action remain understandable in context.
- **Failure behavior:** Real destinations remain literal `#` until supplied.

### SPEC-INT-003 — Submit the contact entry locally

- **Source snapshots and evidence:** `SRC-DS-001`, `SRC-REPO-001`; `EVD-006`; root `README.md`; `REQ-FR-004`, `REQ-FR-005`.
- **Trigger:** Visitor activates `SEND MESSAGE` after entering field values.
- **Preconditions:** Name, Email, and Message controls are present and associated labels are available.
- **Result:** Invalid entries follow `SPEC-VAL-001`/`SPEC-VAL-002`. A valid entry follows `SPEC-DATA-001` and `SPEC-VAL-003`.
- **Keyboard behavior:** The send control is reachable and native keyboard activation submits the form interaction.
- **Focus behavior:** Native control focus remains visible. Error-focus movement is not specified; the first-error focus strategy must be decided before accessibility acceptance.
- **Closing or cancellation behavior:** No dialog or cancellation state is supplied.
- **Accessible state and relationships:** Each error is associated with its invalid control and is programmatically available in addition to the source-visible error treatment.
- **Failure behavior:** No remote fallback is permitted. A failed local write preserves the visitor’s entered values, exposes an accessible failure message, and is retried by activating the same send control after the failure condition is resolved.

## 6. Responsive Specifications

### SPEC-BEH-007 — Match supplied responsive compositions and prevent overflow

- **Design snapshot and evidence:** `SRC-DS-001`; `EVD-001`–`EVD-003`, `EVD-009`; `REQ-NFR-001`.
- **Fixed versus fluid behavior:** The three source viewports are validation conditions. Content regions, grid columns, portrait placement, and contact layout may adapt fluidly; source canvas widths are not mandatory CSS breakpoints.
- **Wrapping, stacking, reordering, hiding, or replacement:** Skills are 3/2/1 columns at supplied desktop/tablet/mobile; projects are 2/2/1 columns; the contact intro/form is horizontal/stacked/stacked; mobile places portrait before centered hero copy and stacks identity. No source content group is hidden or replaced.
- **Content-driven transition condition:** Before readable content would overlap, clip, or create horizontal page overflow, the layout must wrap or stack while preserving content order and action access.
- **Very narrow and very wide behavior:** At narrow, medium, and wide manual checks, there is no horizontal page overflow. Very wide space may expand surrounding layout but must not change the supplied content order or make core content unreadable. No exact min/max width is asserted.
- **Acceptance criteria:** `AC-010`, `AC-015`.

## 7. State and Content Specifications

| Area | Default | Hover / focus / active | Error | Success / loading / disabled | Long, missing, or partial content |
|---|---|---|---|---|---|
| Social/CTA actions | Visible text/icon and accent underline for CTAs | Accent label/icon with visible focus | N/A | No disabled/loading state supplied | Literal `#` destination is allowed until real URLs exist. |
| Desktop project card | Media, title, labels, action context | Overlay/actions shown on hover/focus | N/A | No disabled/loading state supplied | Technology labels come from local content data; actions remain keyboard reachable. |
| Tablet/mobile project card | Compact media/title/labels/actions | Component variants exist; actions remain visible | N/A | No disabled/loading state supplied | One-column mobile list retains all cards. |
| Contact fields | Label plus divider | Accent active/focus divider | Divider, icon, and visible associated error text | After successful local persistence, clear Name, Email, and Message; no loading state is supplied | Long input, whitespace-only input, and missing optional data behavior are unspecified. |
| Contact submission | Unsubmitted form | Native submit action | Invalid input does not persist | Successful persistence exposes confirmation; failed persistence exposes failure message and preserves values for resubmission | No remote request/partial remote state exists in scope. |
| Images | Source-backed media/decoration | N/A | N/A | Failed-asset fallback not supplied | Project alternatives come from local content data; hero portrait treatment is required before acceptance; rings/circle remain inferred decoration. |

## 8. Accessibility Specifications

### SPEC-ACC-001 — Preserve semantic page structure and reading order

- **Source snapshot, requirement, or standard:** `SRC-REPO-001` repository guidance; `REQ-FR-001`, `REQ-AR-001`; `DES-001`, `DES-002`.
- **Semantic structure:** One clear page-level `h1` represents the primary hero introduction. The major skills, projects, and contact regions have meaningful section headings. Header, main, `#projects`, `#contact`, and footer are semantic page regions as directed by repository guidance.
- **Accessible name and relationships:** Icon-only social actions have accessible names. Project actions identify their purpose in project context. Each project image’s alternative treatment is supplied by local content data; decorative assets are deliberately marked as such. The hero portrait alternative remains a content value to be supplied before acceptance.
- **Keyboard operation:** The sequential reading/focus order follows the visible content order; all interactive actions and form controls are operable without a pointer.
- **Focus order and visibility:** Visible focus is retained for social actions, CTAs, project actions, and contact controls. No unsupported focus trap or modal behavior is added.
- **Status or error announcements:** Field errors are programmatically associated with their controls. Successful and failed local submissions expose their respective messages programmatically as status feedback.
- **Reflow, contrast, touch target, or reduced-motion behavior:** Source comparisons and manual narrow/medium/wide checks must show no horizontal overflow. Figma’s accent/error colors require non-color cues. Exact contrast/touch/reduced-motion metrics are not supplied and are not invented here.
- **Requirement reference:** `REQ-AR-001`, `REQ-AR-003`.

### SPEC-ACC-002 — Provide labeled, accessible contact validation feedback

- **Source snapshot, requirement, or standard:** `SRC-DS-001`; `EVD-006`; `SRC-REPO-001` root brief and repository guidance; `REQ-AR-002`.
- **Semantic structure:** Name and Email are single-line controls; Message is a multiline control. Each has an associated visible/programmatic label; visual placeholder-like labels alone are insufficient.
- **Accessible name and relationships:** Each invalid field exposes a text error associated with the field. Error text identifies the relevant condition and is present with the source-visible divider/icon treatment.
- **Keyboard operation:** A keyboard user can reach each field and send control, enter values, submit, correct the fields, and resubmit.
- **Focus order and visibility:** Native field focus is visible. Whether invalid submission moves focus to a summary or first error remains open; do not claim it until approved.
- **Status or error announcements:** Field errors and successful/failed local-submission messages are programmatically available.
- **Reflow, contrast, touch target, or reduced-motion behavior:** Error comprehension must not depend on coral color alone; field and action access remain intact at supplied widths and no-overflow checks.
- **Requirement reference:** `REQ-AR-002`, `REQ-FR-004`.

## 9. Data and Interface Specifications

### SPEC-DATA-001 — Define the conceptual browser-local contact entry

- **Source documentation snapshot:** `SRC-REPO-001` (root `README.md` and repository guidance); user decision dated 2026-08-14.
- **Inputs:** Visitor-provided Name, Email, and Message values.
- **Outputs:** On a valid local submission, one IndexedDB-stored contact entry containing the three corresponding visitor-provided values; no remote request/output.
- **Required and optional fields:** Name, Email, and Message are required for submission. No optional contact field is specified. Record ID, timestamps, schema version, and migration metadata belong to architecture and remain open.
- **Defaults:** No default field values or prefilled contact data are specified.
- **Validation ownership:** Blank-field and email-format conditions are specified in `SPEC-VAL-001` and `SPEC-VAL-002`. Whitespace normalization is open.
- **Persistence or synchronization:** IndexedDB only; no synchronization, account association, analytics, endpoint, or remote database.
- **Error conditions:** Invalid fields do not persist. If IndexedDB is unavailable, blocked, quota-limited, or otherwise fails, no success is reported, entered values remain available, an accessible failure message appears, and the visitor can retry by resubmitting. Architecture still owns the storage representation/versioning.

### SPEC-DATA-002 — Define frontend-local project content metadata

- **Source documentation snapshot:** User decision dated 2026-08-14; `SRC-DS-001`, `SRC-REPO-001` supply the observed project content and its conflict.
- **Inputs:** A frontend-local JSON data source for the six project technology-label collections and project-image alternative treatments; it does not require a remote request.
- **Outputs:** Each project card receives its technology-label collection and image-alternative treatment from its corresponding local content record. The hero portrait alternative is also supplied as local content metadata if the portrait is informative. Titles, media references, and action labels remain governed by their existing source-backed content scope.
- **Required and optional fields:** Each local project-content record requires a stable project identity, technology-label collection, and deliberate image-alternative treatment. The exact JSON property names, file path, schema version, and parser/loading mechanism belong to architecture and implementation planning.
- **Defaults:** No fallback to a guessed technology label or image alternative is permitted. Decorative rings/circle have deliberate decorative treatment rather than generated descriptive content.
- **Validation ownership:** Before content/accessibility acceptance, every rendered project record must have the required values and the selected alternative treatment. Architecture owns JSON validation strategy.
- **Persistence or synchronization:** The data source is local to the frontend and has no remote synchronization or service dependency.
- **Error conditions:** Missing, malformed, or incomplete local content data must not silently substitute conflicting Figma/starter values; the resulting card/content acceptance is blocked until corrected.

## 10. Validation and Error Specifications

### SPEC-VAL-001 — Reject blank required contact fields

- **Condition:** A submit is attempted while Name, Email, or Message has no entered value.
- **Prevented or permitted action:** Prevent the local submission; do not create an IndexedDB entry.
- **User feedback:** Mark each blank required field in error with visible, field-specific text explaining the required condition, plus the source-visible error cue.
- **Programmatic relationship or announcement:** Associate each error text with its invalid control; error meaning is not conveyed by divider color/icon alone.
- **Recovery:** Visitor enters a value, resubmits, and the corrected field no longer has this error. Whitespace-only handling is not specified.

### SPEC-VAL-002 — Reject malformed email format

- **Condition:** A submit is attempted with an Email value not formatted as a valid email address. The Figma sample `FREDRICK#EXAMPLE.COM` is an observed invalid example.
- **Prevented or permitted action:** Prevent the local submission; do not create an IndexedDB entry.
- **User feedback:** Mark Email with the source-visible error treatment and text identifying the email-format condition. The Figma component’s sample caption is `Sorry, invalid format here`; exact final copy is not otherwise mandated.
- **Programmatic relationship or announcement:** Associate the error text with Email and expose its invalid state programmatically.
- **Recovery:** Visitor corrects Email and resubmits; a valid format no longer receives this error.

### SPEC-VAL-003 — Accept a valid local submission

- **Condition:** Name, Email, and Message have values and Email is valid under `SPEC-VAL-002`.
- **Prevented or permitted action:** Permit one local submission attempt and persist the entry only in IndexedDB.
- **User feedback:** Clear Name, Email, and Message only after verified local persistence, then expose a confirmation message. Exact confirmation copy is not prescribed.
- **Programmatic relationship or announcement:** Expose the confirmation message programmatically as status feedback.
- **Recovery:** A subsequent new entry may be submitted. Duplicate-detection rules are not specified.

### SPEC-VAL-004 — Handle unavailable local persistence

- **Condition:** IndexedDB is unavailable, blocked, quota-limited, or fails while persisting a valid entry.
- **Prevented or permitted action:** Do not report local submission success and do not fall back to remote transmission.
- **User feedback:** Preserve Name, Email, and Message and expose a failure message. Exact copy is not prescribed.
- **Programmatic relationship or announcement:** Expose the failure message programmatically as status feedback.
- **Recovery:** The visitor can retry by resubmitting the retained values. No remote fallback or alternate persistence store is permitted.

## 11. Non-functional Behavior

- **Application boundary:** The target remains the existing Astro application; no second root app, framework, or build layer (`REQ-CON-001`, `REQ-NFR-002`).
- **Responsive quality:** Validate source viewports and narrow/medium/wide no-overflow conditions (`REQ-NFR-001`, `SPEC-BEH-007`).
- **Assets:** Later integration uses durable verified assets, never temporary Figma MCP URLs (`REQ-NFR-003`, `AC-011`).
- **Security/privacy:** Contact data remains local; no remote transmission. No retention, encryption, privacy-policy, or browser-support claim is asserted (`REQ-SEC-001`, `REQ-SEC-002`).
- **Validation readiness:** Production build, `git diff --check`, and documented manual keyboard/accessibility checks are required later; no new threshold or automated test tool is specified.

## 12. Acceptance Criteria

Existing requirement-owned `AC-001`–`AC-013` remain applicable. These additional specification-owned criteria make the current behavior testable without redefining them.

### AC-014 — Complete composition at source viewports

- **Given:** The portfolio is opened at 1440, 768, and 375 px viewport widths.
- **When:** Each composition is inspected.
- **Then:** Identity/social, hero, six skills, six projects, contact, and footer are present in source-backed order; Components and Design System are not public routes.
- **Requirement or specification references:** `REQ-FR-001`, `SPEC-BEH-001`.
- **Source snapshots:** `SRC-DS-001`.
- **Validation method:** Visual comparison at the three source viewport conditions.

### AC-015 — Responsive content stays accessible without horizontal page overflow

- **Given:** The page is inspected at source widths and additional narrow, medium, and wide widths.
- **When:** Layout space becomes insufficient for the current composition.
- **Then:** Content wraps/stacks before overlap, clipping, or horizontal page overflow; source-confirmed grid/contact/hero transformations are preserved at the three source widths.
- **Requirement or specification references:** `REQ-NFR-001`, `SPEC-BEH-007`.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **Validation method:** Manual responsive inspection and overflow check.

### AC-016 — Source interaction and keyboard focus states are observable

- **Given:** A social action, CTA, desktop project card, or contact field receives pointer hover or keyboard focus as applicable.
- **When:** Its supplied state is activated.
- **Then:** The source-consistent accent/overlay/active treatment is visible, and keyboard focus remains apparent without relying on pointer hover.
- **Requirement or specification references:** `REQ-AR-001`, `SPEC-BEH-006`, `SPEC-INT-001`, `SPEC-INT-002`.
- **Source snapshots:** `SRC-DS-001`.
- **Validation method:** Manual pointer and keyboard traversal at each relevant source viewport.

### AC-017 — Unresolved external destinations remain literal placeholders

- **Given:** Real social, project, and code URLs have not been supplied.
- **When:** Each corresponding action is inspected.
- **Then:** Its literal destination is `#`; no inferred or researched URL is present.
- **Requirement or specification references:** `REQ-BR-001`, `SPEC-BEH-003`.
- **Source snapshots:** `SRC-REPO-001`.
- **Validation method:** Inspect rendered link destinations/source values.

### AC-018 — Blank contact fields block local submission

- **Given:** At least one of Name, Email, or Message is blank.
- **When:** `SEND MESSAGE` is activated.
- **Then:** Every blank required field has visible, associated, programmatically available error feedback, and no IndexedDB contact entry is created.
- **Requirement or specification references:** `REQ-FR-004`, `REQ-AR-002`, `SPEC-VAL-001`.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **Validation method:** Submit blank-field combinations and inspect feedback plus IndexedDB state.

### AC-019 — Malformed email blocks local submission

- **Given:** Name and Message have values and Email is malformed, including the observed `FREDRICK#EXAMPLE.COM` example.
- **When:** `SEND MESSAGE` is activated.
- **Then:** Email receives visible, associated, programmatically available format feedback, and no IndexedDB contact entry is created.
- **Requirement or specification references:** `REQ-FR-004`, `REQ-AR-002`, `SPEC-VAL-002`.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **Validation method:** Submit malformed-email cases and inspect feedback plus IndexedDB state.

### AC-020 — Valid contact entry persists only locally

- **Given:** Name, Email, and Message have valid values.
- **When:** `SEND MESSAGE` is activated.
- **Then:** One IndexedDB entry contains the corresponding three visitor-provided values; no contact values are transmitted to a remote destination; the fields clear; and an accessible confirmation message is exposed.
- **Requirement or specification references:** `REQ-FR-005`, `REQ-DR-001`, `REQ-SEC-001`, `SPEC-BEH-005`, `SPEC-DATA-001`.
- **Source snapshots:** `SRC-REPO-001`.
- **Validation method:** Inspect IndexedDB after submission and browser network activity during the submission.

### AC-021 — Local-persistence failure preserves retryable input

- **Given:** IndexedDB cannot persist a valid entry.
- **When:** Local submission is attempted.
- **Then:** No remote fallback or false success is allowed; the entered values remain available; an accessible failure message is exposed; and the same send action can retry the local submission.
- **Requirement or specification references:** `REQ-CON-004`, `REQ-SEC-001`, `SPEC-VAL-004`.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **Validation method:** Simulate unavailable/blocked/failed IndexedDB persistence and inspect retained values, message exposure, network activity, and retry behavior.

### AC-022 — Contact controls remain accessible to keyboard and assistive technology

- **Given:** A keyboard or assistive-technology user traverses the contact section.
- **When:** They reach labels, controls, send action, or field errors.
- **Then:** Controls have associated labels, the sequence follows the visible reading order, focus is visible, and each error is available in non-color visual text and programmatic association.
- **Requirement or specification references:** `REQ-AR-001`, `REQ-AR-002`, `SPEC-ACC-001`, `SPEC-ACC-002`.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **Validation method:** Manual keyboard traversal and accessibility-tree/assistive-technology inspection.

### AC-023 — Image alternative treatments are intentional

- **Given:** Final portrait, project-image, ring, and circle assets are integrated.
- **When:** Their accessible alternatives are inspected.
- **Then:** Every project image has a meaningful alternative or deliberate decorative treatment supplied by its local content record; rings/circle are excluded only when still decorative; and the hero portrait receives its approved treatment.
- **Requirement or specification references:** `REQ-AR-003`, `SPEC-ACC-001`, `SPEC-DATA-002`.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **Validation method:** Inspect local content values and rendered alternatives.

### AC-024 — Integrated assets are durable and source-mapped

- **Given:** A source asset is integrated into the application.
- **When:** Its origin and rendered use are checked.
- **Then:** It maps to a verified durable local/approved asset and never to a temporary Figma MCP URL.
- **Requirement or specification references:** `REQ-NFR-003`, `SPEC-BEH-006`.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **Validation method:** Asset-path/source review and visual comparison.

### AC-025 — Conflicting project technology labels require explicit resolution

- **Given:** The four project cards with conflicting Figma and starter-code labels are ready for content acceptance.
- **When:** Their labels are inspected.
- **Then:** Each uses the technology-label collection from its corresponding frontend-local JSON record; no Figma/starter value is silently substituted.
- **Requirement or specification references:** `REQ-FR-002`, `REQ-BR-002`, `SPEC-BEH-002`, `SPEC-DATA-002`.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **Validation method:** Compare rendered labels against the local content records.

## 13. Assumptions, Risks, and Open Questions

### Assumptions

- **Confirmed:** `#` is the temporary destination for unavailable external actions; browser-local IndexedDB is the only allowed contact persistence boundary.
- **Observed:** The root repository brief requires errors for empty fields and incorrectly formatted email; Figma supplies visual error/focus examples.
- **Inferred:** `CONTACT ME` relates to the contact section, but no scroll/navigation target is demonstrated.
- **Confirmed user decision:** A successful local IndexedDB write clears the fields and exposes a message. A failed local write preserves values, exposes a message, and is retried by resubmission.
- **Confirmed user decision:** Project technology labels and image alternatives are dynamic frontend content supplied by a local JSON data source, not a remote source.

### Risks

| Risk | Impact | Mitigation | Status |
|---|---|---|---|
| IndexedDB unavailable/fails without source UX | Error recovery must remain local and accessible. | User-approved message/preserve/resubmit behavior; architecture defines representation/failure handling. | Managed |
| Local content metadata is incomplete or malformed | Final card content or alternatives could be missing/incorrect. | Require complete local records and block silent fallback. | Blocking content/accessibility acceptance |
| Figma is Time-bound | Visual target may drift. | Reverify/rebaseline before later gates and implementation. | Open |

### Blocking questions

- `Q-001`: What IndexedDB schema, versioning/migration, retention/deletion/export, data-sensitivity, and privacy-notice conditions apply? Architecture owns these details; user-visible success/failure/retry behavior is resolved.
- `Q-003`/`Q-004`: Resolved delivery boundary: technology labels and image alternatives are supplied from frontend-local JSON content. The actual content values and hero portrait treatment must be present in those records before `AC-023` and `AC-025` can pass; no remote content service is in scope.

### Non-blocking questions

- `Q-002`: What real URLs will replace `#`? Required before final external-link acceptance, not placeholder implementation.
- `Q-005`: What responsive behavior is preferred beyond the source widths? The no-overflow outcome is specified; exact breakpoints remain implementation decisions.
- `Q-006`: What durable approved asset supplies the field-error icon? Required for exact visual parity.

## 14. Traceability

| Specification | Snapshot | Requirement | Design evidence or decision | Acceptance criteria | Validation |
|---|---|---|---|---|---|
| `SPEC-BEH-001` | `SRC-DS-001` | `REQ-FR-001`, `REQ-NFR-001` | `DES-001`, `DES-RWD-001` | `AC-014`, `AC-015` | Source-viewport visual inspection |
| `SPEC-BEH-002` | `SRC-DS-001`, `SRC-REPO-001` | `REQ-FR-002`, `REQ-BR-002` | `DES-004`, `DES-006` | `AC-025` | Approved label comparison |
| `SPEC-BEH-003` | `SRC-DS-001`, `SRC-REPO-001` | `REQ-FR-003`, `REQ-BR-001` | `DES-INT-004`, user decision | `AC-017` | Link-destination inspection |
| `SPEC-BEH-004` | `SRC-DS-001`, `SRC-REPO-001` | `REQ-FR-004`, `REQ-AR-002` | `DES-005`, `DES-INT-003` | `AC-018`, `AC-019`, `AC-022` | Invalid submission checks |
| `SPEC-BEH-005`, `SPEC-DATA-001` | `SRC-REPO-001` | `REQ-FR-005`, `REQ-DR-001`, `REQ-SEC-001` | `DES-005`, user decision | `AC-020`, `AC-021` | IndexedDB/network checks |
| `SPEC-DATA-002` | `SRC-DS-001`, `SRC-REPO-001` | `REQ-FR-002`, `REQ-AR-003` | user decision, `DES-006` | `AC-023`, `AC-025` | Local-content/rendered-value comparison |
| `SPEC-BEH-006`, `SPEC-INT-001`, `SPEC-INT-002` | `SRC-DS-001` | `REQ-AR-001` | `DES-INT-001`–`DES-INT-003` | `AC-016`, `AC-022` | Pointer/keyboard checks |
| `SPEC-BEH-007` | `SRC-DS-001`, `SRC-REPO-001` | `REQ-NFR-001` | `DES-RWD-001`–`DES-RWD-004` | `AC-015` | Responsive inspection |
| `SPEC-ACC-001`, `SPEC-ACC-002` | `SRC-DS-001`, `SRC-REPO-001` | `REQ-AR-001`–`REQ-AR-003` | `DES-002`, `DES-INT-003` | `AC-022`, `AC-023` | Keyboard/AT inspection |
| `SPEC-VAL-001`–`SPEC-VAL-004` | `SRC-DS-001`, `SRC-REPO-001` | `REQ-FR-004`, `REQ-FR-005` | `DES-005` | `AC-018`–`AC-021` | Submission/persistence checks |

## 15. Review

### Pass 1 — Completeness and correctness

- [x] Material composition, interactions, states, responsive outcomes, accessibility, data, validation, errors, failure/recovery behavior, and acceptance criteria are covered.
- [x] Blank-field and malformed-email conditions are derived from the inspected root repository brief, not guessed from Figma.
- [x] Each specified test has observable conditions/results; user-approved success and persistence-failure behavior is testable without claiming it came from Figma.
- [x] The specification does not prescribe repository paths, component structure, storage schema, task order, or breakpoint numbers.

**Pass 1 corrections:** added the repository brief’s empty-field and malformed-email requirements; separated local submission from prohibited remote delivery; and, after the user’s clarification, defined local-persistence success/failure feedback and the local JSON content boundary without prescribing implementation structure.

### Pass 2 — Consistency, traceability, source integrity, risks, and uncertainty

- [x] `SPEC-BEH-*`, `SPEC-INT-*`, `SPEC-ACC-*`, `SPEC-DATA-*`, `SPEC-VAL-*`, and new `AC-*` identifiers are unique and stable.
- [x] Material specifications reference approved requirements/design intent and the active source snapshots actually inspected; the historical Stage 4 check is `VER-012`/`VER-013` and the latest Stage 5 check is `VER-014` (Figma unchanged) / `VER-015` (expected workflow-only repository output).
- [x] Source evidence is classified: repository brief validation rules are observed; IndexedDB/`#`, local submission messages, retry behavior, and local JSON delivery are confirmed user decisions; Figma’s missing success/failure visual state remains a source limitation, not a target-behavior gap.
- [x] No arbitrary breakpoint, focus trap, validation regex, storage schema, data lifecycle, real URL, or nonlocal fallback is asserted.
- [x] User decisions resolve post-save/failure UX and the local JSON delivery boundary; remaining architecture/content-record completeness is visible for its stated acceptance outcomes.

**Pass 2 corrections:** replaced the scaffold’s unused documentation snapshot with the actual `SRC-REPO-001` baseline, kept requirement-owned `AC-001`–`AC-013` intact, added only new `AC-014`–`AC-025`, and separated user-confirmed local JSON content from the later architecture details of file path, schema version, and loading mechanism.

## 16. Completion Summary

- File created: `SPEC.md`.
- Inputs used: approved requirements/design intent, `SRC-DS-001` (historical `VER-012`; latest `VER-014`), `SRC-REPO-001` (historical `VER-013`; latest `VER-015`), Figma evidence, and the root repository brief’s validation statements.
- Testable confirmed behavior: full page composition, responsive outcomes, visible focus/state treatment, `#` placeholders, blank/malformed-email rejection, valid IndexedDB persistence, and no remote contact transmission.
- Approval decisions incorporated: post-save feedback/reset, IndexedDB failure/recovery, and frontend-local JSON delivery for technology labels and image alternatives.
- Remaining acceptance inputs: complete approved local record values, hero portrait treatment, and later IndexedDB architecture details.
- Ready for Stage 4 review: **Yes, with local-content completeness and architecture decisions carried forward.**
