import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Ecomm App"}>
      <div className="container py-5">
        <div className="row justify-content-center align-items-center min-vh-70">
          <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <div className="shadow rounded-4 overflow-hidden">
              <img
                src="/images/about.jpeg"
                alt="about us"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  maxHeight: "400px",
                }}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="card shadow border-0 rounded-4 bg-dark text-white">
              <div className="card-body p-4">
                <h2 className="mb-3 text-primary text-center">
                  About Our Store
                </h2>
                <p className="fs-5 text-secondary text-justify mb-4 text-">
                  Welcome to Ecomm App, your one-stop destination for quality
                  products at unbeatable prices. We are committed to delivering
                  a seamless shopping experience, whether browsing on desktop or
                  mobile. Our curated selection covers everything from
                  electronics and fashion to everyday essentials — ensuring you
                  find exactly what you need.
                </p>
                <ul className="list-unstyled fs-6 mb-4">
                  <li className="mb-2">✓ Fast and secure checkout process</li>
                  <li className="mb-2">✓ 24/7 customer support</li>
                  <li className="mb-2">✓ Exclusive offers and discounts</li>
                  <li className="mb-2">✓ Reliable doorstep delivery</li>
                </ul>
                <div className="text-center">
                  <a href="/" className="btn btn-primary rounded-pill px-4">
                    Start Shopping
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

export default About;
