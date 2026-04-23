# Method Bridging Patterns

Use this file during Phase 2.8 and Phase 4 to check whether cross-layer or cross-scale inferences are properly justified.

## Bridge Table Template

Whenever a proposal moves across analytical levels, complete this table internally before drafting:

```
Layer A (source):
Layer B (target):
Claim transferred from A to B:
Required assumptions:
Assumption type: standard / simplifying / high-risk / unverifiable
Evidence source (cite or justify):
Validation method within the project:
Limitation statement required in the proposal:
```

The bridge table does not need to appear verbatim in the final proposal, but every bridge it identifies must be reflected in the methodology and limitations sections.

## Common Bridge Types in STEM Proposals

| From | To | Key risk |
|---|---|---|
| Component-level data | System-level behavior | Emergent effects not captured at component level |
| Operational dispatch constraints | Annual reliability metrics | Short-run dispatch ≠ long-run adequacy |
| Archetype or representative model | Broader building/system generalization | Archetype may not be representative |
| Simulation results | Planning or policy implications | Simulation conditions may not match real deployment |
| Short-duration flexibility | Long-duration adequacy claims | Different physical mechanisms |
| Cell-level lab measurements | Pack or system performance | Thermal, aging, and interaction effects |
| Single-region results | Multi-region generalization | Grid topology, policy, and resource mix differ |

## Assumption Register Template

For each key assumption in the methodology, complete this register entry:

```
Assumption: [statement]
Why needed: [tractability / data availability / standard practice]
Literature support: [cite or "none"]
Risk level: standard / simplifying / high-risk / unverifiable
Consequence if false: [effect on core claim]
Mitigation: [sensitivity analysis / scope restriction / explicit caveat]
Claim calibration: [how the final claim should be worded given this assumption]
```

### Assumption Risk Categories

- **Standard**: Commonly accepted in the field, low risk. Cite the convention.
- **Simplifying**: Used for tractability, acceptable if acknowledged. State the simplification explicitly.
- **High-risk**: If false, weakens a core claim. Requires sensitivity analysis or scope restriction.
- **Unverifiable**: Cannot be directly validated within the project. Must be framed as a boundary condition, not a validated fact.

## Contribution Level Classification

When a proposal introduces a novel construct (index, curve, framework, equivalence relation, metric), classify it before drafting:

| Level | Definition | Requires |
|---|---|---|
| **Theoretical construct** | Formal definition with generalizable, provable, or mechanism-level significance | General theorem, proof obligation, invariance property, or mechanism-level explanation |
| **Methodological device** | Modeling, optimization, or algorithmic mechanism that enables analysis | Demonstration that the device works across representative cases |
| **Design artifact** | Useful result under a specified configuration (contour, design chart, scenario-dependent curve) | Clear statement of the configuration and boundary conditions |
| **Planning tool** | Practical decision-support object with limited theoretical generality | Explicit scope statement; no theoretical claims |

**Hard rule**: If a proposed construct is derived mainly from simulation sweeps, scenario analysis, parameter scans, or empirical contour fitting, default to treating it as a design artifact or planning tool unless the model can state a general theorem, proof obligation, invariance property, or mechanism-level explanation.

For each novel construct, require:
- Definition
- Scope
- Boundary conditions
- Source of validity
- Contribution level (from table above)
- What would falsify or limit the claim

## Substitutability and Equivalence Template

When a proposal claims that resource A can substitute for resource B, or that two resources are equivalent in some sense, require answers to all of the following before drafting:

- What exactly is being substituted?
- In which value dimension does the substitution occur?
- What dimensions are NOT substitutable?
- What is the relevant time scale?
- What are the physical or operational limits?
- Does the substitution saturate? At what point?
- Is the result conditional (specific scenario) or general (any scenario)?

### Value Dimensions for Energy/Power System Proposals

- Energy adequacy
- Power capacity
- Ramping support
- Reserve provision
- Peak shaving
- Restoration speed
- Cost reduction
- Emissions reduction
- Resilience under extreme events

The final proposal must not contain undifferentiated statements such as "A can substitute for B." The substitution dimension and boundary conditions must be explicit.

## Claim Strength Calibration

Before final polishing, check whether each major claim is supported by the available evidence:

| Strength | Evidence required | Permitted language |
|---|---|---|
| **Strong** | Derivation, proof, or robust multi-setting validation | "demonstrates", "establishes", "proves" |
| **Moderate** | Simulation, standard assumptions, sensitivity analysis | "suggests", "indicates", "shows under conditions X" |
| **Cautious** | Proof-of-concept or simplified model only | "provides preliminary evidence", "is consistent with", "warrants further investigation" |

**Rule**: If the evidence is mainly simulation-based and context-specific, the claim should normally be moderate or cautious, not universal or theoretical. Do not use "formal characterization", "validated framework", "theoretical contribution", or "principled basis" unless the evidence supports a strong claim.
