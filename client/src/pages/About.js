import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-center mt-2">
          Selamat datang di platform eCommerce kami, di mana kami menawarkan berbagai macam produk dengan kenyamanan dan efisiensi teknologi modern, yang didukung oleh MERN stack. Kami berkomitmen untuk memberikan pengalaman belanja online yang aman, mudah, dan menyenangkan bagi semua pelanggan kami. Tim kami terdiri dari para profesional yang berdedikasi untuk memastikan bahwa setiap transaksi berjalan lancar dan setiap produk yang kami jual memenuhi standar kualitas tinggi. Kami percaya bahwa belanja online haruslah praktis dan menyenangkan, dan kami selalu berusaha untuk meningkatkan layanan kami untuk memenuhi kebutuhan dan harapan Anda.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;