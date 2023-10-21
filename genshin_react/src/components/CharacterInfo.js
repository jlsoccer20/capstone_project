// src/components/characters/id.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CharacterForm from "./CharacterForm";
import CharacterList from "./CharacterList";
import Landing from "./Landing";

export default function CharacterInfo() {

    // const componentMap = {
    //     "form": CharacterForm,
    //     "list": CharacterList,
    //     "landing": Landing
    //   }
    
    // function App() {
    //   const [data, setData] = useState(null);
    //   const [loading, setLoading] = useState(true);
    
    //   useEffect(() => {
    //     async function fetchData() {
    //       try {
    //         const response = await fetch('https://gsi.fly.dev/characters');
    //         if (!response.ok) {
    //           throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         const jsonData = await response.json();
    //         setData(jsonData);
    //         setLoading(false);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //         setLoading(false);
    //       }
    //     }
    
    //     fetchData();
    //   }, []);

    return (
    // <div className="App">
    //   <h1>API Data:</h1>
    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     //<pre>{JSON.stringify(data, null, 2)}</pre>
    //     //<Route path='/characters' element={<CharacterList/>} />
    //     //<Route path='/characters/add' element={<CharacterForm/>} />
    //     //<Route path='/characters/edit/:id' element={<CharacterForm/>} />
    //     //<Route path='/characters/delete/:id' element={<ConfirmCharacterDelete/>} />
    //     <div>
    //         <h2>Character List:</h2>
    //         {data && data.results && data.results.length > 0 ? (
    //         <ul>
    //           {data.results.map((character, index) => (
    //             <li key={index}>
    //               <strong>Name:</strong> {character.name}, <strong> Rarity:</strong> {character.rarity}, <strong> Weapon:</strong> {character.weapon},<strong> Vision:</strong> {character.vision}
    //             </li>
    //           ))}
    //         </ul>
    //         ) : (
    //             <p>No character data available.</p>
    //             )}
    //     </div>
    //     )}
    // </div>

        <div>
            <img className="header-image-home" src={process.env.PUBLIC_URL + "/genshinbackground3.png"} alt="Genshin Banner"></img>
            
            <h1>Character Info</h1>
            <h2>Jessica Link</h2>
            <div>Email: jlink@dev-10.com</div>
            <div>LinkedIn: https://www.linkedin.com/in/jessica-m-link/</div>
            <p></p>
        </div>
    );
}
