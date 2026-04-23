# Quantifying the Reliability Equivalence of Building Thermal Flexibility for Degraded Second-Life Battery Storage in Isolated Microgrids

## Abstract

Isolated microgrids in remote communities increasingly adopt second-life lithium-ion batteries to reduce storage capital costs, yet the heterogeneous degradation states of repurposed cells introduce reliability risks that conventional sizing methods do not capture. Grid-interactive buildings offer a complementary demand-side resource, but whether and to what degree building thermal flexibility can substitute for the reliability shortfall caused by battery degradation remains unquantified. This research addresses that gap by developing a reliability equivalence framework that formally characterizes the substitution relationship between second-life battery energy storage systems (SLBESS) and building flexibility in isolated microgrids. The framework embeds reliability constraints directly into a chance-constrained model predictive control (CC-MPC) formulation, enabling real-time co-dispatch of SLBESS and flexible HVAC loads while enforcing probabilistic supply adequacy bounds. The central scientific contribution is a quantitative reliability equivalence curve: for a given SLBESS degradation state, the curve identifies the minimum building flexibility capacity required to maintain a target loss-of-load probability, and the corresponding reduction in required SLBESS capacity. Critically, the equivalence is characterized as a conditional relationship — valid for a specified climate zone, building archetype, and diesel backup capacity — rather than a universal substitution law; the theoretical contribution lies in the formal derivation of the iso-LOLP contour and the analytical bridge between operational chance constraints and annual adequacy indices. Validated against publicly available island microgrid datasets and calibrated battery degradation data, the framework will provide microgrid planners with a principled basis for trading off storage investment against demand-side flexibility deployment (Bai et al., 2024; Ma et al., 2025).

## 1. Introduction

### 1.1 Background and Context

Isolated microgrids serve remote and island communities where utility grid extension is economically infeasible (Amin & Wollenberg, 2005). These systems rely on local renewable generation supplemented by battery energy storage to maintain supply adequacy, and their reliability depends critically on storage capacity and performance (Lasseter, 2011). The accelerating retirement of electric vehicle (EV) lithium-ion batteries has created a growing supply of cells retaining 70-80% of original capacity, which can reduce microgrid storage capital costs by 30-60% relative to new systems (Xu et al., 2023). However, second-life batteries exhibit heterogeneous degradation states and accelerated capacity fade under cycling, introducing reliability risks that differ fundamentally from those of new battery systems (Bai et al., 2024).

Buildings represent a significant and underutilized demand-side resource in isolated microgrids. Grid-interactive efficient buildings can modulate HVAC loads through thermal mass storage and setpoint adjustment, providing flexible demand that can absorb renewable surplus or reduce peak draw on storage (Keskar et al., 2022; Mathieu et al., 2013). The thermal inertia of building envelopes allows load shifts of tens of minutes to several hours without violating occupant comfort constraints. It is important to distinguish the type of reliability benefit this provides: building thermal flexibility primarily delivers ramping support and short-duration peak shaving (reserve-like benefit), rather than long-duration energy adequacy. In isolated microgrids, where the binding reliability constraint is often multi-hour energy sufficiency rather than instantaneous capacity, this distinction determines the degree to which building flexibility can substitute for battery storage versus merely complementing it. This research explicitly scopes the equivalence analysis to the energy-adequacy dimension where building flexibility has a quantifiable, if bounded, substitution potential.

### 1.2 Problem Statement

The central question this research addresses is: *to what extent can building thermal flexibility substitute for the reliability shortfall caused by second-life battery degradation, and what is the quantitative substitution relationship?*

Bai et al. (2024) developed a reliability-oriented design framework for SLBESS in isolated microgrids but treated buildings as fixed loads. Ma et al. (2025) demonstrated that building AC flexibility reduces generation requirements during microgrid restoration, but assumed new battery storage without degradation dynamics. Keskar et al. (2022) quantified building load-shifting potential without connecting it to storage reliability. No existing work has formally characterized the substitution relationship between demand-side flexibility and degraded supply-side storage within a unified reliability framework. As a result, microgrid designers cannot determine how much building flexibility is needed to compensate for a given degree of SLBESS degradation, nor whether such compensation is economically preferable to oversizing the battery system.

### 1.3 Research Rationale

