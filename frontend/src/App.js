import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error connecting to backend');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sample Frontend Application</h1>
        <div className="content">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <p className="message">{message || 'Waiting for backend response...'}</p>
          )}
          <button onClick={fetchMessage} className="refresh-btn">
            Refresh
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

