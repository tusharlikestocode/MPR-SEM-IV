import { useState } from "react";
import NavList from "../components/Nav/NavList";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { style } from "@mui/system";
import { SettingsApplications } from "@mui/icons-material";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setname]=useState("");
  // const { user, logIn } = UserAuth();
  // const navigate = useNavigate();
  const [error, setError] = useState("");
  const [active,setactive]=useState('');
  // active=true;
  
  const navigate = useNavigate();
  const Authenticate=(uname,upassword)=>{
    // const user_name=myVariable.name;
    if(upassword==password){           
    
      localStorage.setItem('loggedin', 'user');
      localStorage.setItem('name',name);
      localStorage.setItem('email',email);
      navigate('/');
      window.alert('User Verified');
      
     
      return true;
    }
    else{
     
    localStorage.setItem('loggedin', 'false');
    return false;
    }
  }

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const handleSubmit = async (e) => {



  if(email==='admin@gmail.com' && password==="admin"){
    localStorage.setItem('loggedin', 'admin');
    navigate('/');



  }
  else{
 
    axios.get('http://localhost:3001/students/'+ email)
  .then(response => {
    console.log('reached')
    // Match the response with the outside JavaScript variable
    // const variable=response.data;
    // console.log(variable)
    const myVariable = response.data[0];

    // let {name}=response.data[0];
    // let {password}=response.data[2];
    // console.log('name is ' + name);
    const upassword=response.data[0].password;
    const uname=response.data[0].name;
    // console.log(password);
     // Output the variable to the console
    Authenticate(uname,upassword);

   

  })
  .catch(error => {
    console.error(error);
  });
  
  }
 
    e.preventDefault();
    
  };
  
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign In
          </h1>
        </div>
        {/* form  */}
        <NavList  myProp={active} / >
        <div className="page-padding py-[10rem] flex justify-center">
        

          <form
            

            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
            {error ? (
              <p className="text-white bg-[#ff0336] font-bold text-[1.6rem] px-10 py-5 text-center mb-10">
                Wrong email or password
              </p>
            ) : null}
            <label className="text-[2rem] text-white mb-3 font-medium ">
              Email
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="gymate@gymail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
              Password
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button
              type="submit"
              className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
            
             Sign In
            
            </button>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">New to Gymate?</p>
              <Link
                to="/signup"
                className="text-[#ff0336] font-bold text-[1.5rem]"
              >
                Sign Up
              </Link>
            </div>
            {/* <p className="text-[#ffffffbc] text-[1.4rem] mt-3">
              <span className="text-[#ff0336]">Test Account</span> -
              gymate@gymail.com <span className="text-[#ff0336]"> / </span>
              testpassword123
            </p> */}
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Login;
