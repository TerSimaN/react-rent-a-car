import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { getRentById, saveRent } from '../../../core-utils/services/RentService';
import './RentEdit.css';

export function RentEdit(props) {
    const [editedRent, setEditedRent] = useState({
        startDateTime: '',
        endDateTime: '',
        vehicle: '',
        customer: ''
    });

    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        setEditedRent({
            startDateTime: '',
            endDateTime: '',
            vehicle: '',
            customer: ''
        });

        if (props.computedMatch.params.id) {
            getRentById(props.computedMatch.params.id).then((response) => {
                setEditedRent(response.data);
            });
        } 
    }, [props.computedMatch.params.id]);

    const onInputChange = (event) => {
        setEditedRent((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value.trim()
        }));
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        saveRent(editedRent).then(_ => {
            setShouldRedirect(true);
        });        
    }

    return (
        <>
        { shouldRedirect && <Redirect to="/rents-list" /> }
        <div className="rent-edit-wrapper">
            <form className="rent-edit-form" onSubmit={onFormSubmit} >
                <div className="form-group">
                    <label htmlFor="startDateTime">Start date and time: </label>
                    <input type="datetime-local" className="form-control" id="startDateTime" name="startDateTime" value={editedRent.startDateTime} min="2000-01-01T00:00" max="2100-12-31T00:00" onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="endDateTime">End date and time: </label>
                    <input type="datetime-local" className="form-control" id="endDateTime" name="endDateTime" value={editedRent.endDateTime} min="2000-01-01T00:00" max="2100-12-31T00:00" onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="vehicle">Vehicle: </label>
                    <select className="form-control" id="vehicle" name="vehicle" onChange={onInputChange} >
                        <option value="-- Please select an option --">-- Please select an option --</option>
                        <option value="BMW">BMW</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Cadillac">Cadillac</option>
                        <option value="Lamborghini">Lamborghini</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="Ford">Ford</option>
                        <option value="Opel">Opel</option>
                        <option value="Audi">Audi</option>
                        <option value="Škoda">Škoda</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success">Save</button>
                <Link className="btn btn-danger link" to="/rents-list">Cancel</Link>
            </form>
        </div>
        </>
    );
}