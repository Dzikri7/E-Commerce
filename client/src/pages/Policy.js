import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div style={styles.container}>
        <div className="row contactus" style={styles.row}>
          <div className="col-md-6">
            <img
              src="/images/contactus.jpeg"
              alt="Privacy Policy"
              style={styles.image}
            />
          </div>
          <div className="col-md-6" style={styles.textContainer}>
            <h1 style={styles.heading}>Privacy Policy</h1>
            <p style={styles.text}>
              Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda dengan cara yang aman dan sesuai dengan semua peraturan perlindungan data yang berlaku. Informasi yang Anda berikan kepada kami digunakan hanya untuk memproses pesanan dan meningkatkan layanan kami. Kami tidak akan membagikan informasi pribadi Anda dengan pihak ketiga tanpa persetujuan Anda, kecuali jika diwajibkan oleh hukum. Kami menggunakan teknologi keamanan terbaru untuk memastikan bahwa data Anda terlindungi dari akses yang tidak sah. Dengan menggunakan platform kami, Anda setuju dengan kebijakan privasi ini dan setuju untuk memberikan informasi yang diperlukan untuk meningkatkan pengalaman belanja Anda.
            </p>
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
  },
};

export default Policy;