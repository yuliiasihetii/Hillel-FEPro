import axios from 'axios'
import { USERS_API } from './config'

export default axios.create({
    baseURL: USERS_API
})