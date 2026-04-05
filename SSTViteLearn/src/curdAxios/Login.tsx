
// export default Login;
// import { useState } from "react";
// import axios from "axios"
// import { useNavigate } from "react-router-dom";
// const initialState={
//   emailid: "",
//     password: "",

// }

// ;


// const Login = () => {
//   const [formData, setFormData] = useState(initialState)
   
//   const [errors, setErrors] = useState({
//   emailid: "",
//   password: "",
// });
// const navigate = useNavigate();
//  const validate = () => {
//   let newErrors = { emailid: "", password: "" };
//   let valid = true;

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!formData.emailid) {
//     newErrors.emailid = "Email is required";
//     valid = false;
//   } else if (!emailRegex.test(formData.emailid)) {
//     newErrors.emailid = "Invalid email format";
//     valid = false;
//   }

//   if (!formData.password) {
//     newErrors.password = "Password is required";
//     valid = false;
//   }

//   setErrors(newErrors);
//   return valid;
// };



//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     // if (!validate()) return;
     

//   };
 
//   const handleLogin = (userType: string) => {
//     if (userType === "tailor") {
//       navigate("/tailor-dashboard");
//     } else if (userType === "customer") {
//       navigate("/customer-dashboard");
//     }
//   };
 

//   const handleSubmit =  async(e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;
//     // console.log("Login Data:", formData);
//     // alert("Login submitted!");
//       let url="http://localhost:2007/user/login"
//         let response1=await axios.post(url, {emailid:formData.emailid,password:formData.password}, {headers: { "Content-Type": "application/x-www-form-urlencoded" }});
//          alert(JSON.stringify(response1))
//          const userType = response1.data.userType;
//          handleLogin(userType);
//          setFormData(initialState);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-100">
      
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-5"
//       >
//         <h1 className="text-2xl font-bold text-center text-blue-700">Login 📩</h1>

//         {/* Email */}
//         <input
//           type="email"
//           name="emailid"
//           placeholder="Email"
//           value={formData.emailid}
//           onChange={handleChange}
//           className="w-full p-3 border-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//           {errors.emailid && (
//             <p className="text-red-500 text-sm mt-1">{errors.emailid}</p>
//           )}

//         {/* Password */}
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full p-3 border-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//          {errors.password && (
//   <p className="text-red-500 text-sm">{errors.password}</p>
// )}

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// ---------------------------------------------------
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  emailid: "",
  password: "",
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

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({
    emailid: "",
    password: "",
  });
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = { emailid: "", password: "" };
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
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (userType: string) => {
    if (userType === "tailor") {
      navigate("/tailor-dashboard");
    } else if (userType === "customer") {
      navigate("/customer-dashboard");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    let url = "http://localhost:2007/user/login";
    let response1 = await axios.post(
      url,
      { emailid: formData.emailid, password: formData.password },
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    let jwt=response1.data.token;
    localStorage.setItem("token",jwt);
    alert(JSON.stringify(response1));
    const userType = response1.data.userType;
    handleLogin(userType);
    setFormData(initialState);
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
            Login 📩
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
      <Footer></Footer>

    </div>
  );
};

export default Login;