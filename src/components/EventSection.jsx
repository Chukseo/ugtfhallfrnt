import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Import images
import evv1 from "../assets/img/evv1.jpg";
import evv2 from "../assets/img/evv2.jpg";
import evv3 from "../assets/img/evv3.jpg";

const EventSection = () => {
  return (
    <section className="event-section">
      {/* Top: three image cards */}
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card image-card border-0 shadow-none">
              <img src={evv1} alt="Waterfront venue" className="card-img-top no-outline" />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card image-card border-0 shadow-none">
              <img src={evv2} alt="Rustic hall" className="card-img-top no-outline" />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card image-card border-0 shadow-none">
              <img src={evv3} alt="Outdoor venue" className="card-img-top no-outline" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: blue background with heading + text cards */}
      <div className="stats-banner text-white py-5">
        <div className="container-fluid">
          <div className="row text-center g-3 align-items-center">
            {/* Heading text */}
            <div className="col-12 col-lg-6">
              <div className="stat-card h-100 d-flex align-items-center justify-content-center">
                <h3 className="fw-bold mb-0">
                  Expertly managed spaces for unforgettable events.
                </h3>
              </div>
            </div>
            {/* Stat cards */}
            <div className="col-12 col-sm-4 col-lg-2">
              <div className="stat-card h-100">
                <h4 className="fw-bold">40+</h4>
                <p className="mb-0">Number of Halls</p>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-2">
              <div className="stat-card h-100">
                <h4 className="fw-bold">500+</h4>
                <p className="mb-0">Events Hosted</p>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-2">
              <div className="stat-card h-100">
                <h4 className="fw-bold">70%</h4>
                <p className="mb-0">Client Retention Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .image-card {
            border: none !important;
            box-shadow: none !important;
          }
          .no-outline {
            border: none !important;
            outline: none !important;
          }
          .image-card img {
            width: 100%;
            height: 350px;
            object-fit: cover;
            border-top-left-radius: 50%;
            border-top-right-radius: 50%;
          }
          .stats-banner {
            background-color: #040b4e; /* dark blue */
            margin-top: -4.5rem; /* flush under image cards */
          }
          .stat-card {
            padding: 20px;
            border-radius: 10px;
            text-align: left;
          }
        `}
      </style>
    </section>
  );
};

export default EventSection;