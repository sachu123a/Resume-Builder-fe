import axios from "axios";
import { toast } from "react-toastify";


const Axiosconfig = async (method,url, data) => {
  try {
    return await axios({ method, url, data })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  } catch (error) {
    console.log(error);
    toast.error("something went wrong in the axios");
  }
};
export default Axiosconfig;
