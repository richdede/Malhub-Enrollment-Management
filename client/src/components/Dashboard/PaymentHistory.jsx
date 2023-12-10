// PaymentHistory.js
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [formData, setFormData] = useState({ amount: "", status: "" });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/payments")
      .then((response) => setPayments(response.data))
      .catch((error) => console.error(error));
  }, []);

  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        "http://localhost:8000/api/payments/{paymentId}/mark-as-paid",
        formData
      )
      .then((response) => {
        setPayments([...payments, response.data]);
        setFormData({ amount: "", status: "" });
      })
      .catch((error) => console.error(error));
  };
  //   axios
  //     .put(
  //       "http://localhost:8000/api/payments/{paymentId}/mark-as-paid",
  //       formData
  //     )
  //     .then((response) => {
  //       setPaymentHistory([...paymentHistory, response.data]);
  //       setFormData({ amount: "", status: "" });
  //     })
  //     .catch((error) => console.error(error));
  // };
  //   axios
  //     .get("http://localhost:8000/api/payments")
  //     .then((response) => setPayments(response.data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div>
      <h2>Payment History</h2>
      {
        <ul>
          {payments.map((payment) => (
            <li key={payment.id}>
              <Link to={`/payments/${payment.id}`}>
                {payment.amount} - {payment.state}
              </Link>
            </li>
          ))}
          <p disabled>no payment maid yet.</p>
        </ul>
        /*<form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        />
        <Link to="/sidebar">
          <button type="submit" style={{ marginTop: "5px" }}>
            {" "}
            Add Payment
          </button>
        </Link>
      </form> */
      }
      <Link to="/sidebar">
        <button
          type="submit"
          style={{ marginTop: "5px" }}
          onSubmit={handleFormSubmit}
        >
          {" "}
          Add Payment
        </button>
      </Link>
    </div>
  );
};

export default PaymentHistory;
