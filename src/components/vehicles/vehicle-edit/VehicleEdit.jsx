import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { getVehicleById, saveVehicle } from '../../../core-utils/services/VehicleSerice';
import './VehicleEdit.css';

export function VehicleEdit(props) {

    const [editedVehicle, setEditedVehicle] = useState({
        vehicle: [],
        vehicleType: '',
        fuelType: '',
        numberOfSeats: 0,
        picture: '',
        pricePerDay: ''
    });

    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if (props.computedMatch.params.id) {
            getVehicleById(props.computedMatch.params.id).then((response) => {
                setEditedVehicle(response.data);
            });
        }
    }, [props.computedMatch.params.id]);

    const onInputChange = (event) => {
        setEditedVehicle((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value.trim()
        }));
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        saveVehicle(editedVehicle).then(_ => {
            console.log('Edit successful!');
            setShouldRedirect(true);
        });
    }

    return (
        <>
        { shouldRedirect && <Redirect to="/vehicle-list" /> }
        <div className="vehicle-edit-wrapper">
            <form className="vehicle-edit-form" onSubmit={onFormSubmit} >
                <div className="form-group">
                    <label htmlFor="vehicleBrand">Vehicle brand: </label>
                    <input type="text" className="form-control" id="vehicleBrand" name="vehicleBrand" value={editedVehicle.vehicle[0]} onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="vehicleModel">Vehicle model: </label>
                    <input type="text" className="form-control" id="vehicleModel" name="vehicleModel" value={editedVehicle.vehicle[1]} onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="constructionYear">Construction year: </label>
                    <input type="date" className="form-control" id="constructionYear" name="constructionYear" value={editedVehicle.vehicle[2]} onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="vehicleType">Vehicle type (ex. economy, estate, luxury, SUV, cargo): </label>
                    <input type="text" className="form-control" id="vehicleType" name="vehicleType" value={editedVehicle.vehicleType} onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="fuelType">Fuel type (ex. petrol, diesel, hybrid, electric): </label>
                    <input type="text" className="form-control" id="fuelType" name="fuelType" value={editedVehicle.fuelType} onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="numberOfSeats">Number of seats: </label>
                    <input type="number" className="form-control" id="numberOfSeats" name="numberOfSeats" value={editedVehicle.numberOfSeats} onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="picture">Picture: </label>
                    <input type="text" className="form-control" id="picture" name="picture" value={editedVehicle.picture} onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="pricePerDay">Price per day: </label>
                    <input type="text" className="form-control" id="pricePerDay" name="pricePerDay" value={editedVehicle.pricePerDay} onChange={onInputChange} required />
                </div>
                <button type="submit" className="btn btn-success">Save</button>
                <Link className="btn btn-danger link" to="/vehicle-list">Cancel</Link>
            </form>
        </div>
        </>
    );
}