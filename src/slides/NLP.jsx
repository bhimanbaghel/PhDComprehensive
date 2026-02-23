import { C } from "../theme";
import { Tag, Gap, Insight, Card } from "../components/Shared";

export const S_NLP_Title = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 20 }}>
    <div style={{ fontSize: 13, letterSpacing: 5, color: C.accent, textTransform: "uppercase", fontWeight: 600 }}>Part I</div>
    <h1 style={{ fontSize: 44, fontWeight: 800, margin: 0 }}>NLP</h1>
    <p style={{ fontSize: 20, color: C.textDim, margin: 0 }}>Interpretable and Efficient Reasoning in Language Models</p>
    <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap", justifyContent: "center" }}>
      {["Data Attribution", "Chain-of-Thought", "Prompt Opt.", "Faithfulness", "Steering & PEFT", "Mech. Interp."].map((s, i) => (
        <span key={i} style={{ background: `${C.accent}20`, color: C.accentLight, padding: "5px 14px", borderRadius: 16, fontSize: 13, fontWeight: 500 }}>{s}</span>
      ))}
    </div>
  </div>
);

export const S_DataAttr = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 16, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.accent, fontWeight: 600 }}>§2</span><h2 style={{ fontSize: 30, fontWeight: 700, margin: "4px 0 0" }}>Data Attribution: Which Training Data Enables Reasoning?</h2></div>
    <div style={{ display: "flex", gap: 14 }}>
      {[
        { n: "Data Shapley", v: "ICML '19", d: "Game-theoretic Shapley values — gold standard for fair attribution", i: "★★★", e: "★☆☆" },
        { n: "LESS", v: "ICML '24", d: "Low-rank gradient similarity → small fraction matches full fine-tuning", i: "★★☆", e: "★★☆" },
        { n: "DataInf", v: "ICLR '24", d: "Exploits LoRA's low-rank structure → closed-form, billion-scale", i: "★★☆", e: "★★★" },
      ].map((p, i) => (
        <Card key={i} title={p.n} sub={<Tag venue={p.v} />} accent={`linear-gradient(to right, ${C.accent}, ${C.cyan})`}>
          <p style={{ margin: 0, fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>{p.d}</p>
          <div style={{ marginTop: "auto", display: "flex", gap: 10, fontSize: 12 }}>
            <span style={{ color: C.green }}>Interp: {p.i}</span><span style={{ color: C.orange }}>Eff: {p.e}</span>
          </div>
        </Card>
      ))}
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
      <div style={{ width: 50, height: 2, background: C.accent }} /><span style={{ fontSize: 12, color: C.textMuted }}>Theoretical rigor → Practical scalability</span><div style={{ width: 50, height: 2, background: C.orange }} />
    </div>
    <Gap>Multi-stage pipeline attribution unsolved. No framework traces reasoning back through pretraining → SFT → RLHF. Connects to RL §5.</Gap>
  </div>
);

export const S_CoT = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 16, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.accent, fontWeight: 600 }}>§3</span><h2 style={{ fontSize: 30, fontWeight: 700, margin: "4px 0 0" }}>Chain-of-Thought: Making Reasoning Visible</h2></div>
    <div style={{ display: "flex", gap: 14 }}>
      {[
        { n: "CoT Prompting", r: "Wei+ NeurIPS '22", d: "\"Let's think step by step\" — visible reasoning, training-free.", cost: "1× pass", acc: "Baseline" },
        { n: "Self-Consistency", r: "Wang+ ICLR '23", d: "Sample k paths, majority vote. Robustness through aggregation.", cost: "k× passes", acc: "Higher" },
        { n: "Tree of Thoughts", r: "Yao+ NeurIPS '23", d: "Tree-structured exploration with LLM self-eval and backtracking.", cost: "Many calls", acc: "Highest" },
      ].map((p, i) => (
        <Card key={i} title={p.n}>
          <p style={{ margin: 0, fontSize: 13, color: C.textDim, lineHeight: 1.5, flex: 1 }}>{p.d}</p>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
            <span style={{ color: C.orange }}>Cost: {p.cost}</span><span style={{ color: C.green }}>Acc: {p.acc}</span>
          </div>
        </Card>
      ))}
    </div>
    <div style={{ textAlign: "center" }}><span style={{ fontSize: 13, color: C.textMuted }}>Richer structure → Better accuracy → </span><span style={{ fontSize: 13, color: C.orange, fontWeight: 600 }}>More compute</span></div>
    <Insight color={C.orange}>⚠️ <strong>Shared blind spot:</strong> All evaluate only final-answer correctness. Whether intermediate steps are actually used by the model is unexamined. → See §5 Faithfulness</Insight>
  </div>
);

