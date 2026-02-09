import { Leaf, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-[#F7F9F3] py-24 px-6 md:px-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#132A13] mb-6">
            About FreshGrade
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            FreshGrade uses AI to verify crop quality directly from farms.
            We connect farmers, buyers and distributors with trusted,
            transparent and verified agricultural data.
          </p>

          <p className="text-[#4F772D] font-semibold text-lg">
            No middle fraud. No quality confusion. Just verified harvest.
          </p>

          {/* small highlights */}
          <div className="flex gap-8 mt-8">
            <div className="flex items-center gap-3">
              <Leaf className="text-[#4F772D]" />
              <span className="text-gray-700">Smart AI grading</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#4F772D]" />
              <span className="text-gray-700">Trusted reports</span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white border border-[#ECF39E] shadow-xl rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-[#31572C] mb-4">
            Our Mission
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Build the world’s most trusted AI-powered agriculture verification
            network connecting farms to global markets with transparency,
            trust and technology.
          </p>
        </div>

      </div>
    </section>
  );
}
