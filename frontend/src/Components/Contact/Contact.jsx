import React, { useState } from "react";
import "./Contact.css";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const SubmitData = () => {
    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return data(message.error);
        } else {
          return console.log("Signed in Successfully");
        }
      });
  };

  return (
    <div>
      <div
        className="mb-3"
        style={{
          flexDirection: "column",
          marginTop: "34px",
          marginLeft: "22%",
        }}
      >
        <span style={{ display: "flex" }}>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name :
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name of Candidate"
          />
        </span>
        <span style={{ display: "flex", marginTop: "34px" }}>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email :
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email address"
          />
        </span>
        <span style={{ display: "flex", marginTop: "34px" }}>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Mob :
          </label>
          <input
            type="text"
            name="mobile"
            className="form-control"
            id="mobile"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            placeholder="Mobile Number"
          />
        </span>
      </div>
      <div className="mb-3" style={{ marginLeft: "19%" }}>
        <span style={{ display: "flex", marginTop: "34px" }}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message :
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            rows="3"
            placeholder="Your Message"
          ></textarea>
        </span>
      </div>
      <div
        className="d-grid gap-2"
        style={{ width: "40%", marginLeft: "30%", marginTop: "85px" }}
      >
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => SubmitData()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