The scientific value of this research lies in establishing a formal reliability equivalence between two physically distinct resources: supply-side storage capacity and demand-side load flexibility. This equivalence is non-trivial because SLBESS degradation affects both energy capacity and power capability in a state-of-health-dependent manner, while building flexibility is constrained by thermal dynamics, occupancy schedules, and comfort bounds. Quantifying the substitution relationship requires a model that captures both resource types within a common reliability metric. The practical value is direct: for remote communities, the ability to substitute building flexibility for battery capacity reduces capital expenditure and extends the economic life of second-life battery systems, improving the financial viability of renewable microgrids in resource-constrained settings.

### 1.4 Research Aim, Objectives, and Questions

**Aim:** To develop and validate a reliability equivalence framework that quantifies the substitution relationship between building thermal flexibility and second-life battery storage capacity in isolated microgrids.

**Objectives:**

1. To develop a degradation-aware SLBESS model that maps state-of-health to reliability indices (LOLP, EENS) under representative microgrid operating conditions.
2. To characterize the energy-adequacy contribution of building thermal flexibility — scoped to multi-hour low-generation periods — as a function of thermal envelope parameters, occupancy schedules, and setpoint flexibility bounds, for two representative climate zones and two DOE Reference Building archetypes.
3. To formulate a chance-constrained MPC co-dispatch model that enforces probabilistic supply adequacy constraints while jointly scheduling SLBESS and flexible building loads, and to establish the analytical mapping from per-interval chance constraint violation probability to annual LOLP.
4. To construct and validate a reliability equivalence curve — defined as the iso-LOLP contour in the (SLBESS capacity, building flexibility capacity) design space — for the specified testbed configuration, and to assess its sensitivity to degradation state and climate zone.

**Research Questions:**

RQ1: How does state-of-health-dependent degradation in second-life batteries affect LOLP and EENS in isolated microgrids, and what is the functional form of this relationship under the specified testbed configuration?

RQ2: What is the energy-adequacy contribution of building thermal flexibility per unit of flexible floor area during multi-hour low-generation periods, and how does it vary with climate zone and setpoint range across the two selected building archetypes?

RQ3: Can a chance-constrained MPC formulation enforce a target annual LOLP in real-time co-dispatch of SLBESS and flexible buildings — via a per-interval risk budget derived from a statistical aggregation argument — and what are its computational requirements for practical deployment?

RQ4: What is the iso-LOLP reliability equivalence curve between SLBESS capacity and building flexibility capacity for the testbed configuration, and what does it imply for the cost-optimal design of isolated microgrids with degraded batteries?

## 2. Literature Review

### 2.1 Theoretical and Conceptual Framework

This research draws on three conceptual foundations. The first is the reliability-economics framework for power system planning, which quantifies supply adequacy through indices such as loss-of-load probability (LOLP) and expected energy not served (EENS), and formalizes the trade-off between investment cost and reliability (Lei et al., 2022; Lei et al., 2023). The second is the chance-constrained optimization paradigm, which embeds probabilistic reliability requirements directly into the operational decision problem as constraints on the probability of constraint violation, rather than evaluating reliability as a post-hoc metric (Garcia et al., 1989). This distinction is central to the proposed approach: by embedding reliability constraints in the dispatch layer, the framework ensures that operational decisions are reliability-aware in real time, not merely evaluated against reliability targets after the fact.

A key methodological contribution of this research is the explicit analytical bridge between the operational chance constraint and the annual adequacy index. The per-interval violation probability bound $\epsilon_t$ in the CC-MPC is derived from a risk budget allocation: given a target annual LOLP of $p^*$ and $T$ dispatch intervals per year, the per-interval bound is set as $\epsilon_t = 1 - (1 - p^*)^{1/T}$ under the assumption of independent dispatch intervals. For weakly dependent intervals — a reasonable approximation when the dispatch horizon is short relative to the correlation length of renewable generation — this bound is conservative and yields a realized annual LOLP no greater than $p^*$. The mapping is validated out-of-sample against Monte Carlo annual simulations to confirm that the approximation error remains within an acceptable tolerance. This derivation is the formal bridge between the operational and planning layers that prior work has left implicit.

