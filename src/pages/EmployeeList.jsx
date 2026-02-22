import DataTable from "react-data-table-component"
import { useEmployees } from "../store/EmployeeContext"
import { Link } from "react-router-dom"
import { useState } from "react"

function EmployeeList() {
  const { employees } = useEmployees()
  const [search, setSearch] = useState("")

const filteredEmployees = employees.filter((employee) =>
  Object.values(employee)
    .join(" ")
    .toLowerCase()
    .includes(search.toLowerCase())
)


  const columns = [
    { name: "First Name", selector: row => row.firstName, sortable: true },
    { name: "Last Name", selector: row => row.lastName, sortable: true },
    { name: "Start Date", selector: row => row.startDate, sortable: true },
    { name: "Department", selector: row => row.department, sortable: true },
    { name: "Date of Birth", selector: row => row.dateOfBirth, sortable: true },
    { name: "Street", selector: row => row.street, sortable: true },
    { name: "City", selector: row => row.city, sortable: true },
    { name: "State", selector: row => row.state, sortable: true },
    { name: "Zip Code", selector: row => row.zipCode, sortable: true },
  ]

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <input
  type="text"
  placeholder="Search..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{ marginBottom: "10px", padding: "5px" }}
/>


      <DataTable
  columns={columns}
  data={filteredEmployees}
  pagination
  highlightOnHover
  responsive
/>


      <Link to="/">Home</Link>
    </div>
  )
}

export default EmployeeList
