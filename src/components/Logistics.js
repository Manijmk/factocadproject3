import React from "react";
import { useNavigate } from "react-router-dom";
import LogisticsImg from "../assests/images/LogisticsEngineering2.jpg";

const Logistics = () => {
    const navigate = useNavigate();
    const logisticsServices = [
        {
            title: "General Assembly Process Engineering (GAPE)",
            description:
                "Optimize assembly processes to enhance efficiency, reduce cycle time, and ensure seamless production flow.",
        },
        {
            title: "Warehouse and Inventory Management",
            description:
                "Implement smart inventory strategies and warehouse layouts for streamlined material handling and storage.",
        },
        {
            title: "Methods Engineering",
            description:
                "Develop efficient work methods to maximize productivity and minimize waste in manufacturing operations.",
        },
        {
            title: "Material Flow Diagram",
            description:
                "Visualize and analyze material movement to optimize logistics and improve supply chain efficiency.",
        },
        {
            title: "Discrete Event Simulation (Throughput Analysis)",
            description:
                "Use simulation techniques to analyze production throughput and identify bottlenecks for process optimization.",
        },
    ];

    return (
        <section>
            <div
                className="relative bg-cover bg-center h-120 flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${LogisticsImg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-center">
                    <h1 className="text-5xl font-bold">LOGISTICS ENGINEERING</h1>
                    <p className="mt-2 text-lg">
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/")}>
                            Home
                        </span>{" "}
                        {" > "}
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/services/digital-manufacturing")}>
                            Digital Manufacturing
                        </span>{" "}
                        {" > "}
                        <span className="text-white font-semibold">Logistics Engineering</span>
                    </p>
                </div>
            </div>


            <div className="container mx-auto pt-24 px-6 text-gray-800 bg-gray-100 pb-20">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        LOGISTICS ENGINEERING
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Enhancing manufacturing efficiency through optimized material flow, process planning, and simulation-driven analysis.
                    </p>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {logisticsServices.map((service, index) => (
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

export default Logistics;
