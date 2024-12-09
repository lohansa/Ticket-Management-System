import React, { useState } from 'react';
import styled from 'styled-components';

const SimulationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f9f9f9;

  .buttons {
    margin: 2rem 0;
  }

  button {
    padding: 1rem 2rem;
    margin: 0 1rem;
    border: none;
    background: #007bff;
    color: white;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;

    &:hover {
      background: #0056b3;
    }

    &.stop {
      background: #ff4d4f;

      &:hover {
        background: #d9363e;
      }
    }
  }

  .log {
    width: 80%;
    max-width: 600px;
    background: white;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
    overflow-y: auto;
    max-height: 300px;
  }
`;

const Simulation = () => {
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setLogs([...logs, 'Simulation Started']);
    setIsRunning(true);
  };

  const handleStop = () => {
    setLogs([...logs, 'Simulation Stopped']);
    setIsRunning(false);
  };

  return (
    <SimulationContainer>
      <h2>Simulation</h2>
      <div className="buttons">
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning} className="stop">
          Stop
        </button>
      </div>
      <div className="log">
        <h3>Live Log</h3>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </SimulationContainer>
  );
};

export default Simulation;
