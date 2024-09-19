import React from 'react'
import { BarChart, Hospital, Calendar, Users, Bed } from 'lucide-react'

const ChartPlaceholder = ({ title }) => (
    <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <div className="flex items-center justify-center h-40 bg-gray-200">
            <BarChart className="w-12 h-12 text-gray-400" />
        </div>
    </div>
)

const StatCard = ({ icon, title, value, change }) => (
    <div className="p-4 bg-white rounded-lg shadow">
        <div className="flex items-center mb-2">
            {icon}
            <h3 className="ml-2 text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-3xl font-bold">{value}</p>
        <p className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {change} from last month
        </p>
    </div>
)

export default function HomePage({ patientRegister, goToadmin }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <nav className="container px-4 py-4 mx-auto">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-blue-600">CityHealth Hub</h1>
                        <ul className="flex space-x-4">
                            <li><button onClick={() => goToadmin()} className="text-gray-600 hover:text-blue-600">Dashboard</button></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Hospitals</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">OPD Registration</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Resources</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="container px-4 py-8 mx-auto">
                <h2 className="mb-6 text-2xl font-semibold">City-wide Hospital Dashboard</h2>

                <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard icon={<Hospital className="w-6 h-6 text-blue-500" />} title="Hospitals" value="42" change="+2" />
                    <StatCard icon={<Calendar className="w-6 h-6 text-green-500" />} title="Appointments" value="1,284" change="+15%" />
                    <StatCard icon={<Users className="w-6 h-6 text-yellow-500" />} title="Patients" value="8,572" change="+5%" />
                    <StatCard icon={<Bed className="w-6 h-6 text-red-500" />} title="Available Beds" value="523" change="-3%" />
                </div>

                <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
                    <ChartPlaceholder title="Hospital Occupancy Rates" />
                    <ChartPlaceholder title="Daily Appointments" />
                </div>

                <section className="p-6 mb-8 bg-white rounded-lg shadow">
                    <h3 className="mb-4 text-xl font-semibold">Shared Resources</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="p-4 bg-blue-100 rounded">
                            <h4 className="font-semibold">Ambulances</h4>
                            <p className="text-2xl font-bold">24 / 30</p>
                            <p className="text-sm text-gray-600">Currently Available</p>
                        </div>
                        <div className="p-4 bg-green-100 rounded">
                            <h4 className="font-semibold">Ventilators</h4>
                            <p className="text-2xl font-bold">45 / 50</p>
                            <p className="text-sm text-gray-600">Currently Available</p>
                        </div>
                        <div className="p-4 bg-yellow-100 rounded">
                            <h4 className="font-semibold">ICU Beds</h4>
                            <p className="text-2xl font-bold">18 / 100</p>
                            <p className="text-sm text-gray-600">Currently Available</p>
                        </div>
                    </div>
                </section>

                <section className="p-6 bg-white rounded-lg shadow">
                    <h3 className="mb-4 text-xl font-semibold">Quick Actions</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <button onClick={() => patientRegister(1)} className="px-4 py-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600">
                            Register New Patient
                        </button>
                        <button className="px-4 py-2 text-white transition-colors bg-green-500 rounded hover:bg-green-600">
                            Schedule Appointment
                        </button>
                        <button className="px-4 py-2 text-white transition-colors bg-yellow-500 rounded hover:bg-yellow-600">
                            Check Bed Availability
                        </button>
                        <button className="px-4 py-2 text-white transition-colors bg-red-500 rounded hover:bg-red-600">
                            Emergency Services
                        </button>
                    </div>
                </section>
            </main>

            <footer className="py-4 mt-8 text-white bg-gray-800">
                <div className="container px-4 mx-auto text-center">
                    <p>&copy; 2023 CityHealth Hub. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}