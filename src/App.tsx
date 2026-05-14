import { useState, useEffect, useRef } from "react";

const SaltyMark = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
    <circle cx="38" cy="52" r="16" />
    <ellipse cx="38" cy="18" rx="5" ry="10" />
    <ellipse cx="38" cy="86" rx="5" ry="10" />
    <ellipse cx="4" cy="52" rx="10" ry="5" />
    <ellipse cx="72" cy="52" rx="10" ry="5" />
    <ellipse cx="14" cy="28" rx="5" ry="10" transform="rotate(-45 14 28)" />
    <ellipse cx="62" cy="76" rx="5" ry="10" transform="rotate(-45 62 76)" />
    <ellipse cx="62" cy="28" rx="5" ry="10" transform="rotate(45 62 28)" />
    <ellipse cx="14" cy="76" rx="5" ry="10" transform="rotate(45 14 76)" />
    <circle cx="72" cy="36" r="5" />
    <circle cx="80" cy="52" r="3.5" />
    <circle cx="72" cy="66" r="2.5" />
  </svg>
);

const agents = [
  {
    id: "01",
    name: "Salty | Engineering",
    domain: "Technical Systems",
    color: "#C8420A",
    desc: "Industrial process intelligence for RO systems, ZLD workflows, thermal systems, and high-consequence engineering decisions.",
    tools: ["Knowledge Base", "MCP Filesystem", "Isolated Memory"],
  },
  {
    id: "02",
    name: "Salty | Operations",
    domain: "Process & Safety",
    color: "#1A6B3C",
    desc: "Operational procedures, maintenance workflows, safety documentation, and plant continuity systems.",
    tools: ["Knowledge Base", "Isolated Memory", "Web Retrieval"],
  },
  {
    id: "03",
    name: "Salty | Data",
    domain: "Governance & AI",
    color: "#3B2F8C",
    desc: "AI governance, structured ingestion pipelines, memory orchestration, and enterprise data lifecycle management.",
    tools: ["MCP Integrations", "Memory Governance", "Knowledge Systems"],
  },
  {
    id: "04",
    name: "Salty | Developer",
    domain: "Engineering Software",
    color: "#1a1a1a",
    desc: "Production-grade software engineering agent for internal tooling, automation, and enterprise application development.",
    tools: ["MCP Filesystem", "Project Scaffolding", "Code Generation"],
  },
];

const stack = [
  { label: "Architecture", name: "Private AI Infrastructure", note: "Designed for secure on-prem industrial deployment" },
  { label: "Inference", name: "Accelerated Local Runtime", note: "GPU-optimized model execution with zero cloud dependency" },
  { label: "Memory", name: "Context Isolation Layer", note: "Agent-scoped retrieval and persistent memory systems" },
  { label: "Integration", name: "MCP Tooling Framework", note: "Secure filesystem access and enterprise integrations" },
];

const systemPrompts = {
  "01": "You are Salty, the Saltworks Engineering AI assistant. You help engineers with system design, technical documentation, RO systems, ZLD, BrineRefine, SaltMaker MVR, and lithium refining...",
  "02": "You help operations staff with process plant procedures, maintenance schedules, safety protocols, shift handovers, and daily operational decisions...",
  "03": "You are the Saltworks Data Systems AI. You structure organizational data for AI ingestion, manage the platform, define governance, and train staff...",
  "04": "You design and build production-grade software. You have direct filesystem access. You do not show code — you write it to disk, scaffold the project, and confirm it's done...",
};

