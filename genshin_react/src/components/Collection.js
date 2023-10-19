import { useEffect, useState } from "react";

function Collection() {

    const [characters, setCharacters] = useState([]) ; // setting state to empty array

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('https://gsi.fly.dev/characters');
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const jsonData = await response.json();
            setCharacters(jsonData.results);
            console.log(jsonData);
            
          } catch (error) {
            console.error('Error fetching data:', error);
            
          }
        }
    
        fetchData();
      }, []);
    
    return (
        // similar to Agents, use list to populate display
        // TODO: do fetch requests here for characters, useEffect useState hooks
        <div className="container-fluid">

<img className="header-image-home" src={process.env.PUBLIC_URL + "/genshinbackground6.webp"} alt="Genshin Banner"></img>
            

            
            
            <h1>My Collection</h1>
            <div className="my-4">
            {characters.map(c=><div>{c.name}</div>)}           
            <img className="character" src={process.env.PUBLIC_URL + "/faruzan.png"} alt="Genshin Banner"></img>
        <img className="character" src={process.env.PUBLIC_URL + "/hutao.png"} alt="Genshin Banner"></img>
        <img className="character" src={process.env.PUBLIC_URL + "/mona.webp"} alt="Genshin Banner"></img>
        <img className="character" src={process.env.PUBLIC_URL + "/noelle.png"} alt="Genshin Banner"></img>
        <img className="character" src={process.env.PUBLIC_URL + "/shenhe.png"} alt="Genshin Banner"></img>
        <img className="character" src={process.env.PUBLIC_URL + "/sucrose.png"} alt="Genshin Banner"></img>
        <img className="character" src={process.env.PUBLIC_URL + "/wanderer.png"} alt="Genshin Banner"></img>
        <img className="character" src={process.env.PUBLIC_URL + "/xiao.png"} alt="Genshin Banner"></img>
        <img className="character" src={process.env.PUBLIC_URL + "/rosaria.png"}  alt="Genshin Banner"></img>
        <img className="character" src={process.env.PUBLIC_URL + "/ganyu.png"}  alt="Genshin Banner"></img>

        <img className="character" src={process.env.PUBLIC_URL + "/ayaka.jpg"} alt="Genshin Banner"></img>
        <img className="character" src={process.env.PUBLIC_URL + "/childe.jpg"} alt="Genshin Banner"></img>
        <img className="character" src={process.env.PUBLIC_URL + "/diona.jpg"} alt="Genshin Banner"></img>
        <img className="character" src={process.env.PUBLIC_URL + "/eula.jpg"} alt="Genshin Banner"></img>
        
        <img className="character" src={process.env.PUBLIC_URL + "/qiqi.jpg"} alt="Genshin Banner"></img>


        

        <p></p>
        <img className="icon" src={process.env.PUBLIC_URL + "/primogemIcon.png"} alt="Genshin Banner"></img>
        <img className="icon" src={process.env.PUBLIC_URL + "/GenshinIcon.png"} alt="Genshin Banner"></img>    
            </div>
        </div>
    );
}

export default Collection;