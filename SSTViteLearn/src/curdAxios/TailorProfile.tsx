
// import React, { useState } from "react";
//  import axios from "axios";
//  import { useNavigate } from "react-router-dom";
// //  import Tesseract from "tesseract.js";

// type FormDataType = {
//   emailid: string;
//   name: string;
//   contact: string;
//   address: string;
//   city: string;
//   aadhaarNo: string;
//   category: string;
//   speciality: string;
//   website: string;
//   since: string;
//   workType: string;
//   shopAddress: string;
//   shopCity: string;
//   otherInfo: string;
//   profilepic: File | null;
//   aadhaarFile: File | null;
//   aadhaarFileBack: File | null;
// };
// let cityAry=["Bathinda","Bombay","bhudni","Agra","Alamgarh","Abohar","Aligarh","Delhi","Manali","Chandigarh","Barnala","Faridabad","Ludhiana"];
// const initialObject={
//      emailid: "",
//     name: "",
//     contact: "",
//     address: "",
//     city: "",
//     aadhaarNo: "",
//     category: "",
//     speciality: "",
//     website: "",
//     since: "",
//     workType: "",
//     shopAddress: "",
//     shopCity: "",
//     otherInfo: "",
//     profilepic: null,
//     aadhaarFile: null,
//     aadhaarFileBack:null
// }

// const ProfileSignup = () => {
//   const [formData, setFormData] = useState<FormDataType>(initialObject);
//   const[prev,setPrev]=useState<string|null>(null);
//   const[prev1,setPrev1]=useState<string|null>(null);
//   const[prev2,setPrev2]=useState<string|null>(null);
    
 

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//      const { name, value} = e.target ;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//  const uniqueCities=cityAry.map((obj)=>obj);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//        console.log(formData);
//        let url="http://localhost:2007/tailor/tailorprofilesignup";
//        let frmData=new FormData();
//        frmData.append("emailid",formData.emailid);
//        frmData.append("name",formData.name);
//        frmData.append("contact",formData.contact);
//        frmData.append("address",formData.address);
//         frmData.append("city",formData.city);
//         frmData.append("aadhaarNo",formData.aadhaarNo);
//          frmData.append("category",formData.category);
//           frmData.append("speciality",formData.speciality);
//            frmData.append("website",formData.website);
//             frmData.append("since",formData.since);
//              frmData.append("workType",formData.workType);
//               frmData.append("shopAddress",formData.shopAddress);
//                frmData.append("shopCity",formData.shopCity);
//                 frmData.append("otherInfo",formData.otherInfo);
//        if (formData.profilepic) {frmData.append("profilepic", formData.profilepic);}
// if (formData.aadhaarFile) {frmData.append("aadhaarFile", formData.aadhaarFile);}
//        // let response=await axios.post(url, frmData, {headers: {'Content-Type':'multipart/form-data'}});
//        // alert(JSON.stringify(response))
       
//        let response=await axios.post(url, frmData, {headers: {'Content-Type': 'multipart/form-data'} });
//        alert(JSON.stringify(response))
//       //  setFormData(initialObject);
//       //  setPrev(null);
//       //  setPrev1(null);
  
            
//        }
      
  
//   function updatePicAndSetPreview(event:React.ChangeEvent<HTMLFormElement|HTMLInputElement>)
//     {
//       let selFileObj=event.target.files[0];
//        setFormData((prev)=>(
//           {...prev,["aadhaarFile"]:selFileObj} ))
//           const prevObj=URL.createObjectURL(selFileObj);
//           setPrev(prevObj);   
     
//       if (selFileObj) {
//       handleExtractAadhar(selFileObj); // pass file directly
//     }
    
    
         
          
//     }
//  function updatePicAndSetPreview1(event:React.ChangeEvent<HTMLFormElement|HTMLInputElement>)
//     {
//       let selFileObj1=event.target.files[0];
//        setFormData((prev1)=>(
//           {...prev1,["profilepic"]:selFileObj1} ))
//           const prevObj1=URL.createObjectURL(selFileObj1);
//           setPrev1(prevObj1);
         
          
//     }
//     function updatePicAndSetPreview2(event:React.ChangeEvent<HTMLFormElement|HTMLInputElement>)
//     {
//       let selFileObj2=event.target.files[0];
//        setFormData((prev2)=>(
//           {...prev2,["aadhaarFileBack"]:selFileObj2} ))
//           const prevObj1=URL.createObjectURL(selFileObj2);
//           setPrev1(prevObj1);
         
          
//     }
//         async function doFetch()
//       {
//         let url="http://localhost:2007/tailor/tailorprofilesearch";
//          let response1= await axios.post(url,{emailid:formData.emailid},{headers: { "Content-Type": "application/x-www-form-urlencoded" }});
//           alert(JSON.stringify(response1));
//           if(response1.data.doc)
//           {
         
