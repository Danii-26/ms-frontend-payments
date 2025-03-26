import { useLocation, Link } from 'react-router-dom'

function PaymentConfirmation() {
  const location = useLocation()
  const paymentData = location.state

  if (!paymentData) {
    return (
      <div className="container">
        <h1>No se encontró información de pago</h1>
        <Link to="/premium">Regresar a actualización premium</Link>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Confirmación de Pago</h1>
      <p><strong>ID del pago:</strong> {paymentData.id}</p>
      <p><strong>Estado:</strong> {paymentData.status}</p>
      <p>
        <strong>Monto:</strong> {paymentData.amount} {paymentData.currency}
      </p>
      <p>
        <strong>Fecha:</strong> {new Date(paymentData.created_at).toLocaleString()}
      </p>
      <Link to="/premium">Realizar otro pago</Link>
    </div>
  )
}

export default PaymentConfirmation
