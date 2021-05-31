import { useEffect, useState } from 'react';
import { deleteVehicle, getAllVehicles } from '../../../core-utils/services/VehicleSerice';
import { VehicleCard } from '../vehicle-card/VehicleCard';
import './VehicleList.css';

export function VehicleList() {
    
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        getAllVehicles().then(response => {
            setVehicles(response.data);
        });
    }, []);

    const onDelete = (id) => {
        deleteVehicle(id).then(_ => {
            setVehicles((prevState) => {
                return prevState.filter(v => v.id !== id);
            });
        });
    }

    return (
        <div className="vehicle-list-wrapper">
            {/* Vehicle list is showing... */}
            { vehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} onDelete={onDelete} />) }
        </div>
    );
}