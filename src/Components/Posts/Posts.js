import {useState, useEffect} from 'react';

import {Post} from '../Post/Post'
import {post_service} from '../../services'

const Posts = () => {
    const [posts, setposts] = useState([]);
    useEffect(()=> {
        post_service.getall().then(({data})=> setposts(data))
    }, [])
    return (
        <div>
            {posts.map((post)=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};