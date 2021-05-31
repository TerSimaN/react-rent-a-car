import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core-utils/services/AuthService';
import './VehicleCard.css';

const vehicleContent = (vehicle, onDelete) => {
    const loggedUser = getLoggedUser();

    return (
        <div className="vehicle-card-wrapper">
            <div className="card">
                <div className="card-body">
                <img src={vehicle.picture} className="card-img-top" alt="..."/>
                    <h5 className="card-title">{vehicle.vehicle[0]}</h5>
                    <p className="card-text">
                        <span className="card-data">
                            <strong>Vehicle Type: </strong><span>{vehicle.vehicleType}</span>
                        </span>
                        <span className="card-data">
                            <strong>Fuel Type: </strong><span>{vehicle.fuelType}</span>
                        </span>
                        <span className="card-data">
                            <strong>Number of seats: </strong><span>{vehicle.numberOfSeats}</span>
                        </span>
                        <span className="card-data">
                            <strong>Price per day: </strong><span>{vehicle.pricePerDay}</span>
                        </span>
                    </p>
                    <Link className="btn btn-info" to={`/vehicles/${vehicle.id}`}>View details</Link>
                    { loggedUser.isAdmin && <Link className="btn btn-secondary link" to={`/vehicles/edit/${vehicle.id}`}>Edit vehicle</Link> }
                    { loggedUser.isAdmin && <button className="btn btn-danger link" onClick={() => onDelete(vehicle.id)}>Delete vehicle</button> }
                </div>
            </div>
        </div>
    );
};

export function VehicleCard({ vehicle, onDelete }) {
    return vehicle ? vehicleContent(vehicle, onDelete) : "Invalid vehicle!";
};