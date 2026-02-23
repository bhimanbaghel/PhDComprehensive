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

import {
  S_Cross, S_Unify
} from "./slides/Conclusion";

import { slides } from "./slides/index";


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