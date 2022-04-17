import React from 'react';

const Singleuserpost = ({userpost}) => {
    const {id, title, body} = userpost;
    return (
        <div>
            {id}: {title} ___1_ {body}
            <hr/>
        </div>
    );
};

export {Singleuserpost};