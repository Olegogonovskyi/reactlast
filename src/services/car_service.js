import {axios_service} from "./axios_service";
import {urls} from "../constants";

const car_service = {
    getAll: () => axios_service.get(urls.cars),
    getByid: (id) => axios_service(`${urls.cars}/${id}`),
    adNewcar: (car) => axios_service.post(urls.cars, car),
    updNewcar: (id) => axios_service.put(`${urls.cars}/${id}`),
    delNewcar: (id) => axios_service.delete(`${urls.cars}/${id}`)
}
export {car_service}