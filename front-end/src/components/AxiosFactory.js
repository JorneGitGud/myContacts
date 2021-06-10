//sets default api key for Axios  NOT SETUP YET
import axios from "axios";

axios.defaults.headers.common["apikey"] = "Key goes here";

export default axios;
