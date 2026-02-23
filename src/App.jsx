import { useState, useEffect, useCallback } from "react";
import { C, secColors } from "./theme";
import { Tag, Gap, Insight, Card } from "./components/Shared";
import { S_Title, S_Tension, S_Roadmap } from "./slides/Intro";
import {
  S_NLP_Title, S_DataAttr, S_CoT, S_CoT_Eff, S_Prompt,
  S_Faith1, S_Faith2, S_Steer, S_Mech1, S_Mech2, S_NLP_Gaps
} from "./slides/NLP";

/* ═══════ VISION SLIDES ═══════ */
const S_Vis_Title = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 20 }}>
    <div style={{ fontSize: 13, letterSpacing: 5, color: C.green, textTransform: "uppercase", fontWeight: 600 }}>Part II</div>
    <h1 style={{ fontSize: 44, fontWeight: 800, margin: 0, background: `linear-gradient(135deg, ${C.green}, ${C.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Vision</h1>
    <p style={{ fontSize: 20, color: C.textDim, margin: 0 }}>Interpretable and Efficient Reasoning in Visual Models</p>
    <p style={{ fontSize: 16, color: C.textMuted, margin: 0, fontStyle: "italic" }}>What makes visual reasoning fundamentally different?</p>
  </div>
);

const S_Vis_Diff = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 20, padding: "0 16px" }}>
    <h2 style={{ fontSize: 30, fontWeight: 700, margin: 0 }}>Why Vision Reasoning ≠ Language Reasoning</h2>
    <div style={{ display: "flex", gap: 12, marginBottom: 4 }}>
      {["AlexNet (2012)", "ViT (2021)", "CLIP (2021)"].map((f, i) => (
        <span key={i} style={{ padding: "4px 14px", borderRadius: 16, background: `${C.green}15`, color: C.green, fontSize: 12, fontWeight: 600 }}>{f}</span>
      ))}
    </div>
    <div style={{ display: "flex", gap: 14 }}>
      {[
        { i: "🗺️", t: "Spatial & Compositional", d: "Understanding spatial relationships, object properties, scene composition — no sequential text analogue. Makes textual CoT an imperfect fit." },
        { i: "👁️", t: "Perceptual Grounding", d: "Must attend to correct image regions, not just reason correctly. A model can produce a plausible rationale while never processing the relevant region." },
        { i: "🔗", t: "Cross-Modal Interaction", d: "VLMs process two fundamentally different modalities. Understanding where reasoning happens across the boundary is absent from pure NLP." },
      ].map((p, i) => (
        <div key={i} style={{ flex: 1, background: C.card, borderRadius: 12, padding: 20, border: `1.5px solid ${C.green}20` }}>
          <div style={{ fontSize: 28, marginBottom: 10 }}>{p.i}</div>
          <h4 style={{ margin: "0 0 8px", fontSize: 15, color: C.green, fontWeight: 700 }}>{p.t}</h4>
          <p style={{ margin: 0, fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>{p.d}</p>
        </div>
      ))}
    </div>
    <div style={{ background: C.surface, borderRadius: 10, padding: "10px 16px", border: `1px solid ${C.border}`, textAlign: "center" }}>
      <p style={{ margin: 0, fontSize: 13, color: C.textMuted }}>These three properties shape <strong style={{ color: C.text }}>every gap</strong> in visual reasoning research</p>
    </div>
  </div>
);

const S_Vis_DataAttr = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 20, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.green, fontWeight: 600 }}>§2</span><h2 style={{ fontSize: 30, fontWeight: 700, margin: "4px 0 0" }}>Data Attribution for Vision</h2></div>
    <div style={{ background: C.card, borderRadius: 12, padding: 24, border: `1.5px solid ${C.green}30`, maxWidth: 600 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <h4 style={{ margin: 0, fontSize: 18, color: C.text, fontWeight: 700 }}>Forward-INF</h4>
        <Tag venue="CVPR '24" color={C.green} />
      </div>
      <p style={{ margin: "0 0 12px", fontSize: 14, color: C.textDim, lineHeight: 1.6 }}>
        <strong style={{ color: C.cyan }}>Mirrored Influence Hypothesis:</strong> train→test influence ≈ test→train influence. Swap expensive backward passes for cheap forward passes. Perfect data leakage detection on CIFAR-10.
      </p>
      <span style={{ fontSize: 12, color: C.green, background: `${C.green}15`, padding: "3px 10px", borderRadius: 8 }}>Symmetry property with no NLP parallel</span>
    </div>
    <Gap>VLM data attribution is <strong>entirely unexplored</strong>. No framework attributes behavior through vision encoder + projection + language model jointly. Which image-text pairs teach reasoning vs. recognition? Unknown.</Gap>
    <div style={{ fontSize: 12, color: C.textMuted }}>NLP foundations (Data Shapley → LESS → DataInf) covered in Part I §2</div>
  </div>
);

const S_Vis_CoT = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 14, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.green, fontWeight: 600 }}>§3</span><h2 style={{ fontSize: 28, fontWeight: 700, margin: "4px 0 0" }}>Visual CoT: Text CoT Is Not Enough</h2></div>
    <div style={{ display: "flex", gap: 14 }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 14, color: C.textMuted, fontWeight: 700, margin: "0 0 8px" }}>Track 1: Text-Augmented</h3>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, border: `1px solid ${C.border}`, marginBottom: 8 }}>
          <h4 style={{ margin: "0 0 4px", fontSize: 13, color: C.text }}>MM-CoT <span style={{ fontSize: 11, color: C.textMuted }}>(Zhang+ TMLR '24)</span></h4>
          <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>Vision features → rationale-then-answer. Treats vision as auxiliary.</p>
        </div>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, border: `1px solid ${C.border}` }}>
          <h4 style={{ margin: "0 0 4px", fontSize: 13, color: C.text }}>Chen et al. <span style={{ fontSize: 11, color: C.textMuted }}>(NAACL '24)</span></h4>
          <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>Even best VLMs show poor reasoning <em>consistency</em> across visual contexts.</p>
        </div>
      </div>
      <div style={{ flex: 1.2 }}>
        <h3 style={{ fontSize: 14, color: C.green, fontWeight: 700, margin: "0 0 8px" }}>Track 2: Visual Thinking ⭐</h3>
        <div style={{ background: `${C.green}08`, borderRadius: 10, padding: 14, border: `1.5px solid ${C.green}30`, marginBottom: 8 }}>
          <h4 style={{ margin: "0 0 4px", fontSize: 13, color: C.green }}>CoVT <span style={{ fontSize: 11, color: C.textMuted }}>(Qin+ '25)</span></h4>
          <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>Reason in continuous visual tokens (depth, segmentation, edges). <strong style={{ color: C.red }}>Text-only CoT can degrade vision performance.</strong></p>
        </div>
        <div style={{ background: `${C.green}08`, borderRadius: 10, padding: 14, border: `1.5px solid ${C.green}30` }}>
          <h4 style={{ margin: "0 0 4px", fontSize: 13, color: C.green }}>MVoT <span style={{ fontSize: 11, color: C.textMuted }}>(Li+ ICML '25)</span></h4>
          <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>Generate image visualizations as reasoning traces. Excels where verbal descriptions fail.</p>
        </div>
      </div>
    </div>
    <Insight color={C.green}>💡 Effective visual reasoning requires thinking in <strong>visual representations</strong> — continuous (CoVT) or discrete (MVoT) — not forcing spatial computation through language.</Insight>
  </div>
);

const S_Vis_Prog = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 20, padding: "0 16px" }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Visual Programming: Interpretable-by-Execution</h2>
    <div style={{ display: "flex", gap: 16 }}>
      {[
        { n: "ViperGPT", v: "ICCV '23", d: "LLM generates Python calling vision APIs. Every step is an inspectable function call." },
        { n: "VisProg", v: "CVPR '23 ★", d: "LLM composes modular vision programs. Best Paper Nominee. No training required." },
      ].map((p, i) => (
        <div key={i} style={{ flex: 1, background: `${C.green}08`, borderRadius: 12, padding: 24, border: `1.5px solid ${C.green}30` }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}><h4 style={{ margin: 0, fontSize: 18, color: C.green, fontWeight: 700 }}>{p.n}</h4><Tag venue={p.v} color={C.green} /></div>
          <p style={{ margin: 0, fontSize: 14, color: C.textDim, lineHeight: 1.6 }}>{p.d}</p>
        </div>
      ))}
    </div>
    <div style={{ background: C.card, borderRadius: 10, padding: "14px 20px", border: `1px solid ${C.border}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: C.textDim }}>
        <span style={{ fontSize: 20 }}>🔄</span>
        <span><strong style={{ color: C.text }}>Flow:</strong> Question → LLM generates code → Code calls DETECT, SEGMENT, COUNT → Answer</span>
      </div>
    </div>
    <div style={{ display: "flex", gap: 14 }}>
      <Insight color={C.green}>✦ Arguably the <strong>most interpretable</strong> form of visual reasoning. Faithful by construction (cf. NLP §5, Lyu et al.).</Insight>
      <Insight color={C.cyan}>🔗 Modern descendants of neuro-symbolic methods (§8). Absent from interpretability literature as such.</Insight>
    </div>
  </div>
);

