# Claude Skill: Write Research Proposal

**[English](#english) | [中文](#中文)**

---

<a id="english"></a>

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

## Platform-Specific Configuration

### Windows

1. **Install Node.js (v18+)** — Download from [nodejs.org](https://nodejs.org/) or use winget:
   ```powershell
   winget install OpenJS.NodeJS.LTS
   ```
   After installation, restart your terminal and verify:
   ```powershell
   node --version
   npm --version
   ```

2. **Install Claude Code** — Open a terminal (PowerShell or CMD) and run:
   ```powershell
   npm install -g @anthropic-ai/claude-code
   claude --version
   ```

3. **Clone and run**:
   ```powershell
   git clone <this-repo-url> my-proposal
   cd my-proposal
   claude
   ```
   Then type `/write-proposal` in the Claude Code prompt.

4. **Export proposal review as .docx** — The `generate_review_docx.js` script uses a hardcoded Windows path. Edit the output path in the script if needed, then run:
   ```powershell
   npm install
   node generate_review_docx.js
   ```

### macOS

1. **Install Node.js (v18+)** — Recommended via [Homebrew](https://brew.sh/):
   ```bash
   brew install node
   ```
   Or download the macOS installer from [nodejs.org](https://nodejs.org/). Verify:
   ```bash
   node --version
   npm --version
   ```

2. **Install Claude Code**:
   ```bash
   npm install -g @anthropic-ai/claude-code
   claude --version
   ```

3. **Clone and run**:
   ```bash
   git clone <this-repo-url> my-proposal
   cd my-proposal
   claude
   ```
   Then type `/write-proposal` in the Claude Code prompt.

4. **Export proposal review as .docx** — The `generate_review_docx.js` script has a hardcoded Windows path (`D:\\claude skill to write proposal\\...`). Before running on macOS, update the output path in the last line of the script to a macOS-compatible path, e.g.:
   ```js
   fs.writeFileSync("./Review of PhD Research Proposal.docx", buffer);
   ```
   Then run:
   ```bash
   npm install
   node generate_review_docx.js
   ```

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

---

<a id="中文"></a>

# 🎓 Claude Skill: Research Proposal 研究计划调试器

> ⚠️ 大多数 AI 写 proposal 的方式：生成一篇看起来很美的文章 → 导师问三个问题 → 精神崩溃 💀
>
> ✅ 这个 skill 的方式：先让你的研究逻辑扛得住拷问 → 再动笔 → 导师问什么都接得住 🛡️

---

## 🤔 这玩意儿和别的 AI 写 proposal 工具有什么区别？

市面上大部分 AI proposal 生成器，产出的文本表面上逻辑自洽、行文流畅，但经不起导师几个基本问题就被击穿。本 skill 不走"先生成再说"的路线——**按照你的research interests和具体研究领域的背景知识，再开始起草。**

具体来说，它会：

- 🔬 **分类你的 proposal 类型**，并锁定该类型最容易翻车的死穴
- 🧩 **识别每一个"新东西"到底是什么**——理论贡献？方法创新？设计产物？还是规划工具？别把仿真扫参包装成理论突破 🫣
- 💥 **审稿人压力测试**：在写一个字之前，模拟最刁钻的审稿人抛出 3-5 个致命反对意见，逐个击破
- 🌉 **跨层推理必须搭桥**：从组件级数据跳到系统级结论？必须写清楚桥接假设和风险等级
- 📏 **声明强度校准**：强/中/谨慎三档声明，语言和证据必须匹配——证据不足时绝不允许用了"validated"这种词
- 🎯 **候选人契合 + 导师契合，分开检查**

---

## 🔄 工作流程

```
Phase 1    📋 信息采集
             ├─ 三轮结构化提问：研究兴趣→导师文献→综述摘要
             ├─ 解析你的 CV：教育、科研经历、技能、获奖
             ├─ 构建导师画像：核心方向、论文脉络、方法趋势、未解问题
             └─ 综合综述文献：领域现状、关键缺口、新兴趋势

Phase 2    🧭 研究方向设计
             ├─ 交叉映射：你的兴趣 ∩ 导师的方向 = ？
             ├─ 缺口识别：综述文献支撑下的真实 open problems
             ├─ Proposal 类型分类：方法驱动 / 系统集成 / 理论应用 / 实证驱动
             ├─ 新颖构造分类：理论构造 / 方法装置 / 设计产物 / 规划工具
             ├─ 范围过滤：>2 个新颖组件 → 强制缩减，一个主贡献
             ├─ 候选人契合：你的 CV 撑得住这些方法吗？
             ├─ 导师契合：这个方向让导师有理由指导你吗？
             ├─ 金线验证：Problem → Aim → Objectives → RQs → Method 链条不断
             ├─ 多层一致性：跨层结果如何传递？缺什么桥？
             └─ 替代性分解：声称 A 替代 B？拆成维度、边界、饱和点

Phase 2.8  💥 审稿人压力测试    ← 方向在这里锁定！
             ├─ 最强卖点：一句话说清最站得住的核心
             ├─ Top 3-5 审稿人反对意见（从反对模式库抽取）
             ├─ 每条反对意见的具体消解策略（改范围/改方法/改措辞）
             ├─ 假设登记：假设内容 → 依据 → 风险等级 → 验证方法
             ├─ 桥接表：源层 → 目标层 → 桥接假设 → 风险等级
             └─ 声明强度校准：强/中/谨慎，语言必须匹配证据

Phase 2.9  📚 引文功能映射
             ├─ 构建 ~20 篇引用池（优先：导师论文→综述→定向搜索）
             └─ 按功能分类：[Context] [Gap] [Method] [Benchmark] [Limitation]

Phase 3    ✍️ 起草 Proposal    — 研究逻辑稳定之后才动笔
             ├─ 严格遵循模板结构：摘要→引言→文献综述→方法→伦理→时间线→意义
             ├─ 桥接表逻辑、假设登记、声明强度校准结果全部写入正文
             └─ 硬约束：不用"validated framework"等词、替代性声明必须分解、
                跨层推断必须写明桥接假设、主贡献必须可识别

Phase 4    ✅ 结构与概念验证
             ├─ 金线端到端贯通？
             ├─ 每个新颖构造已分类且贡献等级与措辞一致？
             ├─ 每条跨层桥接在方法和局限性中体现？
             ├─ 候选人契合 + 导师契合都满足？
             └─ 每条引文都有明确功能角色？

Phase 5    🖌️ 语言与格式润色
             ├─ Pass 1 致命错误：逻辑矛盾、术语不一致、严重语法问题
             ├─ Pass 2 学术语域：正式度、反AI腔调、句式规范
             ├─ Pass 3 声明校准：措辞超过证据强度 → 降级
             └─ Pass 4 格式清洁：乱码、断引号、坏表格、引文不匹配、占位符残留
```

---

## 🏗️ 设计原则（硬约束）

| 原则 | 含义 |
|------|------|
| 🎯 **一个主要贡献** | 超过两个新颖技术组件？强制缩减范围——一个主贡献，其余降级为支撑组件或未来工作 |
| 🧪 **仿真 ≠ 理论** | 靠参数扫描得出的构造，默认归类为"设计产物"或"规划工具"，除非你能给出定理或不变量 |
| 🔧 **替代性声明必须分解** | "A 可以替代 B"不是研究声明——替代维度、不可替代维度、时间尺度、物理极限、饱和点，缺一不可 |
| 🌉 **跨层推理必须搭桥** | 组件级数据→系统级声明？必须写明桥接假设和风险等级 |

---

## 📦 安装与使用

### 前置条件

你需要先安装 **Claude Code**——Anthropic 官方的命令行 AI 工具。

### Step 1: 安装 Claude Code 🚀

**方式一：通过 npm 安装（推荐）**

```bash
npm install -g @anthropic-ai/claude-code
```

> 💡 需要先安装 [Node.js](https://nodejs.org/) (v18+)。

**方式二：通过 VS Code 扩展**

1. 在 VS Code 中搜索并安装 **Claude Code** 扩展
2. 打开命令面板（`Ctrl+Shift+P`），搜索 "Claude Code: Open"

**方式三：桌面应用**

前往 [claude.ai/code](https://claude.ai/code) 下载 Windows / macOS 桌面客户端。

安装完成后，在终端中验证：

```bash
claude --version
```

> 🔑 首次使用需要 Anthropic API Key 或 Claude Pro/Team 订阅。运行 `claude` 后按提示登录即可。

### Step 2: 安装本 Skill 🛠️

```bash
# 克隆本项目到你的工作目录
git clone <this-repo-url> my-proposal
cd my-proposal
```

或者，将本项目的 `.claude/` 文件夹复制到你已有的项目目录中：

```bash
# 假设你已经在自己的项目目录下
cp -r /path/to/this-repo/.claude .
```

### Step 3: 启动 🎬

```bash
# 在项目目录下启动 Claude Code
claude

# 然后在 Claude Code 中输入：
/write-proposal
```

接下来就会启动交互式的引导流程，一步步帮你调试研究设计并生成 proposal。

---

## 💻 平台专属配置

### Windows

1. **安装 Node.js (v18+)** — 从 [nodejs.org](https://nodejs.org/) 下载安装包，或使用 winget：
   ```powershell
   winget install OpenJS.NodeJS.LTS
   ```
   安装后重启终端，验证：
   ```powershell
   node --version
   npm --version
   ```

2. **安装 Claude Code** — 打开终端（PowerShell 或 CMD），执行：
   ```powershell
   npm install -g @anthropic-ai/claude-code
   claude --version
   ```

3. **克隆并运行**：
   ```powershell
   git clone <this-repo-url> my-proposal
   cd my-proposal
   claude
   ```
   在 Claude Code 提示符中输入 `/write-proposal` 即可启动。

4. **导出 proposal 评审为 .docx** — `generate_review_docx.js` 脚本中的输出路径为硬编码的 Windows 路径。如需修改，编辑脚本中的路径即可。运行：
   ```powershell
   npm install
   node generate_review_docx.js
   ```

### macOS

1. **安装 Node.js (v18+)** — 推荐通过 [Homebrew](https://brew.sh/) 安装：
   ```bash
   brew install node
   ```
   或从 [nodejs.org](https://nodejs.org/) 下载 macOS 安装包。验证：
   ```bash
   node --version
   npm --version
   ```

2. **安装 Claude Code**：
   ```bash
   npm install -g @anthropic-ai/claude-code
   claude --version
   ```

3. **克隆并运行**：
   ```bash
   git clone <this-repo-url> my-proposal
   cd my-proposal
   claude
   ```
   在 Claude Code 提示符中输入 `/write-proposal` 即可启动。

4. **导出 proposal 评审为 .docx** — `generate_review_docx.js` 脚本中的输出路径是 Windows 硬编码路径（`D:\\claude skill to write proposal\\...`）。在 macOS 上运行前，需将脚本最后一行的输出路径改为 macOS 兼容路径，例如：
   ```js
   fs.writeFileSync("./Review of PhD Research Proposal.docx", buffer);
   ```
   然后运行：
   ```bash
   npm install
   node generate_review_docx.js
   ```

---

## 📂 文件结构

```
.claude/
  skills/
    write-proposal/
      SKILL.md                          ← 🧠 skill 控制器（工作流各阶段逻辑）
      references/
        intake-questions.md             ← 📋 三轮信息采集协议
        reviewer-heuristics.md          ← 👁️ 导师/审稿人反对意见模式库
        method-bridging-patterns.md     ← 🌉 桥接表、假设登记、贡献分类、
                                             替代性模板、声明强度校准
        proposal-quality-checklist.md   ← ✅ 结构验证清单
        writing-and-citation-rules.md   ← 📝 APA 引用规则与语言润色规范
CLAUDE.md                               ← 🏠 项目级 Claude Code 指令
Research Proposal Template.md           ← 📄 逐章节 proposal 结构指南
Checklist - Proposal.md                 ← 📋 独立质量清单（可单独使用）
Sample Proposal 2.md                    ← 📖 示例 proposal（城市绿地与压力）
generate_review_docx.js                 ← 🔧 工具：导出 proposal 评审为 .docx
package.json
```

---

## 🛠️ 辅助工具

| 文件 | 说明 |
|------|------|
| `Research Proposal Template.md` | 逐章节的 proposal 结构指南 |
| `Checklist - Proposal.md` | 独立质量清单，拿来就能用 |
| `Sample Proposal 2.md` | 示例 proposal：城市绿地与应激反应（心理生理学视角） |
| `generate_review_docx.js` | Node.js 脚本，把 proposal 评审导出为 Word 文档（`npm install` 后运行 `node generate_review_docx.js`） |

---

## 🧭 适用场景

- 🎓 正在准备 PhD 申请，需要写 research proposal
- 👨‍🏫 想确保你的 proposal 能经得住导师的灵魂拷问
- 💰 申请奖学金，需要 proposal 逻辑无懈可击
- 🔄 已有初稿，但被导师打回，需要诊断问题出在哪

---

## ⚡ 快速开始

```bash
# 1. 安装 Claude Code
npm install -g @anthropic-ai/claude-code

# 2. 克隆本项目
git clone <this-repo-url> && cd my-proposal

# 3. 启动！
claude
# 输入 /write-proposal 开始
```

祝你的 proposal 一次过 🎉

---

## ⚠️ 免责声明

本 skill **不是**替你写 research proposal 的。

它帮你做的是：先把研究逻辑调试到站得住脚，然后生成一份**初稿**——省去你自己对着空白文档发呆、逐字敲键盘的时间。

拿到初稿之后，**你需要做的是润色和吃透内容**。逐段检查措辞是否准确，补充你自己独到的见解，确保每一个论点都是你真正理解并认同的。面试时导师问起来，你得能自信地展开讨论，而不是"呃这个是 AI 写的我不太清楚"。

一句话总结：

> 💩 先做一坨屎，然后在屎上雕花 🌸
>
> 关键是——屎的骨架（研究逻辑）得先搭对，雕花才有意义。