export const S_CoT_Eff = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 16, padding: "0 16px" }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Compressing Chain-of-Thought: Three Strategies</h2>
    <div style={{ display: "flex", gap: 14 }}>
      {[
        { n: "Implicit CoT", r: "Deng+ NeurIPS '24", s: "Distill into layer-wise computation — tokens disappear entirely", ok: false, e: "Maximum", c: C.red, i: "🔴" },
        { n: "TALE", r: "Han+ ACL '25", s: "Dynamic per-problem token budget based on estimated difficulty", ok: true, e: "Moderate", c: C.green, i: "🟢" },
        { n: "NoWait", r: "Wang+ EMNLP '25", s: "Suppress reflection keywords (\"Wait,\" \"Hmm\") during inference", ok: true, e: "Surprising", c: C.cyan, i: "🔵" },
      ].map((p, j) => (
        <Card key={j} title={<span>{p.i} {p.n}</span>} border={`${p.c}30`}>
          <p style={{ margin: 0, fontSize: 13, color: C.textDim, lineHeight: 1.5, flex: 1 }}>{p.s}</p>
          <div style={{ fontSize: 12, display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: p.ok ? C.green : C.red }}>{p.ok ? "✓ Interpretable" : "✗ Opaque"}</span>
            <span style={{ color: C.orange }}>Eff: {p.e}</span>
          </div>
        </Card>
      ))}
    </div>
    <Insight color={C.cyan}>💡 <strong>NoWait's Key Insight:</strong> Suppressing reflection keywords substantially shortens chains <strong>without hurting accuracy</strong> — much extended thinking is <strong style={{ color: C.red }}>redundant filler</strong>. Connects to DeepSeek-R1's overthinking problem (RL §3).</Insight>
  </div>
);

