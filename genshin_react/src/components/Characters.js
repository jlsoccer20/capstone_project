import React from 'react'; // Import React

function Characters() {
    // Define an array of character IDs
    const characterIdsPngTooSmall = [
        "amber", 
        "bennett",
        "xiangling",
        "diluc",
        
        "barbara", 
        "xingqiu",
        "targaglia",
        "ayato",  
        "yelan",
        "kokomi", 
        "mona",

        "diona", 
        "kaeya",
        "ayaka",
        "ganyu", 
        "shenhe", 
        
        "beidou",
        "lisa",
        "fischl", 
        "razor",
        "sara",
        "raiden", 
        "keching",
        "yaemiko",

        "ningguang", 
        "noelle", 
        
        "gorou",
        "yunjin",
        "albedo",
        "zhongli",
        "itto",

        
        "sayu",
        "sucrose",
        "jean", 
        "venti"

    ]

    const characterIdsPng = [
         
        
        
    ];

    const characterIdsWebpTooSmall = [
        "traveler",

        "thoma",
        "yanfei",
        "lyney",
        "xinyan",
        "dehya",
        "Hutao",
        "klee", 

        "candace",
        "neuvillette",
        "nilou",

        "chongyun",
        "aloy",
        "layla",
        "mika",
        "rosaria",
        "freminet",
        "eula",
        "qiqi",
        
        "dori",
        "cyno",
        "shinobu",

        "kaveh",
        "yaoyao",
        "kirara",
        "collei",
        "alhaitham",
        "baizhu",
        "nahida",
        "tighnari",

        "faruzan",
        "lynette",
        "heizou",
        "kazuha",
        "wanderer",
        "xiao",
    ]

    const characterIdsWebp = [
        
    ];

    console.log("Character IDs png:", characterIdsPng);
    //console.log("Character IDs jpg:", characterIdsJpg);
    console.log("Character IDs webp:", characterIdsWebp);

    return (
        <div className="container-fluid">
            <h1>Characters</h1>
            <div className="my-4"> 
               {/* This is the character page with all characters.*/}  
            </div>

            {/* These look good */}

            {/*<p>Pngs:</p> */}

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

            {characterIdsPngTooSmall.map((characterIdsPngTooSmall) => {
                const imageUrl = process.env.PUBLIC_URL + `/characters/${characterIdsPngTooSmall}Card.png`;
                console.log("Image URL for", characterIdsPngTooSmall, ":", imageUrl);
                return (
                    <img
                        key={characterIdsPngTooSmall}
                        className="characterCardMakeBigger"
                        src={imageUrl}
                        alt={`${characterIdsPngTooSmall} character card`}
                    />
                );
            })}

            {/* <p>Jpgs:</p> */}

            {/* These arent as pretty :(  */}
            {/* {characterIdsJpg.map((characterIdJpg) => {
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
            })} */}

            {/* <p>Webps:</p> */}

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

            {characterIdsWebpTooSmall.map((characterIdWebpTooSmall) => {
                const imageUrl = process.env.PUBLIC_URL + `/characters/${characterIdWebpTooSmall}Card.webp`;
                console.log("Image URL for", characterIdWebpTooSmall, ":", imageUrl);
                return (
                    <img
                        key={characterIdWebpTooSmall}
                        className="characterCardMakeBigger"
                        src={imageUrl}
                        alt={`${characterIdWebpTooSmall} character card`}
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