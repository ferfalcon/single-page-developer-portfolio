---
artifact: SOURCE-BASELINE
project: Single-page developer portfolio
profile: Full
execution_mode: Gated
created: 2026-08-14
updated: 2026-08-14
---

# Source Baseline

## 1. State Ownership Mode

This is a CLI-managed workflow. The canonical snapshot registry, verification history, status, and lineage are in `.workflow/workflow-record.json`; inspect the generated projection at `.workflow/generated/SOURCE-INDEX.md`. This artifact records the detailed scope, evidence, source authority, reproduction instructions, and limitations.

## 2. Document Information

- Project: Single-page developer portfolio
- Created and last updated: 2026-08-14
- Related context: `PROJECT-CONTEXT.md`
- Operational narrative: `WORKFLOW-STATE.md`
- Baseline used by this artifact: `SRC-DS-001`, `SRC-REPO-001`, `SRC-DOC-001`, `SRC-DOC-002`, and `SRC-ASSET-001`

## 3. Design Source Evidence

### SRC-DS-001 — Figma single-page developer portfolio design

- **Source type:** Figma design file.
- **Purpose:** Authoritative reference for the supplied portfolio page's visible composition, supplied responsive examples, component variants, and design-system reference material.
- **Included scope:** File key `Y1ek1Bv1Rj48asEqLChUSA`, root node `7:2` (`🤖 Workflow`), and the Product / Home compositions: desktop `7:687` (1440 × 3872), tablet `7:226` (768 × 3563), and mobile `7:3` (375 × 5013). The associated Components canvas `42:3249` and Design System / Documentation section `62:5602` are included as reference evidence for the product page, including project-card, hero, skills, contact, social-link, CTA, input, and textarea variants.
- **Excluded scope:** Implementing the Components or Design System / Documentation canvases as user-facing website routes; unshown routes, data services, deployment configuration, and any behavior not demonstrated by this design node.
- **Captured or inspected at:** 2026-08-14T02:55:45-03:00.
- **Version, revision, or checksum evidence:** The supplied URL identifies the file and node but exposes no named version, version URL, immutable revision, or checksum. This is therefore a Time-bound snapshot, not an immutable Figma revision.
- **Captured evidence:** Figma MCP `get_metadata` resolved node `7:2` and its composition/component hierarchy. Figma MCP `get_design_context` resolved desktop frame `7:687` after the root-canvas call reported that no layer was selected. The successful response included reference code, a rendered image, and temporary Figma asset URLs; no durable local export was created during Stage 0.
- **Access and reproduction instructions:** Open the configured Figma URL with authenticated read access, inspect `7:2`, then inspect `7:687`, `7:226`, `7:3`, and referenced component/design-system nodes. Re-run the Figma MCP metadata and design-context calls before relying on later-stage evidence.
- **Dependencies:** Local Figma components and variants are observed in the file. No external-library dependency was identified from the available metadata; the metadata cannot prove that no external library is involved.
- **Authority for this project:** Visual hierarchy, content examples, supplied layouts, supplied widths, and demonstrated/default/hover/focus/error states. It is not authority for semantic HTML, keyboard behavior, intermediate-width behavior, persistence, privacy, security, or the contact-submission contract; the user's later explicit IndexedDB decision owns that product boundary.
- **Known limitations:** Mutable URL; no named revision; no durable export capture; and Figma cannot establish the nonvisual behavior above. The initial root-node design-context request failed because of Figma selection state, so the narrower desktop-frame call is the recorded successful context capture.

## 4. Repository Source Evidence

### SRC-REPO-001 — Implementation repository input baseline

