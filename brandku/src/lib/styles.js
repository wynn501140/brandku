// Shared inline styles for brandku
// Dipakai di seluruh halaman supaya tampilan konsisten

const styles = {
  page: { fontFamily: "Georgia, serif", color: "#111", background: "#fff", minHeight: "100vh" },

  // NAV
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 40px", borderBottom: "1px solid #e5e5e5" },
  logo: { fontSize: 22, fontWeight: 700, color: "#29b6d8", letterSpacing: "-0.5px" },
  navLinks: { display: "flex", gap: 20, alignItems: "center" },
  navLink: { fontSize: 14, color: "#555", textDecoration: "none" },
  navCta: { background: "#1ec8a0", color: "#fff", padding: "7px 18px", borderRadius: 8, fontSize: 14, textDecoration: "none" },

  // HERO
  hero: { background: "#1ec8a0", padding: "56px 40px 48px", textAlign: "center" },
  heroTitle: { fontSize: 32, fontWeight: 700, color: "#04342c", lineHeight: 1.35, margin: 0 },
  heroSub: { fontSize: 15, color: "#085041", marginTop: 12 },
  heroCta: { display: "flex", gap: 12, justifyContent: "center", marginTop: 28, alignItems: "center" },
  goneMsg: { fontSize: 15, color: "#04342c", fontWeight: 600 },

  // BUTTONS
  btnPrimary: { background: "#04342c", color: "#fff", padding: "10px 28px", borderRadius: 8, fontSize: 14, border: "none", cursor: "pointer" },
  btnSecondary: { background: "transparent", color: "#04342c", padding: "10px 28px", borderRadius: 8, fontSize: 14, border: "2px solid #04342c", cursor: "pointer" },

  // STATS
  stats: { display: "flex", justifyContent: "center", gap: 48, padding: "32px 40px", borderBottom: "1px solid #e5e5e5", flexWrap: "wrap" },
  statItem: { textAlign: "center" },
  statNum: { fontSize: 28, fontWeight: 700, color: "#1ec8a0" },
  statLabel: { fontSize: 13, color: "#777", marginTop: 4 },

  // SECTIONS
  section: { padding: "56px 40px" },
  sectionTitle: { fontSize: 20, fontWeight: 700, textAlign: "center", marginBottom: 8, marginTop: 0 },
  sectionSub: { fontSize: 14, color: "#777", textAlign: "center", marginBottom: 36 },

  // FEATURES
  featuresGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, maxWidth: 900, margin: "0 auto" },
  featureCard: { background: "#fff", border: "1px solid #e5e5e5", borderRadius: 12, padding: "20px 16px" },
  featureIcon: { fontSize: 24, marginBottom: 12 },
  featureTitle: { fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 6, marginTop: 0 },
  featureDesc: { fontSize: 13, color: "#666", lineHeight: 1.55, margin: 0 },

  // STEPS
  steps: { display: "flex", maxWidth: 800, margin: "0 auto", position: "relative" },
  step: { flex: 1, textAlign: "center", padding: "0 16px", position: "relative" },
  stepNum: { width: 36, height: 36, borderRadius: "50%", background: "#1ec8a0", color: "#04342c", fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" },
  stepLine: { position: "absolute", top: 17, left: "calc(50% + 20px)", width: "calc(100% - 40px)", height: 2, background: "#1ec8a0", opacity: 0.4 },
  stepTitle: { fontSize: 14, fontWeight: 700, marginBottom: 6, marginTop: 0 },
  stepDesc: { fontSize: 13, color: "#666", lineHeight: 1.5, margin: 0 },

  // TESTIMONIALS
  testiGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, maxWidth: 900, margin: "0 auto" },
  testiCard: { background: "#fff", border: "1px solid #e5e5e5", borderRadius: 12, padding: 20 },
  stars: { color: "#ef9f27", fontSize: 14, marginBottom: 10 },
  testiText: { fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 14, fontStyle: "italic" },
  testiAuthor: { display: "flex", alignItems: "center", gap: 10 },
  avatar: { width: 32, height: 32, borderRadius: "50%", background: "#e1f5ee", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#0f6e56", flexShrink: 0 },
  authorName: { fontSize: 13, fontWeight: 700, color: "#111" },
  authorRole: { fontSize: 12, color: "#888" },

  // CTA SECTION
  ctaSection: { background: "#1ec8a0", padding: "56px 40px", textAlign: "center" },
  ctaTitle: { fontSize: 24, fontWeight: 700, color: "#04342c", marginBottom: 10, marginTop: 0 },
  ctaSub: { fontSize: 15, color: "#085041", marginBottom: 28 },

  // FOOTER
  footer: { padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #e5e5e5", flexWrap: "wrap", gap: 12 },
  footerText: { fontSize: 13, color: "#888", margin: 0 },
  footerLinks: { display: "flex", gap: 16 },
  footerLink: { fontSize: 13, color: "#888", textDecoration: "none" },
};

export default styles;
