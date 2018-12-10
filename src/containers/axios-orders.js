import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-f2c06.firebaseio.com/"
});

export default instance;
