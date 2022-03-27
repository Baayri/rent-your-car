import axios from "axios";

export default class CarService {
    getAll() {
        return axios.get(`http://localhost:8080/api/cars/getAll`)
    }

    add(values) {
        return axios.post(`http://localhost:8080/api/cars/add`, values)
    }
}