//          setFormData(response1.data.doc);
//          setPrev1(response1.data.doc.picurl)
//           setPrev(response1.data.doc.picurl1);
//           }
          
//           // alert(JSON.stringify(response1));
//       }

//     const doUpdate =  async () => {
//     console.log(formData);
//     let url="http://localhost:2007/tailor/tailorprofileupdate";
//     let frmData=new FormData();
//      frmData.append("emailid",formData.emailid);
//        frmData.append("name",formData.name);
//        frmData.append("contact",formData.contact);
//        frmData.append("address",formData.address);
//         frmData.append("city",formData.city);
//         frmData.append("aadhaarNo",formData.aadhaarNo);
//          frmData.append("category",formData.category);
//           frmData.append("speciality",formData.speciality);
//            frmData.append("website",formData.website);
//             frmData.append("since",formData.since);
//              frmData.append("workType",formData.workType);
//               frmData.append("shopAddress",formData.shopAddress);
//                frmData.append("shopCity",formData.shopCity);
//                 frmData.append("otherInfo",formData.otherInfo);
//        if (formData.profilepic) {frmData.append("profilepic", formData.profilepic);}
// if (formData.aadhaarFile) {frmData.append("aadhaarFile", formData.aadhaarFile);}
  
    
    
//     let resp=await axios.post(url, frmData, {headers: {'Content-Type': 'multipart/form-data'} });
//     alert(JSON.stringify(resp))
//   };
// // ----------------------------------------------------Adhaar Card Extraction-----------------------------------------------



// async function handleExtractAadhar(fileParam:any) {
//   // const file = formData.aadhaarFile; // your existing state variable
//    const file = fileParam || formData.aadhaarFile;

//   console.log("FILE:", file);

//   if (!file) {
//     alert("Please select Aadhaar card first");
//     return;
//   }

//   // Avoid variable name conflict with your state
//   const aadhaarFormData = new FormData();
//   aadhaarFormData.append("aadhaarFile", file);

//   try {
//     const response = await axios.post(
//       "http://localhost:2007/aadhaar/extractaadhaar",
//       aadhaarFormData
//     );
   

//     console.log("OCR RESPONSE:", response.data);

   
//   if (response.data.status) {
//     // Map gender to match dropdown values
//    let genderFromAPI = "";
// if (response.data.gender) {
//   const g = response.data.gender.toLowerCase();
//   if (g === "women") genderFromAPI = "women";      
//   else if (g === "men") genderFromAPI = "men";     
// }
//      setFormData(prev => ({
//       ...prev,
//       aadhaarNo: response.data.aadhaarNo || "",
//       name: response.data.name || "",
//       category: genderFromAPI
//     }));
//      if (!response.data.name) {
//       alert("Could not extract name automatically, please enter manually");
//     } else {
//       alert("Aadhaar Data Extracted ✅");
//     }

      
//     } else {
//       alert("OCR Failed");
//     }
//   } catch (err) {
//     console.log(err);
//     alert("Server Error");
//   }
//   // In your frontend just show a message if name is empty after extraction

// }


// const Navbar = () => {
//   const navigate = useNavigate();
//   return (
//     <nav className="w-full bg-purple-800 px-6 py-3 flex items-center shadow-md">
//       <span className="text-white text-xl font-italic mr-auto">FitlyMade 🧵</span>
//       <button
//         onClick={() => navigate("/tailor-dashboard")}
//         className="text-white bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-md transition font-medium"
//       >
//         GoBack
//       </button>
//     </nav>
//   );
// };

