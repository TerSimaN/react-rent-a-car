import { useEffect, useState } from "react";
import { getUserById } from "../../../core-utils/services/UserService";
import { UserCard } from "../user-card/UserCard";

export function User(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log(props);
        getUserById(props.computedMatch.params.id).then(response => {
            console.log(response);
            setUser(response.data);
        });
    }, [props]);

    return (
        // <div>hi</div>
        <UserCard user={user} />
    );
}