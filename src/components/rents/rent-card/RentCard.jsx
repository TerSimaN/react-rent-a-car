import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core-utils/services/AuthService';
import './RentCard.css';

const rentContent = (rents, onDelete) => {
    const loggedUser = getLoggedUser();

    return (
        <div className="rent-card-wrapper">
            <div className="card rent-card">
                <div className="card-body">
                    <p className="card-text">
                        <span className="card-data">
                            <strong>Vehicle: </strong><span>{rents.vehicle}</span>
                        </span>
                        <span className="card-data">
                            <strong>Customer: </strong><span>{rents.customer}</span>
                        </span>
                        <span className="card-data">
                            <strong>Start date and time: </strong><span>{rents.startDateTime}</span>
                        </span>
                        <span className="card-data">
                            <strong>End date and time: </strong><span>{rents.endDateTime}</span>
                        </span>
                    </p>
                    <Link className="btn btn-info link" to={`/rents/${rents.id}`}>View rent</Link>
                    { loggedUser.isAdmin && <Link className="btn btn-secondary link" to={`/rents/edit/${rents.id}`}>Edit rent</Link> }
                    { loggedUser.isAdmin && <button className="btn btn-danger link" onClick={() => onDelete(rents.id)}>Delete rent</button> }
                </div>
            </div>
        </div>
    );
}

export function RentCard({ rents, onDelete }) {
    return rents ? rentContent(rents, onDelete) : "Invalid rent!";
}