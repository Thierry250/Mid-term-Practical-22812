export default function Services() {
  const services = [
    "Book Borrowing",
    "Study Rooms",
    "Computer Access",
    "Community Events"
  ];

  return (
    <section style={styles.services}>
      <h2>Our Services</h2>
      <div style={styles.grid}>
        {services.map((service, idx) => (
          <div key={idx} style={styles.card}>
            <i className="fa-solid fa-book-open" />
            <p>{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  services: {
    padding: '3rem 2rem',
    backgroundColor: '#fff',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem'
  },
  card: {
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
};
