import { Link } from "react-router-dom";

function CharacterTable({ characters }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Weapon</th>
                    <th>Vision</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {characters.map(character => (
                    <tr key={character.id}>
                        <td>{character.name}</td>
                        <td>{character.weapon}</td>
                        <td>{character.vision}</td>
                        
                        <td>
                            <Link to={`./delete/${character.Id}`} className="btn btn-danger me-2">Delete</Link>
                            <Link to={`./edit/${character.Id}`} className="btn btn-info">Edit</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table >
    );
}

export default CharacterTable;