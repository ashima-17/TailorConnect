// import  { useEffect, useState } from "react";
// import axios from "axios";

// function FindTailor() {
// //   const [cities, setCities] = useState<string[]>([]);
//   const [selectedCity, setSelectedCity] = useState("");
 
//     const [cityList, setCityList] = useState<string[]>([]);
//     const [category, setSelectedCategory] = useState("");
//     const [specialityList, setSpecialityList] = useState<string[]>([]);
// const [selectedSpeciality, setSelectedSpeciality] = useState("");
// const [tailorList, setTailorList] = useState<any[]>([]);

// // async function doGetCities() {
// //   let url = "http://localhost:2007/tailor/getcities";
// //   let response = await axios.get(url);
// //   if (response.data.status) {
// //     setCityList(response.data.cities);
// //   }
// // }



// async function doGetCities() {
//     let url = "http://localhost:2007/tailor/getcities";
//     let response = await axios.post(url);
//     if (response.data.cities) {
//       setCityList(response.data.cities);
//     }
//   }

//   useEffect(() => {
//     doGetCities();
//   }, []);
    
      
//   // ---------------------------------------get Speciality----------------------------------------------
//   // async function doGetSpeciality(gender: string) {
//   //   let url = "http://localhost:2007/tailor/getspeciality";
//   //   let response = await axios.post(url, { category:category  }, {
//   //     headers: { "Content-Type": "application/x-www-form-urlencoded" }
//   //   });
//   //   if (response.data.speciality) {
//   //     setSpecialityList(response.data.speciality);
//   //   }
//   // }
  
//    async function doGetSpeciality(category: string) {
//   let url = "http://localhost:2007/tailor/getspeciality";
//   let response = await axios.post(url, { category: category }, {
//     headers: { "Content-Type": "application/x-www-form-urlencoded" }
//   });
//   if (response.data.speciality) {
//     setSpecialityList(response.data.speciality);
//   }
// }
// async function findRecord()
// {
//    let url="http://localhost:2007/tailor/tailorfullrecord";
//      let response3= await axios.post(url,{shopCity:selectedCity,category:category,speciality:selectedSpeciality},{headers: { "Content-Type": "application/x-www-form-urlencoded" }});
   
//     //  resp.data.doc.dos=resp.data.doc.dos.split("T")[0];
//      alert(JSON.stringify(response3));
//     //  if(response2.data.doc){
//     //  setFormData(response2.data.doc);
//     //  setPrev(response2.data.doc.picurl)
//     //  }
//  if (response3.data.doc) {
//     setTailorList(response3.data.doc);  
//   } else {
//     alert("No tailors found");
//   }
// }
 

//   return (
//     <div className="h-screen w-full flex bg-orange-50">
      
//       {/* LEFT SECTION */}
//       <div className="w-[22%] min-w-[260px] h-full bg-white border-r border-orange-100 p-10 flex flex-col justify-center">
//         <center>
//         <h2 className="text-2xl font-bold mb-8 text-orange-600">
//           Find Tailor 🔎
//         </h2>
//         </center>

//         <div className="space-y-6">
//           <div>
//             <center>
//             <label className="block mb-2 text-lg text-orange-600">
//               Select City
//             </label>
//             </center>

//           <select
//   name="shopCity"
//   value={selectedCity}
//    onChange={(e) => setSelectedCity(e.target.value)}
//   className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm"
// >
//   <option value="" disabled>Select City</option>
//   {cityList.map((city, index) => (
//     <option key={index} value={city}>{city}</option>
//   ))}
// </select>
// <div className="flex items-center mt-4 mb-4  cursor-pointer">
//   <label className="">
//     <input
//       type="radio"
//       name="category"
//       value="men"
//       onChange={(e) => {setSelectedCategory(e.target.value); doGetSpeciality(e.target.value);} }// update state
//       className="form-radio text-orange-500 h-5 w-5 focus:ring-orange-400"
//     />
//     <span className="text-gray-700">Men</span>
//   </label>
  
//   <label className="">
//     <input
//       type="radio"
//       name="category"
//       value="women"
//       onChange={(e) => {setSelectedCategory(e.target.value);doGetSpeciality(e.target.value);}}
//       className="form-radio text-orange-500 h-5 w-5 focus:ring-orange-400"
//     />
//     <span className="text-gray-700">Women</span>
//   </label>

