import { useEffect, useState } from "react";
import { getVehicleById } from "../../../core-utils/services/VehicleSerice";
import { VehicleCard } from "../vehicle-card/VehicleCard";

export function Vehicle(props) {
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        console.log(props);
        getVehicleById(props.computedMatch.params.id).then(response => {
            console.log(response);
            setVehicle(response.data);
        });
    }, []);

    return (
        // <div>hi</div>
        <VehicleCard vehicle={vehicle} />
    );
}