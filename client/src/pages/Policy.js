import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="container py-5 mt-4">
        <div className="row justify-content-center align-items-start ">
          <div className="card shadow border-0 rounded-4 bg-dark text-white p-5 ">
            <h2 className="mb-4 text-center text-primary">Privacy Policy</h2>
            <p>
              At Ecomm App, your privacy matters deeply. We commit to protecting
              and respecting your personal information while you use our
              services.
            </p>
            <h5 className="mt-4">Information We Collect</h5>
            <p>
              We collect data such as your name, email, phone number, address,
              and payment details securely to provide a seamless shopping
              experience and efficient order processing.
            </p>
            <h5 className="mt-4">Use of Your Information</h5>
            <p>
              Your data is used to process orders, communicate updates,
              personalize your experience, provide support, and comply with
              applicable laws. We do not sell your personal data.
            </p>
            <h5 className="mt-4">Security Measures</h5>
            <p>
              We employ advanced security protocols to safeguard your
              information from unauthorized access and breaches.
            </p>
            <h5 className="mt-4">Your Rights</h5>
            <p>
              You may access, update, or request deletion of your data any time.
              For inquiries, contact privacy@ecommerceapp.com.
            </p>
            <h5 className="mt-4">Cookies & Tracking</h5>
            <p>
              Cookies help us enhance your browsing experience and analyze site
              usage. You can manage cookie preferences in your browser settings.
            </p>
            <h5 className="mt-4">Policy Updates</h5>
            <p>
              We may revise this privacy policy periodically. Updates will be
              posted here with the latest effective date.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
