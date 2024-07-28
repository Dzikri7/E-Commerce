import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
      <div style={styles.container}>
        <div className="row contactus" style={styles.row}>
          <div className="col-md-6">
            <img
              src="/images/about.jpeg"
              alt="About us"
              style={styles.image}
            />
          </div>
          <div className="col-md-6" style={styles.textContainer}>
            <h2 style={styles.heading}>Tentang Kami</h2>
            <p style={styles.text}>
              Selamat datang di platform eCommerce kami, di mana kami menawarkan berbagai macam produk dengan kenyamanan dan efisiensi teknologi modern, yang didukung oleh MERN stack. Kami berkomitmen untuk memberikan pengalaman belanja online yang aman, mudah, dan menyenangkan bagi semua pelanggan kami. Tim kami terdiri dari para profesional yang berdedikasi untuk memastikan bahwa setiap transaksi berjalan lancar dan setiap produk yang kami jual memenuhi standar kualitas tinggi. Kami percaya bahwa belanja online haruslah praktis dan menyenangkan, dan kami selalu berusaha untuk meningkatkan layanan kami untuk memenuhi kebutuhan dan harapan Anda.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .row {
          display: flex;
          align-items: center;
          margin: 0;
          padding: 40px 20px;
          background: linear-gradient(to right, #f8f9fa, #e9ecef);
        }
      `}</style>
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
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    textAlign: "justify",
  },
};

export default About;