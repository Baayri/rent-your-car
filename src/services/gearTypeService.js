import axios from "axios";

export default class GearTypeService {
    getAll() {
        return axios.get('http://localhost:8080/api/gearTypes/getAll')
    }
}