import data from './data/json/index.json';

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroContent}>
        <h2>Learn. Explore. Grow.</h2>
        <p>{data.libraryName}</p>
        <p>{data.mission}</p>
        <button 
          onClick={() => console.log('Click me')}
          style={styles.ctaButton}
        >
          Visit Us Today
        </button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    padding: '4rem 2rem',
    backgroundColor: '#ecf0f1', // Light Gray/White
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  ctaButton: {
    marginTop: '1.5rem',
    padding: '1rem 2rem',
    backgroundColor: '#E91E63', // Pink/Magenta for contrast
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  }
};
