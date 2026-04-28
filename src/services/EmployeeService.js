import AxiosService from './AxiosService';

const BASE_URL = 'http://localhost:3001/employees';

class EmployeeService {
  addEmployee(employeeData) {
    return AxiosService.postService(BASE_URL, employeeData);
  }
}

export default new EmployeeService();
