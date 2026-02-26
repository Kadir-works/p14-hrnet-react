import { useEmployees } from "../store/EmployeeContext"
import EmployeeTable from "../components/EmployeeTable"
import { Link } from "react-router-dom"

function EmployeeList() {
  const { employees } = useEmployees()

  return (
    <div className="container">
      <div className="title">
        <h1>Current Employees</h1>
      </div>
        <Link to="/">Home</Link>

      <EmployeeTable data={employees} />
    </div>
  )
}

export default EmployeeList