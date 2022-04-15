import axios from "axios"
import mainUrl from '../constants/urls'


const axios_service = axios.create({mainUrl});

export {
    axios_service
}