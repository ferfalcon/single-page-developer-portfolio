---
artifact: ARCHITECTURE
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

# Architecture

## 1. Document Information

- **Version:** 0.1 (draft architecture).
- **Last updated:** 2026-08-14.
- **Owners:** Architecture owner proposes; Fer approves in Gated mode.
- **Scope:** The existing Astro portfolio’s static content boundary and browser-only contact persistence boundary.
- **Source baseline:** `SOURCE-BASELINE.md`; active inputs are `SRC-DS-001` and `SRC-REPO-001`.
- **Runtime snapshots:** None. No deployed/runtime environment was inspected or used as evidence.
- **Related documents:** `REQUIREMENTS.md`, `DESIGN.md`, `SPEC.md`, `DOCUMENT-REVIEW.md`.
- **CLI decision:** Architecture is **Required**, recorded for the Full profile because this scope includes local persistence, local content data, privacy, reliability, and migration decisions.

## 2. Purpose and Scope

This document distinguishes the observed Astro starter from the proposed target structure needed to implement the approved static portfolio. It protects four boundaries: one existing Astro application, build-time local content data, browser-only contact handling, and local IndexedDB persistence.

Included are the client/browser trust boundary, data ownership, validation/persistence flow, error recovery, accessibility responsibilities, migration approach, and build/test responsibilities. Excluded are a backend/API, authentication, external integrations, real external URLs, a deployment configuration, a retention/deletion/export policy, an analytics service, and a complete implementation plan.

## 3. Evidence and Sources

| Classification | Evidence | Architectural consequence |
|---|---|---|
| **Observed** | `SRC-REPO-001` at commit `5f7ec3d0781d4a3237d051e00e8893c68f0a23b0`: `frontend/` is an Astro 7 starter; `frontend/package.json` declares Astro as its only dependency; `frontend/src/pages/index.astro` renders the starter `Welcome` component through `Layout`. | The target stays inside the existing Astro app and does not add a client framework, API service, or new build layer. |
| **Observed** | `SRC-REPO-001`: strict Astro TypeScript configuration, `pnpm build`, and no existing test, state, data, or persistence layer. Latest repository recheck `VER-016` confirmed only workflow-documentation output, not application-code drift. | Proposed browser behavior remains a small feature-local module; no repository pattern justifies global state or a new dependency. |
| **Confirmed** | User decisions: frontend-only IndexedDB contact storage; successful save clears fields and shows a message; failed save preserves values, shows a message, and retries on resubmission; technology labels and image alternatives come from local JSON. | Local browser data is authoritative for contact entries; a local JSON content file is authoritative for the specified dynamic card/alternative fields. |
| **Confirmed** | `REQ-CON-001`, `REQ-CON-004`, `REQ-SEC-001`, `SPEC-BEH-005`, `SPEC-DATA-001`, `SPEC-DATA-002`, `SPEC-VAL-003`, and `SPEC-VAL-004`. | No remote contact transport or fallback storage is allowed. |
| **Observed** | `SRC-DS-001` / `VER-014`, repository instructions, `SPEC-ACC-001`, and `SPEC-ACC-002`. | The static page must retain semantic regions, native controls, visible focus, field relationships, and programmatically available status/error feedback. |
| **Recommended** | Current web-form guidance was checked for native constraints, accessible error state, and no-transport form behavior. | Use native form semantics and constraints, with a small browser controller that synchronizes visible invalid state with accessible state; do not add inline handlers or a custom widget. |
| **Open** | `Q-001`–`Q-006` and `DOC-007`. | Do not invent real URLs, complete data values, an asset mapping, an error-focus rule, browser-support policy, or data-lifecycle policy. |

## 4. System Context

```text
Visitor
  → static Astro portfolio in the browser
    → build-time local JSON content (read only)
    → browser form controller → IndexedDB (same browser origin only)

No contact endpoint, remote database, authentication provider, analytics collector,
or other external contact-data recipient is in scope.
```

