import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PaymentConfirmation from './pages/PaymentConfirmation'
import PaymentsHistory from './pages/PaymentsHistory'
import PremiumUpgrade from './pages/PremiumUpgrade'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/premium">Upgrade Premium</Link></li>
          <li><Link to="/history">Historial de Pagos</Link></li>
          <li><Link to="/confirm">Confirmación de Pago</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/premium" element={<PremiumUpgrade />} />
        <Route path="/history" element={<PaymentsHistory />} />
        <Route path="/confirm" element={<PaymentConfirmation />} />
        <Route path="*" element={<PremiumUpgrade />} />
      </Routes>
    </Router>
  )
}

export default App
