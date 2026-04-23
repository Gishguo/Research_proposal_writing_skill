# Review of PhD Research Proposal

  ## Proposal Title

  Quantifying the Reliability Equivalence of Building Thermal Flexibility for Degraded Second-Life Battery Storage in
  Isolated Microgrids

  ## Overall Evaluation

  This is a strong and well-positioned PhD research proposal that addresses an important problem at the intersection of
  isolated microgrids, second-life battery energy storage, building flexibility, and reliability-oriented operational
  planning. The topic is closely aligned with current research needs in resilient and low-carbon power systems, and it
  is also highly relevant to my research agenda on reliability, resilience, and optimization under uncertainty.

  The proposal demonstrates clear academic maturity in several respects. First, the candidate identifies a specific and
  meaningful research gap rather than presenting a generic “AI for energy systems” topic. Second, the proposal is
  logically structured, with a coherent progression from problem statement to literature review, methodology, and
  expected contributions. Third, the proposed use of chance-constrained model predictive control to co-dispatch degraded
  second-life batteries and flexible building loads is methodologically reasonable and potentially publishable.

  That said, while the proposal is promising, it is not yet fully convincing at the level required for an unconditional
  top-priority scholarship recommendation. Its core idea is good, but several methodological and conceptual issues need
  to be sharpened before the project can be considered fully mature.

  ## Major Strengths

  ### 1. Strong relevance and originality

  The proposal targets a timely and underexplored question: whether building thermal flexibility can compensate for the
  reliability shortfall created by degradation in second-life battery storage. This is a novel and potentially impactful
  direction.

  ### 2. Good alignment with supervisor expertise

  The work is clearly positioned within the areas of microgrid reliability, resilient energy systems, uncertainty-aware
  optimization, and flexible demand resources. The fit with Prof. Lei’s research profile is very strong.

  ### 3. Clear structure and research logic

  The proposal is well organized. The aim, objectives, and research questions are well aligned, and the writing shows
  that the applicant understands how to formulate a doctoral research problem in a structured way.

  ### 4. Reasonable methodological direction

  The choice of a model-based optimization framework is appropriate. In this context, chance-constrained MPC is a more
  defensible PhD methodology than a purely data-driven or reinforcement learning approach, especially when reliability
  guarantees are central.

  ## Main Concerns

  ### 1. The notion of “reliability equivalence” is not yet rigorously defined

  The proposal repeatedly presents the reliability equivalence curve as the central scientific contribution, but it
  remains unclear whether this equivalence is intended to be:

  - a local marginal substitution relation,
  - a scenario-specific design result,
  - or a generalizable theoretical relationship.

  At present, there is a risk that the “equivalence curve” may turn out to be a useful numerical planning artifact
  rather than a true theoretical contribution. The proposal would be stronger if it clarified the mathematical meaning,
  scope, and limits of this equivalence concept.

  ### 2. The link between operational chance constraints and planning-level reliability indices is underdeveloped

  The proposal combines real-time chance-constrained dispatch with annual reliability indices such as LOLP and EENS.
  However, it does not sufficiently explain how probabilistic constraints enforced at the dispatch stage translate into
  annual adequacy outcomes. This is a key issue.

  Without a clear bridge between these two layers, the methodological foundation remains incomplete. The candidate needs
  to explain how reliability targets are allocated, measured, and validated across time scales.

  ### 3. The data-model chain is somewhat heterogeneous

  The proposal integrates:

  - laboratory battery degradation datasets,
  - building thermal archetypes,
  - and public microgrid demand/generation data.

  This is acceptable for simulation-based PhD work, but it also raises concerns about external validity. In particular,
  cell-level battery aging data do not directly translate into pack-level second-life operational reliability without
  additional assumptions regarding module heterogeneity, BMS constraints, thermal effects, and failure behavior.

  ### 4. The scope may be too broad for a PhD timeline

  The proposal attempts to cover degradation modeling, thermal flexibility characterization, stochastic operational
  control, annual reliability assessment, and economic design trade-offs, all within a three-year period. This is
  ambitious.

  A more focused first-phase research plan would improve feasibility. The candidate may need to narrow the scope
  initially and treat the reliability equivalence analysis as a later-stage extension rather than the immediate
  centerpiece.

  ### 5. Building flexibility may be somewhat overestimated as a reliability substitute

  The proposal assumes that thermal flexibility can substitute for degraded storage capacity in a reliability sense.
  This is plausible in part, but the candidate should distinguish more carefully between:

  - short-term load shifting value,
  - peak reduction value,
  - reserve provision value,
  - and long-duration adequacy value.

  Without this distinction, the proposal risks overstating the substitutability between buildings and batteries.

  ## Recommendation on Admission

  I would recommend admission.

  The proposal shows clear potential for doctoral research, and the applicant appears capable of developing this topic
  into a solid PhD project under appropriate supervision. The candidate demonstrates good problem formulation ability,
  awareness of the literature, and a research direction that is both relevant and publishable.

  However, my recommendation is admission with refinement, not unconditional endorsement of the proposal in its current
  form. The project should be narrowed and conceptually tightened during the first stage of doctoral study.

  ## Recommendation on Scholarship

  I would consider the candidate for scholarship support, but I would not rank this proposal at the highest priority
  tier without a strong interview or further clarification.

  My reasoning is as follows:

  - The proposal is stronger than the average PhD application in topic selection and structure.
  - It has credible publication potential.
  - But several core methodological assumptions remain insufficiently resolved.
  - Therefore, while the applicant deserves serious consideration for funding, this proposal does not yet justify an
    automatic top-tier scholarship recommendation on paper alone.

  In summary:

  - Admission: Yes
  - Scholarship: Yes, potentially
  - Scholarship priority: Moderate to strong, but not top tier at this stage

  ## Suggestions for Improvement

  Before final acceptance or scholarship ranking, I would expect the candidate to strengthen the proposal in the
  following ways:

  1. Define “reliability equivalence” more rigorously and state its boundary conditions.
  2. Clarify how chance-constrained operational decisions are linked to annual reliability metrics such as LOLP and
     EENS.
  3. Narrow the initial scope to one microgrid setting and a limited set of building archetypes.
  4. State more explicitly the assumptions needed to translate cell-level aging data into system-level SLBESS
     reliability behavior.
  5. Distinguish between different forms of flexibility value, rather than treating all building flexibility as directly
     substitutable for storage capacity.

  ## Final Verdict

  This is a promising and well-aligned proposal from a capable applicant. I would be willing to supervise this student
  and would support admission. I would also support scholarship consideration, although I would reserve the strongest
  level of endorsement until the methodological foundations are sharpened further, ideally through interview discussion
  or a revised proposal.