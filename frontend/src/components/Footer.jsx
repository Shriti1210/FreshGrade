import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#132A13] text-[#ECF39E] pt-16 pb-10 px-6 md:px-20 relative overflow-hidden">

      {/* subtle top glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#90A955] to-transparent opacity-40"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-3">
            Fresh<span className="text-[#ECF39E]">Grade</span>
          </h3>

          <p className="text-[#90A955] max-w-sm">
            AI Powered Harvest Verification Platform connecting farmers,
            buyers and distributors with trusted quality.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg">Company</h4>

          <ul className="space-y-3 text-[#90A955]">

            <li
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer hover:text-white transition"
            >
              About
            </li>

            <li
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer hover:text-white transition"
            >
              Features
            </li>

            <li
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer hover:text-white transition"
            >
              Contact
            </li>

          </ul>
        </div>

        {/* ACCOUNT */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg">Account</h4>

          <div className="space-y-3 text-[#90A955]">

            <p
              onClick={() => navigate("/login")}
              className="cursor-pointer hover:text-white transition"
            >
              Login
            </p>

            <p
              onClick={() => navigate("/register")}
              className="cursor-pointer hover:text-white transition"
            >
              Register
            </p>

          </div>
        </div>

      </div>

      {/* bottom */}
      <div className="text-center mt-14 border-t border-[#31572C] pt-6 text-[#90A955] text-sm">
        © 2026 FreshGrade. Built with love for smarter agriculture.
      </div>

    </footer>
  );
}
