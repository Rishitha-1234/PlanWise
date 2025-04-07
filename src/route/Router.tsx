import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Dashboard from "../pages/Dashboard"
import Navbar from "@/custom-components/Navbar"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/nav" element={<Navbar />} />
    </Routes>
  )
}
