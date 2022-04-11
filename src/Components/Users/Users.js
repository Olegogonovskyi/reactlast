import React, {useEffect, useState} from 'react';

import {user_service} from "../../services";
import {User} from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setuser] = useState(null);
    useEffect(()=>{
        user_service.getAll().then(value => value.data).then(value => setUsers(value))

    }, [])
    const getUserbyid = async (id) => {
      const {data} = await user_service.getByid(id);
      setuser(data)
    }
    return (
        <div>
            <div>
                {users.map(user => < User key={user.id} user={user} getUserbyid={getUserbyid} />)}
                    </div>
                {user && <div> {user.name} -- {user.username}</div>}
        </div>
    );
};

export {Users};