import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleClick = () => {
    alert('Bạn vừa nhập: ' + text);
  };

  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Hello</h1>
        <input
          type="text"
          placeholder="Nhập gì đó..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
        />
        <button
          onClick={handleClick}
          style={{ padding: '8px 12px', fontSize: '16px', cursor: 'pointer' }}
        >
          Gửi
        </button>
      </header>
    </div>
  );
}

export default App;
