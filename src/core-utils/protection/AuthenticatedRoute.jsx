import { Redirect } from "react-router";
import { getLoggedUser } from "../services/AuthService";

export function AuthenticatedRoute(props) {
    const user = getLoggedUser();

    if (props.admin && user.isAdmin) {
        return <props.component {...props} />;
    }

    if (!props.admin && user) {
        return <props.component {...props} />;
    }

    return <Redirect to='/login' />;
}