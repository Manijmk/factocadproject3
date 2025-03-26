import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImg from "../assests/images/Metalstamping.jpg";

const Stamping = () => {
    const navigate = useNavigate();
    const stampingServices = [
        {
            title: "Stamping Simulation",
            description:
                "Predict and analyze metal forming processes to ensure precision and efficiency in production.",
        },
        {
            title: "Hemming Simulation",
            description:
                "Evaluate and optimize hemming operations for high-quality assembly of automotive body panels.",
        },
        {
            title: "Stamping Tool Design",
            description:
                "Develop advanced tooling solutions for stamping operations to enhance durability and accuracy.",
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
                    <h1 className="text-5xl font-bold">METAL STAMPING</h1>
                    <p className="mt-2 text-lg">
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/")}>
                            Home
                        </span>{" "}
                        {" > "}
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/services/digital-manufacturing")}>
                            Digital Manufacturing
                        </span>{" "}
                        {" > "}
                        <span className="text-white font-semibold">Metal Stamping</span>
                    </p>
                </div>
            </div>


            <div className="container mx-auto pt-24 px-6 text-gray-800 bg-gray-100 mb-20">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">METAL STAMPING</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        FACTOCAD gives you the ability to address sheet metal formability challenges from the design of parts 
                        and tooling to part production with a single tool. Validate the forming of individual panels and even
                         help validate the assembly of closure panels (SKIN PANEL), such as doors. Develop and validate key 
                         manufacturing and joining processes, virtually, to assure production capability of parts, 
                         sub-assemblies, and assemblies for all sheet metal parts, simple to complex, conventional 
                         steel to advanced lightweight sheet metals. </p>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stampingServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stamping;