- **Repository:** `https://github.com/ferfalcon/single-page-developer-portfolio` (remote `origin`).
- **Relevant application, package, or directory:** The canonical implementation is `frontend/`, an Astro static site. `frontend/src/pages/index.astro` currently renders the generated Astro `Welcome` component; `frontend/src/layouts/Layout.astro` retains starter metadata. `docs/starter-code/` remains source material rather than deployed application code.
- **Branch at capture:** `main`, tracking `origin/main`.
- **Captured at:** 2026-08-14T02:55:45-03:00.
- **Lockfile, submodule, or workspace state:** `frontend/pnpm-lock.yaml` and `frontend/pnpm-workspace.yaml` are present; no submodules were reported. `frontend/package.json` specifies Astro `^7.2.2` and Node `>=22.12.0`.
- **Uncommitted changes or patch:** The worktree was clean immediately before workflow initialization. Initialization then created the expected, uncommitted workflow record, generated projections, and three Stage 0 narrative artifacts. A subsequent one-line concurrent edit to `AGENTS.md` removed a redundant absolute-path sentence; it is assessed in `WORKFLOW-STATE.md` as non-material to this baseline's implementation scope.
- **Access and reproduction instructions:** From the repository root, run `git rev-parse HEAD`, inspect `frontend/`, then source `~/.nvm/nvm.sh` before Node-based commands. The baseline commit is represented only in the CLI registry.
- **Build or inspection context:** Node v24.18.0 was available through NVM. No application build, development server, or browser validation was run during Stage 0.
- **Known limitations:** No implementation behavior is yet represented beyond the Astro starter. The repository has no configured automated test, lint, or accessibility-check script. Existing `frontend/dist/` output is not implementation source of truth.

## 5. Runtime Source Evidence

No production, preview, staging, or local runtime snapshot is used in Stage 0. Starting a runtime is deferred until it is needed by a later approved task or validation activity.

## 6. Documentation Source Evidence

### SRC-DOC-001 — Workflow governance documents

- **Authority:** Normative for process control only.
- **Path or URL:** `docs/implementation-workflow/AGENTS-instructions.md`; `docs/implementation-workflow/workflow/Agent-Orchestration.md`; `docs/implementation-workflow/workflow/Design-Implementation-Workflow.md`; `docs/implementation-workflow/workflow/Workflow-Profiles.md`; and the Stage 0 supporting guidance read for source snapshots, authority, identifiers, validation, state ownership, Figma, and `docs/implementation-workflow/prompts/00-intake.md`.
- **Included sections:** Stage 0 responsibilities, Full profile rules, Gated-mode rules, CLI ownership, Figma source capture, source verification, and two-pass review requirements.
- **Revision, version, date, or checksum evidence:** Repository commit `5f7ec3d0781d4a3237d051e00e8893c68f0a23b0`.
- **Captured at:** 2026-08-14T02:55:45-03:00.
- **Access and reproduction instructions:** Read the listed paths from that commit and run the workflow CLI from `docs/implementation-workflow/cli/design-workflow.mjs` with NVM Node.
- **Known limitations:** These documents govern process; they do not define product behavior beyond repository constraints.

### SRC-DOC-002 — Supplied starter-content reference

- **Authority:** Informative for the supplied portfolio copy and a companion reference to the Figma content; the user-provided Figma source remains authoritative for visual intent.
- **Path or URL:** `docs/starter-code/index.html`.
- **Included sections:** Portfolio copy, six project labels/technology lists, visible contact-form labels, and social/portfolio identity text.
- **Revision, version, date, or checksum evidence:** Repository commit `5f7ec3d0781d4a3237d051e00e8893c68f0a23b0`; SHA-256 `c476fa0b639219d5b01652b722ad82f2195fb0e068d8d403bdab1b196e740d8e`.
- **Captured at:** 2026-08-14T02:55:45-03:00.
- **Access and reproduction instructions:** Read the file from the pinned commit before using its copy as implementation input.
- **Known limitations:** It intentionally contains no project/code destinations, contact endpoint, storage rule, or validation behavior. The user's later frontend-only IndexedDB and `#` placeholder decisions supersede those omissions; this file remains informative content evidence only.

## 7. Asset Source Evidence

### SRC-ASSET-001 — Supplied portfolio asset bundle

