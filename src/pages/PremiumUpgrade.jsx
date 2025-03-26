import { useState } from 'react'
import PaymentForm from '../components/PaymentForm'
import { useNavigate } from 'react-router-dom'

function PremiumUpgrade() {
  const [paymentResult, setPaymentResult] = useState(null)
  const navigate = useNavigate()

  const handlePaymentSuccess = (result) => {
    setPaymentResult(result)
    navigate('/confirm', { state: result })
  }

  return (
    <div className="container">
      <h1>Actualizar a Premium</h1>
      {!paymentResult && (
        <PaymentForm onSuccess={handlePaymentSuccess} />
      )}
      {paymentResult && (
        <div className="payment-result">
          <h2>Pago procesado</h2>
          <p><strong>Estado:</strong> {paymentResult.status}</p>
          <p>
            <strong>Monto:</strong> {paymentResult.amount} {paymentResult.currency}
          </p>
        </div>
      )}
    </div>
  )
}

export default PremiumUpgrade
