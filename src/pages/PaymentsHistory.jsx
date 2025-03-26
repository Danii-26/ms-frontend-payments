function PaymentsHistory() {
    const history = [
      {
        id: '1',
        amount: 20,
        currency: 'USD',
        status: 'paid',
        created_at: new Date().toISOString()
      },
      {
        id: '2',
        amount: 15,
        currency: 'USD',
        status: 'failed',
        created_at: new Date().toISOString()
      }
    ]
  
    return (
      <div className="container">
        <h1>Historial de Pagos</h1>
        <ul>
          {history.map(payment => (
            <li key={payment.id}>
              <strong>ID:</strong> {payment.id} - 
              <strong> Monto:</strong> {payment.amount} {payment.currency} - 
              <strong> Estado:</strong> {payment.status} - 
              <strong> Fecha:</strong> {new Date(payment.created_at).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default PaymentsHistory
  