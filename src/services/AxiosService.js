import axios from 'axios';

class AxiosService {
  postService(url = '', payload = null, tokenRequired = false, httpOptions = null) {
    return axios.post(url, payload, tokenRequired && httpOptions);
  }

  getService(url = '', tokenRequired = false, httpOptions = null) {
    return axios.get(url, tokenRequired && httpOptions);
  }

  putService(url = '', payload = null, tokenRequired = false, httpOptions = null) {
    return axios.put(url, payload, tokenRequired && httpOptions);
  }

  deleteService(url = '', tokenRequired = false, httpOptions = null) {
    return axios.delete(url, tokenRequired && httpOptions);
  }
}

export default new AxiosService();
