import { C } from "../theme";
import { Tag, Gap, Insight, Card } from "../components/Shared";

/* ═══════ RL SLIDES ═══════ */
export const S_RL_Title = () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 20 }}>
      <div style={{ fontSize: 13, letterSpacing: 5, color: C.orange, textTransform: "uppercase", fontWeight: 600 }}>Part III</div>
      <h1 style={{ fontSize: 44, fontWeight: 800, margin: 0, background: `linear-gradient(135deg, ${C.orange}, ${C.red})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Reinforcement Learning</h1>
      <p style={{ fontSize: 20, color: C.textDim, margin: 0 }}>RL for Reasoning: Creation, Elicitation, and Trust</p>
      <p style={{ fontSize: 16, color: C.textMuted, margin: 0, fontStyle: "italic" }}>Does RL create reasoning, or merely surface it? Can we trust what it produces?</p>
    </div>
  );
  
  export const S_RL_Found = () => (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 16, padding: "0 16px" }}>
      <div><span style={{ fontSize: 13, color: C.orange, fontWeight: 600 }}>§1</span><h2 style={{ fontSize: 30, fontWeight: 700, margin: "4px 0 0" }}>RL for Alignment: Foundations</h2></div>
      <div style={{ display: "flex", gap: 14 }}>
        {[
          { n: "Christiano et al.", v: "NeurIPS '17", d: "Established RLHF: reward models from human comparisons + PPO. <1% human feedback needed.", k: "Foundation" },
          { n: "InstructGPT", v: "NeurIPS '22", d: "1.3B InstructGPT preferred over 175B GPT-3. RLHF unlocks capabilities latent in pre-trained models.", k: "Key result" },
          { n: "Bai et al.", v: "Anthropic '22", d: "Scaled RLHF with iterative online training. Helpfulness-harmlessness tension.", k: "Scale" },
        ].map((p, i) => (
          <Card key={i} title={p.n} sub={<Tag venue={p.v} color={C.orange} />} accent={C.orange}>
            <p style={{ margin: 0, fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>{p.d}</p>
          </Card>
        ))}
      </div>
      <Insight color={C.orange}>🔑 InstructGPT's key observation: RLHF appears to <strong>unlock capabilities already latent</strong> in pre-trained models. This foreshadows the central §4 debate.</Insight>
      <div style={{ fontSize: 13, color: C.textMuted }}>RL is now the dominant post-training paradigm across NLP and Vision.</div>
    </div>
  );
  
  export const S_RL_Algo = () => (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 16, padding: "0 16px" }}>
      <div><span style={{ fontSize: 13, color: C.orange, fontWeight: 600 }}>§2</span><h2 style={{ fontSize: 28, fontWeight: 700, margin: "4px 0 0" }}>Efficient RL Algorithms</h2></div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px" }}>
          <thead>
            <tr>{["Method", "Eliminates", "Setting", "Key Detail"].map(h => (
              <th key={h} style={{ textAlign: "left", padding: "8px 14px", fontSize: 12, color: C.textMuted, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {[
              { m: "DPO", e: "Reward model", s: "Offline, preferences", d: "LM as implicit reward", c: C.accent },
              { m: "GRPO", e: "Per-sample critic", s: "On-policy, verifiable", d: "Powers DeepSeek-R1", c: C.green },
              { m: "SimPO", e: "Reference model", s: "Offline, preferences", d: "+6.4 over DPO (AlpacaEval)", c: C.cyan },
            ].map(r => (
              <tr key={r.m} style={{ background: C.card }}>
                <td style={{ padding: "10px 14px", borderRadius: "8px 0 0 8px", fontSize: 14, fontWeight: 700, color: r.c }}>{r.m}</td>
                <td style={{ padding: "10px 14px", fontSize: 13, color: C.textDim }}>{r.e}</td>
                <td style={{ padding: "10px 14px", fontSize: 13, color: C.textDim }}>{r.s}</td>
                <td style={{ padding: "10px 14px", borderRadius: "0 8px 8px 0", fontSize: 13, color: C.textDim }}>{r.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", gap: 14 }}>
        <Insight color={C.orange}>⚠️ <strong>Critical distinction:</strong> DPO/SimPO optimize <em>preferences</em> (alignment). GRPO optimizes <em>verifiable rewards</em> (reasoning). <strong>Not drop-in replacements.</strong></Insight>
        <div style={{ flex: 1, background: `${C.red}10`, borderRadius: 10, padding: "12px 16px", border: `1px solid ${C.red}30` }}>
          <h4 style={{ margin: "0 0 4px", fontSize: 13, color: C.red }}>Reward Overoptimization (Gao+ ICML '23)</h4>
          <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>Proxy reward ↑ while true performance peaks then ↓. Goodhart's law — dangerous for reasoning faithfulness.</p>
        </div>
      </div>
    </div>
  );
  
  export const S_RL_Extended = () => (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 14, padding: "0 16px" }}>
      <div><span style={{ fontSize: 13, color: C.orange, fontWeight: 600 }}>§3</span><h2 style={{ fontSize: 28, fontWeight: 700, margin: "4px 0 0" }}>Extended Thinking & Inference-Time Compute</h2></div>
      <div style={{ display: "flex", gap: 14 }}>
        <Card title="OpenAI o1" sub={<Tag venue="Sep '24" color={C.orange} />} accent={C.orange}>
          <p style={{ margin: 0, fontSize: 12, color: C.textDim, lineHeight: 1.5 }}>RL-trained inference-time reasoning. 89th% Codeforces, top-500 AIME. Snell et al.: adaptive compute → 4× efficiency.</p>
        </Card>
        <div style={{ flex: 1.3, background: `${C.orange}08`, borderRadius: 12, padding: 18, border: `1.5px solid ${C.orange}40` }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <h4 style={{ margin: 0, fontSize: 16, color: C.orange, fontWeight: 700 }}>DeepSeek-R1</h4>
            <Tag venue="Nature '25" color={C.orange} />
          </div>
          <p style={{ margin: "0 0 8px", fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>
            <strong style={{ color: C.text }}>R1-Zero:</strong> RL only (GRPO + accuracy rewards), NO supervised traces.
          </p>
          <p style={{ margin: 0, fontSize: 13, color: C.green, fontWeight: 600 }}>Emergent: self-verification, reflection, "aha moments"</p>
        </div>
      </div>
      <div style={{ background: `${C.red}08`, borderRadius: 12, padding: 16, border: `1px solid ${C.red}25` }}>
        <h4 style={{ margin: "0 0 8px", fontSize: 14, color: C.red }}>⚠️ The Overthinking Problem</h4>
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { t: "NoWait (NLP §3)", d: "Reflection keywords = filler" },
            { t: "Revisiting Test-Time Scaling", d: "Correct answers often shorter; self-revisions degrade" },
            { t: "Vision (§3)", d: "Forcing spatial reasoning through text = inherently wasteful" },
          ].map((p, i) => (
            <div key={i} style={{ flex: 1, background: C.card, borderRadius: 8, padding: "8px 10px" }}>
              <span style={{ fontSize: 11, color: C.red, fontWeight: 600 }}>{p.t}</span>
              <p style={{ margin: "3px 0 0", fontSize: 11, color: C.textDim }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  export const S_RL_Debate = () => (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 14, padding: "0 16px" }}>
      <div><span style={{ fontSize: 13, color: C.orange, fontWeight: 600 }}>§4</span><h2 style={{ fontSize: 28, fontWeight: 700, margin: "4px 0 0" }}>Does RL Really Enable Reasoning?</h2></div>
      <div style={{ display: "flex", gap: 14 }}>
        <div style={{ flex: 1, background: `${C.accent}08`, borderRadius: 12, padding: 18, border: `1.5px solid ${C.accent}30` }}>
          <h3 style={{ margin: "0 0 10px", fontSize: 16, color: C.accent, fontWeight: 700 }}>🔵 The Skeptical View</h3>
          <div style={{ marginBottom: 8 }}><strong style={{ fontSize: 14, color: C.text }}>Yue et al.</strong> <Tag venue="NeurIPS '25 Best Paper Runner-Up" color={C.accent} /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              "pass@k measure: At k=1, RL wins",
              "At k=256, base models have higher pass@k",
              "RL paths already in base model's distribution",
              "Six RLVR algorithms perform similarly",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 6, alignItems: "start" }}>
                <span style={{ color: C.accent, fontSize: 12, marginTop: 1 }}>•</span>
                <span style={{ fontSize: 12, color: C.textDim }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 8, background: `${C.green}10`, borderRadius: 6, padding: "6px 10px" }}>
            <span style={{ fontSize: 11, color: C.green, fontWeight: 600 }}>BUT: Distillation genuinely expands capabilities</span>
          </div>
        </div>
        <div style={{ flex: 1, background: `${C.green}08`, borderRadius: 12, padding: 18, border: `1.5px solid ${C.green}30` }}>
          <h3 style={{ margin: "0 0 10px", fontSize: 16, color: C.green, fontWeight: 700 }}>🟢 The Counter-Evidence</h3>
          <div style={{ marginBottom: 8 }}><strong style={{ fontSize: 14, color: C.text }}>ProRL</strong> <Tag venue="NeurIPS '25" color={C.green} /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              "KL control + reference resetting + diverse tasks",
              "2,000+ training steps",
              "RL outperforms base even at high k",
              "Some tasks: base has zero solutions at any k",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 6, alignItems: "start" }}>
                <span style={{ color: C.green, fontSize: 12, marginTop: 1 }}>•</span>
                <span style={{ fontSize: 12, color: C.textDim }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 8, background: `${C.orange}10`, borderRadius: 6, padding: "6px 10px" }}>
            <span style={{ fontSize: 11, color: C.orange, fontWeight: 600 }}>Argues Yue et al. limited by benchmarks + early stopping</span>
          </div>
        </div>
      </div>
      <div style={{ background: C.surface, borderRadius: 10, padding: "10px 16px", border: `1px solid ${C.border}`, textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 13, color: C.textDim }}>
          <strong style={{ color: C.text }}>Synthesis:</strong> Standard training → elicitation. Sufficient duration + diversity + regularization → conditional emergence. Best pipeline: <strong style={{ color: C.cyan }}>distillation (expand) + RL (optimize)</strong>.
        </p>
      </div>
    </div>
  );
  
  export const S_RL_SFT = () => (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 16, padding: "0 16px" }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>SFT vs. RL: Complementary Dynamics</h2>
      <div style={{ display: "flex", gap: 14 }}>
        {[
          { n: "SFT Memorizes, RL Generalizes", r: "Chu+ ICML '25", d: "RL generalizes across OOD variants; SFT memorizes. SFT essential for format stability before RL.", c: C.accent },
          { n: "RL Squeezes, SFT Expands", r: "Matsutani+ '25", d: "SFT broadens correct strategies; RL prunes errors (but reduces diversity). Explains SFT→RL pipeline.", c: C.green },
          { n: "SFT or RL for VLMs", r: "Chen+ TMLR '25", d: "SFT locks VLMs into rigid reasoning; RL fosters adaptive behavior. VLAA-Thinker (3B) → top-1 among 4B models.", c: C.orange },
        ].map((p, i) => (
          <Card key={i} title={p.n} sub={<Tag venue={p.r} color={p.c} />} accent={p.c}>
            <p style={{ margin: 0, fontSize: 12, color: C.textDim, lineHeight: 1.5 }}>{p.d}</p>
          </Card>
        ))}
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 6px" }}>
          <thead><tr>{["Perspective", "Claim", "Evidence"].map(h => (
            <th key={h} style={{ textAlign: "left", padding: "6px 14px", fontSize: 11, color: C.textMuted, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{h}</th>
          ))}</tr></thead>
          <tbody>
            {[
              { p: "Elicitation", c: "RL surfaces existing", e: "Yue et al.: base bounds RL at high k", cl: C.accent },
              { p: "Conditional", c: "RL creates new (given enough training)", e: "ProRL: novel strategies, diverse tasks", cl: C.green },
              { p: "Hybrid", c: "Distillation expands; RL optimizes", e: "Yue et al.: distillation adds new patterns", cl: C.cyan },
            ].map(r => (
              <tr key={r.p} style={{ background: C.card }}>
                <td style={{ padding: "8px 14px", borderRadius: "8px 0 0 8px", fontSize: 13, fontWeight: 600, color: r.cl }}>{r.p}</td>
                <td style={{ padding: "8px 14px", fontSize: 12, color: C.textDim }}>{r.c}</td>
                <td style={{ padding: "8px 14px", borderRadius: "0 8px 8px 0", fontSize: 12, color: C.textDim }}>{r.e}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  export const S_RL_Faith = () => (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 14, padding: "0 16px" }}>
      <div><span style={{ fontSize: 13, color: C.red, fontWeight: 600 }}>§5</span><h2 style={{ fontSize: 28, fontWeight: 700, margin: "4px 0 0" }}>Can We Trust RL-Produced Reasoning?</h2></div>
      <div style={{ background: `${C.red}12`, border: `1.5px solid ${C.red}40`, borderRadius: 10, padding: "10px 16px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 14, color: C.red, fontWeight: 700 }}>Three papers provide direct evidence: RL training <em>reduces</em> CoT faithfulness</p>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        {[
          { n: "Paul et al.", v: "EMNLP '24", d: "Causal mediation: RLHF models have stronger direct effect — predictions depend less on CoT than instruction-tuned models.", k: "RLHF disincentivizes faithful reasoning" },
          { n: "Chen et al.", v: "Anthropic '25", d: "Claude 3.7 Sonnet, DeepSeek R1 change answers on hidden hints; CoT never acknowledges.", k: "Plausible but deceptive chains" },
          { n: "Barez et al.", v: "Preprint '25", d: "Faithfulness gap may be architectural: distributed computation vs. sequential verbalization.", k: "RL alone may be insufficient" },
        ].map((p, i) => (
          <Card key={i} title={p.n} sub={<Tag venue={p.v} color={C.red} />}>
            <p style={{ margin: 0, fontSize: 12, color: C.textDim, lineHeight: 1.5 }}>{p.d}</p>
            <div style={{ background: `${C.red}10`, borderRadius: 6, padding: "5px 8px", marginTop: "auto" }}>
              <span style={{ fontSize: 11, color: C.red, fontWeight: 600 }}>{p.k}</span>
            </div>
          </Card>
        ))}
      </div>
      <Insight color={C.red}>Connects to NLP §5 (Lanham et al. inverse scaling). RL may compound the problem by specifically optimizing for <strong>convincing</strong> outputs.</Insight>
    </div>
  );
  
  export const S_RL_PRM = () => (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 16, padding: "0 16px" }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Process Rewards & Mechanistic Paths Forward</h2>
      <div style={{ display: "flex", gap: 14 }}>
        <div style={{ flex: 1.2 }}>
          <h3 style={{ fontSize: 14, color: C.orange, fontWeight: 700, margin: "0 0 10px" }}>Process Supervision</h3>
          <div style={{ background: `${C.orange}08`, borderRadius: 12, padding: 18, border: `1.5px solid ${C.orange}30` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <h4 style={{ margin: 0, fontSize: 15, color: C.orange }}>Lightman et al.</h4>
              <Tag venue="ICLR '24" color={C.orange} />
            </div>
            <p style={{ margin: "0 0 8px", fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>Process supervision (reward steps) outperforms outcome supervision on MATH: <strong style={{ color: C.text }}>78% vs. 72%</strong>. Released PRM800K.</p>
            <div style={{ display: "flex", gap: 6 }}>
              <span style={{ fontSize: 11, color: C.green, background: `${C.green}15`, padding: "2px 8px", borderRadius: 6 }}>✓ Incentivizes step correctness</span>
              <span style={{ fontSize: 11, color: C.red, background: `${C.red}15`, padding: "2px 8px", borderRadius: 6 }}>✗ Annotation cost, overoptimization</span>
            </div>
            <p style={{ margin: "8px 0 0", fontSize: 12, color: C.textMuted }}>Predecessor: Cobbe et al. ('21) — outcome verifiers + GSM8K</p>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: 14, color: C.cyan, fontWeight: 700, margin: "0 0 10px" }}>Mechanistic Paths (Open)</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { t: "SAEs: base vs. RL", d: "Which features does RL amplify? → resolves elicitation vs. emergence", l: "NLP §7" },
              { t: "Iteration Heads + RL", d: "Does RL strengthen reasoning circuits?", l: "NLP §7" },
              { t: "Cross-modal circuits + RL", d: "How RL reshapes vision-language interactions", l: "Vision §7" },
            ].map((p, i) => (
              <div key={i} style={{ background: C.card, borderRadius: 10, padding: 12, border: `1px solid ${C.border}` }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, color: C.text, fontWeight: 600 }}>{p.t}</span>
                  <span style={{ fontSize: 10, color: C.cyan, fontWeight: 600 }}>{p.l}</span>
                </div>
                <p style={{ margin: "3px 0 0", fontSize: 11, color: C.textDim }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
  export const S_RL_Gaps = () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 20, textAlign: "center" }}>
      <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0, color: C.orange }}>RL: Key Open Problems</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 700, width: "100%" }}>
        {[
          { n: 1, t: "Faithful RL objectives (correctness + faithfulness jointly)" },
          { n: 2, t: "Conditions for emergence vs. elicitation" },
          { n: 3, t: "Process supervision at scale (automated step-level rewards)" },
          { n: 4, t: "Mechanistic RL analysis (SAEs/circuits: base vs. RL models)" },
          { n: 5, t: "Vision RL for reasoning (text CoT may hurt)" },
          { n: 6, t: "Multi-stage attribution through pretraining → SFT → RL" },
        ].map(g => (
          <div key={g.n} style={{ display: "flex", alignItems: "center", gap: 14, background: C.card, borderRadius: 10, padding: "12px 18px", border: `1px solid ${C.border}`, textAlign: "left" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: `${C.orange}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: C.orange, fontWeight: 700, fontSize: 14 }}>{g.n}</div>
            <p style={{ margin: 0, fontSize: 14, color: C.textDim }}>{g.t}</p>
          </div>
        ))}
      </div>
    </div>
  );
  