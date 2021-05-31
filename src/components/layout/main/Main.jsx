import { Switch } from 'react-router';
import { AuthenticatedRoute } from '../../../core-utils/protection/AuthenticatedRoute';
import { UserEdit } from '../../users/user-edit/UserEdit';
import { User } from '../../users/user/User';
import { UsersList } from '../../users/users-list/UsersList';
import { VehicleEdit } from '../../vehicles/vehicle-edit/VehicleEdit';
import { Vehicle } from '../../vehicles/vehicle/Vehicle';
import { VehicleList } from '../../vehicles/vehicles-list/VehicleList';
import './Main.css';

export function Main() {
    return (
        <div className="main-content">
            {/* Main
            <UsersList></UsersList> */}
            <Switch>
                <AuthenticatedRoute exact path="/users-list" component={UsersList} />
                <AuthenticatedRoute exact path="/users/create" component={UserEdit} admin={true} />
                <AuthenticatedRoute exact path="/users/:id" component={User} />
                <AuthenticatedRoute exact path="/users/edit/:id" component={UserEdit} admin={true} />

                <AuthenticatedRoute exact path="/vehicle-list" component={VehicleList} />
                <AuthenticatedRoute exact path="/vehicles/create" component={VehicleEdit} admin={true} />
                <AuthenticatedRoute exact path="/vehicles/:id" component={Vehicle} />
                <AuthenticatedRoute exact path="/vehicles/edit/:id" component={VehicleEdit} admin={true} />
            </Switch>
        </div>
    );
}