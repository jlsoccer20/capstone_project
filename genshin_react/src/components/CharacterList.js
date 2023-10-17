import { useEffect, useState } from "react";

import CharacterTable from "./CharacterTable";

function CharacterList() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch("http://localhost:8080/api/character");
            if (response.ok) {
                setCharacters(await response.json());
            } else {
                setCharacters([]);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <>
            {characters.length == 0 ?
                <div className="alert alert-warning py-4">
                    No characters found.<br />
                    Do you want to add a character?
                </div>
                : <CharacterTable characters={characters} />}
        </>
    );
}

export default CharacterList;