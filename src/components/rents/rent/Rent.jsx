import { useEffect, useState } from "react";
import { getRentById } from "../../../core-utils/services/RentService";
import { RentCard } from "../rent-card/RentCard";

export function Rent(props) {
    const [currentRent, setCurrentRent] = useState([]);

    useEffect(() => {
        getRentById(props.computedMatch.params.id).then(response => {
            setCurrentRent(response.data);
        });
    }, [props.computedMatch.params.id]);

    return (
        <RentCard rents={currentRent} />
    );
}