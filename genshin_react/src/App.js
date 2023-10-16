import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';



function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://gsi.fly.dev/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Router>
        <Header />  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />    
      </Routes>

    <div className="App">
      <h1>API Data:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        //<pre>{JSON.stringify(data, null, 2)}</pre>
        <div>
            <h2>Character List:</h2>
            {data && data.characters && data.characters.length > 0 ? (
            <ul>
              {data.characters.map((character, index) => (
                <li key={index}>
                  <strong>Name:</strong> {character.name}, <strong>Weapon Type:</strong> {character.weaponType}
                </li>
              ))}
            </ul>
            ) : (
                <p>No character data available.</p>
                )}
        </div>
        )}
    </div>
    </Router>
  );
}

export default App;