const S_Vis_Prompt = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 20, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.green, fontWeight: 600 }}>§4</span><h2 style={{ fontSize: 30, fontWeight: 700, margin: "4px 0 0" }}>Prompt Optimization for Vision</h2></div>
    <div style={{ display: "flex", gap: 16, alignItems: "stretch" }}>
      <div style={{ flex: 1, background: C.card, borderRadius: 12, padding: 20, border: `1px solid ${C.border}`, opacity: 0.7 }}>
        <h4 style={{ margin: "0 0 10px", fontSize: 16, color: C.textMuted }}>Soft Prompt Methods</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {["CoOp (Zhou+ IJCV '22)", "CoCoOp (Zhou+ CVPR '22)", "MaPLe (Khattak+ CVPR '23)"].map((p, i) => (
            <div key={i} style={{ background: C.surface, borderRadius: 8, padding: "8px 12px" }}>
              <span style={{ fontSize: 13, color: C.textMuted }}>{p}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: C.red, marginTop: 10 }}>✗ Effective but entirely opaque</p>
      </div>
      <div style={{ flex: 1, background: `${C.green}08`, borderRadius: 12, padding: 20, border: `1.5px solid ${C.green}40` }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <h4 style={{ margin: 0, fontSize: 16, color: C.green, fontWeight: 700 }}>IPO (The Exception)</h4>
          <Tag venue="NeurIPS '24" color={C.green} />
        </div>
        <p style={{ margin: "0 0 12px", fontSize: 14, color: C.textDim, lineHeight: 1.6 }}>
          LLM-optimized <strong style={{ color: C.text }}>human-readable</strong> prompts for VLMs. Outperforms soft-prompt methods on novel classes with full interpretability.
        </p>
        <span style={{ fontSize: 12, color: C.green, background: `${C.green}15`, padding: "3px 10px", borderRadius: 8 }}>✓ Reveals what visual descriptions VLMs respond to</span>
      </div>
    </div>
    <Gap>Vision lacks GEPA's <em>rule extraction</em> capability (NLP §4) — no generalizable rules about <em>why</em> certain visual descriptions or spatial language help VLMs reason.</Gap>
  </div>
);

const S_Vis_Faith = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 14, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.green, fontWeight: 600 }}>§5</span><h2 style={{ fontSize: 28, fontWeight: 700, margin: "4px 0 0" }}>Faithfulness: The Perceptual Dimension</h2></div>
    <div style={{ display: "flex", gap: 12 }}>
      {[
        { n: "Sanity Checks", r: "Adebayo+ NeurIPS '18", d: "Popular saliency methods (Guided Backprop) insensitive to model params AND data labels.", k: "Looking interpretable ≠ being faithful", kc: C.red },
        { n: "Balasubramanian+", r: "EMNLP '25", d: "VLMs articulate text biases in CoT but image biases remain hidden.", k: "Modality asymmetry: faithful to linguistic priors, unfaithful to visual perception", kc: C.orange },
        { n: "EDCT", r: "Ding+ NeurIPS WS '25", d: "Treat explanations as falsifiable hypotheses → counterfactual visual edits.", k: "Most direct visual adaptation of perturbation-based faithfulness", kc: C.cyan },
      ].map((p, i) => (
        <div key={i} style={{ flex: 1, background: C.card, borderRadius: 12, padding: 16, border: `1px solid ${C.border}`, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h4 style={{ margin: 0, fontSize: 14, color: C.text, fontWeight: 700 }}>{p.n}</h4>
            <Tag venue={p.r} color={C.green} />
          </div>
          <p style={{ margin: 0, fontSize: 12, color: C.textDim, lineHeight: 1.5, flex: 1 }}>{p.d}</p>
          <div style={{ background: `${p.kc}10`, borderRadius: 8, padding: "6px 10px" }}>
            <p style={{ margin: 0, fontSize: 11, color: p.kc, fontWeight: 600 }}>{p.k}</p>
          </div>
        </div>
      ))}
    </div>
    <Gap>Inverse scaling in VLMs untested. Visual programming as faithfulness upper bound unexploited. Standardized visual faithfulness metrics needed.</Gap>
  </div>
);

const S_Vis_Steer = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 16, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.green, fontWeight: 600 }}>§6</span><h2 style={{ fontSize: 28, fontWeight: 700, margin: "4px 0 0" }}>Vision PEFT and Steering</h2></div>
    <div style={{ display: "flex", gap: 14 }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 14, color: C.cyan, fontWeight: 700, margin: "0 0 8px" }}>PEFT</h3>
        <Card title="ViT-Adapter" sub={<Tag venue="ICLR '23 ★" color={C.green} />}>
          <p style={{ margin: 0, fontSize: 12, color: C.textDim, lineHeight: 1.5 }}>Injects spatial priors + multi-scale features into plain ViTs. Vision needs spatial hierarchies that language models' uniform token structure doesn't require.</p>
        </Card>
      </div>
      <div style={{ flex: 1.2 }}>
        <h3 style={{ fontSize: 14, color: C.pink, fontWeight: 700, margin: "0 0 8px" }}>Steering (Hallucination Only)</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Card title="SHARP" sub={<Tag venue="EMNLP '25" color={C.green} />}>
            <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>"Truth vectors" from activation space — steer without retraining.</p>
          </Card>
          <Card title="VTI" sub={<Tag venue="ICLR '25 ★" color={C.green} />} border={`${C.pink}30`}>
            <p style={{ margin: 0, fontSize: 12, color: C.textDim }}>Hallucinations from cross-modal misalignment (separate pre-training). <strong style={{ color: C.pink }}>No NLP analogue.</strong></p>
          </Card>
        </div>
      </div>
    </div>
    <Gap>Steering tested <strong>only for hallucination</strong>. Reasoning, spatial understanding, compositional generalization → completely untested. Steerability limits unknown for visual features.</Gap>
  </div>
);

