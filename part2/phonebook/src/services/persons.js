import axios from "axios";

const url = "http://localhost:3001/persons";

const create = object => axios.post(url, object);
const get = () => axios.get(url);
const deleter = (id) => axios.delete(`http://localhost:3001/persons/${id}`)

export default { create, get, deleter };