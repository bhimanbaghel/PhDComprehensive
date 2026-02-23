import { C } from "../theme";
import { Insight } from "../components/Shared";

export const S_Title = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 24 }}>
    <div style={{ fontSize: 13, letterSpacing: 6, color: C.accentLight, textTransform: "uppercase", fontWeight: 600 }}>Comprehensive Exam Presentation</div>
    <h1 style={{ fontSize: 46, fontWeight: 800, lineHeight: 1.15, background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", maxWidth: 800, margin: 0 }}>Interpretable & Efficient Reasoning in AI</h1>
    <p style={{ fontSize: 20, color: C.textDim, maxWidth: 600, margin: 0 }}>A Survey Across NLP, Vision, and Reinforcement Learning</p>
    <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
      {[{ l: "NLP", c: C.accent }, { l: "Vision", c: C.green }, { l: "RL", c: C.orange }].map(d => (
        <span key={d.l} style={{ padding: "6px 20px", borderRadius: 20, border: `1.5px solid ${d.c}`, color: d.c, fontSize: 14, fontWeight: 600 }}>{d.l}</span>
      ))}
    </div>
    <div style={{ position: "absolute", bottom: 40, fontSize: 13, color: C.textMuted }}>Use ← → arrow keys or buttons to navigate</div>
  </div>
);

export const S_Tension = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 36, padding: "0 20px" }}>
    <h2 style={{ fontSize: 34, fontWeight: 700, margin: 0 }}>The Central Tension</h2>
    <div style={{ position: "relative", height: 70, display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", left: 0, right: 0, height: 4, background: `linear-gradient(to right, ${C.accent}, ${C.orange})`, borderRadius: 4 }} />
      <div style={{ position: "absolute", left: 0, background: C.accent, color: "#fff", padding: "8px 18px", borderRadius: 20, fontSize: 13, fontWeight: 700, top: -18 }}>🔍 Deep Interpretability</div>
      <div style={{ position: "absolute", right: 0, background: C.orange, color: "#fff", padding: "8px 18px", borderRadius: 20, fontSize: 13, fontWeight: 700, top: -18 }}>⚡ Computational Efficiency</div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
      {[
        { i: "🧠", t: "Methods revealing the most are often the most expensive" },
        { i: "💨", t: "Methods that are cheapest sacrifice transparency" },
        { i: "🎯", t: "The goal: push the Pareto frontier" },
      ].map((d, i) => (
        <div key={i} style={{ background: C.card, borderRadius: 12, padding: 20, border: `1px solid ${C.border}` }}>
          <div style={{ fontSize: 26, marginBottom: 10 }}>{d.i}</div>
          <p style={{ margin: 0, fontSize: 14, color: C.textDim, lineHeight: 1.5 }}>{d.t}</p>
        </div>
      ))}
    </div>
    <Insight color={C.accentLight}>This tension runs through every paper. Shapley values give perfect attribution but are intractable. CoT makes reasoning visible but costs tokens. Mechanistic interpretability reveals circuits but requires enormous compute.</Insight>
  </div>
);

export const S_Roadmap = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 24, padding: "0 20px" }}>
    <h2 style={{ fontSize: 34, fontWeight: 700, margin: 0 }}>Roadmap</h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
      {[
        { t: "Part I: NLP", c: C.accent, icon: "📝", items: ["Data Attribution", "Chain-of-Thought", "Prompt Optimization", "Faithfulness", "Steering & PEFT", "Mechanistic Interp."], time: "15 min" },
        { t: "Part II: Vision", c: C.green, icon: "👁️", items: ["What's different?", "Visual CoT & Programming", "Prompt Optimization", "Perceptual Faithfulness", "Steering & PEFT", "Cross-Modal Circuits"], time: "15 min" },
        { t: "Part III: RL", c: C.orange, icon: "🎮", items: ["RLHF Foundations", "Efficient Algorithms", "Extended Thinking", "Elicitation vs Emergence", "Faithfulness Crisis", "Process Rewards"], time: "15 min" },
      ].map(s => (
        <div key={s.t} style={{ background: C.card, borderRadius: 14, padding: 22, border: `1.5px solid ${s.c}30`, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: s.c }} />
          <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
          <h3 style={{ margin: "0 0 2px", fontSize: 17, color: s.c, fontWeight: 700 }}>{s.t}</h3>
          <div style={{ fontSize: 12, color: C.textMuted, marginBottom: 12 }}>{s.time}</div>
          {s.items.map((it, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: s.c, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: C.textDim }}>{it}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
    <div style={{ background: C.surface, borderRadius: 10, padding: "12px 18px", border: `1px solid ${C.border}`, textAlign: "center" }}>
      <p style={{ margin: 0, fontSize: 14, color: C.textDim }}>Cross-cutting theme: <strong style={{ color: C.red }}>Can we trust the reasoning these systems produce?</strong></p>
    </div>
  </div>
);