const S_Vis_Mech = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 14, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.green, fontWeight: 600 }}>§7</span><h2 style={{ fontSize: 28, fontWeight: 700, margin: "4px 0 0" }}>Mechanistic Interpretability: Vision's Biggest Gap</h2></div>
    <div style={{ display: "flex", gap: 14 }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 13, color: C.green, fontWeight: 700, margin: "0 0 8px" }}>✓ What Exists</h3>
        {[
          { n: "Network Dissection", d: "Neuron-concept alignment" },
          { n: "Grad-CAM", d: "Gradient-based localization" },
          { n: "Concept Bottleneck", d: "Interpretable-by-architecture" },
          { n: "Multimodal Neurons", d: "CLIP neurons: photo = drawing = text" },
          { n: "SAEs for CLIP", d: "10–15% features steerable" },
        ].map((p, i) => (
          <div key={i} style={{ background: C.card, borderRadius: 8, padding: "8px 12px", marginBottom: 6, border: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 12, color: C.text, fontWeight: 600 }}>{p.n}</span>
            <span style={{ fontSize: 11, color: C.textMuted }}> — {p.d}</span>
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 13, color: C.red, fontWeight: 700, margin: "0 0 8px" }}>✗ What Doesn't Exist</h3>
        {[
          { n: "Visual Reasoning Circuits", d: "No IOI/iteration head equivalent for spatial reasoning" },
          { n: "Visual Knowledge Editing", d: "No ROME/MEMIT for ViTs or VLMs" },
          { n: "Cross-Modal Circuits", d: "How vision-language interact mechanistically during reasoning" },
        ].map((p, i) => (
          <div key={i} style={{ background: `${C.red}08`, borderRadius: 8, padding: "10px 12px", marginBottom: 6, border: `1px solid ${C.red}20` }}>
            <span style={{ fontSize: 12, color: C.red, fontWeight: 600 }}>❌ {p.n}</span>
            <p style={{ margin: "3px 0 0", fontSize: 11, color: C.textDim }}>{p.d}</p>
          </div>
        ))}
      </div>
    </div>
    <div style={{ background: `${C.red}12`, border: `1.5px solid ${C.red}40`, borderRadius: 12, padding: "12px 18px", textAlign: "center" }}>
      <p style={{ margin: 0, fontSize: 15, color: C.red, fontWeight: 700 }}>Arguably the <em>largest gap</em> in the entire interpretability literature</p>
    </div>
  </div>
);

