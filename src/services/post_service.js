import {axios_service} from './axios_service';
import {urls} from '../constants';

const post_service = {
    getall: (page, _limit: =2 ) => axios_service.get(urls.posts, {params{
        _start: (page-1)*_limit,
            _limit
        }})

}

export {
    post_service
}
