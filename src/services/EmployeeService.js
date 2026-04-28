class EmployeeService {
  /**
   * For UC3, we collect the form data and simulate passing it to a service.
   * In UC4, we will integrate Axios here to hit the actual API.
   */
  addEmployee(employeeData) {
    console.log("Employee Data collected in Service:", employeeData);
    // Temporary console log to demonstrate data flow for UC3
    alert("Data collected successfully! Check console for details.");
    return Promise.resolve(employeeData);
  }
}

export default new EmployeeService();