const S_Vis_Neuro = () => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 16, padding: "0 16px" }}>
    <div><span style={{ fontSize: 13, color: C.green, fontWeight: 600 }}>§8</span><h2 style={{ fontSize: 28, fontWeight: 700, margin: "4px 0 0" }}>Neuro-Symbolic: The Interpretable-by-Design Tradition</h2></div>
    <div style={{ display: "flex", gap: 14 }}>
      {[
        { n: "Neural Module Networks", r: "Andreas+ CVPR '16", d: "Dynamically assemble task-specific networks from reusable modules (find, filter, relate, count). Full trace inspectable.", ext: "→ FiLM, MAC (98.9% CLEVR)" },
        { n: "NS-VQA", r: "Yi+ NeurIPS '18", d: "Neural scene parser + symbolic executor. Complete transparency.", ext: "99.8% on CLEVR" },
        { n: "CLEVRER", r: "Yi+ ICLR '20", d: "Causal + counterfactual video reasoning. Pure neural fails on causal questions.", ext: "Exposes fundamental neural limits" },
      ].map((p, i) => (
        <Card key={i} title={p.n} sub={<Tag venue={p.r} color={C.green} />}>
          <p style={{ margin: 0, fontSize: 12, color: C.textDim, lineHeight: 1.5 }}>{p.d}</p>
          <div style={{ background: `${C.green}10`, borderRadius: 6, padding: "4px 8px", marginTop: "auto" }}>
            <span style={{ fontSize: 11, color: C.green, fontWeight: 600 }}>{p.ext}</span>
          </div>
        </Card>
      ))}
    </div>
    <Insight color={C.green}>🔗 Modern descendants: ViperGPT, VisProg (§3). Provide <strong>faithful-by-construction</strong> reasoning and solve perceptual faithfulness by design.</Insight>
    <Gap>No bridge between neuro-symbolic interpretability and VLM-scale models. NS-VQA works on synthetic; ViperGPT uses external APIs. Can VLMs be decomposed into perception + reasoning?</Gap>
  </div>
);

