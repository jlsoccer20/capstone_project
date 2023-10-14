import React from 'react';
import './styles.css';

export default function Header(){
    
    return <header className="header">
        
        <h1 className="header-title"><span>Genshin Impact Wish Simulator</span></h1>
        <h2>Jessica Link</h2>
        <img className="header-image" src={process.env.PUBLIC_URL + "/GenshinImpact.jpg"} alt="Genshin Banner"></img>
        
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


        <img className="header-image" src={process.env.PUBLIC_URL + "/GenshinIcon.png"} alt="Genshin Banner"></img>
        

        <p></p>
        <img className="icon" src={process.env.PUBLIC_URL + "/primogemIcon.png"} alt="Genshin Banner"></img>
        <img className="icon" src={process.env.PUBLIC_URL + "/GenshinIcon.png"} alt="Genshin Banner"></img>
        
        
        </header>;
}