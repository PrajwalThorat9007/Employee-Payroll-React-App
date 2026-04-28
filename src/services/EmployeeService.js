import AxiosService from './AxiosService';

const BASE_URL = 'http://localhost:3001/employees';

class EmployeeService {
  addEmployee(employeeData) {
    return AxiosService.postService(BASE_URL, employeeData);
  }

  getAllEmployees() {
    return AxiosService.getService(BASE_URL);
  }

  getEmployeeById(id) {
    return AxiosService.getService(`${BASE_URL}/${id}`);
  }

  updateEmployee(id, employeeData) {
    return AxiosService.putService(`${BASE_URL}/${id}`, employeeData);
  }

  deleteEmployee(id) {
    return AxiosService.deleteService(`${BASE_URL}/${id}`);
  }
}

export default new EmployeeService();
