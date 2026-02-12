export default function FixedMailCTA() {
  return (
    <a
      href="mailto:hello@outofscope.ai"
      className="btn btnPrimary"
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 60,
        boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
      }}
      aria-label="Email OOS"
    >
      hello@outofscope.ai
    </a>
  );
}