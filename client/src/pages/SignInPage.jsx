import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignInPage() {
    const [formData, setFormData]=useState({ email: '', password: '' })
    const navigate=useNavigate();
return (
    <div className="min-h-screen flex items-center justify-center" style={{background: `linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)`}}>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign In</h1>
            <form  className="space-y-6">
            <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            />
            </div>
            <div>
            <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1B4965] hover:bg-[#2c5f7e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Sign In
            </button>
            </div>
            </form>
            <p className="text-center text-sm text-gray-600 mt-6">Don't have an account?{' '}
                <Link to={"/auth/signup"} className="text-indigo-600 hover:text-indigo-500">
                Sign Up
                </Link>
            </p>
        </div>
    </div>
)
}

export default SignInPage