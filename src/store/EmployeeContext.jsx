import { createContext, useContext, useState } from "react"
import { initialEmployees } from "../data/employeesData"

// Création du contexte
const EmployeeContext = createContext(null)

// Provider global
export function EmployeeProvider({ children }) {

  // Initialisation à partir des données locales simulées
  const [employees, setEmployees] = useState(initialEmployees)

  // Ajout d’un employé
  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      {
        ...employee,
        id: Date.now() // génération simple d'id unique
      }
    ])
  }

  const value = {
    employees,
    addEmployee
  }

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  )
}

// Hook personnalisé sécurisé
export function useEmployees() {
  const context = useContext(EmployeeContext)

  if (!context) {
    throw new Error("useEmployees doit être utilisé dans un EmployeeProvider")
  }

  return context
}