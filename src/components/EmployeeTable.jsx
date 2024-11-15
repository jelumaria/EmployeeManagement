import React from 'react';
import { Table, Button } from 'react-bootstrap';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="employee-table-container">
        <h3 className='text-center my-5'>Employee List</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.status}</td>
              <td>
                <Button
                  variant="success"
                  size="sm"
                  className="me-2"
                  onClick={() => onEdit(employee)}  // Ensure this is called with the correct employee
                >
                  Edit
                </Button>
               
                <button  onClick={() => onDelete(employee.id)} className='btn' > <i className='fa-solid fa-trash text-danger'></i> </button>

              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeTable;
