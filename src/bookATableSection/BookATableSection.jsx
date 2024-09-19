// -- REACT
import { useState } from "react";

// -- STYLE
import "./bookATableSection.css";

export default function BookATable() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    people: "1",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted!");
    console.log(formData);
  };

  return (
    <div className="bookATableContainer">
      <div className="videoBookATable">
        <button className="playBookATable">PLAY</button>
      </div>
      <div className="formContainer">
        <div>
          <div>
            <p>Reservation</p>
            <h2>Book A Table Online</h2>
          </div>
          <div>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    required
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

              <div className="form-group">
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Special Request"
                />
              </div>

              <button type="submit" className="bookATable" style={{width: '100%', marginTop: '20px'}}>
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
