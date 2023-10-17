import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from './Button';

export default function ConfirmCharacterDelete(){
    const [character, setCharacter] = useState(null);
    const [success, setSuccess] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetch('http://localhost:8080/api/character/' + id)
            .then(res => {
                if (res.ok){
                    return res.json();
                } else {
                    return Promise.reject(
                        new Error(`Unexpected status code: ${res.status}`)
                    );
                }
            })
            .then(setCharacter)
            .catch(error => {
                console.error(error);
                navigate('/characters');
            });
        }
    }, []);

    function handleDelete() {
        const config = {
            method: 'DELETE',
        };
        
        fetch('http://localhost:8080/api/character/'+ id, config)
            .then(res => {
                if (res.ok){
                    setSuccess(true);
                    setTimeout(() => {
                        navigate('/characters');
                    }, 2000);
                } else {
                    return Promise.reject(
                        new Error(`Unexpected status code ${res.status}`)
                    );
                }
            })
            .catch(error =>{
                console.error(error);
                navigate('/characters');
            });
    }

    if(!character) {
        return (
            <div
                style={{ minHeight: '80vh' }}
                className='d-flex justify-content-center align-items-center'>
                <div className='spinner-border ' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>Delete</h1>
            <div className='alert alert-warning' role='alert'>
                <p>
                    Are you sure you want to delete the following character?
                </p>
                <ul>
                    <li>
                        Character name: {character.name}
                    </li>
                    <li>Character weapon: {character.weapon}</li>
                    <li>Character vision: {character.vision}</li>
                </ul>
                <Button handleClick={handleDelete} classes='btn-danger me-2'>
                    Delete
                </Button>
                <Link className='btn btn-secondary' to='/characters'>
                    Cancel
                </Link>
            </div>
            {success && (
                <div className='alert alert-successs' role='alert'>
                    <p>
                        Successfully deleted character! Navigating back to character list...{' '}
                    </p>
                </div>
            )}
        </div>
    );
}