import axios from "axios";

export async function getData() {
    let response = await axios.get(`https://sheltered-refuge-85246.herokuapp.com/api/json`);
    return response.data;
}