// const Footer = () => {
//   return (
//     <footer className="w-full bg-purple-800 px-6 py-6 flex items-center justify-center shadow-inner mt-auto">
//       <p className="text-white text-sm">
//         © {new Date().getFullYear()} FitlyMade. All rights reserved.
//       </p>
//     </footer>
//   );
// };
  
  
// // --------------------------------------------------------
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
//        <Navbar /> 
//        <div className="flex justify-center p-6 flex-1">  
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-6xl bg-white/80 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-3xl p-10"
//       >
//         <h2 className="text-3xl font-bold text-purple-800 text-center mb-10">
//           Tailor's Profile
//         </h2>

//         {/* TOP SECTION */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {/* LEFT SIDE */}
//           <div className="md:col-span-2 space-y-6">
//             <h3 className="text-xl font-bold text-gray-800 border-b pb-3">
//             Personal Information
//           </h3>
//             <input
//               name="emailid"
//               placeholder="Email Address"
//               value={formData.emailid}
//               onChange={handleChange}
//               className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
//             />

//             <div className="grid md:grid-cols-2 gap-6">
//               <input
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               />

//               <input
//                 name="contact"
//                 placeholder="Contact Number"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               />
//             </div>

//             <input
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             />

//             <div className="grid md:grid-cols-2 gap-6">
//               <input
//                 name="city"
//                 placeholder="City"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               />

//               <input
//                 name="aadhaarNo"
//                 placeholder="Aadhaar Number"
//                 value={formData.aadhaarNo}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               />
//             </div>

//             {/* <div className="flex gap-4">
//               {/* <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Upload Aadhaar Card
//               </label> */}
//               {/* <input
//                 type="file"
//                 name="aadhaarFile"
//                 onChange={updatePicAndSetPreview}
//                 className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-5 file:rounded-xl file:border-0 file:bg-indigo-100 file:text-indigo-700 file:font-medium hover:file:bg-indigo-200 transition"
//               />
//               <img src={prev} alt="" className="w-[200px] mt-2 h-28 rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
//           />
//             </div>
//           </div>  */}
//           <div className="flex-1">
//           <h4 className="  font-bold text-black-100">Upload Aadhaar Front</h4>
//            <div className="  mt-4 flex gap-4">
//             <div className="h-40 ">

//          <input type="file" name="aadhaarFile" className=" w-full bg-purple-400 rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" onChange={updatePicAndSetPreview}
         
//           />
//           </div>
        
//             <img src={prev} alt="" className="w-[300px]  rounded-2xl h-40 border-2 border-dashed border-indigo-300 bg-indigo-50/40  px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
//           />
         
//           </div>
//           </div>
//           </div>
//           {/* ----------------------- */}
//           {/* Aadhaar Back */}
//           <div className="flex-1">
// <h4 className="font-bold text-black-100 mt-4">Upload Aadhaar Back</h4>
// <div className="mt-4 flex gap-4">
//   <div className="h-40">
//     <input
//       type="file"
//       name="aadhaarBack"
//       className="w-full bg-purple-400 rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
//       onChange={updatePicAndSetPreview2}
//     />
//   </div>
//   <img
//     src={prev2}
//     alt=""
//     className="w-[300px] rounded-2xl h-40 border-2 border-dashed border-indigo-300 bg-indigo-50/40 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
//   />
// </div>
// </div>
//           {/* ------------------------------ */}

//           {/* PROFILE PIC */}
//           <div>
//            <h4 className="text-black-700 font-bold mb-4">
//               Upload Profile Picture
//             </h4>
          
//           <div className=" ">
//             {/* <h4 className="text-indigo-700 font-semibold mb-4">
//               Upload Profile Picture
//             </h4> */}
//             {/* <input
//               type="file"
//               name="profilepic"
//               onChange={handleChange}
//               className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-5 file:rounded-xl file:border-0 file:bg-indigo-600 file:text-white file:font-medium hover:file:bg-indigo-700 transition"
//             /> */}
            
//             <img src={prev1} alt="" className="w-[300px]  rounded-2xl h-40 border-2 border-dashed border-indigo-300 bg-indigo-50/40  px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           </div>
//            <div className="h-40 mt-2 w-[200px] ">

