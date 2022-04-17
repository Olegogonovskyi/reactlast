import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {Userdetails} from '../Userdetails/userdetails'
import {useLocation, useParams} from "react-router-dom";
import {user_service} from "../../services";

const Singleuser = () => {
    const {state} = useLocation();
    const {id} = useParams()
    const [user, setuser] = useState(state);

    useEffect(()=>{
        if (!state) {
            user_service.getbyId(id).then(({data})=>setuser(data))
        } else {
            setuser(state)
        }

    }, [id, state])
    return (
        <div>
            <div>{user && <Userdetails user = {user}/>}</div>
            <div><Outlet/></div>

        </div>
    );
};

export {Singleuser};