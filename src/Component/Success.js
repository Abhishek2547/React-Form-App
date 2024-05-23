import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const { formData } = location.state || {};

    if (!formData) {
        return <p>No data submitted.</p>;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
            <h2>Form Submitted Successfully!</h2>
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '300px' }}>
                <p><strong>First Name:</strong> {formData.firstName}</p>
                <p><strong>Last Name:</strong> {formData.lastName}</p>
                <p><strong>Username:</strong> {formData.username}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Country Code:</strong> {formData.countryCode}</p>
                <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
                <p><strong>Country:</strong> {formData.country}</p>
                <p><strong>City:</strong> {formData.city}</p>
                <p><strong>PAN No:</strong> {formData.panNo}</p>
                <p><strong>Aadhar No:</strong> {formData.aadharNo}</p>
            </div>
        </div>
    );
};

export default Success;