//   <label className="">
//     <input
//       type="radio"
//       name="category"
//       value="children"
//       onChange={(e) => {setSelectedCategory(e.target.value);doGetSpeciality(e.target.value)}}
//       className="form-radio text-orange-500 h-5 w-5 focus:ring-orange-400"
//     />
//     <span className="text-gray-700">Children</span>
//   </label>
//   {/* /</div><div> */}
 
// </div>

// {/* Speciality */}
// <center>
//             <label className="block mb-2 text-lg text-orange-600">
//               Select Speciality
//             </label>
//             </center>
// <select
//   value={selectedSpeciality} name="speciality"
//   onChange={(e) => setSelectedSpeciality(e.target.value)}
//   className="w-full border mt-2 border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
// >
//   <option value="" disabled>Select Speciality</option>
//   {specialityList.map((sp) => (
//     <option  value={sp}>{sp}</option>
//   ))}
// </select>

          
//           </div>

//           <button
//             className="w-full bg-orange-500 text-white py-3 rounded-lg 
//             hover:bg-orange-600 
//             transition-colors duration-200"
//            onClick={findRecord}>
//             Find Tailors
//           </button>
         
//         </div>
         
//       </div>
      
     
      
      
        
//       </div>
      
      
//   )}

      
     
      
    


// export default FindTailor; 
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";  

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-orange-500 px-6 py-3 flex items-center shadow-md">
      <span className="text-white text-xl font-italic mr-auto">FitlyMade 🧵</span>
      <button
        onClick={() => navigate("/customer-dashboard")}
        className="text-white bg-orange-400 hover:bg-orange-300 px-4 py-2 rounded-md transition font-medium"
      >
        GoBack
      </button>
    </nav>
  );
};

