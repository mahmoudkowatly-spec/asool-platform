import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Clients from './pages/Clients'
import Contractors from './pages/Contractors'
import Employees from './pages/Employees'
import Placeholder from './pages/Placeholder'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/suppliers" element={<Placeholder />} />
          <Route path="/inventory" element={<Placeholder />} />
          <Route path="/accounting" element={<Placeholder />} />
          <Route path="/ledger" element={<Placeholder />} />
          <Route path="/treasury" element={<Placeholder />} />
          <Route path="/reports" element={<Placeholder />} />
          <Route path="/settings" element={<Placeholder />} />
          <Route path="/help" element={<Placeholder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
