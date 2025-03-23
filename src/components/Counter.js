import React, { useState, useEffect, useRef } from "react";

const stats = [
  { label: "Years of Experience", value: 15 },
  { label: "Projects Completed", value: 500 },
  { label: "Happy Clients", value: 120 },
  { label: "Industry Experts", value: 50 },
];

const Counter = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const counterRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < stat.value) {
              newCounts[index] += Math.ceil(stat.value / 100);
            } else {
              clearInterval(intervals[index]);
            }
            return newCounts;
          });
        }, 20);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [inView]);

  return (
    <section ref={counterRef} className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-extrabold uppercase mb-12">Our Achievements</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-5xl font-bold text-yellow-500">
                {counts[index]}+
              </h2>
              <p className="text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
