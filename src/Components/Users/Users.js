import {useState, useEffect} from 'react';

import {User} from '../User/User'
import {user_service} from '../../services'

const Users = () => {
    const [users, setusers] = useState([]);
    useEffect(()=> {
        user_service.getall().then(({data})=> setusers(data))
    }, [])
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};