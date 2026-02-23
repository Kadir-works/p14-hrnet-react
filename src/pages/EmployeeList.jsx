import { useEmployees } from "../store/EmployeeContext"
import EmployeeTable from "../components/EmployeeTable"

function EmployeeList() {
  const { employees } = useEmployees()

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <EmployeeTable data={employees} />
    </div>
  )
}

export default EmployeeList