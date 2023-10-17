import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Characters from './components/Characters';
import Collection from './components/Collection';
import Header from './components/Header';

import ConfirmCharacterDelete from "./components/ConfirmCharacterDelete";
import CharacterForm from "./components/CharacterForm";
import CharacterList from "./components/CharacterList";
import Landing from "./components/Landing";
import Nav from "./components/Nav";

const componentMap = {
    "form": CharacterForm,
    "list": CharacterList,
    "landing": Landing
  }

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
        <Nav />
        
        <Header />  
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />    
          <Route path='/characters' element={<Characters />} /> 
          <Route path='/collection' element={<Collection />} />
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