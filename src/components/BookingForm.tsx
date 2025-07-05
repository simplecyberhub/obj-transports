'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    passengers: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or booking system
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 space-y-6">
      {submitted ? (
        <div className="text-green-600 font-semibold text-center">Your booking has been received! We will contact you soon.</div>
      ) : (
        <>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="pickup" className="block text-gray-700 font-medium mb-2">Pickup Location</label>
            <input
              type="text"
              id="pickup"
              name="pickup"
              value={form.pickup}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">Destination</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={form.destination}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="passengers" className="block text-gray-700 font-medium mb-2">Number of Passengers</label>
            <input
              type="number"
              id="passengers"
              name="passengers"
              value={form.passengers}
              onChange={handleChange}
              min={1}
              max={50}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Book Ride
          </button>
        </>
      )}
    </form>
  );
}