The third is the thermal flexibility model for buildings, which represents the building envelope as a resistance-capacitance thermal network and characterizes the feasible flexibility envelope as the set of HVAC setpoint trajectories that maintain indoor temperature within comfort bounds (Mathieu et al., 2013).

### 2.2 Empirical Research

**Second-life battery storage.** At the cell level, Hu et al. (2012) established equivalent circuit models that remain the standard for battery state estimation, and Ahmadi et al. (2017) provided life-cycle evidence that repurposing EV batteries for stationary use is both economically and environmentally beneficial. At the system level, Xu et al. (2023) evaluated the economic viability of retired batteries in fast-charging stations, finding that second-life economics depend critically on degradation trajectory assumptions. Bai et al. (2024) proposed the first reliability-oriented iterative design framework for SLBESS-equipped isolated microgrids, demonstrating that degradation-aware sizing substantially improves reliability-cost outcomes. Their framework, however, treats buildings as fixed loads and does not incorporate demand-side flexibility. Xie et al. (2024) developed a degradation-aware energy management strategy for SLBESS using mixed-integer programming, but without reliability constraints embedded in the operational layer.

**Building thermal flexibility.** Mathieu et al. (2013) established the state-estimation and control framework for managing real-time energy imbalance using thermostatically controlled loads. Keskar et al. (2022) provided experimental evidence that global thermostat adjustment in commercial buildings can shift 0.5-1.5 kW per 100 m2 of floor area during peak periods. Jin et al. (2023) surveyed grid-interactive building demonstrations and identified the absence of integration with storage reliability assessment as a key gap. Ma et al. (2025) advanced this line by incorporating building AC flexibility into microgrid service restoration under uncertainty, showing that AC flexibility reduces the generation capacity required for sequential load pickup. Their work employed new battery models without degradation dynamics, leaving the interaction between building flexibility and degraded storage unexamined.

**Reliability-constrained microgrid optimization.** Du et al. (2024) incorporated multi-state battery degradation into microgrid reliability evaluation using Markov chain models, but their approach was limited to planning-layer analysis without real-time adaptive control. Zhu et al. (2023) co-optimized energy storage and demand response in microgrids under uncertainty using stochastic programming, but did not consider second-life battery degradation. Perera and Kamalaruban (2024) reviewed reinforcement learning approaches for microgrid energy scheduling and noted that most studies assume simplified battery models and do not enforce hard reliability constraints.

### 2.3 Research Gap

The preceding review identifies a specific and tractable gap: no existing framework quantifies the substitution relationship between building thermal flexibility and SLBESS reliability in isolated microgrids, nor embeds reliability constraints in the operational co-dispatch layer for degraded battery systems. Studies on SLBESS reliability (Bai et al., 2024; Du et al., 2024) treat demand as fixed; studies on building-grid interaction (Keskar et al., 2022; Ma et al., 2025) assume new battery storage; studies on stochastic microgrid optimization (Zhu et al., 2023) do not address second-life degradation. The proposed reliability equivalence framework fills this gap by unifying degradation-aware storage modeling, building thermal flexibility characterization, and chance-constrained operational dispatch within a single formulation.

## 3. Methodology

### 3.1 Research Design

This research employs a computational simulation-based design structured in three sequential stages: (i) component modeling, (ii) co-dispatch algorithm design, and (iii) reliability equivalence analysis. The methodological choice of chance-constrained MPC over reinforcement learning is deliberate: the system model is sufficiently well-characterized (battery equivalent circuit, building RC network, renewable generation statistics) that a model-based approach can enforce hard reliability constraints with formal guarantees, which a learning-based method cannot provide without extensive safety-layer engineering. Where uncertainty is irreducible (renewable generation variability, occupancy stochasticity), it is handled through scenario-based chance constraints rather than learned policies.

### 3.2 Data and Experimental Setup

**SLBESS model.** A semi-empirical degradation model will be developed using the equivalent circuit framework of Hu et al. (2012), extended with state-of-health-dependent parameters (capacity fade, internal resistance growth, round-trip efficiency decline). Parameters will be calibrated against the publicly available NASA Battery Dataset (PCoE, batteries 5, 6, 7, 18) and the CALCE battery aging dataset, which provide cycle-resolved capacity and impedance measurements for commercial 18650 cells under controlled conditions.

