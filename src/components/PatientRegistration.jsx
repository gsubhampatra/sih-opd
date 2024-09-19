import React, { useState } from 'react';

function PatientRegistration({ onRegister }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    symptoms: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);  // Pass the data to the parent component
  };

  // Placeholder for OCR functionality
  const handleOCR = () => {
    // This is where OCR logic goes; for now, we'll simulate it
    const simulatedOCRData = {
      name: 'John Doe',
      age: '30',
      address: '1234 Elm Street',
    };
    setFormData(simulatedOCRData);
  };

  return (
    <div className="max-w-lg p-4 mx-auto bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Symptoms</label>
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">Register</button>
        <button type="button" onClick={handleOCR} className="px-4 py-2 ml-2 text-white bg-gray-500 rounded-md">Scan via OCR</button>
      </form>
    </div>
  );
}

export default PatientRegistration;
