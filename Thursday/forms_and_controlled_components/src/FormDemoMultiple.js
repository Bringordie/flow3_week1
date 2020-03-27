import React, { useState } from "react";

function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    alert("Entered details" + JSON.stringify(reservation));
  }

  return (
    <div>
      <form>
        <label>Pay by Credit Card: </label>
        <input
          name="payByCreditCard"
          type="checkbox"
          checked={reservation.payByCreditCard}
          onChange={handleChange}
        />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          name="lastName"
          value={reservation.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          name="email"
          value={reservation.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="phone"
          value={reservation.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          name="street"
          value={reservation.street}
          onChange={handleChange}
          placeholder="Street"
        />
        <input
          name="zip"
          value={reservation.zip}
          onChange={handleChange}
          placeholder="Zip"
        />
        <input
          name="city"
          value={reservation.city}
          onChange={handleChange}
          placeholder="City"
        />
        <input
          name="country"
          value={reservation.country}
          onChange={handleChange}
          placeholder="Country"
        />
      </form>
      <button onClick={handleSubmit}>Submit Button</button>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;
