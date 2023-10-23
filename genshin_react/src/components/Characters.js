import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import DataContext from "../context/DataContext";
import LoadingContext from "../context/LoadingContext";

function Characters() {
  const { data, setData } = useContext(DataContext); // global variables
  const { loading, setLoading } = useContext(LoadingContext);
  const [characterCardNames, setCharacterCardNames] = useState([]);
  const [characterCardIds, setCharacterCardIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (data != null) {
      let tempArrayNames = [];
      let tempArrayIds = [];

      for (let i = 0; i < data.results.length; i++) {
        //console.log(data.results[i].name.toLowerCase()) // waits until page is loaded
        //console.log(data.results[i].id)

        //js mdn string methods
        tempArrayNames[i] = data.results[i].name.toLowerCase();
        tempArrayIds[i] = data.results[i].id;
      }
      //console.log(characterCardNames);
      setCharacterCardNames(tempArrayNames);
      setCharacterCardIds(tempArrayIds);
    }
  }, [data]);

  // want to click on character cards, adjust image sizes, navigate to new character info page

  function handleCharacterCardClick(character) {
    console.log("Character name: " + character.name);
    //<Link to='/characters/${characterCardName}' className="nav-link">CharacterCard</Link>
    navigate("/characters/" + character.name, { state: character }); //passing character as state
  }
  // + ", id: " + id

  return (
    <div>
      <img
        className="header-image-home"
        src={process.env.PUBLIC_URL + "/genshinbackground7.webp"}
        alt="Genshin Banner"
      ></img>

      <h1>Characters</h1>
      <div class="container">
        {data &&
          data.results &&
          data.results.map((character) => {
            const imageUrl =
              process.env.PUBLIC_URL + `/characters/${character.name}Card.png`;
            //console.log("Image URL for", characterCardName, ":", imageUrl);
            return (
              <div class="wrapper">
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

      <div className="my-4">
        {/* This is the character page with all characters.*/}
      </div>
    </div>
  );
}

export default Characters;