//          <input type="file" name="profilepic" className=" w-full bg-purple-400  placeholder:'Browse'rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" onChange={updatePicAndSetPreview1}
//           />
//           </div>
//           </div>
//         </div>
        
        

//         {/* PROFESSIONAL INFO */}
//         <div className="mt-14 space-y-8">
//           <h3 className="text-xl font-bold text-gray-800 border-b pb-3">
//             Professional Information
//           </h3>

//           <div className="grid md:grid-cols-2 gap-6">
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             >
//               <option value="" disabled>Select Gender</option>
//               <option value="men">Men</option>
//               <option value="women">Women</option>
//               <option value="children">Children</option>
//               <option value="both">Both</option>
//             </select>

//             <input
//               name="speciality"
//               placeholder="Speciality"
//               value={formData.speciality}
//               onChange={handleChange}
//               className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             />
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             <input
//               name="website"
//               placeholder="Website / Instagram"
//               value={formData.website}
//               onChange={handleChange}
//               className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             />

//             <input
//               name="since"
//               placeholder="Working Since"
//               value={formData.since}
//               onChange={handleChange}
//               className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             />

//             <select
//               name="workType"
//               value={formData.workType}
//               onChange={handleChange}
//               className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition "
//             >
//               <option value="" disabled> Select Work Type</option>
//               <option value="home">Home</option>
//               <option value="shop">Shop</option>
//               <option value="both">Both</option>
//             </select>
//           </div>
// {/* 
//           {(formData.workType === "shop" ||
//             formData.workType === "both") && ( */}
//             <div className="grid md:grid-cols-2 gap-6">
//               {/* <input
//                 name="shopAddress" disabled
//                 placeholder="Shop Address"
//                 value={formData.shopAddress}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               /> */}
//               {(formData.workType=="shop"||formData.workType=="both")&&(<input
//                 name="shopAddress" 
//                 placeholder="Shop Address"
//                 value={formData.shopAddress}
//                 onChange={handleChange} autoFocus
//                 className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               />)}

//                {/* <input
//             //     name="shopCity"
//             //     placeholder="Shop City"
//             //     value={formData.shopCity}
//             //     onChange={handleChange}
//             //     className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             //   /> */}
//                 <select
//               name="shopCity"
//               value={formData.shopCity}
//               onChange={handleChange}
//               className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:Select City"
//             >
//               <option value="" disabled>Select City</option>
//               {
//                  uniqueCities.map((str)=>
//              {
//               return <option value={str}>{str}</option>
//              })

//               }
              
//             </select>
              

//             </div>
       

//           <textarea
//             name="otherInfo"
//             placeholder="Additional Information"
//             value={formData.otherInfo}
//             onChange={handleChange}
//             className="w-full border border-gray-300 bg-white rounded-xl px-4 py-4 text-sm shadow-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//           />
//         </div>
//         <div className="flex gap-4">

//       <button type="submit"
           
//             className="w-1/2 ml-2 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
//           >
//             Save
//           </button>
//         <button type="button"
           
//             className="w-1/2 ml-2 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition" onClick={doUpdate}
//           >
//             Update
//           </button>
//           <button type="button"
           
//             className="w-1/2 ml-2 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition" onClick={doFetch}
//           >
//           Find
//           </button>
//           </div>
       
        
//       </form>
//        {/* <Footer /> */}
//      </div> 
//      <Footer></Footer>
//     </div>
//   );
// };

// export default ProfileSignup;

// ----------------------------------
import React, { useState } from "react";
 import axios from "axios";
 import { useNavigate } from "react-router-dom";

type FormDataType = {
  emailid: string;
  name: string;
  contact: string;
  address: string;
  city: string;
  aadhaarNo: string;
  category: string;
  speciality: string;
  website: string;
  since: string;
  workType: string;
  shopAddress: string;
  shopCity: string;
  otherInfo: string;
  profilepic: File | null;
  aadhaarFile: File | null;
  aadhaarFileBack: File | null;
};
let cityAry=["Bathinda","Bombay","bhudni","Agra","Alamgarh","Abohar","Aligarh","Delhi","Manali","Chandigarh","Barnala","Faridabad","Ludhiana"];
const initialObject={
     emailid: "",
    name: "",
    contact: "",
    address: "",
    city: "",
    aadhaarNo: "",
    category: "",
    speciality: "",
    website: "",
    since: "",
    workType: "",
    shopAddress: "",
    shopCity: "",
    otherInfo: "",
    profilepic: null,
    aadhaarFile: null,
    aadhaarFileBack:null
}

