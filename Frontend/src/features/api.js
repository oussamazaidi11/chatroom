import axios from "axios";
let Baseurl = import.meta.env.FRONT_API_URL;
export const http = axios.create({
  Baseurl,
  headers: {
    "Content-Type": "application/json",
  },
});
