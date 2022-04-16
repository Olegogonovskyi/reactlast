import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, email} = user;
    return (
        <div>
            {id} {name} {email} <Link to={`${id}`} state = {user}>Details</Link>

        </div>
    );
};

export {User};