import {useState, useEffect} from 'react';

import {user_service} from '../../services/user_service'

const User = () => {
    const {users, setusers} = useState([]);
    useEffect(()=> {
        user_service.getAll().then(({data})=> setusers(data))
    })
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {User};