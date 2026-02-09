import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#132A13] via-[#31572C] to-[#4F772D] flex items-center justify-center px-6 py-20">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT INFO */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Talk 
          </h1>

          <p className="text-lg text-white/80 mb-10">
            Have questions about FreshGrade?  
            Want to partner with us or test the platform?  
            Reach out — we’d love to hear from you.
          </p>

          <div className="space-y-6 text-white/90">

            <div className="flex items-center gap-4">
              <Mail className="text-[#ECF39E]" />
              support@freshgrade.ai
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#ECF39E]" />
              India
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-[#ECF39E]" />
              +91 98765 43210
            </div>

          </div>
        </div>

        {/* RIGHT GLASS FORM */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">

          <h2 className="text-2xl font-semibold text-white mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">

            <input
              placeholder="Your Name"
              className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70 focus:outline-none"
            />

            <input
              placeholder="Email"
              className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70 focus:outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70 focus:outline-none"
            />

            <button
              className="w-full bg-[#ECF39E] text-[#132A13] font-semibold py-3 rounded-xl hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