The user enters Name, Email, and Message. The static page renders project technology labels and image alternative treatment from local JSON at build time. A browser-only controller validates a contact entry and writes it to IndexedDB only after a valid native submit event. The browser origin and its IndexedDB storage are the persistence trust boundary; no application server is trusted with contact data because none is permitted.

## 5. Architectural Goals

| Goal | Why it matters | Tradeoff |
|---|---|---|
| Preserve one simple static site | The repository and scope are one Astro page, not an application platform. | No runtime content management or server-side enquiry workflow. |
| Keep contact data local | Required by the user and `REQ-SEC-001`. | Enquiries are unavailable to the portfolio owner unless a later approved export/sync product feature is added. |
| Make content explicit and reviewable | Conflicting technology labels and image alternatives must not be silently hard-coded. | JSON edits require a rebuild; this is build-time data-driven content, not live remote content. |
| Preserve accessible native interaction | Form controls, validation, messages, keyboard behavior, and status feedback must work without a client framework. | A small amount of browser JavaScript is required for IndexedDB and dynamic status/error state. |
| Avoid accidental data transport | Contact values are potentially sensitive. | The contact feature intentionally has no server/no-JavaScript transport fallback. |
| Keep future changes safe | A small IndexedDB schema can evolve only through explicit versioning. | Schema changes require a new approved migration decision. |

## 6. Current Architecture

**Observed current state at `SRC-REPO-001`:**

- `frontend/` is the only application and contains an Astro 7 static-site starter.
- `frontend/src/pages/index.astro` composes `Layout.astro` and `Welcome.astro`; it has no portfolio sections, data module, browser script, or persistence code.
- `frontend/package.json` has only the Astro dependency and `dev`, `build`, `preview`, and `astro` scripts. TypeScript is configured through Astro’s strict configuration.
- `frontend/public/` contains favicons, and `frontend/src/assets/` contains starter art. Candidate portfolio assets remain under `docs/starter-code/` until an authorized implementation task integrates them.
- No runtime/deployment snapshot, server API, database, authentication, telemetry, or test framework is evidenced.

`VER-016` shows later commits are expected workflow documentation only. Proposed target structure below is not presented as current implementation.

## 7. Target and Transitional Architecture

### Target architecture — Proposed pending Stage 6 approval

1. Keep `/` as the single Astro route and render semantic static portfolio sections through Astro components.
2. Add one frontend-source JSON content file, `frontend/src/data/portfolio.json`, imported during the Astro build. It is the local authority only for project technology-label arrays, project image-alternative treatments, and—if the portrait is informative—the hero alternative treatment.
3. Keep project titles, media references, and action labels in their current source-backed presentation boundary. The JSON file does not become a hidden second authority for those fields.
4. Attach a browser-only contact feature to the native contact form. It owns client validation state, accessible feedback, and IndexedDB calls; it is the only code allowed to access contact data.
5. Use one IndexedDB database at an explicit initial schema version with one contact-entry object store. Store the three approved visitor values and a browser-generated primary key only; do not add a timestamp, analytics metadata, identity, or inferred data without a later approved requirement.
6. Treat an IndexedDB transaction’s successful completion as the sole success signal. Clear form controls and publish confirmation only then. On any unavailable, blocked, quota, open, transaction, or abort failure, retain values, publish failure feedback, and allow a later native resubmit. Do not use `localStorage`, an in-memory “sent” substitute, a queue, or remote fallback.

### Transitional architecture

There is no deployed/current portfolio behavior to migrate. The transition is a replacement of the Astro starter page by the portfolio composition, plus additive local assets/data and client-only form behavior. Existing IndexedDB data does not exist at the pinned baseline, so the initial version creates the store without a data migration. Any later incompatible schema change must be introduced with a version increment and a reviewed migration decision; it must not silently clear existing records.

## 8. High-Level Structure

```text
Astro build
  portfolio.json ──> page/section components ──> static HTML, CSS, durable local assets

Browser after page load
  native contact form ──> contact controller ──> validation state
                                           └──> IndexedDB contact repository
                                                    ├── transaction complete → clear + status
                                                    └── failure → preserve + failure status
```

