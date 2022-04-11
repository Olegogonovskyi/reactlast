import React from 'react';


const User = ({user, getUserbyid}) => {
    const {id, name, email} = user;
    return (
        <div>
            {id}. {name}: {email}
            <button onClick={() => getUserbyid(id)}>Детальніше</button>
        </div>
    );
};

export {User};