The cell-to-pack scaling step introduces a modeling boundary that must be stated explicitly. Cell-level datasets do not directly capture pack-level degradation heterogeneity, BMS constraints, module mismatch, or thermal management effects. To bridge this gap, pack-level capacity and resistance will be represented through a parametric uncertainty envelope whose bounds are informed by second-life battery field studies (Koller et al., 2024; Xu et al., 2023). Specifically, module-level SOH heterogeneity will be modeled by sampling initial SOH values from a distribution fitted to reported EV retirement statistics (Ahmadi et al., 2017), and pack-level capacity will be taken as the minimum-module capacity under a conservative BMS assumption. This approach is standard in the second-life battery literature and its limitations are well-documented; results derived from this model are therefore interpreted as proof-of-concept bounds rather than field-validated engineering specifications, and this limitation is explicitly stated in all quantitative claims.

**Building flexibility model.** A second-order resistance-capacitance (2R2C) thermal network will represent building envelope dynamics. Parameters will be identified from the U.S. Department of Energy Commercial Reference Building archetypes (medium office, small hotel) using EnergyPlus simulation outputs as ground truth. Flexible HVAC setpoint ranges will follow ASHRAE Standard 55 comfort bounds (operative temperature 20-26 degrees C). This parameterization approach is established in the demand response literature (Mathieu et al., 2013) and avoids dependence on proprietary building data.

**Microgrid test system.** The testbed will be an isolated microgrid with PV generation, a diesel backup generator, SLBESS, and flexible buildings. PV generation and load profiles will be drawn from the publicly available HOMER Energy island microgrid dataset and the Open Power System Data repository, which include hourly profiles for representative remote island locations. This provides a concrete, reproducible validation basis.

**Software.** The CC-MPC formulation will be implemented in Python using CVXPY with the Gurobi solver (academic license). Scenario generation for chance constraints will use a Gaussian copula to model correlated renewable and load uncertainty, with 200-500 scenarios per dispatch interval, which is computationally tractable on a standard workstation.

### 3.3 Sampling Strategy

This research is purely computational and simulation-based. No human subjects, physical specimens, or field measurements are involved.

### 3.4 Data Analysis

**For RQ1:** Sensitivity analysis will vary SLBESS initial SOH (60-85%), degradation rate, and number of battery strings. LOLP and EENS will be computed via Monte Carlo simulation over 1,000 annual scenarios (a tractable scale for a 15-minute resolution annual simulation). The functional relationship between SOH-dependent parameters and reliability indices will be characterized through regression analysis, producing a degradation-reliability response surface.

**For RQ2:** Building flexibility availability will be analyzed across seasons and occupancy schedules (weekday/weekend, commercial). The scope is bounded to two representative climate zones (temperate and tropical) and the two DOE Reference Building archetypes already parameterized, which is achievable within the PhD timeline. The reliability contribution of flexibility will be decomposed into three distinct benefit types: (i) short-duration peak shaving (reserve-like benefit, timescale minutes to 1–2 hours), (ii) ramping support during renewable ramp events, and (iii) energy-adequacy contribution during multi-hour low-generation periods. This decomposition is essential because isolated microgrid reliability is primarily constrained by long-duration energy adequacy, and building thermal flexibility has a physically bounded contribution to this dimension — thermal mass limits the duration of effective load shifting to approximately 2–6 hours depending on envelope parameters and outdoor conditions. The analysis will explicitly quantify the maximum substitution potential and the conditions under which it saturates, rather than asserting a general substitution capability. The equivalence curve constructed in RQ4 is therefore scoped to the energy-adequacy dimension and does not claim substitutability for long-duration adequacy events exceeding the thermal storage horizon.

**For RQ3:** The CC-MPC co-dispatch algorithm will be benchmarked against two baselines: deterministic MPC (no reliability constraints) and a rule-based dispatch heuristic. Performance metrics will include realized LOLP, constraint satisfaction rate, and average solve time per dispatch interval. The computational feasibility of real-time deployment (solve time under 5 minutes for a 15-minute dispatch interval) will be assessed on a standard workstation.