The JSON path is build-time only: it makes the selected content data-driven without a browser fetch or service dependency. IndexedDB is browser-only: it must never be imported or touched during Astro server/build rendering.

## 9. Components and Responsibilities

| Target part | Responsibilities | Must not absorb | Dependencies / owned state |
|---|---|---|---|
| Astro page and section components | Semantic page hierarchy, Figma-backed layout, static source-backed copy/media/action labels, and rendering received local content. | IndexedDB calls, validation rules, remote fetching, or mutable global state. | May read build-time portfolio content; owns no contact data. |
| Local content module (`portfolio.json` plus a narrow reader/validator) | Map stable project IDs to technology labels and deliberate alternatives; reject incomplete/missing required records at build/development time. | Live fetching, ownership of titles/media/actions, or guessed fallback values. | Read-only build-time data; depends on stable component/project identities. |
| Contact form controller | Handle native form events; coordinate validation, field/error attributes, status region, reset-on-success, and retryable failure feedback. | Storage internals, project content, layout ownership, or a network transport. | Ephemeral DOM/form state only; depends on the local repository adapter. |
| IndexedDB contact repository | Open/upgrade database, write a validated contact entry in one transaction, expose completion/failure to the controller. | Validation presentation, DOM mutation, retries, analytics, or remote synchronization. | Owns the browser database boundary and persisted entries. |
| Shared style/token layer | Source-consistent focus, active, and error treatments usable by page sections and the form. | Business/data rules or storage state. | Uses design evidence and semantic state attributes/classes. |

## 10. Dependency Rules

- Astro page/section components may depend on shared visual styles, durable local assets, and the read-only local content reader; they must not depend on IndexedDB or browser globals.
- The contact controller may depend on native form APIs and the IndexedDB repository; it must not import project-card content or issue `fetch`, form HTTP actions, analytics calls, or external SDK calls for contact data.
- The IndexedDB repository may depend only on browser IndexedDB APIs and its local record type; it must not import UI components or mutate the DOM.
- The local content reader may depend on the JSON file and a local type/validation boundary; it must not fall back to Figma/starter values or call a network service.
- No module may add a client framework, global store, endpoint client, persistence fallback, authentication layer, or package without a later approved architecture/plan change.

## 11. Important Data and Interaction Flows

### Build-time project content flow

1. The Astro build imports `portfolio.json` locally.
2. A narrow reader resolves content by stable project identity and verifies every rendered project has a label collection plus an intentional alternative treatment.
3. The component renders that content alongside source-backed title/media/action presentation.
4. Missing or malformed records stop content acceptance; they never substitute a conflicting Figma or starter value.

### Contact invalid-submission flow

1. A visitor activates the native submit control.
2. The controller applies the approved required/email validity checks from `SPEC-VAL-001` and `SPEC-VAL-002`, without inventing a new regex, whitespace-normalization rule, or error priority.
3. Invalid controls receive source-consistent non-color feedback and programmatic error association; no IndexedDB transaction begins.
4. The user corrects data and resubmits. Error-focus relocation remains open and must not be added as a hidden architecture decision.

### Contact valid-submission flow

1. The controller prevents transport submission and passes only the validated Name, Email, and Message values to the IndexedDB repository.
2. The repository opens the v1 database if needed, creates/writes one entry in a single read-write transaction, and resolves only after transaction completion.
3. The controller clears the three fields and exposes one programmatic confirmation status only after that completion.
4. No remote request, page query, remote log, analytics event containing entry data, or alternate persistence is produced.

### Contact persistence-failure flow

1. Database-open, blocked, quota, transaction, abort, or unavailable-browser conditions are normalized as local persistence failure.
2. The controller does not clear values, does not announce success, and exposes a programmatic failure status.
3. The same native submit control remains available for a visitor-initiated resubmission after the condition is resolved. No automatic retry or duplicate-detection behavior is added because neither is approved.

## 12. State and Data Ownership

