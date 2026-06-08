import { useState } from "react";
import styles from "../lib/styles.js";

const features = [
  {
    icon: "🎨",
    title: "Desain Logo Otomatis",
    desc: "Buat logo profesional hanya dalam beberapa klik tanpa skill desain.",
  },
  {
    icon: "📱",
    title: "Template Media Sosial",
    desc: "Ratusan template siap pakai untuk konten Instagram, TikTok, dan lainnya.",
  },
  {
    icon: "🖌️",
    title: "Panduan Warna Brand",
    desc: "Dapatkan palet warna yang konsisten dan profesional untuk brand kamu.",
  },
  {
    icon: "📄",
    title: "Brand Kit Lengkap",
    desc: "Unduh semua aset brand dalam satu paket siap pakai kapan saja.",
  },
];

const steps = [
  { num: "1", title: "Isi Informasi Brand", desc: "Ceritakan nama, bidang usaha, dan karakter brand kamu." },
  { num: "2", title: "Pilih Gaya Desain", desc: "Pilih dari berbagai pilihan gaya yang sesuai selera kamu." },
  { num: "3", title: "Unduh Brand Kit", desc: "Brand kamu siap! Unduh semua aset dalam hitungan detik." },
];

const testimonials = [
  { initials: "SR", name: "Sari Rahayu", role: "Pemilik Toko Kue", text: "brandku bikin usaha kue rumahan saya terlihat jauh lebih profesional. Prosesnya cepat banget!" },
  { initials: "BW", name: "Budi Wicaksono", role: "Freelancer Digital", text: "Akhirnya bisa punya brand yang kelihatan mahal tanpa harus bayar desainer mahal. Recommended!" },
  { initials: "DL", name: "Dewi Lestari", role: "Content Creator", text: "Template media sosialnya keren-keren. Feed Instagram saya jadi rapi dan konsisten sekarang." },
];

const stats = [
  { num: "10.000+", label: "brand dibuat" },
  { num: "5.000+", label: "pengguna aktif" },
  { num: "4.9 ★", label: "rating pengguna" },
  { num: "100%", label: "puas dijamin" },
];

const MAX_CLICKS = 3;

export default function HomePage({ navigate }) {
  const [clickCount, setClickCount] = useState(0);
  const isGone = clickCount >= MAX_CLICKS;
  const remaining = MAX_CLICKS - clickCount;

  const handleCtaClick = () => {
    if (!isGone) setClickCount((c) => c + 1);
  };

  const ctaLabel =
    clickCount === 0
      ? "Mulai Gratis ↗"
      : clickCount === 1
      ? `Serius nih? (${remaining - 1}x lagi)`
      : `Yakin banget? (${remaining - 1}x lagi)`;

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
            <div key={f.title} style={styles.featureCard}>
              <div style={styles.featureIcon}>{f.icon}</div>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section id="cara-kerja" style={{ ...styles.section, background: "#f7f7f7" }}>
        <h2 style={styles.sectionTitle}>Cara Kerja</h2>
        <p style={styles.sectionSub}>3 langkah mudah untuk punya brand sendiri</p>
        <div style={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.num} style={styles.step}>
              <div style={styles.stepNum}>{s.num}</div>
              {i < steps.length - 1 && <div style={styles.stepLine} />}
              <h3 style={styles.stepTitle}>{s.title}</h3>
              <p style={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimoni" style={styles.section}>
        <h2 style={styles.sectionTitle}>Apa Kata Pengguna</h2>
        <p style={styles.sectionSub}>ribuan pemilik bisnis sudah mempercayai brandku</p>
        <div style={styles.testiGrid}>
          {testimonials.map((t) => (
            <div key={t.name} style={styles.testiCard}>
              <div style={styles.stars}>★★★★★</div>
              <p style={styles.testiText}>"{t.text}"</p>
              <div style={styles.testiAuthor}>
                <div style={styles.avatar}>{t.initials}</div>
                <div>
                  <div style={styles.authorName}>{t.name}</div>
                  <div style={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
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
