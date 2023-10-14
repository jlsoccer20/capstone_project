import React from 'react';
import './styles.css';

export default function Header(){
    
    return <header className="header">
        
        <h1 className="header-title"><span>Genshin Impact Wish Simulator</span></h1>
        <h2>Jessica Link</h2>
        <img className="header-image" src={process.env.PUBLIC_URL + "/GenshinImpact.jpg"} alt="Genshin Banner"></img>
        
        
        </header>;
}