import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core-utils/services/AuthService';
import './UserCard.css';

const userContent = (user, onDelete) => {
    const loggedUser = getLoggedUser();

    return (
        <div className="user-card-wrapper">
            <div className="card user-card">
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">
                        <span className="card-data">
                            <strong>Email: </strong><span>{user.email}</span>
                        </span>
                        <span className="card-data">
                            <strong>Phone number: </strong><span>{user.phone}</span>
                        </span>
                        <span className="card-data">
                            <strong>Administrator: </strong><span>{user.isAdmin.toString()}</span>
                        </span>
                    </p>
                    <Link className="btn btn-info link" to={`/users/${user.id}`}>View profile</Link>
                    { loggedUser.isAdmin && <Link className="btn btn-secondary link" to={`/users/edit/${user.id}`}>Edit user</Link> }
                    { loggedUser.isAdmin && <button className="btn btn-danger link" onClick={() => onDelete(user.id)}>Delete user</button> }
                </div>
            </div>
        </div>
    );
};

export function UserCard({ user, onDelete }) {
    return user ? userContent(user, onDelete) : "Invalid user!";
}