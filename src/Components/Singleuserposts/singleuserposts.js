
import React, {useEffect, useState} from 'react';

import { useParams} from "react-router-dom";
import {user_service} from "../../services";
import {Singleuserpost} from "../Singleuserpost/singleuserpost";

const Singleuserposts = () => {

    const {userid} = useParams();
    console.log({userid})
    const [usposts, setusposts] = useState([]);

    useEffect(()=>{
        user_service.getuserPosts(userid).then(({data})=>setusposts(data))

    }, [userid])
    return (
        <div>
            {usposts.map(userpost => <Singleuserpost key={userpost.id} userpost={userpost}/>)}


        </div>
    );
};

export {Singleuserposts};