// src/components/About.js

export default function About() {
    return (
        <div>
            <img className="header-image-home" src={process.env.PUBLIC_URL + "/genshinbackground.jpg_large"} alt="Genshin Banner"></img>
            <h1>About Genshin Wish Simulator</h1>
            <p>
                Welcome to the Genshin Impact Wish Simulator, 
                where your favorite Genshin characters are just a click away 
                (and a bit of luck)!

            </p>
            <p>This project implements many topics covered in the Dev10 Academy 2023 cohort. </p>
        </div>
    );
}
