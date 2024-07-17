import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-4 shadow-lg rounded-3 border-0 mx-auto">
              <div className="card-header bg-gradient-primary text-white text-center rounded-top">
                <h3>User Profile</h3>
              </div>
              <div className="card-body">
                {[
                  { label: "Name", value: auth?.user?.name },
                  { label: "Email", value: auth?.user?.email },
                  { label: "Phone", value: auth?.user?.phone },
                  { label: "Address", value: auth?.user?.address },
                ].map((item, index) => (
                  <div className="row mb-3" key={index}>
                    <div className="col-sm-4 text-muted">
                      <strong>{item.label} :</strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="text-dark mb-0">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-gradient-primary {
          background: linear-gradient(90deg, rgba(33, 150, 243, 1) 0%, rgba(0, 188, 212, 1) 100%);
        }
        .shadow-lg {
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
        }
        .rounded-3 {
          border-radius: 1rem !important;
        }
        .rounded-top {
          border-top-left-radius: 1rem !important;
          border-top-right-radius: 1rem !important;
        }
        .dashboard .card {
          margin: auto;
        }
      `}</style>
    </Layout>
  );
};

export default Dashboard;
