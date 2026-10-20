import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  // Validation Rules: Email must be longer than 5 chars and contain '@'
  const isValidEmail = (email) => email.length > 5 && email.includes('@');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple Client-Side Validation
    if (isValidEmail(formData.email)) {
      alert("Thank you! Your information has been submitted.");
      setFormData({ name: '', email: '' }); // Reset form
    } else {
      alert("Invalid Email format. Please ensure it includes an '@' symbol and is more than 5 characters.");
    }
  };

  return (
    <section style={styles.contact}>
      <h2>Join Our Newsletter</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        
        <div style={styles.inputGroup}>
          <input 
            type="email" 
            placeholder="Your Email Address" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        <button type="submit" style={styles.submitButton}>
          Subscribe
        </button>
      </form>
    </section>
  );
}

const styles = {
  contact: {
    padding: '3rem 2rem',
    backgroundColor: '#2C3E50',
    color: '#fff'
  },
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  submitButton: {
    padding: '1rem',
    backgroundColor: '#D4AF37', // Gold accent
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};