**For RQ4:** The reliability equivalence curve will be constructed by solving the co-dispatch model across a grid of (SLBESS capacity, building flexibility capacity) combinations and identifying the iso-LOLP contours. The curve is defined as a conditional relationship — valid for the specified testbed configuration (climate zone, building archetype, diesel backup capacity) — rather than a universal substitution law. For each target LOLP level, the curve traces the feasible combinations of SLBESS and building flexibility that achieve that target, enabling direct comparison of their marginal costs. The economic implications will be evaluated using annualized capital and replacement costs for SLBESS (from Bai et al., 2024) and building retrofit costs for flexibility enablement. Generalization of the curve to other configurations is treated as a Phase 3 extension, not a core PhD deliverable.

### 3.5 Limitations

The SLBESS degradation model is calibrated against laboratory cell data; field degradation under variable temperature and partial-state-of-charge cycling may deviate from laboratory trends. The 2R2C building thermal model sacrifices spatial resolution for tractability; multi-zone interactions and solar gains are approximated. The CC-MPC formulation assumes that the probability distributions of renewable generation and load uncertainty are known; in practice, distribution estimation from limited historical data introduces additional uncertainty. The reliability equivalence curve is derived for the specific building archetypes and climate profiles used in the testbed; generalization to other contexts requires re-parameterization.

## 4. Ethical Considerations

This research is purely computational and simulation-based, involving no human subjects, animal experiments, or personal data. All datasets used (NASA PCoE, CALCE, DOE Reference Buildings, Open Power System Data) are publicly available under open-access licenses. No ethical board approval is required. Should future work extend to field validation involving building occupants, informed consent and data privacy protocols will be developed in accordance with the host institution's ethics guidelines.

## 5. Timeline and Budget

### 5.1 Timeline

| Period | Activities |
|:-------|:-----------|
| Year 1, Sem 1 | Literature review; coursework; SLBESS degradation model development and calibration against NASA/CALCE datasets; RQ1 analysis (core deliverable) |
| Year 1, Sem 2 | Building 2R2C model parameterization; microgrid testbed assembly; RQ2 analysis for two archetypes and two climate zones |
| Year 2, Sem 1 | CC-MPC formulation and implementation; RQ3 analysis including per-interval to annual LOLP bridge validation |
| Year 2, Sem 2 | Reliability equivalence curve construction (RQ4) for primary testbed configuration; first journal paper submission |
| Year 3, Sem 1 | Sensitivity analysis across degradation states; extended validation for additional climate zones (extension scope); second journal paper submission |
| Year 3, Sem 2 | Thesis writing; conference presentation; defense preparation |

### 5.2 Budget

| Item | Estimated Cost (USD) |
|:-----|:---------------------|
| Software licenses (Gurobi academic) | $0 (academic license) |
| Cloud computing for extended scenario analysis | $1,500 |
| Conference travel (2 conferences) | $4,000 |
| Open-access publication fees (1 journal) | $2,500 |
| Miscellaneous (data storage, reference materials) | $500 |
| **Total** | **$8,500** |

## 6. Expected Outcomes and Contributions

**Deliverables:**
- A calibrated degradation-aware SLBESS model with publicly documented parameter sources
- A 2R2C building thermal flexibility model parameterized from DOE Reference Building archetypes
- A CC-MPC co-dispatch algorithm with open-source implementation
- A reliability equivalence curve methodology applicable to isolated microgrids with heterogeneous storage
- Two journal publications and one conference paper

**Theoretical contributions:**
- Formal derivation of the iso-LOLP reliability equivalence curve between supply-side storage degradation and demand-side thermal flexibility, scoped to the energy-adequacy dimension and conditioned on a specified testbed configuration
- Explicit analytical bridge from per-interval chance constraint violation probability to annual LOLP, via a risk budget allocation argument under weakly dependent dispatch intervals, validated against Monte Carlo simulation
- Embedding of reliability constraints in the operational dispatch layer for degraded battery systems, advancing beyond post-hoc reliability evaluation

**Practical implications:**
- A quantitative design tool for microgrid planners to determine the minimum building flexibility capacity that compensates for SLBESS degradation at a given reliability target
- Degradation-aware operational strategies that extend second-life battery service life while maintaining supply adequacy
- Evidence base for policy incentives that promote building grid-interactivity as a reliability resource in remote energy systems

