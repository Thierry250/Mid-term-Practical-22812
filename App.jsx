import Header from './components/header';
import Hero from './components/hero';
import Services from './components/Services';
import Events from './components/events';
import ContactForm from './components/contactform';

function App() {
  return (
    <div style={styles.container}>
      <Header />
      
      <main style={styles.main}>
        <Hero />
        <Services />
        
        {/* Conditional Rendering based on activeTab could be implemented here, 
           but for this single-page demo, we display all sections */}
        <Events />
        <ContactForm />
      </main>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Bright Future Library. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: { fontFamily: 'Arial, sans-serif', lineHeight: 1.6 },
  main: { backgroundColor: '#ecf0f1' },
  footer: {
    textAlign: 'center' ,
    padding: '2rem',
    backgroundColor: '#2C3E50',
    color: '#fff',
    margin: '2rem'
  }
};

export default App;
