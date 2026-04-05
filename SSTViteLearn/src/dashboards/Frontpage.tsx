// import React from "react";
 import { useNavigate } from "react-router-dom";

export default function TailorLandingPage() {
    var doNavigate = useNavigate();
  function doSwitchKuch(url: string) {
    doNavigate("/" + url);
  }
   
  return (
    <div className="bg-white text-gray-800">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
        
        
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-4 shadow-md bg-blue-600 text-white">
        <h1 className="text-2xl font-bold whitespace-nowrap shrink-0">FitlyMade🧵</h1>
        <div className="space-x-4 ">
          <button className="px-4 py-2 md:px-4 md:py-2 rounded-lg border border-white hover:bg-white shrink-0 hover:text-blue-600 transition"onClick={() => doSwitchKuch("login")}>
            Login
          </button>
          <button className="px-4 py-2 md:px-4 md:py-2 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition" onClick={() => doSwitchKuch("signup")}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      {/* <section className="text-center py-20 bg-blue-50">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          Stitching Style, Connecting People
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          A smart platform that connects customers with skilled tailors for
          custom-fit clothing, seamless communication, and easy searching and rating of tailors.
        </p>
        {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Get Started
        </button> */}
      {/* </section> */} 
      {/* ------------------------- */}
      {/* Hero Section */}
{/* <section className="text-center py-20 bg-blue-50">
  <h2 className="text-4xl font-bold text-blue-700 mb-4">
    Stitching Style, Connecting People
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
    A smart platform that connects customers with skilled tailors for
    custom-fit clothing, seamless communication, and easy searching and rating of tailors.
  </p>
  <div className="mt-8 flex justify-center">
    <img
      src="/tailoring.jpg"
      alt="Tailor at work"
      className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
    />
  </div>
</section> */}
{/* Banner Section */}
{/* <section className="w-full">
  <img
    src="/stiching.webp"
    alt="Tailor Banner"
    className="w-full h-96 object-cover"
  />
</section> */}
{/* <section className="w-full relative overflow-hidden h-96">
  <img src="/stiching.webp"  alt="Banner 1" className="absolute inset-0 w-full h-full object-cover" style={{ animation: "fade 9s 0s infinite" }} />
  <img src="/tailor.jpg" alt="Banner 2" className="absolute inset-0 w-full h-full object-cover" style={{ animation: "fade 9s 3s infinite" }} />
  <img src="/tailoring.jpg" alt="Banner 3" className="absolute inset-0 w-full h-full object-cover" style={{ animation: "fade 9s 6s infinite" }} />

  <style>{`
    @keyframes fade {
      0%, 100% { opacity: 0; }
      5%, 30%  { opacity: 1; }
    }
  `}</style>
</section> */}
<section className="w-full relative overflow-hidden h-96">
  <div style={{ display: "flex", width: "300%", height: "100%", animation: "slide 21s infinite" }}>
    <img src="/stiching.webp"  alt="Banner 1" style={{ width: "33.33%", height: "100%", objectFit: "cover", flexShrink: 0 }} />
    <img src="/suidhaaga.jpg" alt="Banner 2" style={{ width: "33.33%", height: "100%", objectFit: "cover", flexShrink: 0 }} />
    <img src="/tailoring.jpg" alt="Banner 3" style={{ width: "33.33%", height: "100%", objectFit: "cover", flexShrink: 0 }} />
  </div>

  <style>{`
    @keyframes slide {
      0%        { transform: translateX(0%); }
      30%       { transform: translateX(0%); }
      33.33%    { transform: translateX(-33.33%); }
      63.33%    { transform: translateX(-33.33%); }
      66.66%    { transform: translateX(-66.66%); }
      96.66%    { transform: translateX(-66.66%); }
      100%      { transform: translateX(0%); }
    }
  `}</style>
</section>

{/* Hero Section */}
<section className="text-center py-20 bg-blue-50">
 <h2 className="text-4xl font-bold text-blue-700 mb-4">
    Stitching Style, Connecting People
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
    A smart platform that connects customers with skilled tailors for
    custom-fit clothing, seamless communication, and easy searching and rating of tailors.
  </p>
</section>

      {/* Features Section */}
      <section className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Why Choose FitlyMade?
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">
              Secure information upload ✔
            </h4>
            <p>
              Customers and tailors can upload their information in secured manner
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">
              Rating of tailors ⭐
            </h4>
            <p>
              Customers can review tailors which helps other customers as well as the tailor for expanding buisness.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">
              Verified Tailors ✅
            </h4>
            <p>
              Connect with experienced and trusted tailors in your area matching your requirments.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-600 text-white py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-10">
          Benefits for Everyone
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Customers */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">For Customers</h4>
            <ul className="space-y-2">
              <li>✔ Easy and safe uploading of information</li>
              <li>✔ Easy searching of tailors based on important parameters like gender,speciality,city etc </li>
              <li>✔ Rate and Review tailors to help other customers</li>
              {/* <li>✔ Fetching of </li> */}
            </ul>
          </div>

          {/* Tailors */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">For Tailors</h4>
            <ul className="space-y-2">
              <li>✔ Grow your business online</li>
              <li>✔ Manage orders efficiently</li>
              <li>✔ Connect with more customers</li>
              {/* <li>✔ Secure and timely payments</li> */}
            </ul>
          </div>

        </div>
      </section>
{/* Made By Section */}
<section className="py-16 px-8 bg-white">
  <h3 className="text-3xl font-bold text-center text-blue-700 mb-10">Made By</h3>
  <div className="max-w-sm mx-auto bg-blue-50 rounded-2xl shadow-lg overflow-hidden">
    <div className="flex justify-center pt-8">
      <img
        src="/tikki.jpg"
        alt="Developer"
        className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
      />
    </div>
    <div className="text-center px-6 py-6">
      <h4 className="text-xl font-bold text-blue-700">Ashima Arora</h4>
      <p className="text-blue-500 font-medium text-sm mt-1">Full Stack Developer</p>
      <p className="text-gray-600 text-sm mt-3 ">
        Passionate about building clean, user-friendly web applications.
        Created FitlyMade to bridge the gap between customers and skilled tailors.
      </p>
      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={() => window.open("https://www.instagram.com/twinklearora62/","_blank")}
          className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition"
        >
           <i className="fab fa-instagram"></i> Instagram
        </button>
        <button
          onClick={() => window.open("https://www.linkedin.com/in/ashima-arora-739160296/", "_blank")}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
        >
          💼 LinkedIn
        </button>
      </div>
    </div>
  </div>
</section>

       {/* Footer */}
       <footer className="text-center py-6 bg-blue-700 text-white">
         © 2026 FitlyMade. All rights reserved.
      </footer>
     </div>
   );
}
// -----------------------------------------------------------------------------------
