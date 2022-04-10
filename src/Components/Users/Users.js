import React, {useEffect, useState} from 'react';

import {user_service} from "../../services";
import {User} from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        user_service.getAll().then(value => value.data).then(value => setUsers(value))

    }, [])
    return (
        <div>
            {users.map(user => < User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};