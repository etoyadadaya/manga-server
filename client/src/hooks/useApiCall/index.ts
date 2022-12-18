import axios from "axios";

const apiURL = "http://127.0.0.1:666";
const host = axios.create({
  baseURL: apiURL,
  withCredentials: false,
  headers: {
    "Content-type": "application/json",
  },
});

const useApiCall = () => host;

export default useApiCall;
