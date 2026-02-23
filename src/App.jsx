import { useState, useEffect, useCallback } from "react";
import { C, secColors } from "./theme";
import { Tag, Gap, Insight, Card } from "./components/Shared";
import { S_Title, S_Tension, S_Roadmap } from "./slides/Intro";
import {
  S_NLP_Title, S_DataAttr, S_CoT, S_CoT_Eff, S_Prompt,
  S_Faith1, S_Faith2, S_Steer, S_Mech1, S_Mech2, S_NLP_Gaps
} from "./slides/NLP";
import {
  S_Vis_Title, S_Vis_Diff, S_Vis_DataAttr, S_Vis_CoT, S_Vis_Prog,
  S_Vis_Prompt, S_Vis_Faith, S_Vis_Steer, S_Vis_Mech, S_Vis_Neuro, S_Vis_Gaps
} from "./slides/Vision";

import {
  S_RL_Title, S_RL_Found, S_RL_Algo, S_RL_Extended, S_RL_Debate, S_RL_SFT, S_RL_Faith, S_RL_PRM, S_RL_Gaps
} from "./slides/RL";


/* ═══════ CONCLUSION ═══════ */
const S_Cross = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 16, padding: "0 16px" }}>
    <h2 style={{ fontSize: 30, fontWeight: 700, margin: 0 }}>Cross-Cutting Research Gaps</h2>
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 6px" }}>
        <thead><tr>{["Gap", "NLP", "Vision", "RL"].map(h => (
          <th key={h} style={{ textAlign: "left", padding: "8px 14px", fontSize: 12, color: C.textMuted, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{h}</th>
        ))}</tr></thead>
        <tbody>
          {[
            { g: "Mechanistic CoT faithfulness", n: "§5, §7", v: "§5, §7", r: "§5" },
            { g: "RLHF effect on faithfulness", n: "§5", v: "Untested", r: "§5 (confirmed)" },
            { g: "Steering for reasoning", n: "Untested", v: "Halluc. only", r: "§5.4" },
            { g: "Multi-stage data attribution", n: "§2", v: "VLM gap", r: "§5.5" },
            { g: "Adaptive token efficiency", n: "§3", v: "§3 (worse)", r: "§3" },
          ].map((r, i) => (
            <tr key={i} style={{ background: C.card }}>
              <td style={{ padding: "10px 14px", borderRadius: "8px 0 0 8px", fontSize: 13, fontWeight: 600, color: C.text }}>{r.g}</td>
              <td style={{ padding: "10px 14px", fontSize: 12, color: C.accent }}>{r.n}</td>
              <td style={{ padding: "10px 14px", fontSize: 12, color: C.green }}>{r.v}</td>
              <td style={{ padding: "10px 14px", borderRadius: "0 8px 8px 0", fontSize: 12, color: C.orange }}>{r.r}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Insight color={C.accentLight}>These five gaps each span multiple domains and represent the <strong>most impactful research opportunities</strong> at the intersection of interpretability, efficiency, and reasoning.</Insight>
  </div>
);

const S_Unify = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 24, padding: "0 24px" }}>
    <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>The Unifying Question</h2>
    <div style={{ background: `${C.red}10`, border: `1.5px solid ${C.red}40`, borderRadius: 16, padding: "24px 32px", maxWidth: 700 }}>
      <p style={{ margin: 0, fontSize: 20, color: C.text, lineHeight: 1.6 }}>
        RL produces reasoning that <strong style={{ color: C.green }}>looks</strong> interpretable (visible CoT) but may not <strong style={{ color: C.red }}>be</strong> interpretable (unfaithful CoT).
      </p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 660 }}>
      {[
        { i: "🎯", t: "Faithful Reward Design", d: "RL §5.2: incentivize genuine reasoning", c: C.orange },
        { i: "🔬", t: "Mechanistic Verification", d: "NLP §7: check if CoT reflects internals", c: C.accent },
        { i: "⚡", t: "Efficient Reasoning", d: "NLP §3, Vision §3: eliminate token waste", c: C.cyan },
        { i: "🔗", t: "Cross-Modal Integration", d: "Vision §7: extend beyond language", c: C.green },
      ].map((p, i) => (
        <div key={i} style={{ background: C.card, borderRadius: 12, padding: 18, border: `1.5px solid ${p.c}25`, display: "flex", gap: 12, alignItems: "start", textAlign: "left" }}>
          <span style={{ fontSize: 24 }}>{p.i}</span>
          <div><h4 style={{ margin: "0 0 4px", fontSize: 14, color: p.c, fontWeight: 700 }}>{p.t}</h4><p style={{ margin: 0, fontSize: 12, color: C.textDim }}>{p.d}</p></div>
        </div>
      ))}
    </div>
    <p style={{ margin: 0, fontSize: 15, color: C.textDim, maxWidth: 640 }}>
      RL remains essential for deployment — but <strong style={{ color: C.text }}>trustworthy reasoning</strong> demands the intersection of RL innovation with interpretability research.
    </p>
    <p style={{ margin: 0, fontSize: 18, color: C.accentLight, fontWeight: 700 }}>Thank you.</p>
  </div>
);

