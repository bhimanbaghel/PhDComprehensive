import { C } from "../theme";
import { Insight } from "../components/Shared";

/* ═══════ CONCLUSION ═══════ */
export const S_Cross = () => (
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
  
  export const S_Unify = () => (
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
  