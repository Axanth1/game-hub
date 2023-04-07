import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '260d3511f28d4113b905bb5eb20aabac'
    }
})