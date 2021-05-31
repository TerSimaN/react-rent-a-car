import { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getUserById, saveUser } from '../../../core-utils/services/UserService';
import './UserEdit.css';

export function UserEdit(props) {

    const [editedUser, setEditedUser] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        isAdmin: false
    });

    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if (props.computedMatch.params.id) {
            getUserById(props.computedMatch.params.id).then((response) => {
                setEditedUser(response.data);
            });
        }        
    }, [props.computedMatch.params.id]);

    const onInputChange = (event) => {
        setEditedUser((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value.trim()
        }));
    }

    const onCheckboxChange = (event) => {
        setEditedUser((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.checked
        }));
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        saveUser(editedUser).then(_ => {
            console.log('Edit successful!');
            setShouldRedirect(true);
        });
    }

    return (
        <>
        { shouldRedirect && <Redirect to="/users-list" /> }
        <div className="user-edit-wrapper">
            <form className="user-edit-form" onSubmit={onFormSubmit} >
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" className="form-control" id="name" name="name" value={editedUser.name} onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" className="form-control" id="email" name="email" value={editedUser.email} onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="text" className="form-control" id="password" name="password" value={editedUser.password} onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone number: </label>
                    <input type="phone" className="form-control" id="phone" name="phone" value={editedUser.phone} onChange={onInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="isAdmin">Administrator: </label>
                    <input type="checkbox" className="form-control" id="isAdmin" name="isAdmin" checked={editedUser.isAdmin} onChange={onCheckboxChange} />
                </div>
                <button type="submit" className="btn btn-success">Save</button>
                <Link className="btn btn-danger link" to="/users-list">Cancel</Link>
            </form>
        </div>
        </>
    );
}