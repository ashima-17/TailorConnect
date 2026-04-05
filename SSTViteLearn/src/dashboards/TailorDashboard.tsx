// import React from "react";
// import {useNavigate} from "react-router-dom";

// export default function TailorDashboard() {

//    var doNavigate=useNavigate();
//     function doSwitchKuch(url:string)
//     {
//         doNavigate("/"+url);
//     }

    
    
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">

//       <h2 className="text-3xl font-bold text-gray-800 mb-10">
//         Tailor Dashboard ✂
//       </h2>

//       <div className="grid md:grid-cols-3 gap-8">

//         {/* Tailor Profile */}
//         <div className="bg-white w-64 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center flex flex-col">
         
//           <div className="text-4xl mb-3">🧵</div>
//           <h3 className="text-xl font-semibold mb-2">Tailor Profile</h3>

//           <p className="text-gray-500 text-sm mb-4">
//             View and manage your tailor profile information.
//           </p>

//           <button className="mt-auto self-center w-[120px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition" onClick={()=>doSwitchKuch("tailorprofile")}>
//             Click Here
//           </button>
//         </div>

//         {/* Search Your Tailors */}
//         <div className="bg-white w-64 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center flex flex-col">
          
//           <div className="text-4xl mb-3">🔍</div>
//           <h3 className="text-xl font-semibold mb-2">Search Your Tailors</h3>

//           <p className="text-gray-500 text-sm mb-4">
//             Find and explore available tailors nearby.
//           </p>

//           <button className="mt-auto self-center w-[120px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition" onClick={()=>doSwitchKuch("searchtailor")}>
//             Click Here
//           </button>
//         </div>

//         {/* Logout */}
//         <div className="bg-white w-64 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center flex flex-col">
          
//           <div className="text-4xl mb-3">🚪</div>
//           <h3 className="text-xl font-semibold mb-2">Logout</h3>

//           <p className="text-gray-500 text-sm mb-4">
//             Sign out from your account securely.
//           </p>

//           <button className="mt-auto self-center w-[120px] bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
//             Logout
//           </button>
//         </div>

//       </div>
      
//     </div>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-gray-800 px-6 py-3 flex items-center shadow-md">
      <span className="text-white text-xl font-italic mr-auto">FitlyMade🧵</span>
      <button
        onClick={() => navigate("/login")}
        className="text-white bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-md transition font-medium"
      >
        Back
      </button>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 px-6 py-4 flex items-center justify-center shadow-inner mt-auto">
      <p className="text-white text-sm">
        © {new Date().getFullYear()} FitlyMade. All rights reserved.
      </p>
    </footer>
  );
};

export default function TailorDashboard() {
  var doNavigate = useNavigate();
  function doSwitchKuch(url: string) {
    doNavigate("/" + url);
  }
  function handleLogout(url: string) {
    localStorage.removeItem("token")
    // localStorage.removeItem("")
    doNavigate("/" + url);
  }
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-1 p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Tailor Dashboard ✂
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tailor Profile */}
          <div className="bg-white w-64 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center flex flex-col">
            <div className="text-4xl mb-3">🧵</div>
            <h3 className="text-xl font-semibold mb-2">Tailor Profile</h3>
            <p className="text-gray-500 text-sm mb-4">
              View and manage your tailor profile information.
            </p>
            <button
              className="mt-auto self-center w-[120px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => doSwitchKuch("tailorprofile")}
            >
              Click Here
            </button>
          </div>

          {/* Search Your Tailors */}
          {/* <div className="bg-white w-64 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center flex flex-col">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Search Your Tailors</h3>
            <p className="text-gray-500 text-sm mb-4">
              Find and explore available tailors nearby.
            </p>
            <button
              className="mt-auto self-center w-[120px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => doSwitchKuch("searchtailor")}
            >
              Click Here
            </button>
          </div> */}

          {/* Logout */}
          <div className="bg-white w-64 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center flex flex-col">
            <div className="text-4xl mb-3">🚪</div>
            <h3 className="text-xl font-semibold mb-2">Logout</h3>
            <p className="text-gray-500 text-sm mb-4">
              Sign out from your account securely.
            </p>
            <button className="mt-auto self-center w-[120px] bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition" onClick={()=>handleLogout("")}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}