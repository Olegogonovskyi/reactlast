import {useState, useEffect} from 'react';

import {Post} from '../Post/Post'
import {user_service} from '../../services'

const Posts = () => {
    const [posts, setposts] = useState([]);
    useEffect(()=> {
        user_service.getall().then(({data})=> setusers(data))
    }, [])
    return (
        <div>
            {users.map((user)=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Posts};