function FindTailor() {
  const [selectedCity, setSelectedCity] = useState("");
  const [cityList, setCityList] = useState<string[]>([]);
  const [category, setSelectedCategory] = useState("");
  const [specialityList, setSpecialityList] = useState<string[]>([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [tailorList, setTailorList] = useState<any[]>([]);

  async function doGetCities() {
    let url = "http://localhost:2007/tailor/getcities";
    let token=localStorage.getItem("token")
    

    let response = await axios.post(url,{}, {headers:{'authorization' : `Bearer ${token}`}});
    if (response.data.cities) {
      setCityList(response.data.cities);
    }
  }

  useEffect(() => {
    doGetCities();
  }, []);

  async function doGetSpeciality(category: string) {
    let url = "http://localhost:2007/tailor/getspeciality";
     let token=localStorage.getItem("token")
    let response = await axios.post(url, { category: category }, {
      headers: { "Content-Type": "application/x-www-form-urlencoded",'authorization' : `Bearer ${token}` }
    });
    if (response.data.speciality) {
      setSpecialityList(response.data.speciality);
    }
  }

  async function findRecord() {
    let url = "http://localhost:2007/tailor/tailorfullrecord";
      let token=localStorage.getItem("token")
    let response3 = await axios.post(url, { shopCity: selectedCity, category: category, speciality: selectedSpeciality }, {
      headers: { "Content-Type": "application/x-www-form-urlencoded",'authorization' : `Bearer ${token}` }
    });
    alert(JSON.stringify(response3));  
    if (response3.data.doc) {
      setTailorList(response3.data.doc);
    } else {
      alert("No tailors found❌");
    }
  }

  return (
    // <div className="h-screen w-full flex flex-col md:flex-row bg-orange-50 overflow-hidden">
<div className="h-screen w-full flex flex-col bg-orange-50 overflow-hidden">  {/* removed md:flex-row */}

  {/* 2️⃣ ADD THIS */}
  <Navbar />
  <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
      {/* LEFT SECTION */}
       <div className="w-full md:w-[22%] md:min-w-[260px] h-auto md:h-full bg-white border-b md:border-b-0 md:border-r border-orange-100 p-6 flex flex-col justify-center"> 
      
        <center>
          <h2 className="text-2xl font-bold mb-8 text-orange-600">Find Tailor 🔎</h2>
        </center>

        <div className="space-y-6">
          <div>
            <center>
              <label className="block mb-2 text-lg text-orange-600">Select City</label>
            </center>
            <select
              name="shopCity"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm"
            >
              <option value="" disabled>Select City</option>
              {cityList.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>

            <div className="flex justify-center items-center gap-6 mt-4 mb-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="category" value="men"
                  onChange={(e) => { setSelectedCategory(e.target.value); doGetSpeciality(e.target.value); }}
                  className="form-radio text-orange-500 h-5 w-5 focus:ring-orange-400"
                />
                <span className="text-gray-700">Men</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="category" value="women"
                  onChange={(e) => { setSelectedCategory(e.target.value); doGetSpeciality(e.target.value); }}
                  className="form-radio text-orange-500 h-5 w-5 focus:ring-orange-400"
                />
                <span className="text-gray-700">Women</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="category" value="children"
                  onChange={(e) => { setSelectedCategory(e.target.value); doGetSpeciality(e.target.value); }}
                  className="form-radio text-orange-500 h-5 w-5 focus:ring-orange-400"
                />
                <span className="text-gray-700">Children</span>
              </label>
            </div>

            <center>
              <label className="block mb-2 text-lg text-orange-600">Select Speciality</label>
            </center>
            <select
              value={selectedSpeciality} name="speciality"
              onChange={(e) => setSelectedSpeciality(e.target.value)}
              className="w-full border mt-2 border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              <option value="" disabled>Select Speciality</option>
              {specialityList.map((sp) => (
                <option value={sp}>{sp}</option>
              ))}
            </select>
          </div>

          <button
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200"
            onClick={findRecord}>
            Find Tailors
          </button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 min-h-0 md:h-full overflow-y-auto p-4 md:p-14">
        <center>
          <h2 className="text-3xl font-semibold mb-10 text-orange-700"> Fetched Results✅</h2>
        </center>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {/* {tailorList.length === 0 ? (
            <div className="bg-white border border-orange-100 rounded-xl p-10">
              <p className="text-gray-500">Tailors will appear here based on selected city.</p>
            </div>
          ) : ( */}
          {
            tailorList.map((obj) => (
              <div  style={{width: "100%", maxWidth: "500px", maxHeight: "350px", overflowY: "auto", backgroundColor: "white", margin: "10px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(251,146,60,0.2)", border: "1px solid #fed7aa" }}>

                <div style={{ backgroundColor: "orange", padding: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                  <img src={obj.picurl} alt="profile" style={{ width: "60px", height: "60px", borderRadius: "50%", border: "2px solid white", objectFit: "cover" }} />
                  {/* <img src={obj.picurl1} alt="aadhaar" style={{ width: "80px", height: "50px", borderRadius: "8px", border: "2px solid white", objectFit: "cover" }} /> */}
                  <p style={{ color: "white", fontWeight: "bold", fontSize: "15px", margin: "2px 0" }}>{obj.name}</p>
                   <p style={{  color: "white", fontWeight: "bold", fontSize: "15px", margin: "2px 0"}}><b> Avg Rating:</b> ⭐{obj.avgRating}</p>

                </div>

                <div style={{ backgroundColor: "#fff7ed", borderRadius: "10px", padding: "6px 10px", margin: "6px" }}>
                  <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>Email:</b> {obj.emailid}</p>
                  <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>Contact:</b> {obj.contact}</p>
                  <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>Address:</b> {obj.address}</p>
                  <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>City:</b> {obj.city}</p>
                  {/* <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>AadhaarNo:</b> {obj.aadhaarNo}</p> */}
                </div>

                <div style={{ backgroundColor: "#fff7ed", borderRadius: "10px", padding: "6px 10px", margin: "6px" }}>
                  <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>Category:</b> {obj.category}</p>
                  <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>Speciality:</b> {obj.speciality}</p>
                  <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>Website:</b> {obj.website}</p>
                  <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>Since:</b> {obj.since}</p>
                  <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>WorkType:</b> {obj.workType}</p>
                  <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>ShopAddress:</b> {obj.shopAddress}</p>
                  <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>ShopCity:</b> {obj.shopCity}</p>
                  <p style={{ margin: "2px 0", fontSize: "12px", color: "#374151" }}><b>OtherInfo:</b> {obj.otherInfo}</p>
                </div>

              </div>

            ))
          }
          
          {/* )} */}
        </div>
      </div>
</div>
    </div>
  );
}

export default FindTailor;