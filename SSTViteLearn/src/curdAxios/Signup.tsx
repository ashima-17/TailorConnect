// import { useState } from "react";
// import axios from "axios"
// //  import { CgMail } from "react-icons/cg";


// type SignupForm = {
//   emailid: string;
//   password: string;
//   userType: string;
//   //  status:boolean
//   dos:String;
// };
// const InitialState=
// {
//    emailid: "",
//     password: "",
//     userType:"",
//     //  status:true,
//     dos:""

// }

// const Signup = () => {
//   const [formData, setFormData] = useState<SignupForm>(InitialState);
    
//  const [errors, setErrors] = useState({
//   emailid: "",
//   password: "",
//   userType:""
  
// });


// const validate = () => {
//   let newErrors = { emailid: "", password: "" ,userType:""};
//   let valid = true;

//   // Email validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!formData.emailid) {
//     newErrors.emailid = "Email is required";
//     valid = false;
//   } else if (!emailRegex.test(formData.emailid)) {
//     newErrors.emailid = "Invalid email format";
//     valid = false;
//   }

//   // Password validation
//   if (!formData.password) {
//     newErrors.password = "Password is required";
//     valid = false;
//   } else if (formData.password.length < 6) {
//     newErrors.password = "Password must be at least 6 characters";
//     valid = false;
//   }
//   if (!formData.userType) {
//     newErrors.userType= "UserType is required";
//     valid = false;
//   }
//   setErrors(newErrors);
//   return valid;
//   }

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
    

//   // if (!validate()) return;

//   };
 
  
//   const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
   

//     e.preventDefault();
//     //  setErrors(newErrors);
//      if (!validate()) return;
    
//     console.log(formData);
//     let url="http://localhost:2007/user/signup"
//     let response=await axios.post(url, formData, {headers: { "Content-Type": "application/x-www-form-urlencoded" }});
//      alert(JSON.stringify(response))
//     //  if (!validate()) return;
//     setFormData(InitialState);
//   };
  


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-100">
      
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-5"
//       >
//         <h1 className="text-2xl font-bold text-center text-blue-700">
//           Signup Here 📧
//         </h1>


//         <input
//           type="email"
//           name="emailid"
//           placeholder="Email"
//           value={formData.emailid}
//           onChange={handleChange}
//           className="w-full p-3 border-2 border-blue-300 rounded-md
//                      focus:outline-none focus:border-blue-500" 
                     
//         />
//          {errors.emailid && (
//             <p className="text-red-500 text-sm mt-1">{errors.emailid}</p>
//           )}

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full p-3 border-2 border-blue-300 rounded-md
//                      focus:outline-none focus:border-blue-500"
//         />
//         {errors.password && (
//   <p className="text-red-500 text-sm">{errors.password}</p>
// )}

//  {/* <input
//           type="text"
//           name="userType"
//           placeholder="userType"
//           value={formData.userType}
//           onChange={handleChange}
//           className="w-full p-3 border-2 border-blue-300 rounded-md
//                      focus:outline-none focus:border-blue-500"
//         /> */}
//         <select name="userType" value={formData.userType}  className="w-full p-3 border-2 border-blue-300 focus:outline-none focus:border-blue-500 placeholder:Select UserType" onChange={handleChange} >
//            <option value="" disabled>Select User Type</option> 
//           <option value="tailor">Tailor</option>
//           <option value="customer">Customer</option>
//         </select>
//         {errors.userType && (
//             <p className="text-red-500 text-sm mt-1">{errors.userType}</p>
//           )}
      
       

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-3 rounded-md
//                      hover:bg-blue-700 transition"
//         >
//           Sign Up
//         </button>
//       </form>
     

//     </div>
//   );
// };


// export default Signup;



// -------------------------------------------------------------------
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type SignupForm = {
  emailid: string;
  password: string;
  userType: string;
  dos: String;
};

const InitialState = {
  emailid: "",
  password: "",
  userType: "",
  dos: "",
};

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-blue-700 px-6 py-3 flex items-center shadow-md">
      <span className="text-white text-xl font-italic mr-auto">FitlyMade 🧵</span>
      <button
        onClick={() => navigate("/")}
        className="text-white bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md transition font-medium"
      >
        Home
      </button>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-blue-700 px-6 py-4 flex items-center justify-center shadow-inner mt-auto">
      <p className="text-white text-sm">
        © {new Date().getFullYear()} FitlyMade. All rights reserved.
      </p>
    </footer>
  );
};

const Signup = () => {
  const [formData, setFormData] = useState<SignupForm>(InitialState);

  const [errors, setErrors] = useState({
    emailid: "",
    password: "",
    userType: "",
  });

  const validate = () => {
    let newErrors = { emailid: "", password: "", userType: "" };
    let valid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.emailid) {
      newErrors.emailid = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.emailid)) {
      newErrors.emailid = "Invalid email format";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (!formData.userType) {
      newErrors.userType = "UserType is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    console.log(formData);
    let url = "http://localhost:2007/user/signup";
    let response = await axios.post(url, formData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    alert(JSON.stringify(response));
    setFormData(InitialState);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      <Navbar />

      <div className="flex items-center justify-center flex-1">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-5"
        >
          <h1 className="text-2xl font-bold text-center text-blue-700">
            Signup Here 📧
          </h1>

          <input
            type="email"
            name="emailid"
            placeholder="Email"
            value={formData.emailid}
            onChange={handleChange}
            className="w-full p-3 border-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.emailid && (
            <p className="text-red-500 text-sm mt-1">{errors.emailid}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-full p-3 border-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>Select User Type</option>
            <option value="tailor">Tailor</option>
            <option value="customer">Customer</option>
          </select>
          {errors.userType && (
            <p className="text-red-500 text-sm mt-1">{errors.userType}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;