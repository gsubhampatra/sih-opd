import React, { useState } from 'react';
import PatientRegistration from './components/PatientRegistration';
import Chatbot from './components/Chatbot';
import HospitalAvailability from './components/HospitalAvailability';
import AppointmentScheduler from './components/AppointmentScheduler';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';

function App() {
  const [step, setStep] = useState(0);
  const [patientData, setPatientData] = useState(null);
  const [chatbotData, setChatbotData] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState(null);
const [adminshow,setAdminShow]=useState(false);
  const hospitals = [
    { name: 'City Hospital', department: 'Cardiology' },
    { name: 'General Hospital', department: 'Orthopedics' },
    { name: 'Specialty Clinic', department: 'Neurology' }
  ];

  const handleRegister = (data) => {
    setPatientData(data);
    setStep(2);
  };

  const handleChatbotComplete = (data) => {
    setChatbotData(data);
    setStep(3);
  };

  const handleSelectHospital = (hospital) => {
    setSelectedHospital(hospital);
    setStep(4);
  };

  const handleSchedule = (date) => {
    setAppointmentDate(date);
    alert(`Appointment scheduled on ${date} at ${selectedHospital.name}`);
  };

  const admintoggel=()=>{
setAdminShow(!adminshow);
  }

  if (adminshow) {
    return <AdminPanel goTohome={admintoggel}  />
  }

  return (
    <>
    <div className="p-4">
      {step === 0 && <HomePage goToadmin={admintoggel} patientRegister={setStep} />}
      {step === 1 && <PatientRegistration onRegister={handleRegister} />}
      {step === 2 && <Chatbot onComplete={handleChatbotComplete} />}
      {step === 3 && <HospitalAvailability hospitals={hospitals} onSelectHospital={handleSelectHospital} />}
      {step === 4 && <AppointmentScheduler onSchedule={handleSchedule} />}
    </div>
]
    
    </>
  );
}

export default App;
