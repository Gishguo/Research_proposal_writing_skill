# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project Instructions

This project is a Claude Code skill environment for writing STEM PhD research proposals. It contains a custom skill, supporting templates, a sample CV, and example proposals.

## Skills

- **write-proposal**: Located at `.claude/skills/write-proposal/SKILL.md`. Invoke when the user asks to write a research proposal. This skill operates as a research design debugger: it identifies and resolves conceptual, methodological, and scope-related weaknesses before drafting, producing a proposal whose claims, methods, scope, assumptions, and contribution level can survive supervisor and scholarship-review scrutiny.

## Workflow Overview

The `write-proposal` skill runs a 5-phase process:

1. **Information Gathering** — Collects professor publications, user CV, research interest keywords, and review/survey summaries via structured questions.
2. **Research Direction Design** — Intersection mapping, gap identification, proposal-type classification, novel construct classification, scope filtering, candidate fit and supervisor fit checks, golden thread verification.
3. **Reviewer Stress Test (Phase 2.8)** — Anticipates top reviewer objections, builds an assumption register and bridge table, calibrates claim strength. Direction is locked only after this phase.
4. **Citation Function Mapping (Phase 2.9)** — Builds a ~20-reference pool organized by citation function (context, gap, method, benchmark, limitation).
5. **Proposal Drafting** — Draft only after research logic is stable. Followed by structural/conceptual validation and language/mechanical polish.

## Reference Files

The skill uses modular reference files in `.claude/skills/write-proposal/references/`:
- `intake-questions.md` — structured information-gathering questions
- `reviewer-heuristics.md` — supervisor and reviewer objection patterns
- `method-bridging-patterns.md` — bridge tables, assumption register, contribution classification, substitutability template, claim strength calibration
- `proposal-quality-checklist.md` — structural validation checklist
- `writing-and-citation-rules.md` — APA citation rules and language polish rules

## Supporting Files

- `Research Proposal Template.md` — Section-by-section guide for proposal structure.
- `Checklist - Proposal.md` — Quality checklist covering title, research questions, literature review, methodology, ethics, timeline, and significance.
- `Sample Proposal 2.md` — Example proposal on urban green spaces and stress (psychophysiological perspective).
- `Research interests.md` — User's research summary on AI-enabled high-proportion renewable energy grids (Chinese).
- `cv.typ` — User CV in Typst format (Jixuan Guo, New Energy Science and Engineering, Xi'an Jiaotong University).
