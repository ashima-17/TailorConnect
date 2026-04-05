
// import './App.css'
                import Signup from "./curdAxios/Signup"
           import Login from "./curdAxios/Login"
            import CustomerProfile from"./curdAxios/CustomerProfile"
                 import TailorProfile from "./curdAxios/TailorProfile"
             import RateAndReview from "./curdAxios/RateAndReview"
                  import FindTailor from "./curdAxios/FindTailor"
                   
                  
                  import {Routes,Route} from "react-router-dom"
import TailorDashboard from "./dashboards/TailorDashboard"
import CustomerDashboard from "./dashboards/CustomerDashboard"
import FrontPage from "./dashboards/Frontpage"

function App() {
  return (
    <>
       {/* <h1>Welcome My Dear Programmers</h1>  */}
                         {/* <Signup></Signup>               */}
                   {/* <Login></Login>             */}
                         {/* <CustomerProfile></CustomerProfile>                */}
               
                         {/* <TailorProfile></TailorProfile>               */}
                    {/* <RateAndReview></RateAndReview>   */}
                          {/* <FindTailor></FindTailor>          */}
                           {/* <CustomerDashboard></CustomerDashboard>  */}
                          {/* <TailorDashboard></TailorDashboard> */}
                           
                          {/* <FrontPage></FrontPage>  */}
                          
                          <Routes>
                               <Route path="/" element={<FrontPage />} />  
                               <Route path="/login" element={<Login></Login>} /> 
                               <Route path="/signup" element={<Signup></Signup>} /> 
                            <Route path="/tailor-dashboard" element={<TailorDashboard></TailorDashboard>}></Route>
                            <Route path="/customer-dashboard" element={<CustomerDashboard></CustomerDashboard>}></Route>
                            <Route path="/customerprofile" element={<CustomerProfile></CustomerProfile>} ></Route>
                                <Route path="/tailorreview" element={<RateAndReview></RateAndReview>} ></Route>
                                 <Route path="/searchtailor" element={<FindTailor></FindTailor>} ></Route>
                                  <Route path="/tailorprofile" element={<TailorProfile></TailorProfile>} ></Route>
                          </Routes>
                              </>
                               )


      
                                }



export default App
