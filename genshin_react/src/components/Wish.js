import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import Button from "./components/Button";
//<Link to='/wish' className="btn btn-primary">Make a Wish!</Link>
import DataContext from "../context/DataContext";
import LoadingContext from "../context/LoadingContext";

export default function Wish() {
  const { data, setData } = useContext(DataContext); // pulled global variables
  const { loading, setLoading } = useContext(LoadingContext);
  //const { state } = useLocation();

  function makeAWish() {
    console.log("gewished!");
    let i = Math.floor(Math.random() * data.results.length); //51 characters, index 0 to 50
    displayCharacterImage(data.results[i].name);
  }

  function displayCharacterImage(characterName) {
    //have HTML for image, want to display using a method call after pressing wish button
    console.log(characterName);
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
      <h1>Wishing Page!</h1>
      <p>Isn't this what we came here for? Let's start wishing! Good luck!</p>
      <div class="centerButton">
      <div className="d-flex flex-grow-1 justify-content-end">
        <button
          type="submit"
          onClick={() => makeAWish()}
          className="btn btn-primary me-2"
        >
          Make a Wish!
        </button>
      </div>
      </div>
      
      <img
        className="characterWish"
        src={data &&
            data.results &&
          process.env.PUBLIC_URL +
          `/characterInfo/Character_${data.results[5].name}_Full_Wish.webp`
        }
        alt="Genshin Banner"
      ></img>
      
    </div>
  );
}
