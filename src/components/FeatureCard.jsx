import styles from "../lib/styles";

export default function FeatureCard({ feature }) {
  return (
    <div style={styles.featureCard}>
      <div style={styles.featureIcon}>{feature.icon}</div>
      <h3 style={styles.featureTitle}>{feature.title}</h3>
      <p style={styles.featureDesc}>{feature.desc}</p>
    </div>
  );
}