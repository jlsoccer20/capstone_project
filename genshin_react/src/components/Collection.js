import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import DataContext from "../context/DataContext";
import LoadingContext from "../context/LoadingContext";

export const collectionList = [];

function Collection() {
  const [characters, setCharacters] = useState([]); // setting state to empty array
  const { data, setData } = useContext(DataContext); // global variables
  const { loading, setLoading } = useContext(LoadingContext);
  const [characterCardNames, setCharacterCardNames] = useState([]);
  const [characterCardIds, setCharacterCardIds] = useState([]);
  const navigate = useNavigate();

  function handleCharacterCardClick(character) {
    console.log("Character name: " + character.name);
    //<Link to='/characters/${characterCardName}' className="nav-link">CharacterCard</Link>
    navigate("/characters/" + character.name, { state: character }); //passing character as state
  }

  function retrieveCollection(){
    var arrayCollection = localStorage.getItem("storedCollection");
    var storedCollection = JSON.parse(arrayCollection);
    if (storedCollection) {
        console.log("retrieveCollection storedCollection: " + storedCollection);
      } else {
        console.log('No data found.');
      }
  
  }

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("https://gsi.fly.dev/characters");
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const jsonData = await response.json();
//         setCharacters(jsonData.results);
//         console.log(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, []);

  return (
    // similar to Agents, use list to populate display
    // TODO: do fetch requests here for characters, useEffect useState hooks
    <div>
      <img
        className="header-image-home"
        src={process.env.PUBLIC_URL + "/genshinbackground6.webp"}
        alt="Genshin Banner"
      ></img>

      <h1 className="padme">My Collection</h1>
      {/* <div className="my-4">
        {characters.map((c) => (
          <div>{c.name}</div>
        ))}
        
      </div> */}
        

      <div className="collection">
      <div className="container">
        <div className="centerCards">
        {data &&
          data.results &&
          data.results.map((character) => {
            const imageUrl =
              process.env.PUBLIC_URL + `/characters/${character.name}Card.png`;
            //console.log("Image URL for", characterCardName, ":", imageUrl);
            retrieveCollection();
            return (

              <div className="wrapper">
                <img
                  key={character.name}
                  className="characterCard"
                  src={imageUrl}
                  alt={`${character.name} character card`}
                  onClick={() => handleCharacterCardClick(character)}
                  //onMouseOver={}
                />
              </div>
            );
          })}
      </div>
      </div>
        

      </div>
    </div>
  );
}

export default Collection;
