function Home() {
    return (
    <div>

        <img className="header-image-home" src={process.env.PUBLIC_URL + "/GenshinImpact.jpg"} alt="Genshin Banner"></img> 
        <link rel="icon" href="favicon.ico" type="image/x-icon"></link>

        <h1>Welcome!</h1>
        <p> Please use the navigation links at the top.</p>

    </div>
    
    );
}

export default Home;

//<h1 className="header-title">Home</h1><h1>Home</h1>