| State/data | Authoritative owner | Lifetime | Rules |
|---|---|---|---|
| Figma-backed static composition and source copy | Astro components / approved visual source | Build output | Not mutable client state. |
| Technology labels and image alternatives | `portfolio.json` | Build time | Local file is authoritative only for the fields specified by the user. Complete values remain open. |
| Form control values, validation state, and status text | Native form/controller | Current page session | Kept in the DOM; clear only after completed write; preserve on failure. |
| Contact entries | IndexedDB object store on the visitor’s browser origin | Browser-managed persistent storage | Contains only Name, Email, and Message plus a generated key. No sync, account, server copy, cache, or remote source. |
| Data lifecycle/management policy | No approved application owner yet | Open | Do not claim retention, deletion, export, encryption, or a privacy notice. A future requirement/ADR must decide it. |

The initial store has an explicit schema version of `1`. An upgrade handler creates the single object store only when absent. A future schema change must increment the database version and include an idempotent upgrade path; it must preserve existing records unless a separately approved data-lifecycle decision permits a different action.

## 13. Frontend Architecture

- **Routing and navigation:** One static route (`/`) with semantic in-page regions. Social/project/code destinations remain literal `#`. The `CONTACT ME` target is open (`DOC-007`), so no hash/scroll contract is adopted here.
- **Rendering:** Astro renders the portfolio and build-time JSON content. Browser code is limited to the contact feature and must run only after the contact form is present.
- **Form semantics:** Use `<form>`, associated visible labels, named native controls, a native submit button, `required` constraints, and an Email control appropriate to the approved email condition. The implementation must use a non-transport `method="dialog"` form configuration plus a module-based submit listener so a native submit never sends contact values to an HTTP endpoint; this is the deliberate exception to standard server-form fallback because a server endpoint is prohibited.
- **Validation and state:** Native constraint validity is the primary syntax check. The controller keeps `aria-invalid` and error associations synchronized with the visible invalid state after interaction/submission. Where source-consistent CSS uses `:user-invalid`, it is a Baseline widely available progressive enhancement; no unsupported browser-support promise is made.
- **Status feedback:** One dedicated programmatic status region reports either completed local persistence or local failure. Field errors stay associated with their respective controls; avoid double-announcing field text and global status.
- **No global client state:** The page’s sections do not need shared reactive state. The controller holds only form-local ephemeral state; IndexedDB is accessed through its adapter boundary.

## 14. Backend, API, and Integration Architecture

Not applicable by approved scope. There is no backend, API route, email service, webhook, third-party form service, remote database, authentication provider, analytics collector, or background worker for contact data. Adding any one would contradict `REQ-BR-003`, `REQ-DR-002`, `REQ-SEC-001`, and `SPEC-BEH-005` until explicitly re-scoped and reviewed.

## 15. Persistence Architecture

### Proposed v1 model

| Entity | Fields | Ownership / constraint |
|---|---|---|
| Contact entry | browser-generated key; Name; Email; Message | One entry per completed transaction. The three user values are the only approved payload fields. |
| Database schema | one database, version `1`, one contact-entry object store | Browser-local IndexedDB only; upgrade creates the store if absent. |

The primary key is technical storage metadata, not new product data. Timestamps, source metadata, tracking IDs, schema fields inside entries, indexes, deduplication, search, deletion/export, and synchronization are intentionally excluded until requirements authorize them. A completed transaction is atomic for the entry: the UI must not claim success before it completes.

## 16. Authentication and Authorization

Not applicable. There is no user account, protected operation, server session, token, or authorization boundary. The browser origin’s local storage partition is the only relevant ownership boundary; it does not identify the visitor to the application owner.

## 17. Accessibility Architecture