- **Type:** Font, image, icon, and SVG asset bundle.
- **Path or reference:** `docs/starter-code/assets`.
- **Included contents:** 25 files: the Space Grotesk variable font and readme, social icons, desktop/tablet/mobile portrait images, decorative circle/rings, and large/small thumbnails for six projects.
- **Format and size:** `.ttf`, `.webp`, and `.svg` files. The Space Grotesk variable font SHA-256 is `e13b56b9bc84600ac672b2785c052bc2011aa8d503177e8b041981ab498f105c`.
- **Revision or checksum evidence:** Repository commit `5f7ec3d0781d4a3237d051e00e8893c68f0a23b0`; inventory and font checksum captured above.
- **Captured at:** 2026-08-14T02:55:45-03:00.
- **Licensing or usage constraints:** The included font readme refers to an OFL license and permits project use, but the referenced full `OFL.txt` is not present in this asset bundle. Confirm licensing before public deployment.
- **Known limitations:** Asset-to-Figma-layer correspondence and exact responsive asset selection have not been audited yet. Assets remain in `docs/starter-code/` until an approved implementation task intentionally integrates them.

## 8. Source Verification Narrative

Canonical verification events and current state are in `.workflow/generated/SOURCE-INDEX.md`.

| Verification | Snapshot | Method | Result and evidence summary |
|---|---|---|---|
| `VER-001` | `SRC-DS-001` | Figma MCP metadata plus desktop design context | Unchanged at this time-bound capture; configured file key and nodes `7:2`, `7:687`, `7:226`, and `7:3` resolved. |
| `VER-002` | `SRC-REPO-001` | Git commit and codebase inspection | Unchanged commit baseline; Astro source and package/lockfile evidence inspected. |
| `VER-003` | `SRC-DOC-001` | Pinned-path and commit inspection | Unchanged; required governance and Stage 0 documents exist at the baseline commit. |
| `VER-004` | `SRC-DOC-002` | Path, checksum, and content inspection | Unchanged; supplied starter document matches the recorded checksum. |
| `VER-005` | `SRC-ASSET-001` | Directory inventory and font checksum inspection | Unchanged; 25 supplied asset files and recorded font checksum matched. |

## 9. Upstream Rebaseline and Impact Assessments

No material upstream rebaseline is required. The `AGENTS.md` working-tree edit discovered after the source capture removed only a redundant location sentence. It did not alter the Figma source, pinned commit, application path, commands, quality expectations, or target scope; it is recorded as a non-material concurrent-change risk in `WORKFLOW-STATE.md`. If a material source changes, create a new snapshot rather than rewriting these records.

## 10. Baseline Review

### Pass 1 — Completeness and correctness

Completed 2026-08-14. Every material source used by Stage 0 has a unique snapshot ID, a recorded capture/verification method, scope, authority, and limitation. The review corrected the Figma reference scope to include exact Components (`42:3249`) and Design System / Documentation (`62:5602`) node IDs and corrected governance-document paths to their repository locations. No behavior, endpoint, or link destination was promoted from inference to fact.

### Pass 2 — Consistency, traceability, source integrity, risks, and uncertainty

Completed 2026-08-14. All narrative snapshot references resolve to the canonical record and each Stage 0 artifact uses the same five baseline IDs. The review corrected `REQ-CON-004` to cite only `SRC-REPO-001`, because the starter-content document supplies field labels but does not establish the contact-storage requirement. The Time-bound Figma source, unresolved links/contact contract, asset mapping, font-license limitation, and non-material working-tree edit remain explicitly visible; none is misrepresented as a resolved design or product decision.

### Post-review reconciliation — User product decisions

On 2026-08-14 the user explicitly set the contact scope to frontend-only IndexedDB persistence and directed unavailable external links to use literal `#` placeholders. This is direct stakeholder authority, not an assertion derived from `SRC-DS-001` or `SRC-DOC-002`. It requires the active Standard-to-Full transition `PROFILE-001` because the workflow classifies persistence as Full-profile work.
