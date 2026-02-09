// import { useNavigate } from "react-router-dom";
// import Logo from "./Logo";

// export default function Header() {
//   const navigate = useNavigate();

//   return (
//     <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* LOGO */}
//         <Logo />

//         {/* NAV LINKS */}
//         <div className="hidden md:flex gap-10 text-white/90 font-medium">

//           <button
//             onClick={() =>
//               document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="hover:text-green-400 transition"
//           >
//             About
//           </button>

//           <button
//             onClick={() =>
//               document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="hover:text-green-400 transition"
//           >
//             Features
//           </button>

//           {/* CONTACT ADDED */}
//           <button
//             onClick={() =>
//               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="hover:text-green-400 transition"
//           >
//             Contact
//           </button>

//         </div>

//         {/* RIGHT BUTTONS */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => navigate("/login")}
//             className="text-white hover:text-green-400 transition"
//           >
//             Login
//           </button>

//           <button
//             onClick={() => navigate("/register")}
//             className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white font-semibold transition"
//           >
//             Register
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }




import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      {/* FULL WIDTH HEADER */}
      <div className="w-full px-6 md:px-12 lg:px-16 h-[72px] flex items-center">

        {/* LEFT LOGO (extreme left) */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* CENTER NAV */}
        <div className="hidden md:flex gap-10 text-white/90 font-medium absolute left-1/2 -translate-x-1/2">

          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-green-400 transition"
          >
            About
          </button>

          <button
            onClick={() =>
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-green-400 transition"
          >
            Features
          </button>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-green-400 transition"
          >
            Contact
          </button>

        </div>

        {/* RIGHT BUTTONS (extreme right) */}
        <div className="ml-auto flex gap-4 items-center">

          <button
            onClick={() => navigate("/login")}
            className="text-white hover:text-green-400 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white font-semibold transition"
          >
            Register
          </button>

        </div>
      </div>
    </div>
  );
}