/* ═══════ SLIDE REGISTRY ═══════ */
const slides = [
  { c: S_Title, l: "Title", s: "intro" },
  { c: S_Tension, l: "Central Tension", s: "intro" },
  { c: S_Roadmap, l: "Roadmap", s: "intro" },
  { c: S_NLP_Title, l: "NLP: Title", s: "nlp" },
  { c: S_DataAttr, l: "Data Attribution", s: "nlp" },
  { c: S_CoT, l: "CoT: Core", s: "nlp" },
  { c: S_CoT_Eff, l: "CoT: Efficiency", s: "nlp" },
  { c: S_Prompt, l: "Prompt Optimization", s: "nlp" },
  { c: S_Faith1, l: "Faithfulness: Problem", s: "nlp" },
  { c: S_Faith2, l: "Faithfulness: Solutions", s: "nlp" },
  { c: S_Steer, l: "Steering & PEFT", s: "nlp" },
  { c: S_Mech1, l: "Mech Interp: Foundations", s: "nlp" },
  { c: S_Mech2, l: "Mech Interp: Reasoning", s: "nlp" },
  { c: S_NLP_Gaps, l: "NLP Gaps", s: "nlp" },
  { c: S_Vis_Title, l: "Vision: Title", s: "vision" },
  { c: S_Vis_Diff, l: "Why Vision ≠ NLP", s: "vision" },
  { c: S_Vis_DataAttr, l: "Vision Data Attribution", s: "vision" },
  { c: S_Vis_CoT, l: "Visual CoT", s: "vision" },
  { c: S_Vis_Prog, l: "Visual Programming", s: "vision" },
  { c: S_Vis_Prompt, l: "Vision Prompts", s: "vision" },
  { c: S_Vis_Faith, l: "Vision Faithfulness", s: "vision" },
  { c: S_Vis_Steer, l: "Vision Steering & PEFT", s: "vision" },
  { c: S_Vis_Mech, l: "Vision Mech Interp", s: "vision" },
  { c: S_Vis_Neuro, l: "Neuro-Symbolic", s: "vision" },
  { c: S_Vis_Gaps, l: "Vision Gaps", s: "vision" },
  { c: S_RL_Title, l: "RL: Title", s: "rl" },
  { c: S_RL_Found, l: "RLHF Foundations", s: "rl" },
  { c: S_RL_Algo, l: "Efficient Algorithms", s: "rl" },
  { c: S_RL_Extended, l: "Extended Thinking", s: "rl" },
  { c: S_RL_Debate, l: "Does RL Create Reasoning?", s: "rl" },
  { c: S_RL_SFT, l: "SFT vs RL", s: "rl" },
  { c: S_RL_Faith, l: "RL Faithfulness", s: "rl" },
  { c: S_RL_PRM, l: "Process Rewards", s: "rl" },
  { c: S_RL_Gaps, l: "RL Gaps", s: "rl" },
  { c: S_Cross, l: "Cross-Cutting Gaps", s: "end" },
  { c: S_Unify, l: "Conclusion", s: "end" },
];

