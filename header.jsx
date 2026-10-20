import { useState } from 'react';

export default function Header() {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>Bright Future Library</h1>
        <p style={{margin: 0, color: '#D4AF37'}}>Education for All</p>
      </div>
      <nav style={styles.nav}>
        {menuItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => setActiveTab(item.id)}
            style={{
              ...styles.navButton,
              backgroundColor: activeTab === item.id ? '#2C3E50' : 'transparent',
              color: activeTab === item.id ? '#D4AF37' : '#ecf0f1'
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    backgroundColor: '#2C3E50', // Deep Navy Blue
    color: '#fff',
  },
  logo: {
    textAlign: 'left',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  navButton: {
    border: 'none',
    outline: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    fontWeight: 600,
    transition: 'background-color 0.2s ease',
    fontSize: '1rem'
  }
};
