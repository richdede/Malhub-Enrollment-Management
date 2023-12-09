// PaymentHistory.js
import { useState, useEffect } from "react";
import axios from "axios";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/payments")
      .then((response) => setPayments(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="PaymentHistory">
      <div className="payment">
        <h2>Payment History</h2>
        {payments.length > 0 ? (
          <ul>
            {payments.map((payment) => (
              <li key={payment.id}>
                {`Type: ${payment.type}, ID: ${payment.type_id}, Amount: ${payment.amount}`}
              </li>
            ))}
          </ul>
        ) : (
          <p>No payments made yet.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
