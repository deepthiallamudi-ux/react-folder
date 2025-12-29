import axios from "axios";


const instance=axios.create({
    // baseURL:"https://dummyjson.com"
    baseURL:"https://axios-866a1-default-rtdb.asia-southeast1.firebasedatabase.app/"
, });

export default instance;