- Page/section components own semantic landmarks, heading hierarchy, reading order, link names, image treatment, and visible focus styling.
- The contact controller owns dynamic validation/state attributes and status updates; it must not replace native controls with non-semantic controls.
- Each field error remains visible with non-color cues and is associated with its control. The precise first-error/summary focus strategy is intentionally open under `SPEC-INT-003` and `SPEC-ACC-002`.
- The success/failure status is programmatically exposed only when state changes, with message copy decided during implementation within the approved outcome boundary.
- Project/hero alternative decisions are data-owned by local content records; decorative rings/circle remain intentionally decorative where that design classification holds.

## 18. Error Handling and Reliability

| Error category | Boundary | User outcome | Recovery |
|---|---|---|---|
| Invalid required/email input | Form controller | Field-specific accessible error; no write. | Correct and resubmit. |
| Missing/incomplete JSON record | Build-time local-content reader | No silent fallback; card/content acceptance cannot pass. | Supply/approve complete local record. |
| IndexedDB unavailable, blocked, quota, open, transaction, or abort failure | Repository → controller | Preserve all fields; accessible failure message; no success or transport. | Visitor resubmits after condition resolves. |
| Schema upgrade failure | Repository | Treat as local persistence failure; do not clear input. | Fix migration in a reviewed change; visitor can retry. |
| Unresolved external destination | Link markup | Literal `#` remains visible/operable placeholder. | Replace only with a user-supplied URL. |

The controller may not automatically retry a failed write, queue it, or fabricate a successful result. It must avoid logging Name, Email, or Message in browser console/error reporting. Concurrent valid submits and duplicate-detection remain unapproved product behavior; an implementation task must not introduce a visible loading/disabled contract without resolving that state.

## 19. Security and Privacy

- Contact data crosses no network boundary in this scope. The form must not contain a remote action URL or invoke a transport API for those values.
- Browser validation is a user-experience boundary, not a claim of server-side security; no server exists in the approved scope.
- Name, Email, and Message are potentially sensitive user-provided values. They must not be copied to console logs, analytics labels, URLs, error reports, or static build output.
- Browser storage access is limited by the visitor’s browser origin; encryption-at-rest, retention duration, deletion/export controls, consent wording, and privacy notice obligations are **open**, not promised.
- The local JSON file contains presentation content only. It must not contain contact entries, secrets, real private destinations, or temporary Figma URLs.

## 20. Build, Deployment, Runtime, and Observability

- **Observed build:** `frontend/package.json` supplies `pnpm build` / Astro build; repository guidance expects one static page in `frontend/dist/`.
- **Target runtime:** Static assets/HTML plus a small browser-only contact module. There is no observed hosting, environment variable, deployment, rollback, server log, metric, trace, health check, or alert configuration; none is added by this architecture.
- **Build data:** `portfolio.json` is compiled as local frontend source. Editing it requires a new static build; it is not a live CDN/API content source.
- **Observability:** No telemetry is introduced. Manual local inspection is the only approved diagnosis method, and it must not record contact values.

## 21. Testing Architecture

| Boundary | Required validation responsibility |
|---|---|
| Astro/static composition | Production build; visual checks at 1440, 768, and 375 px plus narrow/medium/wide no-overflow checks. |
| Local JSON content | Verify six stable records have intentional technology labels and alternatives; compare rendered output with approved records; reject missing records without fallback. |
| Native contact form | Keyboard traversal, labels, native control types/autocomplete, visible focus, empty-field and malformed-email cases, and programmatic error/status inspection. |
| IndexedDB adapter | Inspect stored entry after valid submit; simulate unavailable/failed persistence; confirm inputs remain, failure status appears, no success appears, and resubmission can retry. |
| Privacy/network boundary | Inspect browser network during valid and failed local submissions; confirm no contact value is transported. |
| Repository quality | `pnpm build` (or installed local Astro CLI if needed), `git diff --check`, and repository-prescribed manual accessibility checks. |

No test framework is currently present. This architecture does not introduce one; a later plan may choose proportional automated coverage only if it remains consistent with the repository and the approved task scope.

## 22. Architectural Decisions

### ADR-001 — Retain one static Astro application

