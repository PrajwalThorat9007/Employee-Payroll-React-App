import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../../services/EmployeeService';
import './home.scss';

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await EmployeeService.getAllEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(salary);
  };

  return (
    <div className="main-content">
      <div className="header-content">
        <div className="emp-detail-text">
          Employee Details <span>{employees.length}</span>
        </div>
        <Link to="/add" className="add-button">
          + Add User
        </Link>
      </div>

      <div className="table-main">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((emp) => (
                <tr key={emp.id}>
                  <td>
                    <img className="profile-img" src={emp.profilePic} alt="profile" />
                  </td>
                  <td>{emp.name}</td>
                  <td>{emp.gender}</td>
                  <td>
                    {emp.department && emp.department.map((dept, index) => (
                      <span key={index} className="dept-label">{dept}</span>
                    ))}
                  </td>
                  <td>{formatSalary(emp.salary)}</td>
                  <td>{emp.startDate}</td>
                  <td className="action-icons">
                    <Link to={`/edit/${emp.id}`} style={{textDecoration: 'none'}}>
                      <span role="img" aria-label="edit" style={{cursor: 'pointer'}} title="Edit">✏️</span>
                    </Link>
                    <span role="img" aria-label="delete" style={{cursor: 'pointer'}} title="Delete (Coming Soon)">🗑️</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '30px' }}>No Employees Found. Please add one!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
