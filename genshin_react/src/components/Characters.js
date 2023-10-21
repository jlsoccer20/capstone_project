import React from 'react'; // Import React

function Characters() {
    // Define an array of character IDs
    const characterIdsPng = [
        "albedo", 
        "amber", 
        "ayaka",

        "ayato",    
        "barbara",
        "beidou",
        "bennett",
        "diluc", 

        "diona", 
        "fischl", 
        "ganyu", 
        "gorou",

        "itto",
        "jean", 
        "kaeya", 
        "keching", 
        "kokomi", 

        "lisa",
        "mona",
        "ningguang", 
        "noelle", 
        "raiden", 

        "razor",
        "sara",
        "sayu",
        "shenhe", 
        "sucrose", 

        "targaglia",
        "venti",
        "xiangling",
        "xingqiu",
        "yaemiko",

        "yelan",
        "yunjin",          
        "zhongli"
    ];

    const characterIdsJpg = [
        "aloy", 
        "candace",
        "childe",
        "nahida",
        "shinobu",
    ];

    const characterIdsWebp = [
        "alhaitham",
        "baizhu",
        "chongyun",
        "collei",
        "cyno",

        "dehya",
        "dori",
        "eula",
        "faruzan",
        "freminet",

        "heizou",
        "Hutao",
        "kaveh",
        "kazuha",
        "kirara",

        "klee", 
        "layla",
        "lynette",
        "lyney",
        "mika",

        "neuvillette",
        "nilou",
        "qiqi",
        "rosaria",
        "thoma",

        "tighnari",
        "traveler",
        "wanderer",
        "xiao",
        "xinyan",
        "yanfei",
        "yaoyao"
    ];

    console.log("Character IDs png:", characterIdsPng);
    console.log("Character IDs jpg:", characterIdsJpg);
    console.log("Character IDs webp:", characterIdsWebp);

    return (
        <div className="container-fluid">
            <h1>Characters</h1>
            <div className="my-4"> 
               This is the character page with all characters.  
            </div>

            {/* These look good */}

            <p>Pngs:</p>

            {characterIdsPng.map((characterIdPng) => {
                const imageUrl = process.env.PUBLIC_URL + `/characters/${characterIdPng}Card.png`;
                console.log("Image URL for", characterIdPng, ":", imageUrl);
                return (
                    <img
                        key={characterIdPng}
                        className="characterCard"
                        src={imageUrl}
                        alt={`${characterIdPng} character card`}
                    />
                );
            })}

            <p>Jpgs:</p>

            {/* These arent as pretty :(  */}
            {characterIdsJpg.map((characterIdJpg) => {
                const imageUrl = process.env.PUBLIC_URL + `/characters/${characterIdJpg}Card.jpg`;
                console.log("Image URL for", characterIdJpg, ":", imageUrl);
                return (
                    <img
                        key={characterIdJpg}
                        className="characterCard"
                        src={imageUrl}
                        alt={`${characterIdJpg} character card`}
                    />
                );
            })}

            <p>Webps:</p>

            {characterIdsWebp.map((characterIdWebp) => {
                const imageUrl = process.env.PUBLIC_URL + `/characters/${characterIdWebp}Card.webp`;
                console.log("Image URL for", characterIdWebp, ":", imageUrl);
                return (
                    <img
                        key={characterIdWebp}
                        className="characterCard"
                        src={imageUrl}
                        alt={`${characterIdWebp} character card`}
                    />
                );
            })}

        </div>
    );
}

export default Characters;


{/*function Characters() {

//     // Define an array of character IDs
//     const characterIds = ["albedo", "amber", "baizhu", "chongyun", "diluc", "diona"];

//     return (
//         <div className="container-fluid">
//             <img className="header-image-home" src={process.env.PUBLIC_URL + "/genshinbackground5.jpg"} alt="Genshin Banner"></img>
            
            
//             <h1>Characters</h1>
//             <div className="my-4"> 
//                 This is the character page with all characters.  
//             </div>
//             <img className="characterCard" src={process.env.PUBLIC_URL + "/characters/albedoCard.png"} alt="character card"></img>
//             <img className="characterCardAdjusted" src={process.env.PUBLIC_URL + "/characters/amberCard.png"} alt="character card"></img>
//             <img className="characterCard" src={process.env.PUBLIC_URL + "/characters/baizhuCard.webp"} alt="character card"></img>
//             <img className="characterCard" src={process.env.PUBLIC_URL + "/characters/chongyunCard.webp"} alt="character card"></img>
//             <img className="characterCardAdjusted" src={process.env.PUBLIC_URL + "/characters/dilucCard.png"} alt="character card"></img>
//             <img className="characterCard" src={process.env.PUBLIC_URL + "/characters/dionaCard.png"} alt="character card"></img>
        
        
//         </div>
//     );
// }

// export default Characters;*/}