const ProfileSignup = () => {
  const [formData, setFormData] = useState<FormDataType>(initialObject);
  const[prev,setPrev]=useState<string|null>(null);
  const[prev1,setPrev1]=useState<string|null>(null);
  const[prev2,setPrev2]=useState<string|null>(null);
    
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
     const { name, value} = e.target ;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
 const uniqueCities=cityAry.map((obj)=>obj);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
       console.log(formData);
       let url="http://localhost:2007/tailor/tailorprofilesignup";
       let token = localStorage.getItem("token")
       let frmData=new FormData();
       frmData.append("emailid",formData.emailid);
       frmData.append("name",formData.name);
       frmData.append("contact",formData.contact);
       frmData.append("address",formData.address);
        frmData.append("city",formData.city);
        frmData.append("aadhaarNo",formData.aadhaarNo);
         frmData.append("category",formData.category);
          frmData.append("speciality",formData.speciality);
           frmData.append("website",formData.website);
            frmData.append("since",formData.since);
             frmData.append("workType",formData.workType);
              frmData.append("shopAddress",formData.shopAddress);
               frmData.append("shopCity",formData.shopCity);
                frmData.append("otherInfo",formData.otherInfo);
       if (formData.profilepic) {frmData.append("profilepic", formData.profilepic);}
       if (formData.aadhaarFile) {frmData.append("aadhaarFile", formData.aadhaarFile);}
       if (formData.aadhaarFileBack) {frmData.append("aadhaarFileBack", formData.aadhaarFileBack);}
       
       let response=await axios.post(url, frmData, {headers: {'Content-Type': 'multipart/form-data','authorization' : `Bearer ${token}`} });
       alert(JSON.stringify(response))
       }
      
  function updatePicAndSetPreview(event:React.ChangeEvent<HTMLFormElement|HTMLInputElement>)
    {
      let selFileObj=event.target.files[0];
       setFormData((prev)=>(
          {...prev,["aadhaarFile"]:selFileObj} ))
          const prevObj=URL.createObjectURL(selFileObj);
          setPrev(prevObj);   
      
      if (selFileObj) {
  handleExtractAadharFront(selFileObj);
}
    }
    

 function updatePicAndSetPreview1(event:React.ChangeEvent<HTMLFormElement|HTMLInputElement>)
    {
      let selFileObj1=event.target.files[0];
       setFormData((prev1)=>(
          {...prev1,["profilepic"]:selFileObj1} ))
          const prevObj1=URL.createObjectURL(selFileObj1);
          setPrev1(prevObj1);
    }

    function updatePicAndSetPreview2(event:React.ChangeEvent<HTMLFormElement|HTMLInputElement>)
    {
      let selFileObj2=event.target.files[0];
       setFormData((prev2)=>(
          {...prev2,["aadhaarFileBack"]:selFileObj2} ))
          const prevObj2=URL.createObjectURL(selFileObj2);
          setPrev2(prevObj2);
          if (selFileObj2) {
  handleExtractAadharBack(selFileObj2);
}
    }

        async function doFetch()
      {
        let url="http://localhost:2007/tailor/tailorprofilesearch";
        let token = localStorage.getItem("token")
         let response1= await axios.post(url,{emailid:formData.emailid},{headers: { "Content-Type": "application/x-www-form-urlencoded" ,'authorization' : `Bearer ${token}`}});
          alert(JSON.stringify(response1));
          if(response1.data.doc)
          {
         setFormData(response1.data.doc);
         setPrev1(response1.data.doc.picurl)
          setPrev(response1.data.doc.picurl1);
          setPrev2(response1.data.doc.picurl2);
          }
      }

    const doUpdate =  async () => {
    console.log(formData);
    let url="http://localhost:2007/tailor/tailorprofileupdate";
    let token = localStorage.getItem("token")
    let frmData=new FormData();
     frmData.append("emailid",formData.emailid);
       frmData.append("name",formData.name);
       frmData.append("contact",formData.contact);
       frmData.append("address",formData.address);
        frmData.append("city",formData.city);
        frmData.append("aadhaarNo",formData.aadhaarNo);
         frmData.append("category",formData.category);
          frmData.append("speciality",formData.speciality);
           frmData.append("website",formData.website);
            frmData.append("since",formData.since);
             frmData.append("workType",formData.workType);
              frmData.append("shopAddress",formData.shopAddress);
               frmData.append("shopCity",formData.shopCity);
                frmData.append("otherInfo",formData.otherInfo);
       if (formData.profilepic) {frmData.append("profilepic", formData.profilepic);}
       if (formData.aadhaarFile) {frmData.append("aadhaarFile", formData.aadhaarFile);}
       if (formData.aadhaarFileBack) {frmData.append("aadhaarFileBack", formData.aadhaarFileBack);}
    
    let resp=await axios.post(url, frmData, {headers: {'Content-Type': 'multipart/form-data','authorization' : `Bearer ${token}`} });
    alert(JSON.stringify(resp))
  };

