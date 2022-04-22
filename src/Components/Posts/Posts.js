import {useState, useEffect, useContext} from 'react';
import {useSearchParams} from "react-router-dom";

import {Post} from '../Post/Post'
import {post_service} from '../../services'
import {MyContext} from '../../index'

const Posts = () => {
    const valuenew = useContext(MyContext)
    console.log(valuenew)
    const [qwery, setqwery] = useSearchParams({page: `1`})
    const [posts, setposts] = useState([]);
    useEffect(()=> {
        post_service.getall(qwery.get('page')).then(({data})=> setposts(data))
    }, [qwery])
    const nexPage = () => {
        let page = qwery.get('page')
        page = +page +1
        setqwery({page:page.toString()})
    }
    return (
        <div>
            <div>{posts.map((post)=><Post key={post.id} post={post}/>)}</div>
            <button onClick={()=> nexPage()}>Next</button>

        </div>
    );
};

export {Posts};