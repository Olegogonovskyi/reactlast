import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {Userdetails} from '../Userdetails/userdetails'
import {useLocation, useParams} from "react-router-dom";
import {user_service} from "../../services";

const Singleuser = () => {
    const {state} = useLocation();
    const {userid} = useParams()
    const [user, setuser] = useState(state);

    useEffect(()=>{
        if (!state) {
            user_service.getbyId(userid).then(({data})=>setuser(data))
        } else {
            setuser(state)
        }

    }, [userid, state])
    return (
        <div>
            <div>{user && <Userdetails user = {user}/>}</div>
            <div><Outlet/></div>

        </div>
    );
};

export {Singleuser};