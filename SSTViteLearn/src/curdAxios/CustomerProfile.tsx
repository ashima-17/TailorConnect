
     import React, { useState } from "react";
     import axios from "axios";
     interface SignupFormState {
  emailid: string;
  profilepic:null|File;
  // pic:null|File
  name:string;
  address:string;
  city:string;
  state:string;
  gender:string;
  dos:String;
  // isEditMode:boolean;
}
import { useNavigate } from "react-router-dom";  // ✅ add this import at top

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full mb-4 bg-green-500 px-4 py-3 flex items-center shadow-md">
      <span className="text-white text-xl font-italic mr-auto">FitlyMade 🧵</span>
      <button
        onClick={() => navigate("/customer-dashboard")}
        className="text-white bg-green-500 hover:bg-green-400 px-4 py-1 rounded-md transition font-medium"
      >
        GoBack
      </button>
    </nav>
  );
};
let stateAry=["Punjab","Delhi","UttarPradesh","Uttarakhand","TamilNadu","Kerala","AndhraPradesh","Haryana"];

const CustomerSignup = () => {
  const [formData, setFormData] = useState<SignupFormState>({
    emailid: "",
    profilepic: null ,
    name: "",
    address: "",
    city: "",
    state: "",
    gender: "",
    dos:"",
    // isEditMode:true
  });
  const[prev,setPrev]=useState<string|null>(null);
   const[isEditMode,setState]=useState(true);
   const[errors,setErrors]=useState({emailid:""})
   const validateField=(name:string,value:string)=>
   {
    let error="";
    if(name=="emailid")
    {
      if(!value)
      {
        error="Emailid is required";
      }
      else if( !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      {
        error="Invalid Email format";
      }
    }
    return error;

   }
   

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    const { name, value} = e.target ;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    const errMsg=validateField(name,value);
    setErrors(prev=>({...prev,[name]:errMsg}));
  };
  const uniqueStates=stateAry.map((obj)=>obj);
  // alert(uniqueStates);

  const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
    console.log(formData);
    let url="https://tailor-connect-back.vercel.app/customer/customerprofilesignup";
    let token=localStorage.getItem("token")

    let frmData=new FormData();
    frmData.append("emailid",formData.emailid);
    frmData.append("name",formData.name);
    frmData.append("address",formData.address);
    frmData.append("city",formData.city);
     frmData.append("state",formData.state);
     frmData.append("gender",formData.gender);
    if(formData.profilepic)
      frmData.append("profilepic",formData.profilepic);
    // let response=await axios.post(url, frmData, {headers: {'Content-Type':'multipart/form-data'}});
    // alert(JSON.stringify(response))
    
    let response=await axios.post(url, frmData, {headers: {'Content-Type': 'multipart/form-data','authorization' : `Bearer ${token}`} });
    alert(JSON.stringify(response))
    setState(false);
  };
//   const handleUpdate = () => {
//     console.log("Update:", formData);
//   };
function updatePicAndSetPreview(event: React.ChangeEvent<HTMLFormElement>)
  {
    let selFileObj=event.target.files[0];
     setFormData((prev)=>(
        {...prev,["profilepic"]:selFileObj} ))
        const prevObj=URL.createObjectURL(selFileObj);
        setPrev(prevObj);
    


  }
  const Footer = () => {
  return (
    <footer className="w-full  bg-green-500 px-4 py-3 flex items-center justify-center shadow-inner mt-auto">
      <p className="text-white text-sm">
        © {new Date().getFullYear()} FitlyMade. All rights reserved.
      </p>
    </footer>
  );
};

  const handleUpdate =  async () => {
   
    console.log(formData);
    let url="https://tailor-connect-back.vercel.app/customer/customerprofileupdate";
     let token=localStorage.getItem("token");
    let frmData=new FormData();
    frmData.append("emailid",formData.emailid);
    frmData.append("name",formData.name);
    frmData.append("address",formData.address);
    frmData.append("city",formData.city);
     frmData.append("state",formData.state);
     frmData.append("gender",formData.gender);
    if(formData.profilepic)
      frmData.append("profilepic",formData.profilepic);
    // let response=await axios.post(url, frmData, {headers: {'Content-Type':'multipart/form-data'}});
    // alert(JSON.stringify(response))
    
    let response1=await axios.post(url, frmData, {headers: {'Content-Type': 'multipart/form-data','authorization' : `Bearer ${token}`} });
    alert(JSON.stringify(response1))
  };
  async function doFind()
  {
     let url="https://tailor-connect-back.vercel.app/customer/customerprofilesearch";
      let token=localStorage.getItem("token");
     let response2= await axios.post(url,{emailid:formData.emailid},{headers: { "Content-Type": "application/x-www-form-urlencoded" ,'authorization' : `Bearer ${token}`}});
   
    //  resp.data.doc.dos=resp.data.doc.dos.split("T")[0];
     alert(JSON.stringify(response2));
     if(response2.data.doc){
     setFormData(response2.data.doc);
     setPrev(response2.data.doc.picurl)
     }
   
    //  alert(JSON.stringify(response2));
      //  {!isEditMode&& <button type="button" className="w-1/2 ml-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition" onClick={handleUpdate}
      //     >
      //       Update
      //     </button>   }
      setState(false)
          
  }
  return (
    <div className=" min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex items-center justify-center flex-1">
        <form onSubmit={handleSubmit}>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border mb-3">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Profile🧑🏻</h2>

       <div className="flex gap-3">
          <input
            type="email"
            name="emailid"
            placeholder="Email ID"
            value={formData.emailid}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.emailid&&(<p className="text-red-500 text-sm">{errors.emailid}</p>)}
            <button type="button" className="w-1/2 ml-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition" onClick={doFind}
          >
            Find
          </button>

          </div>
          
          <div className="mt-4 flex gap-4">

         <input type="file" required name="profilepic" className=" w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" onChange={updatePicAndSetPreview as any}
          />
        
            <img src={prev} alt="" className="w-[200px] h-28 rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
         
          </div>
      

        <input
          type="text"
          name="name"
          placeholder="Name" required
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 mt-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="address"
          placeholder="Address" required
          value={formData.address}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-4 mb-4">
          <input
            type="text" required
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
          <select name="state" required value={formData.state} onChange={handleChange}   className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:Select State">
            <option value="" disabled>Select State</option>
            {
              uniqueStates.map((str)=>
             {
              return <option value={str}>{str}</option>
             })
            }
          </select>
        </div>
        

        <select
          name="gender" required
          value={formData.gender}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:Select Gender"
        >
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <div className="flex justify-between">
          {/* <button type="submit"
           
            className="w-1/2 mr-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>

          <button type="button" className="w-1/2 ml-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition" onClick={handleUpdate}
          >
            Update
          </button> */}
           {isEditMode&&  <button type="submit"
           
            className="w-1/2 mr-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>}
          {!isEditMode&& <button type="button" className="w-1/2 ml-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition" onClick={handleUpdate}
          >
            Update
          </button>}
        </div>
      </div>
      </form>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerSignup;
