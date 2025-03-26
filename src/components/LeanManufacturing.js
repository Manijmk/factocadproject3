import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImg from "../assests/images/bg-3.jpg";

const LeanManufacturing = () => {

    const navigate = useNavigate();

    const leanManufacturingServices = [
        {
            title: "MTM (Methods-Time Measurement)",
            description:
                "Optimizing work processes by analyzing time and motion to enhance efficiency.",
        },
        {
            title: "Time Study & Line Balancing",
            description:
                "Systematic time measurement and balancing of production lines for maximum efficiency.",
        },
        {
            title: "Video-Based Study & Layout Optimization",
            description:
                "Analyzing production footage to identify bottlenecks and improve workspace layout.",
        },
        {
            title: "Process Design / DFMA / Ergonomic Simulation",
            description:
                "Design for Manufacturability & Assembly (DFMA) and ergonomic validation for optimized production.",
        },
        {
            title: "Layout Design, Validation & Throughput Simulation",
            description:
                "3D modeling and simulation of factory layouts to maximize efficiency and minimize waste.",
        },
        {
            title: "Quick Line/Equipment Changeover",
            description:
                "Reducing downtime by implementing fast and efficient changeover strategies.",
        },
        {
            title: "Intelligent Industrial Automation",
            description:
                "Leveraging AI-driven automation for smarter and more adaptive production environments.",
        },
        {
            title: "Robotic Programs Optimization",
            description:
                "Enhancing robotic performance through precise programming and path optimization.",
        },
        {
            title: "3D Factory",
            description:
                "Creating a virtual factory model for real-time monitoring and efficiency analysis.",
        },
        {
            title: "2D/3D Assembly Work Instructions",
            description:
                "Developing clear and interactive assembly instructions for improved workforce training.",
        },
    ];

    return (
        <section>

            <div
                className="relative bg-cover bg-center h-120 flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${BannerImg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-center">
                    <h1 className="text-5xl font-bold">LEAN MANUFACTURING</h1>
                    <p className="mt-2 text-lg">
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/")}>
                            Home
                        </span>{" "}
                        {" > "}
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/services")}>
                            Services
                        </span>{" "}
                        {" > "}
                        <span className="text-white font-semibold">Lean Manufacturing</span>
                    </p>
                </div>
            </div>


            <div className="container mx-auto pt-24 px-6 text-gray-800 bg-gray-100 pb-20">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        LEAN MANUFACTURING
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Enhancing manufacturing efficiency through process optimization, automation, and intelligent lean solutions.
                    </p>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leanManufacturingServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeanManufacturing;
