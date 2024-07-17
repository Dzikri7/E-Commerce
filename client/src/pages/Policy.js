import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="text-center col-md-4">
          <p>Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda dengan cara yang aman dan sesuai dengan semua peraturan perlindungan data yang berlaku. Informasi yang Anda berikan kepada kami digunakan hanya untuk memproses pesanan dan meningkatkan layanan kami. Kami tidak akan membagikan informasi pribadi Anda dengan pihak ketiga tanpa persetujuan Anda, kecuali jika diwajibkan oleh hukum. Kami menggunakan teknologi keamanan terbaru untuk memastikan bahwa data Anda terlindungi dari akses yang tidak sah. Dengan menggunakan platform kami, Anda setuju dengan kebijakan privasi ini dan setuju untuk memberikan informasi yang diperlukan untuk meningkatkan pengalaman belanja Anda.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;