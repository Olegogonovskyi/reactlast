import {useState, useEffect} from 'react';

import {User} from '../User/User'
import {user_service} from '../../services'
import css from './Users.module.css'

const Users = () => {
    const [users, setusers] = useState([]);
    useEffect(()=> {
        user_service.getall().then(({data})=> setusers(data))
    }, [])
    return (
        <div className={css.wrapUser}>
            <div>{users.map((user)=><User key={user.id} user={user}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {Users};