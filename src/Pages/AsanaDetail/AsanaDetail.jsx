import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AsanaDetail.css';

const AsanaDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p>No asana data found.</p>;
  }

  return (
    <div className="asanaDetail">
      <button className="backButton" onClick={() => navigate(-1)}>← Back</button>
      <img src={`${state.img}?auto=format&fit=crop&w=800&q=80`} alt={state.name} className="asanaImage" />
      <h1>{state.name}</h1>
      <p className="asanaDescription">{state.desc}</p>
      <p><strong>Timing:</strong> {state.timing}</p>
      <p><strong>Instructor:</strong> {state.teacher}</p>
    </div>
  );
};

export default AsanaDetail;
