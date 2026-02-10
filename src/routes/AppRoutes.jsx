import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'

const AppRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

            {/* fallback routes */}
            <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default AppRoutes