**Alignment with Prof. Lei's research agenda:**
- This work directly extends the SLBESS reliability framework of Bai et al. (2024) by introducing building flexibility as a formally characterized complementary resource
- It bridges the building AC flexibility work of Ma et al. (2025) and the demand response analysis of Keskar et al. (2022) within a unified reliability-constrained formulation
- The chance-constrained MPC approach aligns with Prof. Lei's interest in optimization methods for resilient power systems under uncertainty

## 7. References

Ahmadi, L., Young, S. B., Fowler, M., Fraser, R. A., & Achachlouei, M. A. (2017). A cascaded life cycle: Reuse of electric vehicle lithium-ion battery packs in stationary applications. *International Journal of Life Cycle Assessment*, 22(1), 111-124.

Amin, S. M., & Wollenberg, B. F. (2005). Toward a smart grid: Power delivery for the 21st century. *IEEE Power and Energy Magazine*, 3(5), 34-41.

Bai, H., Lei, S., Geng, S., Hu, X., Li, Z., & Song, Z. (2024). Techno-economic assessment of isolated micro-grids with second-life batteries: A reliability-oriented iterative design framework. *Applied Energy*, 364, 123068. https://doi.org/10.1016/j.apenergy.2024.123068

Du, Y., Jiang, L., Diao, A., Liu, Y., & Li, Z. (2024). Reliability evaluation of microgrids with multi-state battery energy storage systems considering degradation. *Applied Energy*, 363, 123025.

Garcia, C. E., Prett, D. M., & Morari, M. (1989). Model predictive control: Theory and practice - A survey. *Automatica*, 25(3), 335-348.

Hu, X., Li, S., & Peng, H. (2012). A comparative study of equivalent circuit models for Li-ion batteries. *Journal of Power Sources*, 198, 359-367.

Jin, X., Baker, K., Isley, S., & Christensen, D. (2023). Grid-interactive efficient buildings: A review of demonstrations and value frameworks. *Applied Energy*, 334, 120684.

Keskar, A., Lei, S., Webb, T., Nagy, S., Hiskens, I. A., Mathieu, J. L., & Johnson, J. X. (2022). Assessing the performance of global thermostat adjustment in commercial buildings for load shifting demand response. *Environmental Research: Infrastructure and Sustainability*, 2, 015003.

Koller, M., Borsche, T., Ulbig, A., & Andersson, G. (2024). Review of second-life battery applications: From technical viability to economic potential. *Journal of Energy Storage*, 86, 111151.

Lasseter, R. H. (2011). Smart distribution: Coupled microgrids. *Proceedings of the IEEE*, 99(6), 1074-1082.

Lei, S., Pozo, D., Wang, M.-H., Li, Q., Li, Y., & Peng, C. (2022). Power economic dispatch against extreme weather conditions: The price of resilience. *Renewable and Sustainable Energy Reviews*, 157, 111994.

Lei, S., Wang, C., & Hou, Y. (2023). *Power grid resilience against natural disasters: Preparedness, response, and recovery*. John Wiley & Sons.

Ma, C., Lei, S., Chen, D., Wang, C., Hatziargyriou, N. D., & Song, Z. (2025). Sequential service restoration with grid-interactive flexibility from building AC systems for resilient microgrids under endogenous and exogenous uncertainties. *Applied Energy*, 377(B), 124351.

Mathieu, J. L., Koch, S., & Callaway, D. S. (2013). State estimation and control of electric loads to manage real-time energy imbalance. *IEEE Transactions on Power Systems*, 28(1), 430-440.

Perera, A. T. D., & Kamalaruban, P. (2024). Reinforcement learning for energy systems scheduling: A review of algorithms and applications. *Applied Energy*, 362, 122990.

Wei, T., Wang, Y., & Zhu, Q. (2024). Deep reinforcement learning for building energy management: A survey. *Sustainable Cities and Society*, 101, 105068.

Xie, Y., Zhang, H., & Li, Z. (2024). Degradation-aware energy management for second-life battery energy storage systems using mixed-integer programming. *Energy*, 289, 129931.

Xu, L., Lei, S., Srinivasan, D., & Song, Z. (2023). Can retired lithium-ion batteries be a game changer in fast charging stations? *eTransportation*, 18, 100297.

Zhu, X., Dong, H., & Cao, Y. (2023). Co-optimization of energy storage and demand response in microgrids under uncertainty. *IEEE Transactions on Smart Grid*, 14(4), 2897-2910.
