function Home() {
    return (
    <div>

        <img className="header-image-home" src={process.env.PUBLIC_URL + "/GenshinImpact.jpg"} alt="Genshin Banner"></img> 
        <link rel="icon" href="favicon.ico" type="image/x-icon"></link>

        <h1 className="padme">Welcome!</h1>
        <p className="padme"> Please use the navigation links at the top.</p>

    </div>

    
    
    );
}

export default Home;

//<h1 className="header-title">Home</h1><h1>Home</h1>