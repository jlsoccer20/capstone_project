function Collection() {
    return (
        // similar to Agents, use list to populate display
        // TODO: do fetch requests here for characters, usestate
        <div className="container-fluid">
            
            <h1 className="header-title">Genshin Impact Wish Simulator COLLECTION HAHAHAHAHAHAHåå</h1>
            <div className="my-4">
                           
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