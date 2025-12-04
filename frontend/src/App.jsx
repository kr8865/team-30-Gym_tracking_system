import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import TrainerPage from './pages/TrainerPage'
import AdminPage from './pages/AdminPage'
import MemberPage from './pages/MemberPage'
import MembershipPurchasePage from './pages/MembershipPurchasePage'

function App() {
  return (
    <div className="app-container">
      <nav className="p-4 bg-gray-100 mb-4">
        <ul className="flex gap-4">
          <li><Link to="/trainer" className="text-blue-500 hover:underline">Trainer</Link></li>
          <li><Link to="/admin" className="text-blue-500 hover:underline">Admin</Link></li>
          <li><Link to="/member" className="text-blue-500 hover:underline">Member</Link></li>
          <li><Link to="/membership-purchase" className="text-blue-500 hover:underline">Membership Purchase</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/trainer" element={<TrainerPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/membership-purchase" element={<MembershipPurchasePage />} />
        <Route path="/" element={
          <div className="p-4">
            <h1 className="text-2xl font-bold">Welcome to Gym Tracking System</h1>
            <p>Select a role above to proceed.</p>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App
