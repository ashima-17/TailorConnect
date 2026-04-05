import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {

  const [formData, setFormData] = useState({
    contact: "",
    name: "",
    rating: 0,
    review: "",
    
  });
  const Footer = () => {
  return (
    <footer className="w-full bg-green-700 px-6 py-6 flex items-center justify-center shadow-inner mt-auto">
      <p className="text-white text-sm">
        © {new Date().getFullYear()} FitlyMade. All rights reserved.
      </p>
    </footer>
  );
};

  const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-green-700 px-6 py-3 flex items-center shadow-md">
      <span className="text-white text-xl font-italic mr-auto">FitlyMade 🧵</span>
      <button
        onClick={() => navigate("/customer-dashboard")}
        className="text-white bg-green-500 hover:bg-green-400 px-4 py-2 rounded-md transition font-medium"
      >
        GoBack
      </button>
    </nav>
  );
};
//   const[tailor,setTailor]=useState("")


  // Fetch tailor name onBlur
  async function fetchTailor() {
    let url="https://tailor-connect-back.vercel.app/review/tailornamesearch";
     let token=localStorage.getItem("token")
         let response1= await axios.post(url,{contact:formData.contact},{headers: { "Content-Type": "application/x-www-form-urlencoded",'authorization' : `Bearer ${token}` }});
          alert(JSON.stringify(response1));
    //       if(response1.data.doc.name)
    //       {
    //         setFormData(response1.data.doc.name);
            
    //   }
    if(response1.data.name)
    {
        setFormData({...formData,name:response1.data.name+"✅"})


    }
    
          }
   
  

  // Publish review
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
     
  
      e.preventDefault();
      //  setErrors(newErrors);
       
      
      console.log(formData);
      let url="https://tailor-connect-back.vercel.app/review/tailorreview"
      let token=localStorage.getItem("token")

      let response=await axios.post(url, formData, {headers: { "Content-Type": "application/x-www-form-urlencoded",'authorization' : `Bearer ${token}` }});
       alert(JSON.stringify(response))
      //  if (!validate()) return;
    };


    
  return (
     
    <div className="min-h-screen bg-gray-100 flex flex-col ">
      <Navbar />
      <div className="flex justify-center items-center flex-1 p-6">
        <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-5"
      >
        {/* <h3 className="font-semibold">Tailor's Review</h3> */}
      
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-600">
  Tailor's Review ✂  
</h2>

        {/* Mobile + Name */}
        <div className="flex gap-4 mb-6">

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Tailor Mobile Number
            </label>
            <input
              type="text" name="contact"
              value={formData.contact}
              onChange={function (e) {
                setFormData({
                  ...formData,
                  contact: e.target.value
                });
              }}
              
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter mobile"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Tailor Name
            </label>
            <input
              type="text" name="name"
              value={formData.name}
              onBlur={fetchTailor}
              
              className="w-full border border-gray-300 p-2 rounded-lg bg-gray-100"
            />
          </div>

        </div>

        {/* Stars */}
        <center>
        <div style={{ fontSize: "30px"  }}>
  {[1, 2, 3, 4, 5].map((star) => (
    <span
      key={star}
      onClick={() =>
        setFormData({ ...formData, rating: star })
      }
      style={{
        cursor: "pointer",
        color: star <= formData.rating ? "gold" : "gray"
      }}
    >
      ★
    </span>
  ))}
</div>
</center>
        {/* Review */}
        <textarea rows={8}
          value={formData.review} 
          onChange={function (e) {
            setFormData({
              ...formData,
              review: e.target.value
            });
          }}
          placeholder="Write your review"
          className="w-full border border-gray-300 p-2 rounded-lg mb-6">
        </textarea>

        {/* Publish */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg"
        >
          Publish Review
        </button>
        

      </div>
      </form>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;