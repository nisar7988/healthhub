import React from 'react';
import { useSelector } from 'react-redux';

const SomeComponent = () => {
  const patientId = useSelector((state) => state.user.patientId);

  return (
    <div>
      <h1>Patient Dashboard</h1>
      {patientId ? (
        <p>Welcome, patient  {patientId}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SomeComponent;
