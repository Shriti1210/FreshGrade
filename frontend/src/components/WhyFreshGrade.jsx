import { ShieldCheck, Brain, Globe } from "lucide-react";

export default function WhyFreshGrade() {
  const items = [
    {
      icon: <Brain size={28} />,
      title: "AI Precision",
      desc: "Advanced AI detects freshness, defects and grading instantly."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Trust & Transparency",
      desc: "Every crop verified with transparent digital reports."
    },
    {
      icon: <Globe size={28} />,
      title: "Global Marketplace",
      desc: "Connect farmers to buyers worldwide with verified quality."
    }
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-[#f4f6f3] px-6 md:px-20">

      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#132A13] mb-16">
        Why FreshGrade?
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {items.map((item, i) => (
          <div key={i}
            className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition hover:-translate-y-3"
          >
            <div className="text-[#4F772D] mb-4">{item.icon}</div>

            <h3 className="text-xl font-bold text-[#31572C] mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
