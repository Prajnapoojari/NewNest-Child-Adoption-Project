import React, { useState } from "react";
import "./Donate.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Donate = () => {
  const [amount, setAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    cardNumber: ""
  });

  const predefinedAmounts = [100, 500, 1000, 5000, 10000];

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
    setAmount(event.target.value ? parseInt(event.target.value) : 0);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleDonateClick = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      (paymentMethod === "creditCard" && !formData.cardNumber)
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    alert(`Thank you for your donation of ₹${amount}!`);
    console.log("Donation Details:", { amount, paymentMethod, formData });

    setAmount(500);
    setCustomAmount("");
    setPaymentMethod("creditCard");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", address: "", cardNumber: "" });
  };

  return (
  <div>
  <Header />
    <div className="donation-container">
      <div className="donation-main">
        <div className="donation-left">
          <h1>Select an Amount</h1>
          <div className="donation-amounts">
            {predefinedAmounts.map((value) => (
              <button
                key={value}
                className={amount === value ? "active" : ""}
                onClick={() => handleAmountClick(value)}
              >
                ₹{value}
              </button>
            ))}
            <input
              type="number"
              className="donation-input"
              placeholder="Custom Amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
          </div>

          <h2>Payment Method</h2>
          <label>
            <input
              type="radio"
              name="payment"
              value="creditCard"
              checked={paymentMethod === "creditCard"}
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={handlePaymentMethodChange}
            />
            UPI
          </label>

          {paymentMethod === "creditCard" && (
            <input
              type="text"
              className="donation-input"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleInputChange}
            />
          )}

          <h2>Your Details</h2>
          <div className="donation-details">
            <input type="text" className="donation-input" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
            <input type="text" className="donation-input" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
            <input type="email" className="donation-input" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
            <input type="text" className="donation-input" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
            <input type="text" className="donation-input" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} />
          </div>

          <p>Total Donation: ₹{amount}</p>
          <button className="donation-button" onClick={handleDonateClick}>Donate Now</button>
        </div>
      </div>
      <div>
      <Footer />
    </div>
    </div>
    </div>
  );
};

export default Donate;