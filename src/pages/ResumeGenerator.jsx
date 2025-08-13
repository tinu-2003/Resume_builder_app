import React from 'react';
import { FcDocument } from "react-icons/fc";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <section className="tools p-5 text-center">
      <h1 className="mb-5">Create a job-winning Resume in minutes</h1>

      <div className="row justify-content-center g-4">
        {/* Step 1 */}
        <div className="col-12 col-md-4">
          <div className="card shadow border-0 h-100">
            <div className="card-body">
              <div className="mb-3">
                <FcDocument size={60} />
              </div>
              <h4>Add your information</h4>
              <p>Add pre-written examples to each section</p>
              <p className="fw-bold">Step 1</p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="col-12 col-md-4">
          <div className="card shadow border-0 h-100">
            <div className="card-body">
              <div className="mb-3">
                <HiOutlineDocumentDownload size={60} color="#d32f2f" />
              </div>
              <h4>Download your Resume</h4>
              <p>Download and start applying</p>
              <p className="fw-bold">Step 2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Start Button */}
      <div className="mt-4">
        <Link to="/form">
          <button className="btn btn-primary px-4 py-2">LET'S START</button>
        </Link>
      </div>
    </section>
  );
}

export default ResumeGenerator;
