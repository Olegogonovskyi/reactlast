import axios from "axios"
import mainUrl from '../constants/urls'


const axios_service = axios.create({baseURL: mainUrl});

export {
    axios_service
}