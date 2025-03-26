export const sendPayment = ({ amount, currency }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 'mock-uuid',
          user_id: 'mock-user-id',
          amount,
          currency,
          status: 'paid',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
      }, 1500)
    })
  }
  