// async function handleExtractAadhar(fileParam:any) {
//    const file = fileParam || formData.aadhaarFile;
//   console.log("FILE:", file);
//   if (!file) {
//     alert("Please select Aadhaar card first");
//     return;
//   }
//   const aadhaarFormData = new FormData();
//   aadhaarFormData.append("aadhaarFile", file);
//   try {
//     const response = await axios.post(
//       "http://localhost:2007/aadhaar/extractaadhaar",
//       aadhaarFormData
//     );
//     console.log("OCR RESPONSE:", response.data);
//   if (response.data.status) {
//    let genderFromAPI = "";
// if (response.data.gender) {
//   const g = response.data.gender.toLowerCase();
//   if (g === "women") genderFromAPI = "women";      
//   else if (g === "men") genderFromAPI = "men";     
// }
//      setFormData(prev => ({
//       ...prev,
//       aadhaarNo: response.data.aadhaarNo || "",
//       name: response.data.name || "",
//       category: genderFromAPI
//     }));
//      if (!response.data.name) {
//       alert("Could not extract name automatically, please enter manually");
//     } else {
//       alert("Aadhaar Data Extracted ✅");
//     }
//     } else {
//       alert("OCR Failed");
//     }
//   } catch (err) {
//     console.log(err);
//     alert("Server Error");
//   }
// }

// Gemini Function for sending adhaar front to server to receive json data from genai.js

async function handleExtractAadharFront(fileParam: any) {
  const aadhaarFormData = new FormData();
  aadhaarFormData.append("aadhaarFile", fileParam);
  try {
    const response = await axios.post("http://localhost:2007/aadhaar/extractaadhaarfront", aadhaarFormData);
    const gender = response.data.obj.gender?.toLowerCase();
const mappedGender = gender === "female" ? "women" : gender === "male" ? "men" : "";
    if (response.data.status) {
      setFormData(prev => ({
        ...prev,
        aadhaarNo: response.data.obj.aadhaarNo || "",
        name: response.data.obj.name || "",
         category: mappedGender
      }));
      alert("Aadhaar Front Extracted ✅");
    }
  } catch (err) {
    alert("Server Error");
  }
}

