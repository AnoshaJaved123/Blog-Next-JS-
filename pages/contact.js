import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(name,email,phone,message)

    const data = { name, email, phone, message };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("data submited");
        setName("");
        setemail("");
        setmessage("");
        setphone("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <div className={styles.main}>
      <img src="/contact.jpg" alt="contact" className={styles.img} width={300} height={300} />
      <form id="contact_form" >
        <div className={styles.rows}>
          <label className="required">Your name:</label>
          <br />
          <input
            id="name"
            className="input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            type="text"
            size={30}
          />
          <br />
        </div>
        <div className={styles.rows}>
          <label className="required" htmlFor="email">
            Your email:
          </label>
          <br />
          <input
            id="email"
            className="input"
            value={email}
            onChange={(e) => {
              setemail(e.target.email);
            }}
            name="email"
            type="text"
            size={30}
          />
          <br />
        </div>
        <div className={styles.rows}>
          <label className="required" htmlFor="name">
            Your Phone:
          </label>
          <br />
          <input
            id="name"
            className="input"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
            name="phone"
            type="text"
            size={30}
          />
          <br />
        </div>
        <div className={styles.rows}>
          <label className="required" htmlFor="message">
            Your message:
          </label>
          <br />
          <textarea
            id="message"
            className="input"
            value={message}
            onChange={(e) => {
              setmessage(e.target.value);
            }}
            name="message"
            rows={7}
            cols={30}
          />
          <br />
        </div>
        <input onClick={handlesubmit} id="submit_button" type="submit" />
      </form>
      </div>
    </div>
  );
};

export default Contact;
