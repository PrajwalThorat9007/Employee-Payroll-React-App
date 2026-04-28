import React, { useState } from 'react';
import './payroll-form.scss';

const PayrollForm = () => {
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

  return (
    <div className="form-content">
      <form className="form" action="#">
        <div className="form-head">Employee Payroll Form</div>

        <div className="row-content">
          <label className="label text" htmlFor="name">Name</label>
          <input className="input" type="text" id="name" name="name" value={employee.name} onChange={changeValue} placeholder="Your name..." required />
        </div>

        <div className="row-content">
          <label className="label text" htmlFor="profileUrl">Profile Image</label>
          <div className="profile-radio-content">
            <label>
              <input type="radio" id="profile1" name="profileUrl" value="https://ui-avatars.com/api/?name=P1&background=D8E2DC" onChange={changeValue} />
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
              <input type="radio" id="male" name="gender" value="Male" onChange={changeValue} /> Male
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
              {['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016'].map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>
        </div>

        <div className="row-content">
          <label className="label text" htmlFor="notes">Notes</label>
          <textarea className="input" id="notes" name="notes" placeholder="Additional notes..." style={{ height: '100px' }} value={employee.notes} onChange={changeValue}></textarea>
        </div>

        <div className="button-content">
          <button type="button" className="resetButton">Reset</button>
          <button type="submit" className="submitButton" id="submitButton">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PayrollForm;
