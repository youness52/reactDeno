import axios from "axios";
export default axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-type": "application/json",
    //Authorization: "Bearer " +sessionStorage.getItem("TOKEN")
    Authorization: "Bearer 35|oPnPdcarKw3YsZOFGEpi4FGeoIwgjppda8cAotLJ2b60e693", //+sessionStorage.getItem("TOKEN")
  },
});
