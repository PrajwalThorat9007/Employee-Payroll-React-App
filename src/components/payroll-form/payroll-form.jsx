import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './payroll-form.scss';
import EmployeeService from '../../services/EmployeeService';

const PayrollForm = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    profileUrl: '',
    gender: '',
    department: [],
    salary: 400000,
    day: '1',
    month: 'Jan',
    year: '2020',
    notes: ''
  });

  const changeValue = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const onCheckChange = (event) => {
    const { name, value, checked } = event.target;
    if (checked) {
      setEmployee({ ...employee, [name]: [...employee[name], value] });
    } else {
      setEmployee({ ...employee, [name]: employee[name].filter(dept => dept !== value) });
    }
  };

  const save = async (event) => {
    event.preventDefault(); // Prevent page reload
    
    // Format the date
    const startDate = `${employee.day} ${employee.month} ${employee.year}`;
    
    // Create the final object to send
    const employeeData = {
      name: employee.name,
      profilePic: employee.profileUrl,
      gender: employee.gender,
      department: employee.department,
      salary: employee.salary,
      startDate: startDate,
      note: employee.notes
    };

    try {
      // Pass data to service
      const response = await EmployeeService.addEmployee(employeeData);
      console.log("Response:", response.data);
      alert("Employee Added Successfully!");
      reset(); // Clear form after success
      navigate("/"); // Navigate back to home page
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Error adding employee! Check console for details.");
    }
  };

  const reset = () => {
    setEmployee({
      name: '',
      profileUrl: '',
      gender: '',
      department: [],
      salary: 400000,
      day: '1',
      month: 'Jan',
      year: '2020',
      notes: ''
    });
  };

  return (
    <div className="form-content">
      <form className="form" onSubmit={save} action="#">
        <div className="form-head">Employee Payroll Form</div>

        <div className="row-content">
          <label className="label text" htmlFor="name">Name</label>
          <input className="input" type="text" id="name" name="name" value={employee.name} onChange={changeValue} placeholder="Your name..." required />
        </div>

        <div className="row-content">
          <label className="label text" htmlFor="profileUrl">Profile Image</label>
          <div className="profile-radio-content">
            <label>
              <input type="radio" id="profile1" name="profileUrl" value="https://ui-avatars.com/api/?name=P1&background=D8E2DC" onChange={changeValue} required />
              <img className="profile-img" src="https://ui-avatars.com/api/?name=P1&background=D8E2DC" alt="profile1" />
            </label>
            <label>
              <input type="radio" id="profile2" name="profileUrl" value="https://ui-avatars.com/api/?name=P2&background=FFE5D9" onChange={changeValue} />
              <img className="profile-img" src="https://ui-avatars.com/api/?name=P2&background=FFE5D9" alt="profile2" />
            </label>
            <label>
              <input type="radio" id="profile3" name="profileUrl" value="https://ui-avatars.com/api/?name=P3&background=FFCAD4" onChange={changeValue} />
              <img className="profile-img" src="https://ui-avatars.com/api/?name=P3&background=FFCAD4" alt="profile3" />
            </label>
            <label>
              <input type="radio" id="profile4" name="profileUrl" value="https://ui-avatars.com/api/?name=P4&background=9D8189&color=fff" onChange={changeValue} />
              <img className="profile-img" src="https://ui-avatars.com/api/?name=P4&background=9D8189&color=fff" alt="profile4" />
            </label>
          </div>
        </div>

        <div className="row-content">
          <label className="label text" htmlFor="gender">Gender</label>
          <div className="gender-radio-content">
            <label>
              <input type="radio" id="male" name="gender" value="Male" onChange={changeValue} required /> Male
            </label>
            <label>
              <input type="radio" id="female" name="gender" value="Female" onChange={changeValue} /> Female
            </label>
          </div>
        </div>

        <div className="row-content">
          <label className="label text" htmlFor="department">Department</label>
          <div className="department-content">
            <label>
              <input type="checkbox" name="department" value="HR" onChange={onCheckChange} /> HR
            </label>
            <label>
              <input type="checkbox" name="department" value="Sales" onChange={onCheckChange} /> Sales
            </label>
            <label>
              <input type="checkbox" name="department" value="Finance" onChange={onCheckChange} /> Finance
            </label>
            <label>
              <input type="checkbox" name="department" value="Engineer" onChange={onCheckChange} /> Engineer
            </label>
            <label>
              <input type="checkbox" name="department" value="Others" onChange={onCheckChange} /> Others
            </label>
          </div>
        </div>

        <div className="row-content">
          <label className="label text" htmlFor="salary">Salary</label>
          <div className="date-content">
            <input className="input" type="range" name="salary" id="salary" min="300000" max="5000000" step="100" value={employee.salary} onChange={changeValue} style={{ width: '60%' }} />
            <span className="salary-output">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(employee.salary)}</span>
          </div>
        </div>

        <div className="row-content">
          <label className="label text" htmlFor="startDate">Start Date</label>
          <div className="date-content">
            <select id="day" name="day" value={employee.day} onChange={changeValue}>
              {[...Array(31)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
            </select>
            <select id="month" name="month" value={employee.month} onChange={changeValue}>
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => <option key={month} value={month}>{month}</option>)}
            </select>
            <select id="year" name="year" value={employee.year} onChange={changeValue}>
              {['2024', '2023', '2022', '2021', '2020'].map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>
        </div>

        <div className="row-content">
          <label className="label text" htmlFor="notes">Notes</label>
          <textarea className="input" id="notes" name="notes" placeholder="Additional notes..." style={{ height: '100px' }} value={employee.notes} onChange={changeValue}></textarea>
        </div>

        <div className="button-content">
          <Link to="/" className="resetButton" style={{textDecoration: 'none', display: 'inline-block', textAlign: 'center'}}>Cancel</Link>
          <button type="button" className="resetButton" onClick={reset}>Reset</button>
          <button type="submit" className="submitButton" id="submitButton">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PayrollForm;
