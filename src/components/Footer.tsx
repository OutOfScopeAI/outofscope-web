export default function Footer() {
  return (
    <footer style={{ paddingTop: 40 }}>
      <div
        className="container"
        style={{
          maxWidth: 900,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: 16,
          borderTop: "1px solid var(--border)",
          paddingTop: 20,
        }}
      >
        <div style={{ fontSize: 13, color: "var(--muted)" }}>
          © {new Date().getFullYear()} OOS
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            fontSize: 14,
          }}
        >
          <a href="https://www.youtube.com/@OutOfScopeAILabs" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="https://www.linkedin.com/company/out-of-scope-ai-labs" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com/oosailabs" target="_blank" rel="noopener noreferrer">
            X
          </a>
        </div>
      </div>
    </footer>
  );
}