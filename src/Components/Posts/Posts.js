import {useState, useEffect, useContext} from 'react';
import {useSearchParams} from "react-router-dom";

import {Post} from '../Post/Post'
import {post_service} from '../../services'
import {MyContext} from '../../index'

const Posts = () => {

    const [qwery, setqwery] = useSearchParams({page: `1`})
    const [posts, setposts] = useState([]);
    useEffect(()=> {
        post_service.getall(qwery.get('page')).then(({data})=> setposts(data))
    }, [qwery])
    const nexPage = () => {

        const qweryObj = Object.fromEntries(qwery.entries())
        qweryObj.page++
        setqwery(qweryObj)
    }
    return (
        <div>
            <div>{posts.map((post)=><Post key={post.id} post={post}/>)}</div>
            <button onClick={()=> nexPage()}>Next</button>


        </div>
    );
};

export {Posts};