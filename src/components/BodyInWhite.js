import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import './BodyInWhite.css';
import "aos/dist/aos.css";
import BannerImg from '../assests/images/BodyInWhite.png'
import ProcessPlanningImg from '../assests/images/process-planning.jpg'
import ToolingDesignImg from '../assests/images/ToolingDesign1.png'
import RobotSimulationImg from '../assests/images/robot-simulation.jpg'
import DraftingDetailingImg from '../assests/images/Drafting1.png'
import DigitalFactoryDesignImg from '../assests/images/DigitalFactoryLayout1.png'
import RobotingProgramming from '../assests/images/bg-4.png'
import TechnicalDocumentationImg from '../assests/images/technical-documentation.png'


const BodyInWhite = () => {

    const bodyInWhiteData = [
        {
            id: 1,
            title: "Process Planning",
            image: ProcessPlanningImg, // Replace with actual image path
            color: "from-gray-900 to-gray-700",
            content: [
                "Production Volume − Takt Time Calculations",
                "Car Part build & station allotted study",
                "Part Study − Part Build ups",
                "Weld Points Study",
                // "Weld Process Definition",
                "Weld Gun Selections (pneumatic)",
                "System Layouts − Conceptual Plant Layout",
                "Layout Planning - Clamp sequence",
                "Clamping Plans - Takt and MTM study",
                "Methods Time Measurement (MTM) analysis",
                "Line balancing",
                // "Ergo Study",
                "Material flow simulation using EM-Plant",
                // "Documentation of the Process"
            ]
        },
        {
            id: 2,
            title: "Tooling Design",
            image: ToolingDesignImg,
            color: "from-gray-800 to-gray-600",
            content: [
                "Production Tooling",
                "Gripper Design",
                "Material Handling End",
                "Low Cost Automation",
                "Geo- Fixtures",
                "Re-Spot Fixtures",
                "Material Handling Grippers",
                "Process & Geo Grippers",
                "Prototype Fixtures",
                "Checking Fixtures",
                "MIG/MAG Welding Fixtures",
                // "Put-Down Stand",
                // "Buffer Stand",
                "Passing Tables",
                "Conveyor Tooling",
                "Gun / Gripper Docking Stand"
            ]
        },
        {
            id: 3,
            title: "Robot Simulation",
            image: RobotSimulationImg,
            color: "from-gray-700 to-gray-500",
            content: [
                "Pre-engineering Work cell",
                "Parts Placement and Part Orientation",
                "Reachability of Robots check according to Layout",
                "Gripper Validation Fine-tuning of the Placement",
                "Weld Point Segregation",
                "Selected Weld Gun Study",
                "Weld gun search & collision analysis",
                "Fixture Validation, Tooling & Gun Kinematics",
                "Kinematics for tools, and weld gun",
                "Weld gun & tool validation",
                "Robot Payload Checks",
                "Path Creation & Optimization",
                // "Assigning attributes",
                "I/O- signaling, Sequence of Operation",
                // "Layout finalization",
                "Cycle Time & Off-Line Program (OLP)"
            ]
        },
        {
            id: 4,
            title: "Drafting & Detailing",
            image: DraftingDetailingImg,
            color: "from-gray-600 to-gray-400",
            content: [
                "Detailed Manufacturing Drawings",
                "Bill of materials",
                "Tooling Layout",
                "Flame cut drawings",
                "Payload and Buyoff sheets",
                "Control sheet creation"
            ]
        },
        {
            id: 5,
            title: "3D Digital Factory Design",
            image: DigitalFactoryDesignImg,
            color: "from-gray-600 to-gray-400",
            content: [
                "Providing FACTORY Layout planning solutions services for Manual and Automation lines",
                "Layout Engineering (2D &3D)",
                "Produce animations and Renderings",
                "Visualize and analyze designs",
                "Factory walk through and Over plant design @3D",
                "Conversions CAD files in to compatible format"
            ]
        },

        {
            id: 6,
            title: "Robot Programming & OLP",
            image: RobotingProgramming,
            color: "from-gray-600 to-gray-400",
            content: [
                "Onsite and Offline Robot Programming",
                "Robot Simulation",
                "Robot System Installation and Commissioning",
                "Robot Replacement",
                "Line Shifting",
                "Line Cycle Time Reduction",
                "Training"
            ]
        },
        {
            id: 7,
            title: "Technical Documentation",
            image: TechnicalDocumentationImg,
            color: "from-gray-600 to-gray-400",
            content: [
                "Pneumatic clamping valve sequence Design",
                "Ergonomic Studies",
                "OLP documents",
                "Robot load capacity",
                "Flow Chart",
                "Spot Distribution",
                "Cycle time studies",
                "Health & Safety Risks Assessments",
                "Function Diagrams",
                "Manuals"
            ]
        }
    ];
    const navigate = useNavigate();


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);



    return (
        // <section>

        //     <div
        //         className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
        //         style={{ backgroundImage: "url('/images/banner.jpg')" }} // Update with actual image path
        //     >
        //         <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
        //         <div className="relative text-center">
        //             <h1 className="text-5xl font-bold">Body In White</h1>
        //             <p className="mt-2 text-lg">
        //                 <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/")}>Home</span> {" > "}
        //                 <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/services/digital-manufacturing")}>Digital Manufacturing</span> {" > "}
        //                 <span className="text-white font-semibold">Body In White</span>
        //             </p>
        //         </div>
        //     </div>


        //     <div className="container mx-auto px-6">
        //         <div className="mt-10 space-y-12">
        //             {bodyInWhiteData.map((item, index) => (
        //                 <div
        //                     key={item.id}
        //                     className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center bg-white rounded-lg shadow-lg p-6`}
        //                 >
        //                     <img src={item.image} alt={item.title} className="w-full md:w-1/2 rounded-lg shadow-md" />
        //                     <div className="md:w-1/2 p-6">
        //                         <h3 className="text-3xl font-semibold text-gray-900">{item.title}</h3>
        //                         <ul className="list-disc text-gray-700 mt-4 pl-5">
        //                             {item.content.map((point, i) => (
        //                                 <li key={i} className="mb-2">{point}</li>
        //                             ))}
        //                         </ul>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </section>

        <section>
            {/* Banner Section */}
            <div
                className="relative bg-cover bg-center h-120 flex items-center justify-center text-white"
                style={{ backgroundImage:  `url(${BannerImg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-center">
                    <h1 className="text-5xl font-bold">Body In White</h1>
                    <p className="mt-2 text-lg">
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/")}>
                            Home
                        </span>{" "}
                        {" > "}
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/services/digital-manufacturing")}>
                            Digital Manufacturing
                        </span>{" "}
                        {" > "}
                        <span className="text-white font-semibold">Body In White</span>
                    </p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="container mx-auto px-6 py-16 ">
                {bodyInWhiteData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`group my-2 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            } items-stretch shadow-lg rounded-xl overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl`}
                        data-aos="fade-up"
                    >
                        {/* Image Container - Full Height */}
                        <div className="md:w-1/2 h-full">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover rounded-xl shadow-md"
                            />
                        </div>

                        {/* Text Content - Full Height */}
                        <div
                            className={`md:w-1/2 p-6 text-white bg-gradient-to-r ${item.color} flex flex-col justify-center rounded-xl`}
                        >
                            <h3 className="text-3xl font-semibold">{item.title}</h3>
                            <ul className="list-disc mt-4 pl-5 space-y-2">
                                {item.content.map((point, i) => (
                                    <li key={i} className="opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default BodyInWhite;
