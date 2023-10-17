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
        const response = await fetch('https://gsi.fly.dev/characters');
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
          <Route path='/characters/:id' element={<Characters />} /> 
          <Route path='/collection' element={<Collection />} />

          <Route path='/characters' element={<CharacterList/>} />
          <Route path='/characters/add' element={<CharacterForm/>} />
          <Route path='/characters/edit/:id' element={<CharacterForm/>} />
          <Route path='/characters/delete/:id' element={<ConfirmCharacterDelete/>} />
          <Route path='*' element={"Not found"} />
      </Routes>

    <div className="App">
      <h1>API Data:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        //<pre>{JSON.stringify(data, null, 2)}</pre>
        <div>
            <h2>Character List:</h2>
            {data && data.results && data.results.length > 0 ? (
            <ul>
              {data.results.map((character, index) => (
                <li key={index}>
                  <strong>Name:</strong> {character.name}, <strong>Weapon:</strong> {character.weapon},<strong>Vision:</strong> {character.vision}
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