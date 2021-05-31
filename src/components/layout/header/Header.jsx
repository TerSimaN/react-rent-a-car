import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getLoggedUser, logout } from '../../../core-utils/services/AuthService';
import './Header.css';

export function Header() {

    const [redirect, setRedirect] = useState(false);
    const loggedUser = getLoggedUser();

    const onLogout = () => {
        logout();
        setRedirect(true);
    }

    return (
        <>
        { redirect && <Redirect to='/login' /> }
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand">Rent-A-Car</span>                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users-list">Users</Link>
                        </li>
                        { loggedUser.isAdmin && <li className="nav-item">
                            <Link className="nav-link" to="/users/create">Create user</Link>
                        </li> }
                        <li className="nav-item">
                            <Link className="nav-link" to="/vehicle-list">Vehicles</Link>
                        </li>
                        { loggedUser.isAdmin && <li className="nav-item">
                            <Link className="nav-link" to="/vehicles/create">Create vehicle</Link>
                        </li> }
                    </ul>
                    <form className="form-inline my-2 my-lg-0 mr-sm-2">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" onClick={onLogout}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
    );
}