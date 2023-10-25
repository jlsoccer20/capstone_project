import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DataContext from "./context/DataContext";
import LoadingContext from "./context/LoadingContext";

import Home from "./components/Home";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Characters from "./components/Characters";
import Collection from "./components/Collection";
import Header from "./components/Header";
import Wish from "./components/Wish";
import CharacterInfo from "./components/CharacterInfo";

import ConfirmCharacterDelete from "./components/ConfirmCharacterDelete";
import CharacterForm from "./components/CharacterForm";
import CharacterList from "./components/CharacterList";
import Landing from "./components/Landing";
import Nav from "./components/Nav";

const componentMap = {
  form: CharacterForm,
  list: CharacterList,
  landing: Landing,
};

function App() {
  const [data, setData] = useState(null); // global variable "data"
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://gsi.fly.dev/characters?limit=100"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        //jsonData.results.sort((a,b)=>a.vision.localeCompare(b.vision));
        jsonData.results.sort((a, b) => {
          let visionCompare = a.vision.localeCompare(b.vision);

          if (visionCompare === 0) {
            return a.rarity.localeCompare(b.rarity);
          }

          return visionCompare;
        });

        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    //html

    // use {} to insert javascript

    // context allows to wrap other components, value accepts (js) objects
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <DataContext.Provider value={{ data, setData }}>
        <Router>
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wish" element={<Wish />} />

            <Route path="/characters/:name" element={<CharacterInfo />} />

            <Route path="*" element={"Not found"} />
          </Routes>

          {/* <div className="App">
            <h1>API Data:</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                //<pre>{JSON.stringify(data, null, 2)}</pre>
                //<Route path='/characters' element={<CharacterList/>} />
                //<Route path='/characters/add' element={<CharacterForm/>} />
                //<Route path='/characters/edit/:id' element={<CharacterForm/>} />
                //<Route path='/characters/delete/:id' element={<ConfirmCharacterDelete/>} />
                <div>
                    <h2>Character List:</h2>
                    {data && data.results && data.results.length > 0 ? (
                    <ul>
                    {data.results.map((character, index) => (
                        <li key={index}>
                        <strong>Name:</strong> {character.name}, <strong> Rarity:</strong> {character.rarity}, <strong> Weapon:</strong> {character.weapon},<strong> Vision:</strong> {character.vision}
                        </li>
                    ))}
                    </ul>
                    ) : (
                        <p>No character data available.</p>
                        )}
                </div>
                )}
            </div> */}
        </Router>
      </DataContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