export default function Presentation() {
  const [idx, setIdx] = useState(0);
  const [nav, setNav] = useState(false);
  const go = useCallback((d) => setIdx(i => Math.max(0, Math.min(slides.length - 1, i + d))), []);

  useEffect(() => {
    const h = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      if (e.key === "Escape") setNav(false);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [go]);

  const Comp = slides[idx].c;
  const secColor = secColors[slides[idx].s];

  return (
    <div style={{ width: "100%", height: "100vh", background: C.bg, color: C.text, fontFamily: "'Inter','Segoe UI',system-ui,sans-serif", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 3, background: C.surface, flexShrink: 0 }}>
        <div style={{ height: "100%", width: `${((idx + 1) / slides.length) * 100}%`, background: `linear-gradient(to right, ${secColor}, ${secColor}cc)`, transition: "width 0.3s ease" }} />
      </div>
      <div style={{ flex: 1, padding: "20px 44px", overflow: "hidden" }}><Comp /></div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 44px 14px", flexShrink: 0 }}>
        <button onClick={() => setNav(!nav)} style={{ background: "none", border: `1px solid ${C.border}`, color: secColor, borderRadius: 8, padding: "5px 14px", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>{slides[idx].l}</button>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={() => go(-1)} disabled={idx === 0} style={{ background: idx === 0 ? "transparent" : C.card, border: `1px solid ${C.border}`, color: idx === 0 ? C.textMuted : C.text, borderRadius: 8, padding: "5px 14px", cursor: idx === 0 ? "default" : "pointer", fontSize: 13, opacity: idx === 0 ? 0.4 : 1 }}>←</button>
          <span style={{ fontSize: 13, color: C.textMuted, minWidth: 60, textAlign: "center" }}>{idx + 1}/{slides.length}</span>
          <button onClick={() => go(1)} disabled={idx === slides.length - 1} style={{ background: idx === slides.length - 1 ? "transparent" : secColor, border: "none", color: "#fff", borderRadius: 8, padding: "5px 14px", cursor: idx === slides.length - 1 ? "default" : "pointer", fontSize: 13, opacity: idx === slides.length - 1 ? 0.4 : 1 }}>→</button>
        </div>
        <div style={{ display: "flex", gap: 2 }}>
          {slides.map((s, i) => (
            <div key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 16 : 6, height: 6, borderRadius: 3, background: i === idx ? secColors[s.s] : i < idx ? `${secColors[s.s]}60` : C.border, cursor: "pointer", transition: "all 0.2s" }} />
          ))}
        </div>
      </div>
      {nav && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }} onClick={() => setNav(false)}>
          <div style={{ background: C.card, borderRadius: 16, padding: 24, maxWidth: 520, width: "90%", maxHeight: "80vh", overflow: "auto", boxShadow: "0 25px 50px rgba(0,0,0,0.25)" }} onClick={e => e.stopPropagation()}>
            <h3 style={{ margin: "0 0 16px", fontSize: 18 }}>Slide Navigator</h3>
            {["intro", "nlp", "vision", "rl", "end"].map(sec => (
              <div key={sec} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: secColors[sec], textTransform: "uppercase", letterSpacing: 2, marginBottom: 6 }}>
                  {sec === "intro" ? "Introduction" : sec === "nlp" ? "Part I: NLP" : sec === "vision" ? "Part II: Vision" : sec === "rl" ? "Part III: RL" : "Conclusion"}
                </div>
                {slides.filter(s => s.s === sec).map((s, i) => {
                  const gi = slides.indexOf(s);
                  return (
                    <div key={gi} onClick={() => { setIdx(gi); setNav(false); }} style={{ display: "flex", alignItems: "center", gap: 12, padding: "6px 12px", borderRadius: 8, cursor: "pointer", background: gi === idx ? `${secColors[sec]}20` : "transparent" }}>
                      <span style={{ width: 24, textAlign: "right", fontSize: 12, color: C.textMuted }}>{gi + 1}</span>
                      <span style={{ fontSize: 13, color: gi === idx ? secColors[sec] : C.textDim }}>{s.l}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}