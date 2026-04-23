# Recommendations for Improving the Research Proposal Writing Skill

## 1. Overall Assessment

The current `write-proposal` skill is already stronger than a template-based proposal generator. Its main strength is that it does not merely generate standard proposal sections; it also attempts to constrain the research logic behind the proposal. In particular, the existing checks for golden-thread alignment, core concept definition, multi-layer consistency, and substitutability decomposition are valuable and should be preserved.

The next stage of improvement should not focus primarily on adding more writing rules. The skill should instead be developed into a **research design debugger**: a workflow that identifies and resolves conceptual, methodological, and scope-related weaknesses before the proposal is drafted.

The main recommendation is to shift the skill from:

> "Generate a polished research proposal"

to:

> "Generate a research proposal whose claims, methods, scope, assumptions, and contribution level can survive supervisor and scholarship-review scrutiny."

## 2. Split the Current SKILL.md into a Lean Controller and Reference Files

The current skill file is too long and dense. It contains workflow instructions, user-intake questions, citation rules, methodology constraints, structural checklists, and language-polishing rules in one place. This creates three risks:

- High-value research-design constraints may be diluted by lower-level writing rules.
- The model may execute easy surface-level tasks while underweighting hard conceptual checks.
- The skill becomes difficult to maintain as new rules are added.

Recommended structure:

```text
write-proposal/
  SKILL.md
  references/
    intake-questions.md
    proposal-quality-checklist.md
    reviewer-heuristics.md
    method-bridging-patterns.md
    writing-and-citation-rules.md
```

Recommended responsibilities:

- `SKILL.md`: Keep only the core workflow, triggering guidance, phase order, and highest-priority hard constraints.
- `references/intake-questions.md`: Store structured information-gathering questions.
- `references/proposal-quality-checklist.md`: Store the structural validation checklist.
- `references/reviewer-heuristics.md`: Store likely supervisor and scholarship-review objections.
- `references/method-bridging-patterns.md`: Store cross-layer, cross-scale, and data-to-claim bridge patterns.
- `references/writing-and-citation-rules.md`: Store APA, language-polish, and anti-AI-style rules.

The main `SKILL.md` should act as a controller, not as a complete textbook.

## 3. Add a Reviewer Stress Test Before Drafting

The most important missing layer is a formal **Reviewer Stress Test** before the proposal is written. Many AI-generated proposals appear coherent but collapse under basic supervisor questions. The skill should force the model to anticipate those objections before drafting.

Recommended new phase:

```text
Phase 2.8: Reviewer Stress Test
```

For the selected research direction, require the model to identify:

- The strongest selling point of the proposal.
- The top 3-5 likely reviewer objections.
- The exact revision strategy needed to neutralize each objection.

Common reviewer objections to include:

- Is this really a research gap, or just an uncombined set of topics?
- Is the contribution overstated?
- Does the methodology actually answer the research questions?
- Does the data support the level of claim being made?
- Is the scope realistic for a PhD?
- Is a proposed new concept truly theoretical, or merely a numerical planning artifact?
- Are cross-scale or cross-layer assumptions explicitly justified?
- Is a substitutability or equivalence claim decomposed into defensible dimensions?

This phase should happen after the candidate research direction is chosen and before the full proposal is drafted.

## 4. Classify the Contribution Level of Every Novel Construct

The skill should explicitly guard against over-packaging simulation results as theoretical contributions. This is a common failure mode in AI-written research proposals.

When a proposal introduces a novel construct, such as an index, curve, framework, equivalence relation, or metric, require the model to classify it as one of the following:

- **Theoretical construct**: Has a formal definition and some generalizable, provable, or mechanism-level significance.
- **Methodological device**: A modeling, optimization, or algorithmic mechanism that enables analysis.
- **Design artifact**: A useful result under a specified configuration, such as a contour, design chart, or scenario-dependent curve.
- **Planning tool**: A practical decision-support object with limited theoretical generality.

Recommended hard rule:

> If a proposed construct is derived mainly from simulation sweeps, scenario analysis, parameter scans, or empirical contour fitting, default to treating it as a design artifact or planning tool unless the model can state a general theorem, proof obligation, invariance property, or mechanism-level explanation.

For each novel construct, require:

- Definition
- Scope
- Boundary conditions
- Source of validity
- Contribution level
- What would falsify or limit the claim

This will prevent phrases such as "formal theory" or "theoretical contribution" from being used when the proposal only supports a conditional design result.

## 5. Turn Multi-Layer Consistency into a Structured Bridge Table