export default function App() {
  const [active, setActive] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navOpaque = scrollY > 60;

  return (
    <div style={{ minHeight: "100vh", background: "#F7F3EC", color: "#1a1a1a", fontFamily: "'Georgia', 'Times New Roman', serif", overflowX: "hidden" }}>

      {/* NAV */}
      <nav className={`nav${navOpaque ? " scrolled" : ""}`}>
        <div className="nav-brand">
          <SaltyMark size={20} />
          <span>Salty AI</span>
        </div>

        {/* Desktop links */}
        <div className="nav-links">
          <a href="#demo" className="nav-cta btn">▶ Watch Demo</a>
          {["Agents", "Memory", "Stack"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className={`hbar hbar-1${menuOpen ? " open" : ""}`} />
          <span className={`hbar hbar-2${menuOpen ? " open" : ""}`} />
          <span className={`hbar hbar-3${menuOpen ? " open" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`drawer${menuOpen ? " open" : ""}`}>
        <div className="drawer-inner">
          <a href="#demo" className="drawer-cta" onClick={() => setMenuOpen(false)}>▶ Watch Demo</a>
          {["Agents", "Memory", "Stack"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="drawer-link" onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </div>
      </div>

      {/* HERO */}
      <header className="hero wrap" style={{ maxWidth: 1400, margin: "0 auto" }}>

        {/* Eyebrow / issue line */}
        <div className="hero-eyebrow">
          <SaltyMark size={16} />
          <span className="lbl lbl-dim">Saltworks Engineering Intelligence</span>
          <span className="lbl lbl-red push" style={{ fontStyle: "normal" }}>Local · Private · Industrial Grade</span>
        </div>

        {/* Masthead grid */}
        <div className="hero-grid">

          {/* Left */}
          <div className="hero-left">
            <p className="lbl lbl-red" style={{ marginBottom: 20 }}>Enterprise AI Platform — Vol. I</p>
            <h1 className="hero-h1">
              AI that knows your{" "}
              <em>engineering</em>{" "}
              standards.
            </h1>
            <p className="hero-p">
              A locally-hosted, multi-agent AI platform built for Saltworks engineers.
              Your best engineers know things that aren't written down anywhere. Now that knowledge stays.
            </p>
            <div className="hero-btns">
              <a href="#memory" className="btn btn-dark">
  Explore Architecture →
</a>
            </div>
          </div>

          {/* Right */}
          <div>
            <blockquote className="pullquote">
              "What happens when your senior engineer retires? Salty already asked them everything."
            </blockquote>
            <div className="terminal">
              <div className="t-dots">
                <div className="t-dot" style={{ background: "#ff5f57" }} />
                <div className="t-dot" style={{ background: "#febc2e" }} />
                <div className="t-dot" style={{ background: "#28c840" }} />
              </div>
              <p className="t-cmd">➜ salty-ai --status</p>
              {[
                ["Backend", "Ollama + Docker", "#4ade80"],
                ["GPU", "NVIDIA CUDA ✓", "#4ade80"],
                ["Memory", "Qdrant Online ✓", "#4ade80"],
                ["Filesystem", "K:\\Salty-AI ✓", "#4ade80"],
                ["Data Leakage", "Zero — Local Only", "#4ade80"],
              ].map(([k, v, c]) => (
                <p key={k} className="t-row">
                  {k}: <span style={{ color: c }}>{v}</span>
                </p>
              ))}
              <p className="t-note"># ready for engineering query...</p>
            </div>
          </div>
        </div>
      </header>

      {/* VIDEO DEMO */}
      <section id="demo" className="demo-sec wrap" style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ borderTop: "2px solid #1a1a1a", paddingTop: "clamp(28px, 4vw, 48px)" }}>
          <div className="demo-hdr">
            <span className="lbl lbl-red">Live Demo</span>
            <span className="lbl lbl-dim">Salty | Engineering · Knowledge Base · Memory · Filesystem</span>
          </div>
          <div className="video-shell">
            <video src="/0508(1).mp4" controls poster="/brand.png" />
          </div>
        </div>
      </section>

      <div className="rule-h wrap" style={{ maxWidth: "none" }} />

      {/* AGENTS */}
      <section id="agents" className="agents-sec">
        {/* Header — padded */}
        <div className="wrap" style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="agents-hdr">
            <div>
              <p className="lbl lbl-red lbl-italic" style={{ marginBottom: 8 }}>
                "Build, test, and deploy agents with security best practices and clear functional separation" — Saltworks AI Specialist
              </p>
              <h2 className="section-h2">Specialized Agent Library</h2>
            </div>
            <span className="lbl lbl-dim">Four Agents · One Platform</span>
          </div>
        </div>

        {/* Tabs — full-width scroll container, padding inside each tab */}
        <div className="agent-tabs-outer">
          <div className="agent-tabs">
            {agents.map((a, i) => (
              <button
                key={a.id}
                className="a-tab"
                onClick={() => setActive(i)}
                style={{ borderBottom: active === i ? `3px solid ${a.color}` : "3px solid transparent" }}
              >
                <span className="lbl a-tab-id" style={{ color: active === i ? a.color : "#888" }}>{a.id}</span>
                <span className="a-tab-name">{a.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail — padded */}
        <div className="wrap" style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="agent-detail">
            <div>
              <p className="lbl" style={{ color: agents[active].color, marginBottom: 10 }}>{agents[active].domain}</p>
              <h3 className="agent-name">{agents[active].name}</h3>
              <p className="agent-desc">{agents[active].desc}</p>
              <div className="agent-tools">
                {agents[active].tools.map(t => (
                  <span key={t} className="tool-pill" style={{ borderColor: agents[active].color, color: agents[active].color }}>{t}</span>
                ))}
              </div>
            </div>

            <div className="prompt-box" style={{ borderLeftColor: agents[active].color }}>
              <p className="lbl lbl-dim" style={{ marginBottom: 10 }}>System Prompt — {agents[active].name}</p>
              <p className="prompt-text">"{systemPrompts[agents[active].id]}"</p>
            </div>
          </div>
        </div>
      </section>

      <div className="rule-h" />

      {/* MEMORY */}
      <section id="memory" className="memory-sec">
        <div className="wrap" style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="memory-grid">
            <div>
              <p className="lbl lbl-red" style={{ marginBottom: 8 }}>Memory Pipeline — v3.0</p>
              <p className="lbl lbl-italic" style={{ color: "#666", marginBottom: 20 }}>
                "Own AI-related data privacy, access controls, and security governance" — Saltworks AI Specialist
              </p>
              <h2 className="memory-h2">
                Memory that doesn't{" "}
                <em>bleed</em>{" "}
                between agents.
              </h2>
              <p className="memory-p">
                Each user-agent pair gets a completely isolated memory pool in Qdrant.
                A secondary LLM validation layer prevents knowledge base content from
                polluting personal context — a problem that kills most naive RAG deployments.
              </p>

              {[
                ["Isolated keys", "Per-model UUID__model_id memory scoping"],
                ["LLM save gate", "Secondary model validates before persisting"],
                ["Relevance filter", "Memories screened before injection"],
                ["Zero cross-bleed", "Engineering never sees Operations context"],
              ].map(([title, desc]) => (
                <div key={title} className="mem-feat">
                  <span className="mem-lbl">{title}</span>
                  <span className="mem-desc">{desc}</span>
                </div>
              ))}
            </div>

            {/* Memory key diagram */}
            <div className="codeblock">
              <p className="cb-label">Qdrant Memory Keys</p>
              {[
                ["47b01a16...__ salty-engineering", "#C8420A"],
                ["47b01a16...__salty-operations", "#4ade80"],
                ["47b01a16...__salty-data", "#a78bfa"],
                ["47b01a16...__salty-developer", "#60a5fa"],
              ].map(([key, color]) => (
                <div key={key} className="cb-row">
                  <div className="cb-dot" style={{ background: color }} />
                  <span className="cb-key">{key}</span>
                </div>
              ))}
              <div className="cb-gate">
                <p className="cb-label" style={{ marginBottom: 10 }}>LLM Save Gate</p>
                <p className="cb-line">if <span style={{ color: "#C8420A" }}>_should_save</span>(user, assistant):</p>
                <p className="cb-line" style={{ paddingLeft: 20 }}>memory.<span style={{ color: "#4ade80" }}>add</span>(turn, key)</p>
                <p className="cb-line">else: <span style={{ color: "#555" }}># KB content — skip ✓</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="stack-sec wrap" style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="stack-hdr" style={{ marginBottom: "clamp(0px, 0px, 0px)" }}>
          <div>
            <p className="lbl lbl-red lbl-italic" style={{ marginBottom: 8 }}>
              "Familiarity with AI libraries and communication protocols — MCP, SDKs" — Saltworks AI Specialist
            </p>
            <h2 className="section-h2">Hardened local stack.</h2>
          </div>
          <span className="lbl lbl-dim">Zero Cloud Dependencies</span>
        </div>

        <div className="stack-grid" style={{ marginTop: "clamp(24px, 4vw, 48px)" }}>
          {stack.map((s, i) => (
            <div key={s.name} className="stack-card">
              <p className="lbl lbl-red" style={{ marginBottom: 12 }}>{s.label}</p>
              <p className="stack-name">{s.name}</p>
              <p className="stack-note">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <SaltyMark size={18} />
          <span>Salty AI</span>
        </div>
        <p className="lbl lbl-dim">© 2026 · Built for Saltworks Engineering Intelligence</p>
      </footer>
    </div>
  );
}