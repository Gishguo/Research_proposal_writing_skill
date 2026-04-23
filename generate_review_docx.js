const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel,
  LevelFormat, BorderStyle, WidthType, ShadingType, Header, Footer, PageNumber
} = require("docx");

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 24 }
      }
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: "1F3864" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "2E75B6" },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 }
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: "404040" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      },
      {
        reference: "numbers-main",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      },
      {
        reference: "numbers-summary",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      },
      {
        reference: "numbers-suggestions",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({ text: "PhD Research Proposal Review", font: "Arial", size: 18, color: "999999", italics: true })]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Page ", font: "Arial", size: 18, color: "999999" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 18, color: "999999" })
          ]
        })]
      })
    },
    children: [
      // Title
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "Review of PhD Research Proposal", bold: true, size: 36, color: "1F3864", font: "Arial" })]
      }),

      // Proposal Title section
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Proposal Title")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "Quantifying the Reliability Equivalence of Building Thermal Flexibility for Degraded Second-Life Battery Storage in Isolated Microgrids", italics: true })]
      }),

      // Overall Evaluation
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Overall Evaluation")]
      }),
      ...[
        "This is a strong and well-positioned PhD research proposal that addresses an important problem at the intersection of isolated microgrids, second-life battery energy storage, building flexibility, and reliability-oriented operational planning. The topic is closely aligned with current research needs in resilient and low-carbon power systems, and it is also highly relevant to my research agenda on reliability, resilience, and optimization under uncertainty.",
        "The proposal demonstrates clear academic maturity in several respects. First, the candidate identifies a specific and meaningful research gap rather than presenting a generic “AI for energy systems” topic. Second, the proposal is logically structured, with a coherent progression from problem statement to literature review, methodology, and expected contributions. Third, the proposed use of chance-constrained model predictive control to co-dispatch degraded second-life batteries and flexible building loads is methodologically reasonable and potentially publishable.",
        "That said, while the proposal is promising, it is not yet fully convincing at the level required for an unconditional top-priority scholarship recommendation. Its core idea is good, but several methodological and conceptual issues need to be sharpened before the project can be considered fully mature."
      ].map(text => new Paragraph({ spacing: { after: 160 }, children: [new TextRun(text)] })),

      // Major Strengths
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Major Strengths")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("1. Strong relevance and originality")]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("The proposal targets a timely and underexplored question: whether building thermal flexibility can compensate for the reliability shortfall created by degradation in second-life battery storage. This is a novel and potentially impactful direction.")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("2. Good alignment with supervisor expertise")]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("The work is clearly positioned within the areas of microgrid reliability, resilient energy systems, uncertainty-aware optimization, and flexible demand resources. The fit with Prof. Lei’s research profile is very strong.")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("3. Clear structure and research logic")]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("The proposal is well organized. The aim, objectives, and research questions are well aligned, and the writing shows that the applicant understands how to formulate a doctoral research problem in a structured way.")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("4. Reasonable methodological direction")]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("The choice of a model-based optimization framework is appropriate. In this context, chance-constrained MPC is a more defensible PhD methodology than a purely data-driven or reinforcement learning approach, especially when reliability guarantees are central.")]
      }),

      // Main Concerns
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Main Concerns")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("1. The notion of “reliability equivalence” is not yet rigorously defined")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("The proposal repeatedly presents the reliability equivalence curve as the central scientific contribution, but it remains unclear whether this equivalence is intended to be:")]
      }),
      ...[
        "a local marginal substitution relation,",
        "a scenario-specific design result,",
        "or a generalizable theoretical relationship."
      ].map(text => new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 60 },
        children: [new TextRun(text)]
      })),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("At present, there is a risk that the “equivalence curve” may turn out to be a useful numerical planning artifact rather than a true theoretical contribution. The proposal would be stronger if it clarified the mathematical meaning, scope, and limits of this equivalence concept.")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("2. The link between operational chance constraints and planning-level reliability indices is underdeveloped")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("The proposal combines real-time chance-constrained dispatch with annual reliability indices such as LOLP and EENS. However, it does not sufficiently explain how probabilistic constraints enforced at the dispatch stage translate into annual adequacy outcomes. This is a key issue.")]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("Without a clear bridge between these two layers, the methodological foundation remains incomplete. The candidate needs to explain how reliability targets are allocated, measured, and validated across time scales.")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("3. The data-model chain is somewhat heterogeneous")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("The proposal integrates:")]
      }),
      ...[
        "laboratory battery degradation datasets,",
        "building thermal archetypes,",
        "and public microgrid demand/generation data."
      ].map(text => new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 60 },
        children: [new TextRun(text)]
      })),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("This is acceptable for simulation-based PhD work, but it also raises concerns about external validity. In particular, cell-level battery aging data do not directly translate into pack-level second-life operational reliability without additional assumptions regarding module heterogeneity, BMS constraints, thermal effects, and failure behavior.")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("4. The scope may be too broad for a PhD timeline")]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("The proposal attempts to cover degradation modeling, thermal flexibility characterization, stochastic operational control, annual reliability assessment, and economic design trade-offs, all within a three-year period. This is ambitious. A more focused first-phase research plan would improve feasibility. The candidate may need to narrow the scope initially and treat the reliability equivalence analysis as a later-stage extension rather than the immediate centerpiece.")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("5. Building flexibility may be somewhat overestimated as a reliability substitute")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("The proposal assumes that thermal flexibility can substitute for degraded storage capacity in a reliability sense. This is plausible in part, but the candidate should distinguish more carefully between:")]
      }),
      ...[
        "short-term load shifting value,",
        "peak reduction value,",
        "reserve provision value,",
        "and long-duration adequacy value."
      ].map(text => new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 60 },
        children: [new TextRun(text)]
      })),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("Without this distinction, the proposal risks overstating the substitutability between buildings and batteries.")]
      }),

      // Recommendation on Admission
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Recommendation on Admission")]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [
          new TextRun({ text: "I would recommend admission.", bold: true }),
        ]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("The proposal shows clear potential for doctoral research, and the applicant appears capable of developing this topic into a solid PhD project under appropriate supervision. The candidate demonstrates good problem formulation ability, awareness of the literature, and a research direction that is both relevant and publishable.")]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("However, my recommendation is admission with refinement, not unconditional endorsement of the proposal in its current form. The project should be narrowed and conceptually tightened during the first stage of doctoral study.")]
      }),

      // Recommendation on Scholarship
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Recommendation on Scholarship")]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("I would consider the candidate for scholarship support, but I would not rank this proposal at the highest priority tier without a strong interview or further clarification.")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("My reasoning is as follows:")]
      }),
      ...[
        "The proposal is stronger than the average PhD application in topic selection and structure.",
        "It has credible publication potential.",
        "But several core methodological assumptions remain insufficiently resolved.",
        "Therefore, while the applicant deserves serious consideration for funding, this proposal does not yet justify an automatic top-tier scholarship recommendation on paper alone."
      ].map(text => new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 60 },
        children: [new TextRun(text)]
      })),

      // Summary box
      new Paragraph({ spacing: { before: 200 }, children: [] }),
      new Paragraph({
        spacing: { after: 80 },
        border: { top: { style: BorderStyle.SINGLE, size: 6, color: "2E75B6", space: 4 } },
        children: []
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Admission: ", bold: true }),
          new TextRun({ text: "Yes", color: "2E75B6", bold: true })
        ]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Scholarship: ", bold: true }),
          new TextRun({ text: "Yes, potentially", color: "2E75B6", bold: true })
        ]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [
          new TextRun({ text: "Scholarship priority: ", bold: true }),
          new TextRun({ text: "Moderate to strong, but not top tier at this stage", color: "D4A017", bold: true })
        ]
      }),
      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "2E75B6", space: 4 } },
        children: []
      }),

      // Suggestions for Improvement
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Suggestions for Improvement")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("Before final acceptance or scholarship ranking, I would expect the candidate to strengthen the proposal in the following ways:")]
      }),
      ...[
        "Define “reliability equivalence” more rigorously and state its boundary conditions.",
        "Clarify how chance-constrained operational decisions are linked to annual reliability metrics such as LOLP and EENS.",
        "Narrow the initial scope to one microgrid setting and a limited set of building archetypes.",
        "State more explicitly the assumptions needed to translate cell-level aging data into system-level SLBESS reliability behavior.",
        "Distinguish between different forms of flexibility value, rather than treating all building flexibility as directly substitutable for storage capacity."
      ].map(text => new Paragraph({
        numbering: { reference: "numbers-suggestions", level: 0 },
        spacing: { after: 80 },
        children: [new TextRun(text)]
      })),

      // Final Verdict
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Final Verdict")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("This is a promising and well-aligned proposal from a capable applicant. I would be willing to supervise this student and would support admission. I would also support scholarship consideration, although I would reserve the strongest level of endorsement until the methodological foundations are sharpened further, ideally through interview discussion or a revised proposal.")]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("D:\\claude skill to write proposal\\Review of PhD Research Proposal.docx", buffer);
  console.log("Document created successfully!");
});
