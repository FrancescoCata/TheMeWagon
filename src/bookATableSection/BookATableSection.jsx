import { useState, useEffect } from "react";
import {
  createBooking,
  getBookings,
  deleteBooking,
  updateBooking,
  findBooking,
} from "../services/OrdersService";

export default function BookATable() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    people: "1",
    note: "",
  });

  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBookingId, setCurrentBookingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedBooking, setSearchedBooking] = useState(null);

  // Fetch bookings from API on mount
  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await getBookings();
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    }

    fetchBookings();
  }, []);

  useEffect(() => {
    renderBookings();
  }, [bookings]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission to create a new booking
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBooking = {
      name: formData.name,
      email: formData.email,
      num_people: Number(formData.people),
      booking_date: formData.date,
      notes: formData.note,
    };

    try {
      await createBooking(newBooking);
      const updatedBookings = await getBookings();
      setBookings(updatedBookings.data);

      setFormData({
        name: "",
        email: "",
        date: "",
        people: "1",
        note: "",
      });
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  // Handle delete booking
  const handleDelete = async (id) => {
    try {
      await deleteBooking(id);
      const updatedBookings = await getBookings();
      setBookings(updatedBookings.data);
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  // Open modal to update booking
  const handleUpdate = (id) => {
    const bookingToEdit = bookings.find((booking) => booking.id === id);
    if (bookingToEdit) {
      setCurrentBookingId(id);
      setIsModalOpen(true);
    }
  };

  // Handle search input and fetch booking by ID
  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value) {
      try {
        const foundBooking = await findBooking(value);
        setSearchedBooking(foundBooking.data); 
      } catch (error) {
        console.error("Error searching booking:", error);
        setSearchedBooking(null);
      }
    } else {
      setSearchedBooking(null); 
    }
  };

  // Confirm update booking
  const confirmUpdate = async () => {
    try {
      const updatedBooking = {
        name: formData.name,
        email: formData.email,
        num_people: Number(formData.people),
        booking_date: formData.date,
        notes: formData.note,
      };
      await updateBooking(currentBookingId, updatedBooking);
      const updatedBookings = await getBookings();
      setBookings(updatedBookings.data);
      setIsModalOpen(false);
      setCurrentBookingId(null);
      setFormData({
        name: "",
        email: "",
        date: "",
        people: "1",
        note: "",
      });
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  const renderBookings = () => {
    // Render only the searched booking if a search query is present
    if (searchQuery && searchedBooking) {
      return (
        <div
          key={searchedBooking.id}
          className="p-4 bg-white shadow-lg rounded-lg flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {searchedBooking.name}
            </h3>
            <p className="mb-1">Email: {searchedBooking.email}</p>
            <p className="mb-1">People: {searchedBooking.num_people}</p>
            <p className="mb-1">Date: {searchedBooking.booking_date}</p>
            <p className="mb-2">Notes: {searchedBooking.notes}</p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => handleUpdate(searchedBooking.id)}
              className="bg-[#feaf39] text-white px-4 py-2 rounded-lg"
            >
              Modify
            </button>
            <button
              onClick={() => handleDelete(searchedBooking.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      );
    }
    if (bookings.length > 0) {
      return bookings.map((booking) => {
        return (
          <div
            key={booking.id}
            className="p-4 bg-white shadow-lg rounded-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{booking.name}</h3>
              <p className="mb-1">Email: {booking.email}</p>
              <p className="mb-1">People: {booking.num_people}</p>
              <p className="mb-1">Date: {booking.booking_date}</p>
              <p className="mb-2">Notes: {booking.notes}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleUpdate(booking.id)}
                className="bg-[#feaf39] text-white px-4 py-2 rounded-lg"
              >
                Modify
              </button>
              <button
                onClick={() => handleDelete(booking.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col md:flex-row">
        {/* Left Section (Video Background) */}
        <div
          className="relative w-full md:w-1/2 min-h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.1), rgba(15, 23, 43, 0.1)), url('https://themewagon.github.io/restoran/img/video.jpg')`,
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <span
              className="w-20 h-20 absolute rounded-full bg-[#feaf39] opacity-90 animate-ping"
              style={{ animationDuration: "2s" }}
            ></span>
            <button className="relative bg-[#feaf39] text-[#0f172b] w-24 h-24 rounded-full flex items-center justify-center z-10">
              <i className="fa fa-play fa-2x"></i>
            </button>
          </div>
        </div>

        {/* Right Section (Form with Dark Background) */}
        <div className="w-full md:w-1/2 bg-[#0f172b] text-white flex justify-center items-center py-6">
          <div className="w-11/12 md:w-3/4">
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <p className="text-[#feaf39] font-medium pr-2 font-pacifico text-xl">
                  Reservation
                </p>
                <div className="w-12 h-[2px] bg-[#feaf39]"></div>
              </div>
              <h2 className="text-3xl font-semibold">Book A Table Online</h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name and Email */}
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                <div className="flex-grow">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                  />
                </div>
                <div className="flex-grow">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                  />
                </div>
              </div>

              {/* Date and People */}
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                <div className="flex-grow w-full md:w-6/12">
                  <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                  />
                </div>
                <div className="flex-grow w-full md:w-6/12">
                  <select
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    required
                    className="w-full h-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                  </select>
                </div>
              </div>

              {/* Special Request */}
              <div className="flex-grow">
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Special Request"
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#feaf39] text-white py-3 text-lg transition-colors duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Modify Booking</h2>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                <div className="flex-grow">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                  />
                </div>
                <div className="flex-grow">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                <div className="flex-grow w-full md:w-6/12">
                  <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                  />
                </div>
                <div className="flex-grow w-full md:w-6/12">
                  <select
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    required
                    className="w-full h-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                  </select>
                </div>
              </div>

              <div className="flex-grow">
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Special Request"
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmUpdate}
                  className="bg-[#feaf39] text-white py-2 px-4 rounded-lg"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* My Bookings Section */}
      <div className="w-full bg-[#f8f8f8] p-6 mt-8">
        <div className="flex w-full justify-between">
          <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
          <input
            type="text"
            placeholder="Search booking by ID"
            onChange={handleSearch}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderBookings()}
        </div>
      </div>
    </div>
  );
}
