import axios from "axios";

const instance= axios.create({
     baseURL:"http://localhost:8000/catalogs/",
})

export default instance;