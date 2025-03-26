import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImg from "../assests/images/paintshop1.jpg";

const PaintShop = () => {
    const navigate = useNavigate();

    const paintShopServices = [
        {
            title: "Paint Robotics Simulation",
            description:
                "Advanced robotic simulation for automated paint application, ensuring precision and efficiency.",
        },
        {
            title: "Paint Shop Simultaneous Engineering Study",
            description:
                "Comprehensive analysis of paint shop processes to enhance productivity and optimize workflow.",
        },
        {
            title: "Paint Booth Modeling",
            description:
                "Detailed 3D modeling of paint booths to simulate and refine airflow, paint application, and curing processes.",
        },
        {
            title: "Paint Booth Detailing",
            description:
                "Technical detailing of paint booths, including structural design, airflow control, and safety compliance.",
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
                    <h1 className="text-5xl font-bold">PAINT SHOP</h1>
                    <p className="mt-2 text-lg">
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/")}>
                            Home
                        </span>{" "}
                        {" > "}
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/services/digital-manufacturing")}>
                            Digital Manufacturing
                        </span>{" "}
                        {" > "}
                        <span className="text-white font-semibold">Paint Shop</span>
                    </p>
                </div>
            </div>


            <div className="container mx-auto pt-24 px-6 text-gray-800 bg-gray-100 pb-20">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">PAINT SHOP</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Cutting-edge solutions for paint shop engineering, simulation, and optimization, ensuring high-quality finishes and efficient operations.
                    </p>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paintShopServices.map((service, index) => (
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

export default PaintShop;
