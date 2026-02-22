import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateEmployee from "../pages/CreateEmployee"
import EmployeeList from "../pages/EmployeeList"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
