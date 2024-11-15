import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const EmployeeAdd = ({ onSubmit, editingEmployee, clearEditing }) => {
  const [employee, setEmployee] = useState({ name: '', email: '', status: 'active' });

  useEffect(() => {
    if (editingEmployee) {
      setEmployee(editingEmployee);
    } else {
      setEmployee({ name: '', email: '', status: 'active' });
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
    setEmployee({ name: '', email: '', status: 'active' }); // Clear form
    clearEditing(); // Reset editing state
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <h3 className="text-center">{editingEmployee ? 'Edit Employee' : 'Add Employee'}</h3>
          <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                placeholder="Enter Name" 
                value={employee.name} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                placeholder="Enter Email" 
                value={employee.email} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formStatus" className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select name="status" value={employee.status} onChange={handleChange}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Select>
            </Form.Group>

            <div className="d-flex justify-content-end gap-2">
              <Button className='btn btn-success' variant="primary" type="submit">
                {editingEmployee ? 'Update Employee' : 'Add Employee'}
              </Button>
              {editingEmployee && (
                <Button variant="secondary" type="button" onClick={clearEditing}>
                  Cancel
                </Button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeAdd;