export const S_Prompt = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 20, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.accent, fontWeight: 600 }}>§4</span><h2 style={{ fontSize: 30, fontWeight: 700, margin: "4px 0 0" }}>Automatic Prompt Optimization</h2></div>
    <div style={{ display: "flex", gap: 20 }}>
      {[
        { n: "APE", g: "1st Gen", r: "Zhou+ ICLR '23", d: "Black-box optimization. Auto-generated CoT instructions outperform human.", k: "Established prompt quality as bottleneck for reasoning." },
        { n: "GEPA", g: "2nd Gen", r: "Chen+ NeurIPS '25", d: "Iterative self-reflection → extracts generalizable rules and guidelines.", k: "Matches RL-based approaches while being far more interpretable — rules reveal which strategies the model responds to." },
      ].map((p, i) => (
        <Card key={i} title={p.n} sub={<span style={{ fontSize: 12, color: C.accent, fontWeight: 600, background: `${C.accent}15`, padding: "3px 10px", borderRadius: 8 }}>{p.g}</span>}>
          <p style={{ margin: 0, fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>{p.d}</p>
          <div style={{ background: `${C.green}10`, borderRadius: 8, padding: "8px 12px" }}><p style={{ margin: 0, fontSize: 12, color: C.green }}>✦ {p.k}</p></div>
        </Card>
      ))}
    </div>
    <Insight color={C.accentLight}><strong>Why this matters:</strong> Discrete prompt optimization keeps artifacts human-readable and auditable — unlike soft prompts (§6) or RL reward shaping.</Insight>
  </div>
);

export const S_Faith1 = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 18, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.red, fontWeight: 600 }}>§5</span><h2 style={{ fontSize: 30, fontWeight: 700, margin: "4px 0 0" }}>Faithfulness: Is Visible Reasoning Real Reasoning?</h2></div>
    <div style={{ background: `${C.red}12`, border: `1.5px solid ${C.red}40`, borderRadius: 12, padding: "14px 20px", textAlign: "center" }}>
      <p style={{ margin: 0, fontSize: 17, color: C.red, fontWeight: 700 }}>"Models can 'show their work' while that work is disconnected from the actual decision process"</p>
    </div>
    <div style={{ display: "flex", gap: 14 }}>
      <Card title="Lanham et al." sub={<Tag venue="Anthropic '23" />}>
        <p style={{ margin: 0, fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>Behavioral metrics: early answering, mistake injection, paraphrasing.</p>
        <div style={{ background: `${C.red}10`, borderRadius: 8, padding: "8px 12px" }}><p style={{ margin: 0, fontSize: 12, color: C.red, fontWeight: 600 }}>📉 Inverse Scaling: larger models produce <em>less</em> faithful reasoning</p></div>
      </Card>
      <Card title="Turpin et al." sub={<Tag venue="NeurIPS '23" />}>
        <p style={{ margin: 0, fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>Biases (answer ordering) causally influence outputs.</p>
        <div style={{ background: `${C.red}10`, borderRadius: 8, padding: "8px 12px" }}><p style={{ margin: 0, fontSize: 12, color: C.red, fontWeight: 600 }}>🔗 Systematic: CoT <em>never</em> acknowledges these influences</p></div>
      </Card>
    </div>
    <p style={{ margin: 0, fontSize: 13, color: C.textMuted, textAlign: "center" }}>Together, these challenge the core interpretability promise of CoT from §3.</p>
  </div>
);

export const S_Faith2 = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 20, padding: "0 16px" }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Addressing Unfaithfulness: Two Approaches</h2>
    <div style={{ display: "flex", gap: 20 }}>
      <div style={{ flex: 1, background: C.card, borderRadius: 12, padding: 22, border: `1.5px solid ${C.green}30` }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.green, textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>Faithful by Construction</div>
        <h4 style={{ margin: "0 0 8px", fontSize: 16, color: C.text }}>Lyu et al. <span style={{ fontSize: 12, color: C.textMuted }}>(IJCNLP-AACL '23)</span></h4>
        <p style={{ margin: "0 0 12px", fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>NL → symbolic chains → deterministic solver. Visible reasoning <strong style={{ color: C.green }}>is</strong> the computation.</p>
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ fontSize: 11, color: C.green, background: `${C.green}15`, padding: "3px 10px", borderRadius: 8 }}>✓ Guaranteed</span>
          <span style={{ fontSize: 11, color: C.red, background: `${C.red}15`, padding: "3px 10px", borderRadius: 8 }}>✗ Formalizable tasks only</span>
        </div>
      </div>
      <div style={{ flex: 1, background: C.card, borderRadius: 12, padding: 22, border: `1.5px solid ${C.cyan}30` }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.cyan, textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>Verification</div>
        <h4 style={{ margin: "0 0 8px", fontSize: 16, color: C.text }}>Tutek et al. <span style={{ fontSize: 12, color: C.textMuted }}>('25)</span></h4>
        <p style={{ margin: "0 0 12px", fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>Erase reasoning-step info from parameters → measure prediction change. Bridges mech. interp ↔ faithfulness.</p>
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ fontSize: 11, color: C.green, background: `${C.green}15`, padding: "3px 10px", borderRadius: 8 }}>✓ General</span>
          <span style={{ fontSize: 11, color: C.cyan, background: `${C.cyan}15`, padding: "3px 10px", borderRadius: 8 }}>Bridges §7 ↔ §5</span>
        </div>
      </div>
    </div>
    <Gap>Training objectives that incentivize genuine faithfulness are underdeveloped. RLHF optimizes for answer correctness — reward maximization may actively <em>train</em> unfaithful rationales. → RL §5</Gap>
  </div>
);

export const S_Steer = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 16, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.accent, fontWeight: 600 }}>§6</span><h2 style={{ fontSize: 28, fontWeight: 700, margin: "4px 0 0" }}>Internal Control: Steering and PEFT</h2></div>
    <div style={{ display: "flex", gap: 16 }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 14, color: C.pink, fontWeight: 700, margin: "0 0 10px" }}>⚡ Steering (Inference-time)</h3>
        {[
          { n: "CAA", r: "Rimsky+ '24", d: "Contrastive activation addition" },
          { n: "ITI", r: "Li+ NeurIPS '23", d: "Shift activations along \"truthful\" directions" },
        ].map((p, i) => (
          <div key={i} style={{ background: C.card, borderRadius: 10, padding: 12, border: `1px solid ${C.border}`, marginBottom: 8 }}>
            <h4 style={{ margin: "0 0 3px", fontSize: 13, color: C.text }}>{p.n} <span style={{ color: C.textMuted, fontSize: 11 }}>({p.r})</span></h4>
            <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>{p.d}</p>
          </div>
        ))}
        <div style={{ background: `${C.orange}10`, borderRadius: 10, padding: 12, border: `1px solid ${C.orange}30` }}>
          <h4 style={{ margin: "0 0 3px", fontSize: 13, color: C.orange }}>⚠️ Tan et al. (NeurIPS '24)</h4>
          <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>Many behaviors "unsteerable" or "anti-steerable"</p>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 14, color: C.cyan, fontWeight: 700, margin: "0 0 10px" }}>🔧 PEFT (Training-time)</h3>
        {[
          { n: "LoRA", r: "Hu+ ICLR '22", d: "Low-rank weight updates", hl: false },
          { n: "Prompt Tuning", r: "Lester+ EMNLP '21", d: "Learned embeddings — effective but opaque", hl: false },
          { n: "ReFT", r: "Wu+ '24", d: "Hidden representation interventions ≈ learned steering", hl: true },
        ].map((p, i) => (
          <div key={i} style={{ background: p.hl ? `${C.accent}10` : C.card, borderRadius: 10, padding: 12, border: `1px solid ${p.hl ? C.accent + "40" : C.border}`, marginBottom: 8 }}>
            <h4 style={{ margin: "0 0 3px", fontSize: 13, color: C.text }}>{p.n} <span style={{ color: C.textMuted, fontSize: 11 }}>({p.r})</span></h4>
            <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>{p.d}</p>
          </div>
        ))}
      </div>
    </div>
    <Insight color={C.accentLight}>🔗 <strong>Convergence:</strong> ReFT ≈ learned steering → same geometry? | <strong style={{ color: C.red }}>Gap:</strong> Is <em>reasoning ability</em> steerable? Untested.</Insight>
  </div>
);

