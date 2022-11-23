import cors from "cors";
import axios from "axios";

const corsOptions = { origin: true };
const corsMiddleware = cors(corsOptions);

const BASE_URL_DEV = "https://api.publicapis.org";
// const BASE_URL_PROD = "";

export default axios.create({
  baseURL: BASE_URL_DEV,
  headers: {
    "Content-type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
