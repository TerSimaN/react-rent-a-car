import { useState } from "react";
import { login } from "../../../core-utils/services/AuthService";
import './Login.css';
import { Link, Redirect } from 'react-router-dom';

export function Login(props) {

    const [userData, setUserData] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');

    const onInputChange = (event) => {
        event.persist();

        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        login(userData).then(_ => {
            console.log('Login successful!');
            setRedirect(true);
        })
        .catch(err => setError(err.message));
    }

    return (
        <>
        { redirect && <Redirect to='/' /> }
        <div className="login-form-wrapper">
            <form className="login-form" onSubmit={onFormSubmit}>
            { error && <span className="text-danger">{error}</span> }
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onInputChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <div className="register-btn">
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
        </>
    );
}