export const S_Mech1 = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 14, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.accent, fontWeight: 600 }}>§7</span><h2 style={{ fontSize: 28, fontWeight: 700, margin: "4px 0 0" }}>Mechanistic Interpretability: How Models Compute</h2></div>
    <div style={{ display: "flex", gap: 14 }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 14, color: C.accentLight, fontWeight: 700, margin: "0 0 8px" }}>Foundational Circuits</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: C.card, borderRadius: 10, padding: 12, border: `1px solid ${C.border}` }}>
            <h4 style={{ margin: "0 0 3px", fontSize: 13, color: C.text }}>Induction Heads <span style={{ color: C.textMuted, fontSize: 11 }}>(Olsson+ '22)</span></h4>
            <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>Copy-and-complete → underlies in-context learning</p>
          </div>
          <div style={{ background: C.card, borderRadius: 10, padding: 12, border: `1px solid ${C.border}` }}>
            <h4 style={{ margin: "0 0 3px", fontSize: 13, color: C.text }}>IOI Circuit <span style={{ color: C.textMuted, fontSize: 11 }}>(Wang+ ICLR '23)</span></h4>
            <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>26-head pipeline, causally validated</p>
          </div>
        </div>
        <p style={{ fontSize: 11, color: C.orange, marginTop: 6 }}>⚠️ Single-step tasks — not multi-step reasoning</p>
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 14, color: C.accentLight, fontWeight: 700, margin: "0 0 8px" }}>Knowledge Storage</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: C.card, borderRadius: 10, padding: 12, border: `1px solid ${C.border}` }}>
            <h4 style={{ margin: "0 0 3px", fontSize: 13, color: C.text }}>ROME / MEMIT <span style={{ color: C.textMuted, fontSize: 11 }}>(Meng+ '22,'23)</span></h4>
            <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>MLPs as key-value memories; targeted editing</p>
          </div>
          <div style={{ background: `${C.red}08`, borderRadius: 10, padding: 12, border: `1px solid ${C.red}20` }}>
            <h4 style={{ margin: "0 0 3px", fontSize: 13, color: C.red }}>Hase+ / UnKE / Lottery Ticket</h4>
            <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>Localization ≠ editability; knowledge is <strong>distributed</strong>; &lt;10% params suffice</p>
          </div>
        </div>
      </div>
    </div>
    <div style={{ background: C.surface, borderRadius: 10, padding: "10px 16px", border: `1px solid ${C.border}`, textAlign: "center" }}>
      <p style={{ margin: 0, fontSize: 13, color: C.textMuted }}><strong style={{ color: C.text }}>Takeaway:</strong> Clean mechanistic stories may not reflect actual organization — cautionary for reasoning circuits</p>
    </div>
  </div>
);

