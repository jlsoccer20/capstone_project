import { Link, useNavigate, useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";

export default function CharacterForm() {

    const [character, setCharacter] = useState({
        name: "",
        weapon: "",
        vision: ""
    });
    const [errors, setErrors] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    function handleChange(evt) {

        setCharacter(previous => {
            const next = { ...previous };
            next[evt.target.name] = evt.target.value;
            return next;
        });
    }

    useEffect(() => {
        if (id) {
            console.log("useEffect: " + id)
            fetch('http://localhost:8080/api/character/'+ id)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(
                        new Error(`Unexpected status code ${res.status}`)
                    );
                }
            })
            .then(setCharacter)
            .catch(error => {
                console.error(error);
                navigate('/characters');
            });
            
        }

    }, [id]);

    function handleChange(evt) {

        setCharacter(previous => {
            const next = { ...previous };
            next[evt.target.name] = evt.target.value;
            return next;
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        
        if (id > 0){
            //PUT (Edit Character)
            const config = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(character),
            };
            fetch('http://localhost:8080/api/character/'+ id, config)
                .then(res => {
                    if (res.ok) {
                        // Testing how to use a popup window, this can be removed if desired
                        window.alert("Character Updated")

                        navigate('/characters');
                    } else if (res.status === 400) {
                        return res.json();
                    }
                })
                .then(errors => {
                    setErrors(errors);
                })
                .catch(console.error);
                
        } else {
           // POST (Add Character)
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(character)
            }

            fetch('http://localhost:8080/api/character', config)
                .then(response => {
                    if (response.ok) {
                        navigate('/characters');
                    } else {
                        return response.json();
                    }
                })
                .then(errs => {
                    if (errs) {
                        return Promise.reject(errs);
                    }
                })
                .catch(errs => {
                    if (errs.length) {
                        setErrors(errs);
                    } else {
                        setErrors([errs]);
                    }
                });
        }
    }

    return (
        <>
            <h1> {id > 0 ? 'Edit' : 'Add'} a Character</h1>
            {errors && errors.length > 0 && <div className="alert alert-danger">
                <ul className="mb-0">
                    {errors.map(err => <li key={err}>{err}</li>)}
                </ul>
            </div>}
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" className="form-control" required
                            onChange={handleChange} value={character.name} />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="weapon">Weapon</label>
                    <input id="weapon" name="weapon" type="text" className="form-control" required
                        onChange={handleChange} value={character.weapon} />
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label" htmlFor="vision">Vision</label>
                        <input id="vision" name="vision" type="text" className="form-control" required
                            onChange={handleChange} value={character.vision} />
                    </div>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary me-2">Save</button>
                    
                    <Link to={'/characters'} className="btn btn-warning">Cancel</Link>
                </div>
            </form>
        </>
    );
}