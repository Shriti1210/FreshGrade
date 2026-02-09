import { Camera, Brain, Cloud } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-[#4F772D]" />,
      title: "AI Quality Scan",
      desc: "Upload crop images and get instant AI-powered quality verification.",
    },
    {
      icon: <Brain className="w-8 h-8 text-[#4F772D]" />,
      title: "Smart Analysis",
      desc: "Advanced AI checks freshness, size, defects and grading.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-[#4F772D]" />,
      title: "Secure Cloud Records",
      desc: "All reports stored securely for buyers and suppliers.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-[#132A13]">
          Powerful Features
        </h2>
        <p className="text-gray-500 mt-4 mb-16">
          Built for modern agriculture supply chain
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#F7F9F4] p-10 rounded-3xl shadow-sm hover:shadow-xl transition"
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-[#132A13] mb-3">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
