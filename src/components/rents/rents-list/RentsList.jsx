import { useEffect, useState } from "react";
import { deleteRent, getAllRents } from "../../../core-utils/services/RentService";
import { RentCard } from "../rent-card/RentCard";
import './RentsList.css';

export function RentsList(props) {
    const [rents, setRents] = useState([]);

    useEffect(() => {
        getAllRents().then(response => {
            setRents(response.data);
        });
    }, []);

    const onDelete = (id) => {
        deleteRent(id).then(_ => {
            setRents((prevState) => {
                return prevState.filter(r => r.id !== id);
            });
        });
    }

    return (
        <div className="rents-list-wrapper">
            {rents.map(rent => <RentCard key={rent.id} rents={rent} onDelete={onDelete} />)}
        </div>
    );
}