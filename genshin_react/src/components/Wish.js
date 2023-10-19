import { Link } from "react-router-dom";

export default function Wish(){

<Link to='/wish' className="btn btn-primary">Make a Wish!</Link>

    return (
        <div>
            <img className="header-image-home" src={process.env.PUBLIC_URL + "/wish.webp"} alt="Genshin Banner"></img>
            
            
            <h1>Wishing Page!</h1>
            <p>
                Isn't this what we came here for? Let's start wishing! Good luck!

            </p>
            
        </div>
        
    );
    
}