The current skill already asks for multi-layer consistency, but this should be made more operational. AI models can easily write that a study "bridges" two layers without actually explaining how.

Whenever a proposal moves across analytical levels, require an internal bridge table:

```text
Layer A:
Layer B:
Claim transferred from A to B:
Required assumptions:
Assumption type: standard / simplifying / high-risk / unverifiable
Evidence source:
Validation method:
Limitation statement required in the proposal:
```

Common bridge types:

- Component-level data to system-level behavior
- Operational dispatch constraints to annual reliability metrics
- Archetype models to broader building or system generalization
- Simulation results to planning or policy implications
- Short-duration flexibility to long-duration adequacy claims

This table does not necessarily need to appear in the final proposal, but the final proposal should reflect its logic.

## 6. Add an Assumption Register

A mature research proposal does not avoid assumptions; it manages them explicitly. The skill should require an internal **Assumption Register** before drafting the methodology.

For each key assumption, require:

- Assumption statement
- Why the assumption is needed
- Whether it is supported by literature
- Risk level
- Consequence if false
- Mitigation strategy
- How the final claim should be calibrated

Recommended assumption categories:

- **Standard assumption**: Commonly accepted in the field, low risk.
- **Simplifying assumption**: Used for tractability, acceptable if acknowledged.
- **High-risk assumption**: If false, it weakens a core claim.
- **Unverifiable assumption**: Cannot be directly validated within the project and must be framed carefully.

This is especially important for computational proposals that combine heterogeneous data sources or make system-level claims from simplified models.

## 7. Enforce a Single Primary Contribution

The skill should more strongly prevent over-scoped proposals. A good PhD proposal can contain several components, but it should have only one primary contribution.

For each research direction, require the model to label:

- Primary contribution
- Secondary enabling component
- Validation layer
- Extensions or future work

Recommended hard rule:

> If a proposal contains more than two novel technical components, the model must narrow the project by identifying one primary contribution and moving the rest into supporting components or future work.

Examples of over-scoping:

- A new degradation model
- A new control framework
- A new reliability metric
- A new economic planning tool
- A multi-region generalization study

If all of these appear in one proposal, the skill should force scope reduction.

## 8. Add a Dedicated Template for Substitutability and Equivalence Claims

Claims involving substitution, equivalence, compensation, replacement, flexibility value, or resilience value are high risk. They often imply that two physically different resources are interchangeable, which is rarely true across all dimensions.

When such a claim appears, require the model to answer:

- What exactly is being substituted?
- In which value dimension does the substitution occur?
- What dimensions are not substitutable?
- What is the relevant time scale?
- What are the physical or operational limits?
- Does the substitution saturate?
- Is the result conditional or general?

Possible value dimensions:

- Energy adequacy
- Power capacity
- Ramping support
- Reserve provision
- Peak shaving
- Restoration speed
- Cost reduction
- Emissions reduction
- Resilience under extreme events

The final proposal should avoid undifferentiated statements such as "A can substitute for B" unless the substitution dimension and boundary conditions are explicit.

## 9. Rebalance Literature Search Toward Citation Function

The current Phase 2.5 is comprehensive, but it risks making the skill over-focus on collecting references rather than constructing a defensible research problem.

Recommended priority order:

1. User-provided professor publications
2. User-provided review or survey summaries
3. Targeted searches only when gap evidence, method justification, or benchmark references are insufficient

Instead of organizing references mainly by source type, organize them by function:

- Context-setting references
- Gap-establishing references
- Method-justifying references
- Benchmark or dataset references
- Limitation-aware references

This helps ensure that citations serve the proposal's argument rather than merely increasing the bibliography size.

## 10. Add Claim Strength Calibration

The skill should check whether each major claim is supported by the available evidence. AI-generated proposals often overuse phrases such as "formal characterization", "validated framework", "theoretical contribution", and "principled basis" without sufficient support.

Recommended calibration categories:

- **Strong claim**: Supported by derivation, proof, or robust multi-setting validation.
- **Moderate claim**: Supported by simulation, standard assumptions, and sensitivity analysis.
- **Cautious claim**: Supported only by proof-of-concept experiments or simplified models.

Recommended rule:

> If the evidence is mainly simulation-based and context-specific, the claim should normally be moderate or cautious, not universal or theoretical.

This pass should happen before final polishing so that the language matches the strength of the evidence.

## 11. Add Mechanical Cleanliness Checks

The generated proposal and the current skill file both show encoding artifacts such as corrupted punctuation. This is a small but damaging issue in formal application documents.

Add a final mechanical pass that checks:

