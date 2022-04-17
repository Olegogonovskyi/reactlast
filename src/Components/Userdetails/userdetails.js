import React from 'react';
import {Link} from "react-router-dom";

const Userdetails = ({user}) => {
    const {id, name, email} = user
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <Link to={`post`} >Details</Link>
            <hr/>
            <hr/>

        </div>
    );
};

export {Userdetails};