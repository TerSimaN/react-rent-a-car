import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core-utils/services/AuthService';
import './VehicleCard.css';

const vehicleContent = (vehicle, onDelete) => {
    const loggedUser = getLoggedUser();

    return (
        <div className="vehicle-card-wrapper">
            <div className="card">
                <div className="card-body">
                <img src={vehicle.picture || "http://placehold.it/32x32"} className="card-img-top" alt="..."/>
                    {/* <h5 className="card-title">{vehicle.vehicle[0].brand}</h5>
                    <h5 className="card-title">{vehicle.vehicle[0].model}</h5>
                    <h5 className="card-title">{vehicle.vehicle[0].constructionYear}</h5> */}
                    <p className="card-text">
                        <span className="card-data">
                            <strong>Vehicle Brand: </strong><span>{vehicle.vehicle.brand}</span>
                        </span>
                        <span className="card-data">
                            <strong>Vehicle Model: </strong><span>{vehicle.vehicle.model}</span>
                        </span>
                        <span className="card-data">
                            <strong>Vehicle Construction Year: </strong><span>{vehicle.vehicle.constructionYear}</span>
                        </span>
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