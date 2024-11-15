import React, { useState, useEffect } from 'react';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from "./services/Employee";
import EmployeeAdd from './components/EmployeeAdd';
import EmployeeTable from './components/EmployeeTable';
import Header from './components/Header';

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleAddEmployee = async (employee) => {
    try {
      await addEmployee(employee);
      fetchEmployees();
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const handleUpdateEmployee = async (employee) => {
    try {
      await updateEmployee(employee.id, employee);
      setEditingEmployee(null);
      fetchEmployees();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div>
      <Header />
      <h1 className='text-center '>Employee Management</h1>
      <EmployeeAdd
        onSubmit={editingEmployee ? handleUpdateEmployee : handleAddEmployee}
        editingEmployee={editingEmployee}
        clearEditing={() => setEditingEmployee(null)}
      />
      <EmployeeTable 
        employees={employees} 
        onEdit={setEditingEmployee} 
        onDelete={handleDeleteEmployee} 
      />
    </div>
  );
}

export default App;
