import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import Button from "./components/Button";
//<Link to='/wish' className="btn btn-primary">Make a Wish!</Link>
import DataContext from "../context/DataContext";
import LoadingContext from "../context/LoadingContext";



import { collectionList }  from "./Collection";

export default function Wish() {
  const { data, setData } = useContext(DataContext); // pulled global variables
  const { loading, setLoading } = useContext(LoadingContext);
  //const { state } = useLocation();

  function makeAWish() {
    //console.log("gewished!");
    let i = Math.floor(Math.random() * data.results.length); //51 characters, index 0 to 50
    var randomCharacterName = data.results[i].name;
    if (randomCharacterName == "Traveller (female)" || randomCharacterName == "Traveller (male)"){
        console.log(randomCharacterName + " is not available.");
        makeAWish();
        return;
    }
    displayCharacterImage(randomCharacterName);
    addCharacterToCollection(randomCharacterName);
    
  }
function addCharacterToCollection(characterName){
    collectionList.push(characterName);
    console.log("collection list is: " + collectionList);
    
}
  function displayCharacterImage(characterName) {
    //have HTML for image, want to display using a method call after pressing wish button
    console.log(characterName);
    
    var characterImage = document.getElementById("wish");
    var link = data &&
        data.results &&
    process.env.PUBLIC_URL +
    `/characterInfo/Character_${characterName}_Full_Wish.webp`;
    characterImage.src = link;
  }

//   <Link to="/wish" className="btn btn-primary">
//     Make a Wish!!
//   </Link>;

  return (
    <div>
      <img
        className="header-image-home"
        src={process.env.PUBLIC_URL + "/wish.webp"}
        alt="Genshin Banner"
      ></img>
      <h1 className="padme">Wishing Page!</h1>
      <p className="padme">Isn't this what we came here for? Let's start wishing! Good luck!</p>


      <div className="centerButton">
      
        <button
          type="submit"
          onClick={() => makeAWish()}
          className="btn btn-primary me-2"
          
        >
          Make a Wish!
        </button>
     
      </div>

<div className="centerWishImage">
      <img
            className="characterWish"
            id="wish"
            src={data &&
                data.results &&
            process.env.PUBLIC_URL +
            `/GenshinIcon.png`}
            alt="Wish Result Image"
        ></img>
      
      </div> 
      
    </div>
  );
}
