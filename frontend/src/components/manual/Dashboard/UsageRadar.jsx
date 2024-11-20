import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

export const UsageRadar = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState('');
  const token = localStorage.getItem('authToken');
 

  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const { name, email, phone, businessName, businessType, message } = formData;
    if (!name || !email || !phone || !businessName || !businessType || !message) {
      setError('Please fill in all the fields.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(null);
    try {
      
      const response = await axios.post(
        'http://localhost:5000/api/contact',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
        }
      );

      if (response.status === 200) {
        setSuccess('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          businessType: '',
          message: '',
        });
      }
    }catch (err) {
      console.error('Error:', err);
      setError('There was an error submitting your form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-span-4 overflow-hidden rounded-lg border border-stone-300 shadow-lg bg-white custom-border-line">
      <div className="p-4">
        <h1 className="text-2xl text-[#3c50e0] font-semibold">Get in Touch with us!</h1>
      </div>
      <div className="p-4">
        
        {success && <div className="text-green-600 mb-4">{success}</div>}
        {error && <div className="text-red-600 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-base font-medium text-gray-700">Phone no</label>
            <input
              type="text"
              id="phone"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Phone no"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Business Name Field */}
          <div>
            <label htmlFor="businessName" className="block text-base font-medium text-gray-700">Business Name</label>
            <input
              type="text"
              id="businessName"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>

          {/* Business Type Field */}
          <div>
            <label htmlFor="businessType" className="block text-base font-medium text-gray-700">Business Type</label>
            <input
              type="text"
              id="businessType"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Business Type"
              value={formData.businessType}
              onChange={handleChange}
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-base font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};
