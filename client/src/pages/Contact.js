import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="container py-5">
        <div className="row justify-content-center align-items-center min-vh-70">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <img
                src="/images/contactus.jpeg"
                alt="Contact us"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  minHeight: "320px",
                  maxHeight: "400px",
                }}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-5 mt-4">
            <div className="card shadow border-0 rounded-4 bg-dark text-white">
              <div className="card-body p-4">
                <h2 className="mb-3 text-center">Contact Us</h2>
                <p className="mb-4 fs-5 text-light text-center">
                  Have a question or need help with your order? Our support team
                  is available 24/7 to assist with all your ecommerce queries.
                </p>
                <div className="mb-3 d-flex align-items-center fs-5">
                  <BiMailSend className="me-2 fs-3 text-info" />
                  <a
                    href="mailto:help@ecommerceapp.com"
                    className="text-info text-decoration-none"
                  >
                    help@ecommerceapp.com
                  </a>
                </div>
                <div className="mb-3 d-flex align-items-center fs-5">
                  <BiPhoneCall className="me-2 fs-3 text-success" />
                  <span>012-3456789</span>
                </div>
                <div className="mb-4 d-flex align-items-center fs-5">
                  <BiSupport className="me-2 fs-3 text-warning" />
                  <span>1800-0000-0000 (toll free)</span>
                </div>
                <div className="text-center">
                  <a
                    href="/"
                    className="btn btn-outline-light rounded-pill px-4"
                  >
                    Back to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
