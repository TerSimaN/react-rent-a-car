import { useEffect, useState } from 'react';
import { deleteUser, getAllUsers } from '../../../core-utils/services/UserService';
import { UserCard } from '../user-card/UserCard';
import './UsersList.css';

export function UsersList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(response => {
            setUsers(response.data);
        });
    }, []);

    const onDelete = (id) => {
        deleteUser(id).then(_ => {
            setUsers((prevState) => {
                return prevState.filter(u => u.id !== id);
            });
        });
    }
    
    return (
        <div className="users-list-wrapper">
            {/* Users list is working... */}
            { users.map(user => <UserCard key={user.id} user={user} onDelete={onDelete} />) }
        </div>
    );
}