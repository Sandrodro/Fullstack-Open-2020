import axios from "axios";

const url = "persons";

const create = object => axios.post(url, object);
const get = () => axios.get(url);
const deleter = (id) => axios.delete(`/persons/${id}`)

export default { create, get, deleter };