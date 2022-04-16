import React from 'react';

const Post = ({post}) => {
    const {id, title, body} = post
    return (
        <div>
            {id}: {title} {body}
            <hr/>
        </div>
    );
};

export {Post};