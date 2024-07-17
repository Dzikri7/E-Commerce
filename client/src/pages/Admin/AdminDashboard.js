import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "../../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-4 shadow-lg rounded-3 border-0 mx-auto">
              <div className="card-header bg-gradient-primary text-white text-center rounded-top">
                <h3>Admin Profile</h3>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-4 text-muted">
                    <strong>Name :</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-dark mb-0">{auth?.user?.name}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4 text-muted">
                    <strong>Email :</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-dark mb-0">{auth?.user?.email}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4 text-muted">
                    <strong>Contact :</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-dark mb-0">{auth?.user?.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
