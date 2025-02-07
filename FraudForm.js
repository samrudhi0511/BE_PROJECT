import React, { useState } from "react";
import axios from "axios";

const FraudForm = () => {
  const [formData, setFormData] = useState({
    amt: "",
    category: "",
    job: "",
    merch_lat: "",
    merch_long: "",
    lat: "",
    long: "",
    transaction_hour: "",
    transaction_day: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );
      setResult(
        response.data.fraud_prediction === 1
          ? "Fraudulent Transaction"
          : "Legitimate Transaction"
      );
    } catch (error) {
      console.error("Error:", error);
      setResult("Error occurred while predicting.");
    }
  };

  return (
    <div className="container">
      <h2>Credit Card Fraud Detection</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label>{key.replace("_", " ").toUpperCase()}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Check Transaction</button>
      </form>
      {result && <h3>Result: {result}</h3>}
    </div>
  );
};

export default FraudForm;
