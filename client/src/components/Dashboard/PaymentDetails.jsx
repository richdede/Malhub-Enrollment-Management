import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const PaymentDetails = () => {
  const [payment, setPament] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/payments/{paymentId}/mark-as-paid")
      .then((response) => setPament(response.data))
      .catch((error) => console.error(error));
  }, [id]);
  return (
    <div>
      <h2>Payment Details</h2>
      <p>Amount: {payment.amount}</p>
      <p>Status: {payment.status}</p>
    </div>
  );
};

export default PaymentDetails;
