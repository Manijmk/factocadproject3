import React from "react";
import CareerImg from "../assests/images/staffing3.png"

const Career = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Join FACTOCAD</h2>
          <p className="text-lg text-gray-700 mb-4">
            At <span className="text-blue-600 font-semibold">FACTOCAD</span>, we are driven by innovation and excellence in engineering.  
            We take pride in creating a dynamic and collaborative environment where engineers can thrive.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            If you are an experienced and certified engineer with a passion for cutting-edge technology,  
            this is your opportunity to be a part of a company that values your expertise.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Send your CV to{" "}
            <a href="mailto:hr@factocad-robotics.com" className="text-blue-600 font-semibold hover:underline">
              hr@factocad-robotics.com
            </a>{" "}
            and take the next step in your career with us.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={CareerImg} 
            alt="Join Our Team" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Career;
