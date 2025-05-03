import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        dateOfBirth: ''
    });

    const navigate= useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
  return (
    <div className="min-h-screen flex items-center justify-center" style={{
        background: `linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)`}}>
            <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Account</h2>
            <form className="space-y-6">
                <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                type="text"
                name="name"
                
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1b4965 focus:border-1b4965 sm:text-sm"
                required
                />
                </div>
                <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1b4965 focus:border-1b4965 sm:text-sm"
                required
                />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1b4965 focus:border-1b4965 sm:text-sm"
                required
                />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
                type="text"
                name="address"
                placeholder="Enter your address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1b4965 focus:border-1b4965 sm:text-sm"
                required
                />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
                type="text"
                name="phone"
            
                placeholder="Enter your phone number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1b4965 focus:border-1b4965 sm:text-sm"
                required
                />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
                type="date"
                name="dateOfBirth"
                
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1b4965 focus:border-1b4965 sm:text-sm"
                required
                />
            </div>
            <div>
            <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1b4965] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-1b4965"
                >
                Sign Up
                </button>
            </div>
            </form>
            </div>
        </div>
)
}

export default SignUpPage