import { useNavigate } from "react-router-dom";
import StaffingImg from "../assests/images/staffing-2.jpg"
import StaffingImg2 from "../assests/images/staffing-1.jpg"

const Staffing = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full">
            {/* Banner Section */}
            <div
                className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${StaffingImg2})` }} // Replace with your actual image path
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-center">
                    <h1 className="text-5xl font-bold">Staffing & Consulting</h1>
                    <p className="mt-2 text-lg">
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/")}>
                            Home
                        </span>{" "}
                        {" > "}
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/services")}>
                            Services
                        </span>{" "}
                        {" > "}
                        <span className="text-white font-semibold">Staffing & Consulting</span>
                    </p>
                </div>
            </div>

            {/* Introduction Section - Light Gray Background */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Staffing & Consulting</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our engineers are experts in high-end industrial software and available to support
                            customer project needs both onsite and offshore. We are well-versed with various OEM
                            standards using different software. We constantly upgrade team skill sets and create
                            resources of well-trained engineers. We listen to the challenges of our customers and
                            place the right engineers in the right positions.
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                        <img src={StaffingImg2 } alt="Staffing Overview" className="w-full max-w-md rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>

           

            {/* Process Steps Section - White Background */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Process</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Recruit Engineers", desc: "Recruit fresh engineers as per client needs (Tier-2 & Tier-3 colleges)." },
                            { title: "Training", desc: "Train engineers based on client requirements in soft skills and technical domains." },
                            { title: "Evaluation", desc: "Evaluate and certify the fitness and competency of candidates." },
                            { title: "Placement", desc: "Place engineers for full-time or contract roles based on business needs." }
                        ].map((step, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Software Expertise Section - Light Blue Background */}
            <div className="bg-blue-50 py-16">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Software Expertise</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Robcad",
                            "Delmia V5",
                            "Process Simulate",
                            "Process Designer",
                            "Roboguide",
                            "Robotstudio",
                            "CATIA V5",
                            "UGNX",
                            "Microstation",
                            "Plant Simulation",
                            "Stamping Simulation"
                        ].map((software, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                                <span className="text-gray-800 font-medium">{software}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staffing;
