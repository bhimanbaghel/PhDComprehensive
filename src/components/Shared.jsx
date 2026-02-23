import { C } from "../theme";

export const Tag = ({ venue, color }) => (
  <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 8, background: `${color || C.accent}20`, color: color || C.accentLight, fontWeight: 600, whiteSpace: "nowrap" }}>{venue}</span>
);

export const Gap = ({ children }) => (
  <div style={{ background: `${C.red}10`, border: `1px solid ${C.red}30`, borderRadius: 10, padding: "12px 18px", marginTop: 4 }}>
    <div style={{ fontSize: 11, fontWeight: 700, color: C.red, textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>Key Gap</div>
    <p style={{ margin: 0, fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>{children}</p>
  </div>
);

export const Insight = ({ color, children }) => (
  <div style={{ background: `${color}10`, border: `1px solid ${color}30`, borderRadius: 10, padding: "12px 18px" }}>
    <p style={{ margin: 0, fontSize: 13, color, lineHeight: 1.6 }}>{children}</p>
  </div>
);

export const Card = ({ title, sub, children, border, accent: a }) => (
  <div style={{ background: C.card, borderRadius: 12, padding: 18, border: `1px solid ${border || C.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: 8, flex: 1, position: "relative", overflow: "hidden" }}>
    {a && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: a }} />}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h4 style={{ margin: 0, fontSize: 15, color: C.text, fontWeight: 700 }}>{title}</h4>
      {sub}
    </div>
    {children}
  </div>
);