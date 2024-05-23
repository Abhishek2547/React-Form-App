import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
    countryCode: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const countryToCities = {
    India: [
      "Mumbai",
      "New Delhi",
      "Kolkata",
      "Pune",
      "Chennai",
      "Bangalore",
      "Hyderabad",
      "Jaipur",
    ],
    USA: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
    ],
    UK: [
      "London",
      "Birmingham",
      "Manchester",
      "Glasgow",
      "Liverpool",
      "Leeds",
      "Sheffield",
      "Edinburgh",
    ],
    Canada: [
      "Toronto",
      "Montreal",
      "Vancouver",
      "Calgary",
      "Edmonton",
      "Ottawa",
      "Winnipeg",
      "Quebec City",
    ],
    Australia: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide",
      "Gold Coast",
      "Canberra",
      "Newcastle",
    ],
    Germany: [
      "Berlin",
      "Hamburg",
      "Munich",
      "Cologne",
      "Frankfurt",
      "Stuttgart",
      "Düsseldorf",
      "Dortmund",
    ],
    France: [
      "Paris",
      "Marseille",
      "Lyon",
      "Toulouse",
      "Nice",
      "Nantes",
      "Strasbourg",
      "Montpellier",
    ],
    China: [
      "Shanghai",
      "Beijing",
      "Guangzhou",
      "Shenzhen",
      "Wuhan",
      "Chengdu",
      "Tianjin",
      "Chongqing",
    ],
    Japan: [
      "Tokyo",
      "Yokohama",
      "Osaka",
      "Nagoya",
      "Sapporo",
      "Fukuoka",
      "Kobe",
      "Kyoto",
    ],
    Brazil: [
      "São Paulo",
      "Rio de Janeiro",
      "Brasília",
      "Salvador",
      "Fortaleza",
      "Belo Horizonte",
      "Manaus",
      "Curitiba",
    ],
  };

  const validate = () => {
    const errors = {};
    const panRegex = /^[A-Z0-9]{10}$/;
    const aadharRegex = /^\d{12}$/;
    const phoneNumberRegex = /^\d{10}$/;

    if (!formData.firstName) errors.firstName = "First Name is required";
    if (!formData.lastName) errors.lastName = "Last Name is required";
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.countryCode) errors.countryCode = "Country code is required";
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone No should be a 10-digit number";
    }

    if (!formData.country) errors.country = "Country is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.panNo) {
      errors.panNo = "PAN No is required";
    } else if (!panRegex.test(formData.panNo)) {
      errors.panNo = "PAN No should be a 10-character alphanumeric string";
    }
    if (!formData.aadharNo) {
      errors.aadharNo = "Aadhar No is required";
    } else if (!aadharRegex.test(formData.aadharNo)) {
      errors.aadharNo = "Aadhar No should be a 12-digit number";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      navigate("/success", { state: { formData } });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "country") {
      setFormData({
        ...formData,
        [name]: value,
        city: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setErrors({});
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>SignUp Form</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", width: "300px" }}
        >
          <div style={{ marginBottom: "10px" }}>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            {errors.firstName && (
              <span style={{ color: "red" }}>{errors.firstName}</span>
            )}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            {errors.lastName && (
              <span style={{ color: "red" }}>{errors.lastName}</span>
            )}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            {errors.username && (
              <span style={{ color: "red" }}>{errors.username}</span>
            )}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Password:</label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{ marginTop: "5px" }}
            >
              {isPasswordVisible ? "Hide" : "Show"}
            </button>
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Phone No:</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                name="countryCode"
                placeholder="Country Code"
                value={formData.countryCode}
                onChange={handleChange}
                style={{ width: "30%", marginRight: "10px" }}
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={{ width: "70%" }}
              />
            </div>
            {errors.countryCode && (
              <span style={{ color: "red" }}>{errors.countryCode}</span>
            )}
            {errors.phoneNumber && (
              <span style={{ color: "red" }}>{errors.phoneNumber}</span>
            )}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Country:</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              <option value="">Select Country</option>
              {Object.keys(countryToCities).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            {errors.country && (
              <span style={{ color: "red" }}>{errors.country}</span>
            )}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>City:</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              <option value="">Select City</option>
              {formData.country &&
                countryToCities[formData.country].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            {errors.city && <span style={{ color: "red" }}>{errors.city}</span>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>PAN No:</label>
            <input
              type="text"
              name="panNo"
              value={formData.panNo}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            {errors.panNo && (
              <span style={{ color: "red" }}>{errors.panNo}</span>
            )}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Aadhar No:</label>
            <input
              type="text"
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            {errors.aadharNo && (
              <span style={{ color: "red" }}>{errors.aadharNo}</span>
            )}
          </div>
          <button
            type="submit"
            disabled={Object.keys(errors).length > 0}
            style={{ marginTop: "10px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