const S_Vis_Gaps = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 20, textAlign: "center" }}>
    <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0, color: C.green }}>Vision: Key Open Problems</h2>
    <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 700, width: "100%" }}>
      {[
        { n: 1, t: "Text CoT hurts vision → need native visual reasoning representations" },
        { n: 2, t: "No visual self-consistency or tree-of-thoughts equivalents" },
        { n: 3, t: "Cross-modal circuits: the largest interpretability gap" },
        { n: 4, t: "Steering limited to hallucination → reasoning untested" },
        { n: 5, t: "Neuro-symbolic ↔ VLM bridge doesn't exist" },
        { n: 6, t: "VLM-specific data attribution entirely unexplored" },
      ].map(g => (
        <div key={g.n} style={{ display: "flex", alignItems: "center", gap: 14, background: C.card, borderRadius: 10, padding: "12px 18px", border: `1px solid ${C.border}`, textAlign: "left" }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: `${C.green}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: C.green, fontWeight: 700, fontSize: 14 }}>{g.n}</div>
          <p style={{ margin: 0, fontSize: 14, color: C.textDim }}>{g.t}</p>
        </div>
      ))}
    </div>
  </div>
);

/* ═══════ RL SLIDES ═══════ */
const S_RL_Title = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 20 }}>
    <div style={{ fontSize: 13, letterSpacing: 5, color: C.orange, textTransform: "uppercase", fontWeight: 600 }}>Part III</div>
    <h1 style={{ fontSize: 44, fontWeight: 800, margin: 0, background: `linear-gradient(135deg, ${C.orange}, ${C.red})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Reinforcement Learning</h1>
    <p style={{ fontSize: 20, color: C.textDim, margin: 0 }}>RL for Reasoning: Creation, Elicitation, and Trust</p>
    <p style={{ fontSize: 16, color: C.textMuted, margin: 0, fontStyle: "italic" }}>Does RL create reasoning, or merely surface it? Can we trust what it produces?</p>
  </div>
);

const S_RL_Found = () => (
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

const S_RL_Algo = () => (
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

const S_RL_Extended = () => (
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

const S_RL_Debate = () => (
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

const S_RL_SFT = () => (
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

const S_RL_Faith = () => (
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

const S_RL_PRM = () => (
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

const S_RL_Gaps = () => (
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