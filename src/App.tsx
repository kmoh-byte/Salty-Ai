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
    desc: "RO systems, ZLD, BrineRefine, SaltMaker MVR, and lithium refining documentation. Built for high-consequence design decisions.",
    tools: ["Knowledge Base", "MCP Filesystem", "Isolated Memory"],
  },
  {
    id: "02",
    name: "Salty | Operations",
    domain: "Process & Safety",
    color: "#1A6B3C",
    desc: "Plant procedures, maintenance schedules, safety protocols, shift handovers. Operational knowledge that doesn't disappear.",
    tools: ["Knowledge Base", "Isolated Memory", "Web Search"],
  },
  {
    id: "03",
    name: "Salty | Data",
    domain: "Governance & AI",
    color: "#3B2F8C",
    desc: "Data governance, AI ingestion pipelines, platform management. The agent that manages the other agents.",
    tools: ["MCP Filesystem", "Isolated Memory", "Knowledge Base"],
  },
  {
    id: "04",
    name: "Salty | Developer",
    domain: "Engineering Software",
    color: "#1a1a1a",
    desc: "Full-stack application development. Scaffolds projects, writes production code, and saves everything directly to K:\\Salty-AI.",
    tools: ["MCP Filesystem", "Create Directory", "Write Files"],
  },
];

const stack = [
  { label: "Interface", name: "Open WebUI", note: "Multi-agent chat with pipeline support" },
  { label: "Inference", name: "Ollama", note: "Local LLM, GPU accelerated" },
  { label: "Memory", name: "Qdrant", note: "Vector DB, per-agent isolation" },
  { label: "Tools", name: "MCP / mcpo", note: "Filesystem, extensible via config" },
];

