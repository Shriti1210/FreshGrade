import { Leaf, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#F7F9F4] py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#132A13] mb-6">
            About FreshGrade
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            FreshGrade uses AI to verify crop quality directly from farms.
            We connect farmers, buyers and distributors with trusted,
            transparent and verified agricultural data.
          </p>

          <p className="text-[#4F772D] font-semibold text-lg">
            No middle fraud. No quality confusion. Just verified harvest.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-[#ECF39E]">
          <div className="flex items-center gap-4 mb-6">
            <ShieldCheck className="w-10 h-10 text-[#4F772D]" />
            <h3 className="text-2xl font-bold text-[#132A13]">Our Mission</h3>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Build the world’s most trusted AI-powered agriculture verification
            network connecting farms to global markets with transparency and
            trust.
          </p>
        </div>

      </div>
    </section>
  );
}
