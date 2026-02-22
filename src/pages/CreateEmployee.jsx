import { useState } from "react"
import { useEmployees } from "../store/EmployeeContext"
import { states } from "../data/states"
import Modal from "../components/Modal"
import { Link } from "react-router-dom"


function CreateEmployee() {
  const { addEmployee } = useEmployees()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "Sales",
    street: "",
    city: "",
    state: "AL",
    zipCode: ""
  }

  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addEmployee(formData)
    setIsModalOpen(true)
    setFormData(initialState)
  }

  return (
    <div className="container">
      <div className="title">
        <h1>HRnet</h1>
        <Link to="/employees">View Current Employees</Link>

      </div>

      <h2>Create Employee</h2>

      <form onSubmit={handleSubmit}>

        <label>First Name</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label>Last Name</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label>Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />

        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />

        <fieldset>
          <legend>Address</legend>

          <label>Street</label>
          <input
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />

          <label>City</label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <label>State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            {states.map((state) => (
              <option
                key={state.abbreviation}
                value={state.abbreviation}
              >
                {state.name}
              </option>
            ))}
          </select>

          <label>Zip Code</label>
          <input
            name="zipCode"
            type="number"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </fieldset>

        <label>Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>

        <button type="submit">Save</button>

      </form>

      <Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Success"
>
  Employee Created Successfully!
</Modal>

    </div>
  )
}

export default CreateEmployee
