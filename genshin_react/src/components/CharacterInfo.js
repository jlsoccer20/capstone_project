// src/components/characters/id.js
import React, { useContext, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import DataContext from "../context/DataContext";
import LoadingContext from "../context/LoadingContext";

import CharacterForm from "./CharacterForm";
import CharacterList from "./CharacterList";
import Landing from "./Landing";

export default function CharacterInfo() {
  const { data, setData } = useContext(DataContext); // pulled global variables
  const { loading, setLoading } = useContext(LoadingContext);

  return (

    <div className="App">

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
    </div>

    // <div>
    //     <img className="header-image-home" src={process.env.PUBLIC_URL + "/genshinbackground3.png"} alt="Genshin Banner"></img>

    //     <h1>Character Info</h1>

    // </div>
  );
}
