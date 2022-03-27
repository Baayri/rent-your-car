import axios from "axios";

export default class InsuranceService {
    getAll() {
        return axios.get('http://localhost:8080/api/insurances/getAll')
    }
}