- **Status:** Proposed pending Fer’s Stage 6 approval.
- **Context:** The pinned repository is one Astro starter; `REQ-CON-001` forbids a second root app, framework, or build layer.
- **Source snapshots:** `SRC-REPO-001`; `VER-016`.
- **Decision:** Implement the portfolio inside `frontend/` as one static Astro route with semantic components and feature-local browser behavior.
- **Rationale:** It preserves the actual repository architecture and meets a single-page portfolio scope without new runtime dependencies.
- **Alternatives considered:** Separate SPA/client framework; a second root page; a server-form application.
- **Tradeoffs and consequences:** Browser-only form behavior must be deliberately isolated; there is no backend fallback or live content API.
- **Requirement/specification references:** `REQ-CON-001`, `REQ-NFR-002`, `SPEC-BEH-001`.

### ADR-002 — Use local build-time JSON as the dynamic content boundary

- **Status:** Proposed pending Fer’s Stage 6 approval.
- **Context:** The user requested a local JSON file for dynamic technology labels and image alternatives; source labels conflict and must not be silently selected.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`; user decision; `VER-014`, `VER-016`.
- **Decision:** Use `frontend/src/data/portfolio.json`, imported during Astro build, keyed by stable project identity and containing only technology-label collections plus image-alternative treatments (and optional hero alternative treatment).
- **Rationale:** It makes the approved fields data-driven and reviewable without a remote request, client fetch, content platform, or new library.
- **Alternatives considered:** Hard-code labels/alts in components; fetch a public JSON file at runtime; introduce a CMS/API.
- **Tradeoffs and consequences:** Content changes require rebuild; project titles/media/actions remain outside this JSON authority; complete values remain required before related acceptance can pass.
- **Requirement/specification references:** `REQ-FR-002`, `REQ-BR-002`, `REQ-AR-003`, `SPEC-BEH-002`, `SPEC-DATA-002`, `AC-023`, `AC-025`.

### ADR-003 — Isolate browser-local contact persistence behind one IndexedDB repository

- **Status:** Proposed pending Fer’s Stage 6 approval.
- **Context:** Contact entries must persist in IndexedDB only, have verified-success/failure outcomes, and have no remote or alternate-store fallback.
- **Source snapshots:** `SRC-REPO-001`; user decisions; `VER-016`.
- **Decision:** A browser-only repository opens a version-1 IndexedDB database with one entry store and writes only Name, Email, Message, and a generated key. A contact controller calls it after valid native form submission and waits for transaction completion before reset/confirmation.
- **Rationale:** It separates storage details from UI/accessibility state, prevents premature reset, and provides a narrow future migration boundary.
- **Alternatives considered:** Direct IndexedDB calls in components; `localStorage`; remote form/API provider; in-memory-only success.
- **Tradeoffs and consequences:** No cross-device retrieval, owner inbox, automatic retry, or data-management UI; lifecycle policy stays open.
- **Requirement/specification references:** `REQ-FR-004`, `REQ-FR-005`, `REQ-DR-001`, `REQ-DR-002`, `REQ-SEC-001`, `SPEC-DATA-001`, `SPEC-VAL-003`, `SPEC-VAL-004`, `AC-020`, `AC-021`.

### ADR-004 — Preserve native form semantics while preventing transport

- **Status:** Proposed pending Fer’s Stage 6 approval.
- **Context:** Accessibility requires a real keyboard-operable form; scope prohibits a server/remote form action, and contact data must not reach URLs or endpoints.
- **Source snapshots:** `SRC-REPO-001`, user decisions; `SPEC-INT-003`, `SPEC-ACC-002`, `SPEC-BEH-005`.
- **Decision:** Use a native form with native controls/constraints and `method="dialog"` as its non-transport default, then handle the browser submit event in a module script that prevents default and starts the local path. The implementation must not specify a transport destination or use inline event handlers.
- **Rationale:** It preserves native keyboard/validation behavior and prevents an accidental GET/POST fallback that could expose entered data to the current URL or a server.
- **Alternatives considered:** A div-based pseudo-form; normal GET/POST action; `javascript:` action; server endpoint fallback.
- **Tradeoffs and consequences:** A JavaScript-disabled browser cannot save to IndexedDB; no JavaScript-free local-persistence outcome is possible. Browser-support expectations remain open and must be confirmed before release.
- **Requirement/specification references:** `REQ-AR-001`, `REQ-AR-002`, `REQ-BR-003`, `REQ-SEC-001`, `SPEC-INT-003`, `SPEC-ACC-001`, `SPEC-ACC-002`.

## 23. Constraints, Risks, Assumptions, and Open Questions

| Item | Type | Impact | Evidence or snapshot | Mitigation or owner | Status |
|---|---|---|---|---|---|
| Use current Astro app only; no client framework/new build layer. | Constraint | Bounds implementation shape. | `REQ-CON-001`, `SRC-REPO-001` | Follow ADR-001. | Confirmed |
| Contact persistence is IndexedDB-only and frontend-only. | Constraint | No server/remote/fallback option. | User decision; `REQ-CON-004`, `REQ-SEC-001` | Follow ADR-003/004. | Confirmed |
| Local JSON supplies specified dynamic content only. | Constraint | Stops silent label/alt substitutions. | User decision; `SPEC-DATA-002` | Follow ADR-002; complete records later. | Confirmed boundary |
| Retention, deletion/export, privacy notice, encryption, data sensitivity policy. | Question | Changes storage/lifecycle obligations. | `Q-001`, `REQ-SEC-002` | Fer/product decision before any data-management claim. | Open |
| Full six project records and hero portrait treatment. | Question | Blocks content/alternative acceptance. | `Q-003`, `Q-004`, `AC-023`, `AC-025` | Fer/content owner supplies values. | Open |
| `CONTACT ME` destination. | Question | Blocks CTA behavior acceptance. | `DOC-007`, `SPEC-BEH-003` | Fer/product owner decides before CTA implementation. | Open |
| First-error/summary focus behavior. | Question | Affects accessible validation interaction. | `SPEC-INT-003`, `SPEC-ACC-002` | Decide before accessibility acceptance; preserve native focus meanwhile. | Open |
| Browser support matrix. | Question | Controls need for any non-Baseline fallback. | `PROJECT-CONTEXT.md` quality expectations; no matrix supplied | Fer/product owner supplies release support policy. | Open |
| Durable error-icon/source-asset mapping. | Risk | Can block exact visual acceptance. | `Q-006`, `AC-024` | Asset/content owner verifies before integration. | Open |
| Mutable Figma source. | Risk | Visual target can drift. | `SRC-DS-001` Time-bound; `VER-014` | Reverify/rebaseline before material implementation. | Open |

## 24. Source-change Handling

- **Snapshot verification required before implementation:** Reverify `SRC-DS-001` because it is Time-bound; pin a new task-start repository commit and compare it with `SRC-REPO-001` before naming implementation files or writing code.
- **Changes that invalidate this architecture:** Any approved remote contact delivery, authentication/account scope, data retention/deletion/export requirement, browser-support policy, live-content need, source-level visual scope change, or pre-existing persistence implementation requires an impact review and possibly a new ADR.
- **Earliest workflow stage to revisit:** Return to Stage 6 if a structural decision changes; otherwise reflect implementation-order changes in Stage 7 planning and content decisions in their owning requirements/specification artifact.

## 25. Traceability

| Architecture item | Snapshot | Requirement or specification | Repository evidence | Validation |
|---|---|---|---|---|
| Single Astro route / no framework | `SRC-REPO-001` | `REQ-CON-001`, `REQ-NFR-002`, `SPEC-BEH-001` | Astro-only dependency; starter route/layout | Production build and source review. |
| Build-time local JSON content | `SRC-DS-001`, `SRC-REPO-001` | `REQ-FR-002`, `REQ-BR-002`, `REQ-AR-003`, `SPEC-DATA-002` | No existing data layer; source conflict identified | Record completeness and rendered content/alternative review. |
| Browser-only form controller | `SRC-REPO-001` | `REQ-FR-004`, `REQ-AR-001`, `REQ-AR-002`, `SPEC-INT-003`, `SPEC-ACC-001`, `SPEC-ACC-002` | No client framework/persistence code | Manual keyboard, validity, error, and status checks. |
| IndexedDB v1 repository | `SRC-REPO-001` | `REQ-FR-005`, `REQ-DR-001`, `REQ-DR-002`, `REQ-SEC-001`, `SPEC-DATA-001`, `SPEC-VAL-003`, `SPEC-VAL-004` | No current data/store implementation | IndexedDB inspection, failure simulation, retry check, network inspection. |
| Privacy/no transport boundary | `SRC-REPO-001` | `REQ-BR-003`, `REQ-SEC-001`, `REQ-SEC-002`, `SPEC-BEH-005` | Static app; no API dependency | Verify no contact transport/logging and no transport action. |
| Responsive/accessibility component boundary | `SRC-DS-001`, `SRC-REPO-001` | `REQ-NFR-001`, `REQ-AR-001`–`REQ-AR-003`, `SPEC-BEH-007` | Figma responsive frames and repository guidance | Viewport/overflow, keyboard, semantics, and alternative-text checks. |

## 26. Architecture Validation

### Pass 1 — Completeness and correctness

- [x] Scope and pinned current-state observations are accurate and separate from proposed target structure.
- [x] Current, target, and transitional architecture are distinct.
- [x] Responsibilities, dependencies, static content flow, contact flow, persistent/ephemeral state, and migration boundary are explicit.
- [x] Relevant accessibility, privacy, error/retry, build, and testing concerns are included; inapplicable backend/auth/deployment claims are explicitly absent.

**Pass 1 corrections:** Removed undefined runtime/documentation snapshots from the scaffold; preserved the existing Astro starter as current state; made the local JSON build-time rather than remote/runtime data boundary explicit; and made transaction completion—not request creation—the only reset/success condition.

### Pass 2 — Consistency, traceability, source integrity, risks, and uncertainty

- [x] All referenced snapshots exist and were actually used; `SRC-DS-001` remains Time-bound (`VER-014`) and `SRC-REPO-001` remains pinned with documentation-only output (`VER-016`).
- [x] No current-state claim silently relies on the branch head or an uninspected runtime.
- [x] Proposed decisions trace to requirements/specification/user decisions and do not contradict the design or Stage 5 review.
- [x] Tradeoffs, unresolved data lifecycle/content/CTA/focus/browser-policy issues, and no-JavaScript limitation are visible.
- [x] No example framework, server, CMS, data library, persistence fallback, or unsupported pattern was adopted.

**Pass 2 corrections:** Corrected the browser-support reference so it remains an unnumbered context question rather than the unrelated responsive `Q-005`; preserved the open first-error focus strategy; did not invent whitespace normalization, duplicate handling, retention, timestamps, schemas beyond the smallest storage model, encryption, or browser policy; and kept `method="dialog"` as a no-transport form safeguard rather than an invented server fallback.

## 27. Completion Summary

- **File created:** `ARCHITECTURE.md`.
- **Decision:** Architecture is Required for the Full profile; it is recorded in the CLI workflow record.
- **Active inputs:** `SRC-DS-001` (`VER-014`, Time-bound) and `SRC-REPO-001` (`VER-016`, immutable original input plus expected workflow documentation).
- **Target decisions proposed for approval:** one static Astro application; build-time `frontend/src/data/portfolio.json` for specified dynamic content; browser-only controller; isolated IndexedDB v1 repository; native no-transport form boundary; no remote/alternate persistence.
- **No implementation performed:** No application code, dependency, runtime, storage, or asset changes were made.
- **Open decisions carried forward:** lifecycle/privacy policy, exact JSON values/hero treatment, CTA target, error-focus behavior, browser support matrix, and exact asset/error-icon mapping.
- **Ready for Stage 6 approval:** **Yes, with the listed open product/content decisions explicitly carried forward.**
