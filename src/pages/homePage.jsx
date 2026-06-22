import styles from "../lib/styles.js";

import {
  features,
  steps,
  testimonials,
  stats,
} from "../data/data";

import FeatureCard from "../components/FeatureCard";
import StepCard from "../components/StepCard";
import TestimonialCard from "../components/TestimonialCard";

export default function HomePage({
  clickCount,
  isGone,
  ctaLabel,
  handleCtaClick,
}) {
  return (
    <div style={styles.page}>
      {/* NAV */}
      <nav style={styles.nav}>
        <span style={styles.logo}>brandku</span>
        <div style={styles.navLinks}>
          <a href="#fitur" style={styles.navLink}>Fitur</a>
          <a href="#cara-kerja" style={styles.navLink}>Cara Kerja</a>
          <a href="#testimoni" style={styles.navLink}>Testimoni</a>
          <a href="#" style={styles.navLink}>Masuk</a>
          <a href="#" style={styles.navCta}>Daftar Gratis</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          solusi terbaik membuat brand sendiri<br />dengan mudah
        </h1>
        <p style={styles.heroSub}>platform membuat brand sendiri yang mudah dan cepat</p>
        <div style={styles.heroCta}>
          {!isGone ? (
            <button
              onClick={handleCtaClick}
              style={{
                ...styles.btnPrimary,
                opacity: 1 - clickCount * 0.2,
                transform: `scale(${1 - clickCount * 0.04})`,
                transition: "opacity 0.2s, transform 0.2s",
              }}
            >
              {ctaLabel}
            </button>
          ) : (
            <p style={styles.goneMsg}>😅 Tombolnya udah kabur. Coba refresh!</p>
          )}
          <button style={styles.btnSecondary}>Lihat Demo</button>
        </div>
      </section>

      {/* STATS */}
      <div style={styles.stats}>
        {stats.map((s) => (
          <div key={s.label} style={styles.statItem}>
            <div style={styles.statNum}>{s.num}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <section id="fitur" style={styles.section}>
        <h2 style={styles.sectionTitle}>Fitur Unggulan</h2>
        <p style={styles.sectionSub}>semua yang kamu butuhkan untuk membangun brand yang kuat</p>
        <div style={styles.featuresGrid}>
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              feature={f}
            />
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section id="cara-kerja" style={{ ...styles.section, background: "#f7f7f7" }}>
        <h2 style={styles.sectionTitle}>Cara Kerja</h2>
        <p style={styles.sectionSub}>3 langkah mudah untuk punya brand sendiri</p>
        <div style={styles.steps}>
          {steps.map((s, i) => (
            <StepCard
              key={s.num}
              step={s}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimoni" style={styles.section}>
        <h2 style={styles.sectionTitle}>Apa Kata Pengguna</h2>
        <p style={styles.sectionSub}>ribuan pemilik bisnis sudah mempercayai brandku</p>
        <div style={styles.testiGrid}>
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name}
              testimonial={t}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Siap membangun brand impianmu?</h2>
        <p style={styles.ctaSub}>Bergabung dengan 5.000+ pemilik bisnis yang sudah pakai brandku — gratis untuk memulai</p>
        <button style={styles.btnPrimary}>Mulai Sekarang, Gratis ↗</button>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span style={{ ...styles.logo, fontSize: 16 }}>brandku</span>
        <p style={styles.footerText}>© 2026 brandku. Semua hak dilindungi.</p>
        <div style={styles.footerLinks}>
          {["Privasi", "Syarat Penggunaan", "Kontak"].map((l) => (
            <a key={l} href="#" style={styles.footerLink}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
