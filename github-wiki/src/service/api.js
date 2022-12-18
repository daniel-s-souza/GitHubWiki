import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com/repos/daniel-s-souza/"
})

export default api