export default function App() {
  const [active, setActive] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navOpaque = scrollY > 60;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F7F3EC",
      color: "#1a1a1a",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      overflowX: "hidden",
    }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: 64,
        background: navOpaque ? "rgba(247,243,236,0.95)" : "transparent",
        backdropFilter: navOpaque ? "blur(12px)" : "none",
        borderBottom: navOpaque ? "1px solid rgba(0,0,0,0.08)" : "none",
        transition: "all 0.4s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <SaltyMark size={22} />
          <span style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 400, letterSpacing: "0.02em" }}>
            Salty AI
          </span>
        </div>
        <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
          <a href="#demo" style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 11, fontWeight: 800, letterSpacing: "0.15em",
            textTransform: "uppercase", background: "#C8420A",
            color: "#fff", textDecoration: "none", padding: "8px 20px",
            borderRadius: 2,
          }}>▶ Watch Demo</a>
{["Agents", "Memory", "Stack"].map(item => (
  <a
    key={item}
    href={`#${item.toLowerCase()}`}
    style={{
      fontFamily: "system-ui, sans-serif",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#888",
      textDecoration: "none",
    }}
    onMouseEnter={e => (e.currentTarget.style.color = "#1a1a1a")}
    onMouseLeave={e => (e.currentTarget.style.color = "#888")}
  >
    {item}
  </a>
))}
        </div>
        <div />
      </nav>

      {/* HERO — Editorial masthead layout */}
      <header ref={heroRef} style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 48, paddingRight: 48, maxWidth: 1400, margin: "0 auto" }}>

        {/* Issue line */}
        <div style={{
          display: "flex", alignItems: "center", gap: 24,
          marginBottom: 48, paddingBottom: 16,
          borderBottom: "2px solid #1a1a1a",
        }}>
          <SaltyMark size={18} />
          <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#888" }}>
            Saltworks Engineering Intelligence
          </span>
          <span style={{ marginLeft: "auto", fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C8420A" }}>
            Local · Private · Industrial Grade
          </span>
        </div>

        {/* Masthead grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "start" }}>

          {/* Left — Giant headline */}
          <div style={{ paddingRight: 64, borderRight: "1px solid #D5D0C8" }}>
            <p style={{
              fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 800,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#C8420A", marginBottom: 24,
            }}>
              Enterprise AI Platform — Vol. I
            </p>
            <h1 style={{
              fontSize: "clamp(52px, 6vw, 88px)",
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              margin: "0 0 32px",
            }}>
              AI that knows your{" "}
              <span style={{ fontStyle: "italic", color: "#C8420A" }}>
                engineering
              </span>{" "}
              standards.
            </h1>
            <p style={{
              fontSize: 18, fontFamily: "Georgia, serif",
              fontWeight: 400, lineHeight: 1.7,
              color: "#4a4540", marginBottom: 40, maxWidth: 480,
            }}>
              A locally-hosted, multi-agent AI platform built for Saltworks engineers.
              Your best engineers know things that aren't written down anywhere. Now that knowledge stays.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <button style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 11, fontWeight: 800, letterSpacing: "0.15em",
                textTransform: "uppercase", background: "#1a1a1a",
                color: "#F7F3EC", border: "none", padding: "14px 32px",
                borderRadius: 2, cursor: "pointer",
              }}>
                Explore Architecture →
              </button>
              <button style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 11, fontWeight: 800, letterSpacing: "0.15em",
                textTransform: "uppercase", background: "transparent",
                color: "#1a1a1a", border: "1.5px solid #1a1a1a",
                padding: "14px 32px", borderRadius: 2, cursor: "pointer",
              }}>
                Read Docs
              </button>
            </div>
          </div>

          {/* Right — Pull quote + terminal */}
          <div style={{ paddingLeft: 64 }}>
            {/* Pull quote */}
            <blockquote style={{
              borderLeft: "3px solid #C8420A",
              paddingLeft: 24, marginBottom: 40,
              fontFamily: "Georgia, serif",
              fontSize: 22, fontStyle: "italic",
              lineHeight: 1.5, color: "#3a3530",
            }}>
              "What happens when your senior engineer retires? Salty already asked them everything."
            </blockquote>

            {/* Terminal */}
            <div style={{
              background: "#1a1a1a", borderRadius: 4,
              padding: "24px 28px", fontFamily: "monospace", fontSize: 12,
            }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
              </div>
              <p style={{ color: "#C8420A", margin: "0 0 12px", fontWeight: "bold" }}>➜ salty-ai --status</p>
              {[
                ["Backend", "Ollama + Docker", "#4ade80"],
                ["GPU", "NVIDIA CUDA ✓", "#4ade80"],
                ["Memory", "Qdrant Online ✓", "#4ade80"],
                ["Filesystem", "K:\\Salty-AI ✓", "#4ade80"],
                ["Data Leakage", "Zero — Local Only", "#4ade80"],
              ].map(([k, v, c]) => (
                <p key={k} style={{ color: "#aaa", margin: "0 0 6px" }}>
                  {k}: <span style={{ color: c }}>{v}</span>
                </p>
              ))}
              <p style={{ color: "#555", margin: "16px 0 0", fontStyle: "italic", fontSize: 11 }}># ready for engineering query...</p>
            </div>
          </div>
        </div>
      </header>

      {/* VIDEO DEMO */}
      <section id="demo" style={{ padding: "0 48px 80px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ borderTop: "2px solid #1a1a1a", paddingTop: 48 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24 }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8420A", margin: 0 }}>
              Live Demo
            </p>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", margin: 0 }}>
              Salty | Engineering · Knowledge Base · Memory · Filesystem
            </p>
          </div>
          <div style={{
            background: "#1a1a1a", borderRadius: 4, overflow: "hidden",
            aspectRatio: "16/9", width: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
	<video
	  src="/0508(1).mp4"
  	controls
  	style={{ width: "100%", height: "100%", display: "block" }}
	/>
          </div>
        </div>
      </section>

      {/* RULE */}
      <div style={{ height: 1, background: "#D5D0C8", margin: "0 48px" }} />

      {/* AGENTS — Editorial card spread */}
      <section id="agents" style={{ padding: "80px 48px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C8420A", margin: "0 0 8px", fontStyle: "italic" }}>
              "Build, test, and deploy agents with security best practices and clear functional separation" — Saltworks AI Specialist
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 42, fontWeight: 400, letterSpacing: "-0.02em", margin: 0 }}>
              Specialized Agent Library
            </h2>
          </div>
          <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}>
            Four Agents · One Platform
          </span>
        </div>

        {/* Agent selector — editorial tabs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "2px solid #1a1a1a", marginBottom: 0 }}>
          {agents.map((a, i) => (
            <button key={a.id} onClick={() => setActive(i)} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "20px 24px", textAlign: "left",
              borderRight: i < 3 ? "1px solid #D5D0C8" : "none",
              borderBottom: active === i ? `3px solid ${a.color}` : "3px solid transparent",
              transition: "border-color 0.2s",
            }}>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: active === i ? a.color : "#888", margin: "0 0 6px" }}>
                {a.id}
              </p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 15, fontWeight: 400, color: "#1a1a1a", margin: 0, lineHeight: 1.3 }}>
                {a.name}
              </p>
            </button>
          ))}
        </div>

        {/* Active agent detail */}
        <div style={{
          borderTop: "1px solid #D5D0C8",
          padding: "48px 0",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80,
        }}>
          <div>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: agents[active].color, marginBottom: 16 }}>
              {agents[active].domain}
            </p>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 400, letterSpacing: "-0.02em", margin: "0 0 24px", lineHeight: 1.1 }}>
              {agents[active].name}
            </h3>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 18, lineHeight: 1.7, color: "#4a4540", margin: "0 0 32px" }}>
              {agents[active].desc}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {agents[active].tools.map(t => (
                <span key={t} style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.15em",
                  textTransform: "uppercase", padding: "6px 14px",
                  border: `1.5px solid ${agents[active].color}`,
                  color: agents[active].color, borderRadius: 2,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Agent system prompt preview */}
          <div style={{
            background: "#F0EBE3", borderRadius: 4, padding: "32px",
            borderLeft: `4px solid ${agents[active].color}`,
          }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              System Prompt — {agents[active].name}
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 16, lineHeight: 1.7, color: "#3a3530" }}>
              "{agents[active].id === "01"
                ? "You are Salty, the Saltworks Engineering AI assistant. You help engineers with system design, technical documentation, RO systems, ZLD, BrineRefine, SaltMaker MVR, and lithium refining..."
                : agents[active].id === "02"
                ? "You help operations staff with process plant procedures, maintenance schedules, safety protocols, shift handovers, and daily operational decisions..."
                : agents[active].id === "03"
                ? "You are the Saltworks Data Systems AI. You structure organizational data for AI ingestion, manage the platform, define governance, and train staff..."
                : "You design and build production-grade software. You have direct filesystem access. You do not show code — you write it to disk, scaffold the project, and confirm it's done..."
              }"
            </p>
          </div>
        </div>
      </section>

      {/* RULE */}
      <div style={{ height: 1, background: "#D5D0C8", margin: "0 48px" }} />

      {/* MEMORY — Full width editorial */}
      <section id="memory" style={{ background: "#1a1a1a", color: "#F7F3EC", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8420A", marginBottom: 8 }}>
                Memory Pipeline — v3.0
              </p>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666", marginBottom: 24, fontStyle: "italic" }}>
                "Own AI-related data privacy, access controls, and security governance" — Saltworks AI Specialist
              </p>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: 48, fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.05, margin: "0 0 32px" }}>
                Memory that doesn't{" "}
                <span style={{ fontStyle: "italic", color: "#C8420A" }}>bleed</span>{" "}
                between agents.
              </h2>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 17, lineHeight: 1.75, color: "#aaa", marginBottom: 40 }}>
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
                <div key={title} style={{ display: "flex", gap: 20, marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid #333" }}>
                  <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C8420A", minWidth: 100, paddingTop: 2 }}>{title}</span>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#bbb", lineHeight: 1.5 }}>{desc}</span>
                </div>
              ))}
            </div>

            {/* Memory key diagram */}
            <div>
              <div style={{ background: "#111", borderRadius: 4, padding: 32, fontFamily: "monospace", fontSize: 13, lineHeight: 1.8 }}>
                <p style={{ color: "#555", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>Qdrant Memory Keys</p>
                {[
                  ["47b01a16...__ salty-engineering", "#C8420A"],
                  ["47b01a16...__salty-operations", "#4ade80"],
                  ["47b01a16...__salty-data", "#a78bfa"],
                  ["47b01a16...__salty-developer", "#60a5fa"],
                ].map(([key, color]) => (
                  <div key={key} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
                    <span style={{ color: "#ccc" }}>{key}</span>
                  </div>
                ))}
                <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid #333" }}>
                  <p style={{ color: "#555", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>LLM Save Gate</p>
                  <p style={{ color: "#888", margin: 0 }}>if <span style={{ color: "#C8420A" }}>_should_save</span>(user, assistant):</p>
                  <p style={{ color: "#888", margin: 0, paddingLeft: 20 }}>memory.<span style={{ color: "#4ade80" }}>add</span>(turn, key)</p>
                  <p style={{ color: "#888", margin: 0 }}>else: <span style={{ color: "#555" }}># KB content — skip ✓</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STACK — Horizontal rule layout */}
      <section id="stack" style={{ padding: "80px 48px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8420A", margin: "0 0 8px", fontStyle: "italic" }}>
              "Familiarity with AI libraries and communication protocols — MCP, SDKs" — Saltworks AI Specialist
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 42, fontWeight: 400, letterSpacing: "-0.02em", margin: 0 }}>
              Hardened local stack.
            </h2>
          </div>
          <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}>
            Zero Cloud Dependencies
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {stack.map((s, i) => (
            <div key={s.name} style={{
              padding: "32px 32px 32px 0",
              borderRight: i < 3 ? "1px solid #D5D0C8" : "none",
              paddingLeft: i > 0 ? 32 : 0,
              borderTop: "2px solid #1a1a1a",
            }}>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8420A", margin: "0 0 16px" }}>
                {s.label}
              </p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 400, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                {s.name}
              </p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#666", lineHeight: 1.6, margin: 0 }}>
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "2px solid #1a1a1a", padding: "32px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <SaltyMark size={20} />
          <span style={{ fontFamily: "Georgia, serif", fontSize: 15 }}>Salty AI</span>
        </div>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", margin: 0 }}>
          © 2026 · Built for Saltworks Engineering Intelligence
        </p>
      </footer>
    </div>
  );
}