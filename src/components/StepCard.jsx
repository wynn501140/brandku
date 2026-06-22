import styles from "../lib/styles";

export default function StepCard({ step, isLast }) {
  return (
    <div style={styles.step}>
      <div style={styles.stepNum}>{step.num}</div>

      {!isLast && <div style={styles.stepLine} />}

      <h3 style={styles.stepTitle}>{step.title}</h3>
      <p style={styles.stepDesc}>{step.desc}</p>
    </div>
  );
}