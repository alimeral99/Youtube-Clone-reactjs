import axios from "axios";

const KEY = "AIzaSyCWpwbFrMQqQ9TNK4XgOcu89_SRyb7b35o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 8,
    key: KEY,
  },
});
