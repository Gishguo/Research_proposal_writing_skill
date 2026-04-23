# Claude Skill: Write Research Proposal

A Claude Code skill that acts as a **research design debugger** for STEM PhD application proposals. Rather than generating a polished document from a template, it identifies and resolves conceptual, methodological, and scope-related weaknesses before drafting — producing a proposal whose claims, methods, scope, assumptions, and contribution level can survive supervisor and scholarship-review scrutiny.

## What this skill does differently

Most AI proposal generators produce text that looks coherent but collapses under basic supervisor questions. This skill forces the research logic to be defensible first:

- Classifies the proposal type and its characteristic failure modes
- Classifies every novel construct (theoretical / methodological device / design artifact / planning tool)
- Runs a **Reviewer Stress Test** before drafting: anticipates the top reviewer objections and requires a specific neutralization strategy for each
- Builds an **Assumption Register** and **Bridge Table** for any cross-layer or cross-scale inference
- Calibrates claim strength (strong / moderate / cautious) and enforces language consistency
- Checks candidate fit and supervisor fit separately

## Workflow

```
Phase 1    Information Gathering
Phase 2    Research Direction Design
Phase 2.8  Reviewer Stress Test          ← direction locked here
Phase 2.9  Citation Function Mapping
Phase 3    Proposal Drafting
Phase 4    Structural & Conceptual Validation
Phase 5    Language & Mechanical Polish
```

## Installation

This is a [Claude Code](https://claude.ai/code) custom skill. To use it:

1. Clone this repository into your project directory (or copy the `.claude/` folder into an existing project).
2. Open the project in Claude Code.
3. Run `/write-proposal` to start the skill.

## File structure

```
.claude/
  skills/
    write-proposal/
      SKILL.md                          ← skill controller (workflow phases)
      references/
        intake-questions.md             ← 3-round intake protocol
        reviewer-heuristics.md          ← supervisor objection patterns
        method-bridging-patterns.md     ← bridge table, assumption register,
                                           contribution classification,
                                           substitutability template,
                                           claim strength calibration
        proposal-quality-checklist.md   ← structural validation checklist
        writing-and-citation-rules.md   ← APA rules and language polish
CLAUDE.md                               ← project instructions for Claude Code
Research Proposal Template.md           ← section-by-section proposal structure guide
Checklist - Proposal.md                 ← standalone quality checklist
Sample Proposal 2.md                    ← example proposal (urban green spaces)
generate_review_docx.js                 ← utility: export proposal review as .docx
package.json
```

## Supporting files

- `Research Proposal Template.md` — section-by-section guide for proposal structure
- `Checklist - Proposal.md` — standalone quality checklist (can be used independently)
- `Sample Proposal 2.md` — example proposal on urban green spaces and stress (psychophysiological perspective)
- `generate_review_docx.js` — Node.js utility to export a proposal review as a Word document (`npm install` then `node generate_review_docx.js`)

## Key design principles

**One primary contribution.** If a proposal contains more than two novel technical components, the skill forces scope reduction — one primary contribution, the rest become supporting components or future work.

**Simulation ≠ theory.** Any construct derived mainly from simulation sweeps or parameter scans defaults to "design artifact" or "planning tool" unless a theorem, proof obligation, or invariance property can be stated.

**Substitutability claims require decomposition.** "A can substitute for B" is not a research claim. The substitution dimension, non-substitutable dimensions, time scale, physical limits, and saturation point must all be explicit.

**Cross-layer inferences require bridges.** Moving from component-level data to system-level claims, or from dispatch constraints to annual reliability metrics, requires explicit bridging assumptions with stated risk levels.
