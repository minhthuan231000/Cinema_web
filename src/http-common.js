import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:9080", //You can change the baseURL that depends on REST APIs url that your Server configures
    headers: {
        "Content-type": "application/json"
    }
});