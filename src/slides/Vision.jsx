import { C } from "../theme";
import { Tag, Gap, Insight, Card } from "../components/Shared";

/* ═══════ VISION SLIDES ═══════ */
export const S_Vis_Title = () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 20 }}>
      <div style={{ fontSize: 13, letterSpacing: 5, color: C.green, textTransform: "uppercase", fontWeight: 600 }}>Part II</div>
      <h1 style={{ fontSize: 44, fontWeight: 800, margin: 0, background: `linear-gradient(135deg, ${C.green}, ${C.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Vision</h1>
      <p style={{ fontSize: 20, color: C.textDim, margin: 0 }}>Interpretable and Efficient Reasoning in Visual Models</p>
      <p style={{ fontSize: 16, color: C.textMuted, margin: 0, fontStyle: "italic" }}>What makes visual reasoning fundamentally different?</p>
    </div>
  );
  
  export const S_Vis_Diff = () => (
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
  
  export const S_Vis_DataAttr = () => (
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
  
  export const S_Vis_CoT = () => (
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
  
  export const S_Vis_Prog = () => (
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
  
  export const S_Vis_Prompt = () => (
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
  
  export const S_Vis_Faith = () => (
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
  
  export const S_Vis_Steer = () => (
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
  
  export const S_Vis_Mech = () => (
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
  
  export const S_Vis_Neuro = () => (
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
  
  export const S_Vis_Gaps = () => (
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