async function handleExtractAadharBack(fileParam: any) {
  const aadhaarFormData = new FormData();
  aadhaarFormData.append("aadhaarFileBack", fileParam);
  try {
    const response = await axios.post("http://localhost:2007/aadhaar/extractaadhaarback", aadhaarFormData);
    console.log("Back response:", response.data);
    if (response.data.status) {
      setFormData(prev => ({
        ...prev,
        address: response.data.obj.address || "",
        city: response.data.obj.city || ""
      }));
      alert("Aadhaar Back Extracted ✅");
    }
  } catch (err) {
    alert("Server Error");
  }
}
// -------------------------------------------------------------------------------
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-purple-800 px-6 py-3 flex items-center shadow-md">
      <span className="text-white text-xl font-italic mr-auto">FitlyMade 🧵</span>
      <button
        onClick={() => navigate("/tailor-dashboard")}
        className="text-white bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-md transition font-medium"
      >
        GoBack
      </button>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-purple-800 px-6 py-6 flex items-center justify-center shadow-inner mt-auto">
      <p className="text-white text-sm">
        © {new Date().getFullYear()} FitlyMade. All rights reserved.
      </p>
    </footer>
  );
};
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
       <Navbar /> 
       <div className="flex justify-center p-6 flex-1">  
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl bg-white/80 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-3xl p-10"
      >
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-10">
          Tailor's Profile
        </h2>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-3">
              Personal Information
            </h3>
            <input
              name="emailid"
              placeholder="Email Address"
              value={formData.emailid}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <input
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <input
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <input
                name="aadhaarNo"
                placeholder="Aadhaar Number"
                value={formData.aadhaarNo}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            
            <div className="flex flex-col md:flex-row gap-6">
              
              {/* Aadhaar Front */}
              <div className="flex-1">
                <h4 className="font-bold text-black-100 mb-2">Upload Aadhaar Front</h4>
                <div className="flex flex-col gap-2">
                  <input
                    type="file"
                    name="aadhaarFile"
                    className="w-full bg-purple-400 rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={updatePicAndSetPreview}
                  />
                  <img
                    src={prev}
                    alt=""
                    className="w-full rounded-2xl h-40 border-2 border-dashed border-indigo-300 bg-indigo-50/40 px-3 py-2"
                  />
                </div>
              </div>

              {/* Aadhaar Back */}
              <div className="flex-1">
                <h4 className="font-bold text-black-100 mb-2">Upload Aadhaar Back</h4>
                <div className="flex flex-col gap-2">
                  <input
                    type="file"
                    name="aadhaarFileBack"
                    className="w-full bg-purple-400 rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={updatePicAndSetPreview2}
                  />
                  <img
                    src={prev2}
                    alt=""
                    className="w-full rounded-2xl h-40 border-2 border-dashed border-indigo-300 bg-indigo-50/40 px-3 py-2"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* PROFILE PIC - unchanged */}
          <div>
           <h4 className="text-black-700 font-bold mb-4">
              Upload Profile Picture
            </h4>
          <div>
            <img src={prev1} alt="" className="w-[300px] rounded-2xl h-40 border-2 border-dashed border-indigo-300 bg-indigo-50/40 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          </div>
           <div className="h-40 mt-2 w-[200px]">
             <input type="file" name="profilepic" className="w-full bg-purple-400 placeholder:'Browse'rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" onChange={updatePicAndSetPreview1}
          />
          </div>
          </div>

        </div>

        {/* PROFESSIONAL INFO - unchanged */}
        <div className="mt-14 space-y-8">
          <h3 className="text-xl font-bold text-gray-800 border-b pb-3">
            Professional Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              <option value="" disabled>Select Gender</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="children">Children</option>
              <option value="both">Both</option>
            </select>

            <input
              name="speciality"
              placeholder="Speciality"
              value={formData.speciality}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <input
              name="website"
              placeholder="Website / Instagram"
              value={formData.website}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <input
              name="since"
              placeholder="Working Since"
              value={formData.since}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <select
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              <option value="" disabled>Select Work Type</option>
              <option value="home">Home</option>
              <option value="shop">Shop</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {(formData.workType=="shop"||formData.workType=="both")&&(
              <input
                name="shopAddress" 
                placeholder="Shop Address"
                value={formData.shopAddress}
                onChange={handleChange} autoFocus
                className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            )}
            <select
              name="shopCity"
              value={formData.shopCity}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              <option value="" disabled>Select City</option>
              {uniqueCities.map((str) => {
                return <option value={str}>{str}</option>
              })}
            </select>
          </div>

          <textarea
            name="otherInfo"
            placeholder="Additional Information"
            value={formData.otherInfo}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-white rounded-xl px-4 py-4 text-sm shadow-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div className="flex gap-4">
          <button type="submit"
            className="w-1/2 ml-2 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Save
          </button>
          <button type="button"
            className="w-1/2 ml-2 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition" onClick={doUpdate}
          >
            Update
          </button>
          <button type="button"
            className="w-1/2 ml-2 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition" onClick={doFetch}
          >
            Find
          </button>
        </div>
      </form>
     </div> 
     <Footer></Footer>
    </div>
  );
};

export default ProfileSignup;