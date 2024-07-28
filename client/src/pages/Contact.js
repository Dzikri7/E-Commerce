import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div style={styles.container}>
        <div className="row contactus" style={styles.row}>
          <div className="col-md-6">
            <img
              src="/images/contactus.jpeg"
              alt="Contact us"
              style={styles.image}
            />
          </div>
          <div className="col-md-6" style={styles.textContainer}>
            <h1 style={styles.heading}>CONTACT US</h1>
            <p style={styles.text}>
              Any query and info about product feel free to call anytime, we are
              available 24x7.
            </p>
            <div style={styles.contactInfo}>
              <p style={styles.contactItem}>
                <BiMailSend style={styles.icon} /> izzatulhaq8@gmail.com
              </p>
              <p style={styles.contactItem}>
                <BiPhoneCall style={styles.icon} /> 085720637072
              </p>
              <p style={styles.contactItem}>
                <BiSupport style={styles.icon} /> 085724361416 (Business)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
  },
  row: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    backgroundColor: "#343a40",
    color: "#fff",
    padding: "10px",
    borderRadius: "10px",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    textAlign: "justify",
    marginBottom: "20px",
  },
  contactInfo: {
    fontSize: "1.2rem",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  icon: {
    marginRight: "10px",
    color: "#007bff",
    fontSize: "1.5rem",
  },
};

export default Contact;