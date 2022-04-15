import {axios_service} from './axios_service';
import {urls} from '../constants/urls';

const user_service = {
    getall: () => axios_service.get(urls.users),
    getbyId: (id) => axios_service(`${urls.users}/${id}`),
    getuserPosts: (id) => axios_service(`${urls.users}/${id}/${posts}`)

}

export {
    user_service
}
