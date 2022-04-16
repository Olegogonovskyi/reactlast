import React from 'react';

const Userdetails = ({user}) => {
    const {id, name, email} = user
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>

        </div>
    );
};

export {Userdetails};