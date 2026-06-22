import styles from "../lib/styles";

export default function TestimonialCard({ testimonial }) {
  return (
    <div style={styles.testiCard}>
      <div style={styles.stars}>★★★★★</div>

      <p style={styles.testiText}>
        "{testimonial.text}"
      </p>

      <div style={styles.testiAuthor}>
        <div style={styles.avatar}>
          {testimonial.initials}
        </div>

        <div>
          <div style={styles.authorName}>
            {testimonial.name}
          </div>

          <div style={styles.authorRole}>
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}