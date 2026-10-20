import events from './data/json/events.json';

export default function Events() {
  return (
    <section style={styles.events}>
      <h2>Upcoming Events</h2>
      <div style={styles.listContainer}>
        {events.upcomingEvents.map((event) => (
          <div key={event.id} style={styles.eventCard}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p style={{color: '#7f8c8d'}}>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  events: {
    padding: '3rem 2rem',
    backgroundColor: '#eef1f5',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  eventCard: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  }
};
