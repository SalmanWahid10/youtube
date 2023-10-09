import axios from "axios";

const KEY = "AIzaSyB5VcGzYGVq6oD4zu38MfbrsDF0MgfVX6U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});
