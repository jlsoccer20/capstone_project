// src/components/characters/id.js
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import DataContext from "../context/DataContext";
import LoadingContext from "../context/LoadingContext";

import CharacterForm from "./CharacterForm";
import CharacterList from "./CharacterList";
import Landing from "./Landing";

export default function CharacterInfo() {
  const { data, setData } = useContext(DataContext); // pulled global variables
  const { loading, setLoading } = useContext(LoadingContext);
  const { state } = useLocation();

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        
        <div className="padme">
          <h1>{state.name}</h1>
          <h3>Vision: {state.vision}</h3>
          <h3>Rarity: {state.rarity}</h3>
          <h3>Weapon: {state.weapon}</h3>

          <img
            className="characterInfoGame"
            src={
              process.env.PUBLIC_URL +
              `/characterInfo/Character_${state.name}_Game.webp`
            }
            alt="Genshin Banner"
          ></img>

          <img
            className="characterInfoCard"
            src={
              process.env.PUBLIC_URL + `/characterInfo/${state.name}_Card.webp`
            }
            alt="Genshin Banner"
          ></img>
          {/* <img
            className="characterWish"
            src={
              process.env.PUBLIC_URL +
              `/characterInfo/Character_${state.name}_Full_Wish.webp`
            }
            alt="Genshin Banner"
          ></img> */}

          <h3>{state.wiki_url}</h3>

          {/* <h3>Birthday: {state.birthday}</h3>
        <h3>Region: {state.region}</h3>
        <h3>Affiliation: {state.affiliation}</h3>
        <h3>release_day: {state.release_day}</h3>
        <h3>special_dish: {state.special_dish}</h3>
        <h3>constellation: {state.constellation}</h3>
        <h3>real_name: {state.real_name}</h3>
        <h3>model_type: {state.model_type}</h3>
         */}

          {/* <div className="container">
            {data &&
              data.results &&
              data.results.map((character) => {
                const imageUrl =
                  process.env.PUBLIC_URL +
                  `/characterInfo/${character.name}Info.png`;
                //console.log("Image URL for", characterCardName, ":", imageUrl);
                return (
                  <div className="wrapper">
                    <img
                      key={character.name}
                      className="characterCard"
                      src={imageUrl}
                      alt={`${character.name} character card`}
                      //onClick={() => handleCharacterCardClick(character)}
                      //onMouseOver={}
                    />
                  </div>
                );
              })}
          </div> */}

          {/* {data && data.results && data.results.length > 0 ? (
            <ul>
              {data.results.filter(c=>c.name).map((character, index) => (
                <li key={index}>
                  <strong>Name:</strong> {character.name}, <strong> Rarity:</strong> {character.rarity}, <strong> Weapon:</strong> {character.weapon},<strong> Vision:</strong> {character.vision}
                </li>
              ))}
            </ul>
            ) : (
                <p>No character data available.</p>
                )} */}
        </div>
      )}
    </div>

    // <div>
    //     <img className="header-image-home" src={process.env.PUBLIC_URL + "/genshinbackground3.png"} alt="Genshin Banner"></img>

    //     <h1>Character Info</h1>

    // </div>
  );
}
