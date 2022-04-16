import React from 'react';

const Post = ({post}) => {
    const {id, title, body} = post
    return (
        <div>
            {id}: {title} {body} <Link to={`${id}`}>Details</Link>
            <hr/>
        </div>
    );
};

export {Post};