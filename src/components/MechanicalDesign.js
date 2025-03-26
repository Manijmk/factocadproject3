import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImg from "../assests/images/mechanical_engineering2.jpeg";

const MechanicalDesign = () => {
    const navigate = useNavigate();
    const mechanicalDesignServices = [
        {
            title: "Detailing of Welding Fixtures and EOATs",
            description:
                "Precise detailing of welding fixtures and End of Arm Tools (EOATs) to ensure high-quality manufacturing.",
        },
        {
            title: "Detailing as per Various Standards (GM/DC)",
            description:
                "Creating designs that comply with industry standards like GM/DC for consistency and quality assurance.",
        },
        {
            title: "Detailing to Meet Customer Specifications & Manufacturing Setup",
            description:
                "Tailored detailing to align with customer-specific requirements and factory manufacturing setup.",
        },
        {
            title: "NC Components Detailing",
            description:
                "Accurate detailing of Numerical Control (NC) components for seamless machining and assembly.",
        },
        {
            title: "Part Detailing",
            description:
                "Comprehensive detailing of individual components to ensure compatibility and assembly precision.",
        },
        {
            title: "Welded Construction Detailing",
            description:
                "Designing welded constructions with precise specifications to ensure durability and structural integrity.",
        },
        {
            title: "Unit Level Layout & BOM Creation (Clamps, Locating Pins & Bases)",
            description:
                "Developing unit-level layouts and Bill of Materials (BOM) for clamps, locating pins, and base structures.",
        },
        {
            title: "Key Sheet & BOM Creation for Weld Stations",
            description:
                "Providing key sheet documentation and Bill of Materials for efficient weld station setups.",
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
                    <h1 className="text-5xl font-bold">MECHANICAL DESIGN</h1>
                    <p className="mt-2 text-lg">
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/")}>
                            Home
                        </span>{" "}
                        {" > "}
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/services/digital-manufacturing")}>
                            Digital Manufacturing
                        </span>{" "}
                        {" > "}
                        <span className="text-white font-semibold">Mechanical Design</span>
                    </p>
                </div>
            </div>


            <div className="container mx-auto pt-24 px-6 text-gray-800 bg-gray-100 pb-20">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        MECHANICAL DESIGN
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        High-precision mechanical design services ensuring accuracy, efficiency, and compliance with global standards.
                    </p>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mechanicalDesignServices.map((service, index) => (
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

export default MechanicalDesign;
