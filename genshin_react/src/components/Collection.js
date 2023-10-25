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

  var arrayCollection = localStorage.getItem("storedCollection");
  var storedCollection = JSON.parse(arrayCollection);

  function handleCharacterCardClick(character) {
    console.log("Character name: " + character.name);
    //<Link to='/characters/${characterCardName}' className="nav-link">CharacterCard</Link>
    navigate("/characters/" + character.name, { state: character }); //passing character as state
  }

  function resetCollection() {
    if (storedCollection) {
      localStorage.clear();
      window.location.reload();
      //storedCollection = JSON.parse("traveller (female)")
    }
    // collectionList.push("traveller (female)");
    //     var storedCollection = collectionList;
    //     var arrayCollection = JSON.stringify(storedCollection)
    //     localStorage.setItem("storedCollection", arrayCollection);
  }

  if (storedCollection) {
    //console.log("Retrieve Stored Collection: " + storedCollection);
    return (
      <div>
        <img
          className="header-image-home"
          src={process.env.PUBLIC_URL + "/genshinbackground6.webp"}
          alt="Genshin Banner"
        ></img>

        <h1 className="padme">My Collection</h1>

        <div className="padme">
          <button
            type="reset"
            onClick={() => resetCollection()}
            className="btn btn-primary me-2"
          >
            Reset Collection
          </button>
        </div>
        {/* <div className="my-4">
          {characters.map((c) => (
            <div>{c.name}</div>
          ))}
          
        </div> */}

        <div className="collection">
          <div className="container">
            <div className="centerCards">
              <div className="wrapper">
                <img
                  key="traveller (female)"
                  className="characterCard"
                  src={
                    process.env.PUBLIC_URL +
                    "/characters/traveller (female)Card.png"
                  }
                  alt={`traveller (female) character card`}
                />
              </div>
              <div className="wrapper">
                <img
                  key="traveller (male)"
                  className="characterCard"
                  src={
                    process.env.PUBLIC_URL +
                    "/characters/traveller (male)Card.png"
                  }
                  alt={`traveller (male) character card`}
                />
              </div>

              {storedCollection.map((character) => {
                const imageUrl =
                  process.env.PUBLIC_URL +
                  `/characters/${character.name}Card.png`;
                //console.log("Image URL for", characterCardName, ":", imageUrl);
                //retrieveCollection();
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
  } else {
    //no data found
    console.log("No data found.");

    return (
      <div>
        <img
          className="header-image-home"
          src={process.env.PUBLIC_URL + "/genshinbackground6.webp"}
          alt="Genshin Banner"
        ></img>

        <h1 className="padme">My Collection</h1>

        <div className="padme">
          <button
            type="reset"
            onClick={() => resetCollection()}
            className="btn btn-primary me-2"
          >
            Reset Collection
          </button>
        </div>
        {/* <div className="my-4">
        {characters.map((c) => (
          <div>{c.name}</div>
        ))}
        
      </div> */}

        <div className="collection">
          <div className="container">
            <div className="centerCards">
              <div className="wrapper">
                <img
                  key="traveller (female)"
                  className="characterCard"
                  src={
                    process.env.PUBLIC_URL +
                    "/characters/traveller (female)Card.png"
                  }
                  alt={`traveller (female) character card`}
                />
              </div>
              <div className="wrapper">
                <img
                  key="traveller (male)"
                  className="characterCard"
                  src={
                    process.env.PUBLIC_URL +
                    "/characters/traveller (male)Card.png"
                  }
                  alt={`traveller (male) character card`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
