import {axios_service} from './axios_service';
import {urls} from '../constants';

const post_service = {
    getall: () => axios_service.get(urls.posts)

}

export {
    post_service
}
