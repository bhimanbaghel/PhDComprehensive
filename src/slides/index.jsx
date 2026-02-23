import { S_Title, S_Tension, S_Roadmap } from "./Intro";
import {
  S_NLP_Title, S_DataAttr, S_CoT, S_CoT_Eff, S_Prompt,
  S_Faith1, S_Faith2, S_Steer, S_Mech1, S_Mech2, S_NLP_Gaps
} from "./NLP";
import {
  S_Vis_Title, S_Vis_Diff, S_Vis_DataAttr, S_Vis_CoT, S_Vis_Prog,
  S_Vis_Prompt, S_Vis_Faith, S_Vis_Steer, S_Vis_Mech, S_Vis_Neuro, S_Vis_Gaps
} from "./Vision";
import {
  S_RL_Title, S_RL_Found, S_RL_Algo, S_RL_Extended,
  S_RL_Debate, S_RL_SFT, S_RL_Faith, S_RL_PRM, S_RL_Gaps
} from "./RL";
import { S_Cross, S_Unify } from "./Conclusion";

/* ═══════ SLIDE REGISTRY ═══════ */
export const slides = [
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