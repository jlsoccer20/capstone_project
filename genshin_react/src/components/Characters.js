import React, { useContext, useState, useEffect } from "react";

import DataContext from "../context/DataContext";
import LoadingContext from "../context/LoadingContext";

function Characters() {
  const { data, setData } = useContext(DataContext); // global variables
  const { loading, setLoading } = useContext(LoadingContext);
  const [characterCardNames, setCharacterCardNames] = useState([]);

  useEffect(() => {
    if (data != null) {
      let tempArray = [];

      for (let i = 0; i < data.results.length; i++) {
        //console.log(data.results[i].name.toLowerCase()) // waits until page is loaded

        //js mdn string methods
        tempArray[i] = data.results[i].name.toLowerCase();
      }
      console.log(characterCardNames);
      setCharacterCardNames(tempArray);
    }
  }, [data]);

  // want to click on character cards
  //handleCharacterCardClick(id);

  return (
    <div>
      <img
        className="header-image-home"
        src={process.env.PUBLIC_URL + "/genshinbackground7.webp"}
        alt="Genshin Banner"
      ></img>

      <h1>Characters</h1>

      {characterCardNames.map((characterCardName) => {
        const imageUrl =
          process.env.PUBLIC_URL + `/characters/${characterCardName}Card.png`;
        //console.log("Image URL for", characterCardName, ":", imageUrl);
        return (
          <img
            key={characterCardName}
            className="characterCard"
            src={imageUrl}
            alt={`${characterCardName} character card`}
            //onClick = {() => handleCharacterCardClick(id)}
          />
        );
      })}

      <div className="my-4">
        {/* This is the character page with all characters.*/}
      </div>
    </div>
  );
}

export default Characters;
