import { useNavigate } from "react-router-dom";
import bg from "../assets/onboarding_bg.jpg";
import Logo from "./Logo";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={bg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* TOP OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">

        {/* LOGO */}
        {/* 
          <div className="absolute top-6 sm:top-10 left-6 sm:left-12 lg:left-20">
            <Logo />
          </div> 
        */}

        <div className="max-w-xl mt-12 text-white">

          <h2 className="font-bold leading-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Your Harvest,
            <br />
            Verified
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mt-6 mb-10">
            Trusted Quality for a Smarter Supply Chain
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

            {/* GOOGLE */}
            <button className="bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-3 text-base sm:text-lg text-black">
              <img
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                className="w-5 sm:w-6"
                alt="google"
              />
              Continue with Google
            </button>

            {/* REGISTER */}
            <button
              onClick={() => navigate("/register")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl shadow-lg text-base sm:text-lg font-semibold"
            >
              Register
            </button>
          </div>

          {/* LOGIN */}
          <p className="mt-6 text-white/90 text-sm sm:text-base">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-500 font-semibold cursor-pointer hover:underline"
            >
              Log in
            </span>
          </p>

          {/* TAGLINE */}
          <p className="mt-10 text-white/80 text-sm sm:text-base italic max-w-md">
            “Empowering farmers and buyers with AI-verified quality.
            Fresh produce. Trusted supply.”
          </p>

        </div>
      </div>
    </section>
  );
}





