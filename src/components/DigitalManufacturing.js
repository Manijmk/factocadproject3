import image from "../assests/images/ManufacturingEngineering.png"; // Ensure correct path
import BodyInWhiteImg from "../assests/images/BodyInWhite.png"
import StampingImg from "../assests/images/Metalstamping.jpg"
import LogisticsImg from "../assests/images/LogisticsEngineering2.jpg"
import MechanicalImg from "../assests/images/mechanical_engineering2.jpeg"
import PaintShopImg from "../assests/images/paintshop1.jpg"
import { useNavigate } from "react-router-dom";

const DigitalManufacturing = () => {

    const services = [
        {
            id: "body-in-white", title: "Body In White (BIW)", image: BodyInWhiteImg,
            description: "Comprehensive BIW solutions ensuring structural integrity and design precision."
        },
        {
            id: "stamping", title: "Stamping", image: StampingImg,
            description: "High-precision metal forming services for automotive and industrial applications."
        },
        {
            id: "assembly", title: "TCF (Assembly)", image: image,
            description: "Total assembly solutions integrating advanced automation for efficiency."
        },
        {
            id: "logistics-engineering", title: "Logistics Engineering", image: LogisticsImg,
            description: "Optimized logistics strategies to streamline supply chain operations."
        },
        {
            id: "mechanical-design", title: "Mechanical Design", image: MechanicalImg,
            description: "Innovative mechanical designs tailored to meet specific engineering requirements."
        },
        {
            id: "paintshop", title: "Paint Shop", image: PaintShopImg,
            description: "State-of-the-art paint application services ensuring durability and aesthetics."
        },
    ];
    const navigate = useNavigate();

    return (
        <section>

            <div
                className="relative bg-cover bg-center h-120 flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-center">
                    <h1 className="text-5xl font-bold">Digital Manufacturing</h1>
                    <p className="mt-2 text-lg">
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/")}>
                            Home
                        </span>{" "}
                        {" > "}
                        <span className="text-gray-300 cursor-pointer" onClick={() => navigate("/services")}>
                            Services
                        </span>{" "}
                        {" > "}
                        <span className="text-white font-semibold">Digital Manufacturing</span>
                    </p>
                </div>
            </div>

            <div className="container mx-auto pt-24 my-10 px-6 text-gray-800 bg-gray-100">
                {/* Introduction Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">DIGITAL MANUFACTURING</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Digital Manufacturing integrates Advanced Technology into production processes to boost efficiency, reduce costs, and improve product quality.
                        From robotics to data-driven decision-making, our solutions ensure your business stays ahead in the competitive landscape.
                    </p>
                </div>

                {/* Services Cards */}
                <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">OUR SERVICES IN DIGITAL MANUFACTURING</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-600"
                                >
                                    {service.description}
                                </p>
                                <a onClick={() => navigate(`/services/digital-manufacturing/${service.id}`)} className="text-blue-500 mt-4 inline-block" >Learn More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalManufacturing;



