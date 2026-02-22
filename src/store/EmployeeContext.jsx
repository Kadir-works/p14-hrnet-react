import { createContext, useContext, useState, useEffect } from "react"

const EmployeeContext = createContext()

export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(() => {
    const storedEmployees = localStorage.getItem("employees")
    return storedEmployees ? JSON.parse(storedEmployees) : []
  })

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees))
  }, [employees])

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee])
  }

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export function useEmployees() {
  return useContext(EmployeeContext)
}
