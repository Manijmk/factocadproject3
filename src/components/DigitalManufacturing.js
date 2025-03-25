import image from "../assests/images/ManufacturingEngineering.png"; // Ensure correct path

const DigitalManufacturing = () => {

    const services = [
        {id:"stamping", title: "Stamping", image: image, description: "High-precision metal forming services for automotive and industrial applications." },
        { title: "Body In White (BIW)", image: image, description: "Comprehensive BIW solutions ensuring structural integrity and design precision." },
        { title: "TCF (Assembly)", image: image, description: "Total assembly solutions integrating advanced automation for efficiency." },
        { title: "Logistics Engineering", image: image, description: "Optimized logistics strategies to streamline supply chain operations." },
        { title: "Mechanical Design", image: image, description: "Innovative mechanical designs tailored to meet specific engineering requirements." },
        { title: "Paint Shop", image: image, description: "State-of-the-art paint application services ensuring durability and aesthetics." },
    ];


    return (
        <section className="pt-24 my-10 px-6 text-gray-800 bg-gray-100">
            <div className="container mx-auto">
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
                                <p className="text-gray-600">{service.description}</p>
                                <a href="#" className="text-blue-500 mt-4 inline-block">Learn More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalManufacturing;