export const S_Mech2 = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 16, padding: "0 16px" }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Scaling Tools → Reasoning Circuits</h2>
    <div style={{ display: "flex", gap: 14 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <h3 style={{ fontSize: 14, color: C.cyan, fontWeight: 700, margin: 0 }}>Scaling Tools</h3>
        <Card title="SAEs + Scaling Mono."><p style={{ margin: 0, fontSize: 12, color: C.textDim, lineHeight: 1.5 }}>Sparse autoencoders → millions of interpretable features from Claude 3 Sonnet (Anthropic '24)</p></Card>
        <Card title="Auto Circuit Discovery"><p style={{ margin: 0, fontSize: 12, color: C.textDim, lineHeight: 1.5 }}>Activation patching at scale (Conmy+ NeurIPS '23)</p></Card>
      </div>
      <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: 8 }}>
        <h3 style={{ fontSize: 14, color: C.green, fontWeight: 700, margin: 0 }}>🔬 Toward Reasoning Circuits</h3>
        <div style={{ background: `${C.green}08`, borderRadius: 10, padding: 14, border: `1.5px solid ${C.green}30`, flex: 1 }}>
          <h4 style={{ margin: "0 0 4px", fontSize: 13, color: C.green }}>Iteration Head <span style={{ color: C.textMuted, fontSize: 11 }}>(Cabannes+ NeurIPS '24)</span></h4>
          <p style={{ margin: 0, fontSize: 12, color: C.textDim, lineHeight: 1.5 }}>Specialized attention for iterative algorithms via CoT. Transfers across tasks. <strong style={{ color: C.orange }}>Synthetic only.</strong></p>
        </div>
        <div style={{ background: `${C.green}08`, borderRadius: 10, padding: 14, border: `1.5px solid ${C.green}30`, flex: 1 }}>
          <h4 style={{ margin: "0 0 4px", fontSize: 13, color: C.green }}>"How does CoT Think?" <span style={{ color: C.textMuted, fontSize: 11 }}>(Chen+ '25)</span></h4>
          <p style={{ margin: 0, fontSize: 12, color: C.textDim, lineHeight: 1.5 }}>SAEs on Pythia/GSM8K: CoT causal in <strong style={{ color: C.text }}>2.8B</strong> but NOT 70M → <strong>scale threshold</strong></p>
        </div>
      </div>
    </div>
    <Insight color={C.accentLight}>💡 CoT induces higher activation sparsity → more modular computation → evidence it <strong>genuinely restructures internals</strong> at sufficient scale. Addresses faithfulness §5 — but only above a capacity threshold.</Insight>
  </div>
);

export const S_NLP_Gaps = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 20, textAlign: "center" }}>
    <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>NLP: Key Open Problems</h2>
    <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 680, width: "100%" }}>
      {[
        { n: 1, t: "Multi-stage pipeline attribution (pretraining → SFT → RLHF)", l: "→ RL §5" },
        { n: 2, t: "Adaptive reasoning depth (learned, not heuristic)", l: "" },
        { n: 3, t: "Training objectives for CoT faithfulness", l: "→ RL §5" },
        { n: 4, t: "Reasoning circuits in frontier models (not synthetic)", l: "→ Vision §7" },
        { n: 5, t: "Unifying steering, PEFT, and representation intervention", l: "→ Vision §6" },
      ].map(g => (
        <div key={g.n} style={{ display: "flex", alignItems: "center", gap: 14, background: C.card, borderRadius: 10, padding: "12px 18px", border: `1px solid ${C.border}`, textAlign: "left" }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: `${C.accent}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: C.accent, fontWeight: 700, fontSize: 14 }}>{g.n}</div>
          <p style={{ margin: 0, fontSize: 14, color: C.textDim, flex: 1 }}>{g.t}</p>
          {g.l && <span style={{ fontSize: 11, color: C.orange, fontWeight: 600, whiteSpace: "nowrap" }}>{g.l}</span>}
        </div>
      ))}
    </div>
  </div>
);