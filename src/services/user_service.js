import {axios_service} from "./axios_service";
import {urls} from "../constants";

const user_service = {
    getAll: () => axios_service.get(urls.users),
    getByid: (id) => axios_service(`${urls.users}/${id}`)
}
export {user_service}