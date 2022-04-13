import axios from 'axios';

import baseURL from "../constants/urls";

const axios_service = axios.create({baseURL});

export {axios_service}