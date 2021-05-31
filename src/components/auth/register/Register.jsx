import { useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { register } from '../../../core-utils/services/AuthService';
import './Register.css';

export function Register() {

    const [userData, setUserData] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');

    const onInputChange = (event) => {
        event.persist();

        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value.trim()
        }));
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        register(userData).then(_ => {
            console.log('Register successful!');
            setRedirect(true);
        })
        .catch(err => setError(err.message));
    }

    return (
        <>
        { redirect && <Redirect to='/login' /> }
        <div className="register-form-wrapper">
            <form className="register-form" onSubmit={onFormSubmit}>
            { error && <span className="text-danger">{error}</span> }
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone number: </label>
                    <input type="phone" className="form-control" id="phone" name="phone" onChange={onInputChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <div className="return-btn">
                    <Link to="/login">Back</Link>
                </div>
            </form>
        </div>
        </>
    );
}