- Encoding artifacts
- Broken apostrophes and dashes
- Malformed mathematical notation
- Markdown table corruption
- Citation-reference mismatches
- Placeholder remnants
- Duplicate headings
- Inconsistent terminology
- Broken file names or output paths

This pass is low effort and high value. It prevents otherwise strong proposals from looking careless.

## 12. Separate Candidate Fit from Supervisor Fit

The skill should evaluate two different alignment dimensions:

### Candidate Fit

- Does the proposal match the applicant's background?
- Does the applicant appear capable of executing the methods?
- Are the required technical skills credible given the CV?

### Supervisor Fit

- Does the proposal align with the professor's recent research trajectory?
- Does it naturally extend the professor's work rather than merely cite it?
- Would the professor see a clear reason to supervise this project?

Many AI proposals are superficially aligned with a professor but do not sound credible for the applicant, or they fit the applicant but only loosely match the supervisor. The skill should check both dimensions explicitly.

## 13. Classify the Proposal Type Before Applying Heuristics

Different proposal types fail in different ways. The skill should classify the proposal before applying quality checks.

Recommended proposal types:

- **Method-driven**: Introduces a new algorithm, model, or framework.
- **System-integration**: Combines existing models or tools in a novel system setting.
- **Theory-to-application**: Applies or adapts a theory to a new domain.
- **Empirical or benchmark-driven**: Quantifies, compares, or validates a phenomenon.

Common risks:

- Method-driven proposals may lack novelty or baselines.
- System-integration proposals may look like engineering assembly rather than research.
- Theory-to-application proposals may have weak conceptual transfer.
- Empirical proposals may become parameter sweeps without conceptual contribution.

Proposal-type classification will make the review process more targeted.

## 14. Compress the Language-Polish Section

The language-polish rules are useful but currently too detailed relative to their importance. The skill should prioritize research-design integrity over word-level style preferences.

Recommended compact language-polish rules:

- Preserve technical meaning.
- Remove fatal clarity issues.
- Tighten academic register.
- Remove generic AI-style filler.
- Do not introduce new claims during polishing.
- Do not strengthen claims without evidence.

Detailed word blacklists and stylistic preferences can be moved to `references/writing-and-citation-rules.md`.

## 15. Recommended Implementation Priorities

### First Priority

1. Split the long `SKILL.md` into a lean controller and reference files.
2. Add a `Reviewer Stress Test` phase.
3. Add contribution-level classification for every novel construct.
4. Convert multi-layer consistency into a structured bridge table.

### Second Priority

1. Add an internal Assumption Register.
2. Enforce a single primary contribution.
3. Add a dedicated substitutability/equivalence template.
4. Add claim strength calibration.

### Third Priority

1. Compress language-polish rules.
2. Add mechanical cleanliness checks.
3. Add proposal-type classification.
4. Reorganize citation handling around citation function rather than quantity.

## 16. Suggested Revised Workflow

Recommended high-level workflow:

```text
Phase 1: Information Gathering
  - Professor profile
  - Applicant profile
  - Review summaries
  - Formatting and ethics requirements

Phase 2: Direction Design
  - Intersection mapping
  - Gap identification
  - Scope filtering
  - Proposal-type classification
  - Novel construct classification
  - Candidate fit and supervisor fit checks

Phase 2.8: Reviewer Stress Test
  - Strongest selling point
  - Top reviewer objections
  - Objection-neutralization strategy
  - Assumption Register
  - Bridge table
  - Claim strength calibration

Phase 2.9: Citation Function Mapping
  - Context references
  - Gap references
  - Method references
  - Benchmark references
  - Limitation references

Phase 3: Proposal Drafting
  - Draft only after research logic is stable
  - Maintain one primary contribution
  - Keep scope conditional and defensible

Phase 4: Structural and Conceptual Validation
  - Golden thread
  - Method-to-RQ mapping
  - Contribution-level consistency
  - Cross-layer bridge checks
  - Assumption visibility

Phase 5: Language and Mechanical Polish
  - Academic register
  - Claim strength calibration
  - Citation-reference consistency
  - Encoding and Markdown cleanup
```

## 17. Final Recommendation

The skill should be optimized less as a writing assistant and more as a **proposal research-design debugger**.

The most valuable future improvements are not additional templates or more polished phrasing. They are stronger safeguards against:

- Overstated contributions
- Undefined novel constructs
- Unjustified cross-layer inference
- Over-broad scope
- Weak supervisor fit
- Simulation results presented as theory
- Substitutability claims without dimensional decomposition

If these safeguards are formalized, the skill will be much more reliable for generating PhD research proposals that can withstand supervisor review and scholarship evaluation.
