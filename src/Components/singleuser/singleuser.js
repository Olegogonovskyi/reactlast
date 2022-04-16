import React, {useState} from 'react';

import {Userdetails} from '../Userdetails/userdetails'
import {useLocation} from "react-router-dom";

const Singleuser = () => {
    const {state: user} = useLocation()
    return (
        <div>
            {user && <Userdetails user = {user}/>}

        </div>
    );
};

export {Singleuser};