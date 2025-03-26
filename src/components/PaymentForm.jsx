import { useState } from 'react'
import { sendPayment } from '../services/paymentService'

function PaymentForm({ onSuccess }) {
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const response = await sendPayment({ amount, currency })
      setLoading(false)
      onSuccess(response)
    } catch (err) {
      setError('Error al procesar el pago.')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <label>
        Monto:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>

      <label>
        Moneda:
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="COP">COP</option>
        </select>
      </label>

      <button type="submit" disabled={loading}>
        {loading ? 'Procesando...' : 'Pagar'}
      </button>

      {error && <p className="error-text">{error}</p>}
    </form>
  )
}

export default PaymentForm
