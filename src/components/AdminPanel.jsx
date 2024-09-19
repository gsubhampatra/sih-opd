import React, { useState } from 'react'
import { 
  Calendar, 
  Package, 
  Pill, 
  Bell, 
  User,
  Search,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  LucidePenTool,
  User2Icon,
  Home
} from 'lucide-react'

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Appointments', icon: <Calendar className="w-5 h-5" /> },
    { name: 'Inventory', icon: <Package className="w-5 h-5" /> },
    { name: 'Medicines', icon: <Pill className="w-5 h-5" /> },
    { name: 'Doctors', icon: <User2Icon className="w-5 h-5" /> },
    { name: 'Tool Requests', icon: <LucidePenTool className="w-5 h-5" /> },
  ]

  return (
    <aside className="w-64 min-h-screen p-4 text-white bg-gray-800">
      <nav>
        <ul>
          {tabs.map((tab) => (
            <li key={tab.name} className="mb-2">
              <button
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center w-full p-2 rounded ${
                  activeTab === tab.name ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

const TableHeader = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((column, index) => (
        <th key={index} className="px-4 py-2 text-left">{column}</th>
      ))}
      <th className="px-4 py-2 text-left">Actions</th>
    </tr>
  </thead>
)

const TableRow = ({ data, columns }) => (
  <tr>
    {columns.map((column, index) => (
      <td key={index} className="px-4 py-2 border">{data[column]}</td>
    ))}
    <td className="px-4 py-2 border">
      <button className="mr-2 text-blue-500 hover:text-blue-700">
        <Edit className="w-5 h-5" />
      </button>
      <button className="text-red-500 hover:text-red-700">
        <Trash2 className="w-5 h-5" />
      </button>
    </td>
  </tr>
)

const AppointmentsTab = () => {
  const columns = ['id', 'patientName', 'doctorName', 'date', 'time', 'status']
  const appointments = [
    { id: 1, patientName: 'John Doe', doctorName: 'Dr. Smith', date: '2023-05-15', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patientName: 'Jane Smith', doctorName: 'Dr. Johnson', date: '2023-05-16', time: '2:30 PM', status: 'Pending' },
  ]

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Appointment Management</h2>
      <table className="w-full border-collapse">
        <TableHeader columns={columns} />
        <tbody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id} data={appointment} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const InventoryTab = () => {
  const columns = ['id', 'itemName', 'category', 'quantity', 'lastUpdated']
  const inventory = [
    { id: 1, itemName: 'Surgical Masks', category: 'PPE', quantity: 5000, lastUpdated: '2023-05-10' },
    { id: 2, itemName: 'Stethoscopes', category: 'Medical Devices', quantity: 50, lastUpdated: '2023-05-12' },
  ]

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Inventory Management</h2>
      <table className="w-full border-collapse">
        <TableHeader columns={columns} />
        <tbody>
          {inventory.map((item) => (
            <TableRow key={item.id} data={item} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const MedicinesTab = () => {
  const columns = ['id', 'name', 'category', 'stock', 'expiryDate']
  const medicines = [
    { id: 1, name: 'Paracetamol', category: 'Pain Relief', stock: 1000, expiryDate: '2024-05-01' },
    { id: 2, name: 'Amoxicillin', category: 'Antibiotic', stock: 500, expiryDate: '2023-12-31' },
  ]

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Medicine Database</h2>
      <table className="w-full border-collapse">
        <TableHeader columns={columns} />
        <tbody>
          {medicines.map((medicine) => (
            <TableRow key={medicine.id} data={medicine} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const DoctorsTab = () => {
  const columns = ['id', 'name', 'specialization', 'experience', 'contactNumber']
  const doctors = [
    { id: 1, name: 'Dr. Emily Johnson', specialization: 'Cardiology', experience: '10 years', contactNumber: '+1234567890' },
    { id: 2, name: 'Dr. Michael Chen', specialization: 'Pediatrics', experience: '8 years', contactNumber: '+1987654321' },
  ]

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Doctor Directory</h2>
      <table className="w-full border-collapse">
        <TableHeader columns={columns} />
        <tbody>
          {doctors.map((doctor) => (
            <TableRow key={doctor.id} data={doctor} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const ToolRequestsTab = () => {
  const columns = ['id', 'hospitalName', 'toolName', 'quantity', 'requestDate', 'status']
  const requests = [
    { id: 1, hospitalName: 'City General Hospital', toolName: 'Ventilator', quantity: 5, requestDate: '2023-05-14', status: 'Pending' },
    { id: 2, hospitalName: 'Riverside Medical Center', toolName: 'X-ray Machine', quantity: 1, requestDate: '2023-05-13', status: 'Approved' },
  ]

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Tool Requests</h2>
      <table className="w-full border-collapse">
        <TableHeader columns={columns} />
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              {columns.map((column, index) => (
                <td key={index} className="px-4 py-2 border">{request[column]}</td>
              ))}
              <td className="px-4 py-2 border">
                <button className="mr-2 text-green-500 hover:text-green-700">
                  <CheckCircle className="w-5 h-5" />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <XCircle className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function AdminPanel({goTohome}) {
  const [activeTab, setActiveTab] = useState('Appointments')

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Appointments':
        return <AppointmentsTab />
      case 'Inventory':
        return <InventoryTab />
      case 'Medicines':
        return <MedicinesTab />
      case 'Doctors':
        return <DoctorsTab />
      case 'Tool Requests':
        return <ToolRequestsTab />
      default:
        return <div>Select a tab</div>
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="z-10 bg-white shadow-sm">
          <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">Hospital Admin Panel</h1>
              <div className="flex items-center">
                <div className="relative mx-4">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="w-5 h-5 text-gray-400" />
                  </span>
                  <input
                    className="py-2 pl-10 pr-4 border-gray-300 rounded-md form-input focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
                <button className="p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <span className="sr-only">View notifications</span>
                  <Bell className="w-6 h-6" />
                </button>
                <button onClick={()=>goTohome()} className="p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <span className="sr-only">View notifications</span>
                  <Home className="w-6 h-6" />
                </button>
                <div className="relative ml-3">
                  <div>
                    <button className="flex items-center max-w-xs bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu" aria-haspopup="true">
                      <span className="sr-only">Open user menu</span>
                      <User className="w-8 h-8 rounded-full" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {renderActiveTab()}
          </div>
        </main>
      </div>
    </div>
  )
}