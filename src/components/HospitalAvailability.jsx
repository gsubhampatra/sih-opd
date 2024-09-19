import React from 'react';

function HospitalAvailability({ hospitals, onSelectHospital }) {
  return (
    <div className="max-w-lg p-4 mx-auto bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Nearby Hospitals</h2>
      <ul>
        {hospitals.map((hospital, index) => (
          <li key={index} className="mb-4">
            <div className="flex items-center justify-between">
              <span>{hospital.name} - {hospital.department}</span>
              <button
                onClick={() => onSelectHospital(hospital)}
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
              >
                Select
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HospitalAvailability;
