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


  let five_star_chance = 0.00006;
  let four_star_chance = 0.01;

  let five_star_pity = 90;
  let four_star_pity = 10;

  let count = 0; 
var fifty_fifty_guaranteed = false;
var banner_five_star_id; // set to some character id

function get_five_star_with_fifty_fifty() {
    //TODO
    // return true or false


    if (fifty_fifty_guaranteed){
        // reset 50_50 chances
        fifty_fifty_guaranteed = false;
        return banner_five_star_id;
    }

    // only need "if else" if no return statements
    if (Math.random() < 0.5){
        return banner_five_star_id;
    }

    // lost the 50_50
    fifty_fifty_guaranteed = true;
    return get_random_five_star_id();
    
}

function get_random_five_star_id() {
    //TODO
}

function get_random_four_star_id() {
    //TODO
}

// returns character id
function make_wish(){

    // check for hard pity // stateMachine.
    if (count == 90){
        return get_five_star_with_fifty_fifty();
       
    }
    
    
    // Check for soft pity
    var chance_multiplier;
    
    if (count < 75) {
        chance_multiplier = 1;
    } else {
        chance_multiplier = 10;
    }

    
    // Its your lucky day
    if (Math.random() <= five_star_chance * chance_multiplier){
        return get_five_star_with_fifty_fifty();
    }

    // return four star
    //cheeck guaranteed 4 star, 
    //
    // four star
    if (Math.random() <= four_star_chance * chance_multiplier){
        return get_random_four_star_id();
    }
    //return Aloy
    
}


  function makeAWish() {
    //console.log("gewished!");
    let i = Math.floor(Math.random() * data.results.length); //51 characters, index 0 to 50
    var randomCharacter = data.results[i];
    //var randomCharacter.name Name = data.results[i].name;


    if (randomCharacter.name == "Traveller (female)" || randomCharacter.name == "Traveller (male)"){
        console.log(randomCharacter.name + " is not available.");
        makeAWish();
        return;
    }
    displayCharacterImage(randomCharacter.name);
    addCharacterToCollection(randomCharacter);

    
  }

function addCharacterToCollection(character){
    // for (var i = 0; i < data.results.length; i++){
    //     var item = data.results[i];
    //     var card = [item.id,item.name];
    //     collectionList.push(card);
    // }
    //var card = [character.vision, character.name]
    collectionList.push(character);
    var list = [];
    for (var i = 0; i < collectionList.length; i++){
        list.push(collectionList[i].name)
    }
    console.log("Collection: " + list);
    var storedCollection = collectionList;
    var arrayCollection = JSON.stringify(storedCollection)
    localStorage.setItem("storedCollection", arrayCollection);

    
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
