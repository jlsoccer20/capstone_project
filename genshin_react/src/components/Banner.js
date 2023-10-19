export default function Banner(){
    return (
        <div>
            <img className="header-image-home" src={process.env.PUBLIC_URL + "/genshinbanner4.webp"} alt="Genshin Banner"></img>
            
            <h1>Banner</h1>
            <p>
                Here are the current banner characters, who may appear with higher chance on your wishes!

            </p>
            
        </div>
    );
}