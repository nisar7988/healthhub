import React from 'react';
import Navbarline from './Reusable/Navbar';

const Emergency = () => {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#fff5f5',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '90%',
      maxWidth: '800px',
      margin: '2rem auto',
      textAlign: 'center',
    },
    header: {
      color: '#d32f2f',
      fontSize: '2.5em',
      marginBottom: '2rem',
      fontWeight: 'bold',
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
      fontSize: '1em',
    },
    important: {
      color: '#d32f2f',
      fontWeight: '600',
      display: 'block',
      marginBottom: '8px',
    },
    cardText: {
      fontSize: '1em',
    },
  };

  const emergencyContacts = [
    { title: 'National Emergency Number', number: '112' },
    { title: 'Ambulance', number: '102' },
    { title: 'Air Ambulance', number: '9540161344' },
    { title: 'AIDS Helpline', number: '1097' },
    { title: 'Anti Poison (New Delhi)', number: '1066 or 011-1066' },
    { title: 'Poison Information Centre (AIIMS, Delhi)', number: '1800116117, 011-26593677' },
    { title: 'Poison Information Centre (CMC, Vellore)', number: '18004251213' },
    { title: 'COVID-19 Helpline', number: '011-23978046 or 1075' },
    { title: 'KIRAN Mental Health Helpline', number: '18005990019' },
  ];

  return (
    <>
      <Navbarline />
      <div style={styles.container}>
        <h1 style={styles.header}>Hospital & Health Emergency Contacts</h1>
        <div style={styles.cardsContainer}>
          {emergencyContacts.map((contact, index) => (
            <div key={index} style={styles.card}>
              <span style={styles.important}>{contact.title}:</span>
              <span style={styles.cardText}>{contact.number}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Emergency;
