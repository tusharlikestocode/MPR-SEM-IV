// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import axios from 'axios';
import { useState,useEffect } from 'react';

// _url='http://localhost:8000';
// axios.get('http://localhost:3001/students', {
//   responseType: "json",
// })
// .then(function (response) {
//   console.log(response.data);
 
 
//   // for (const property in listofgym) {
//   //   console.log(`${property}: ${listofgym[property].name}`);
//   //   console.log(typeof(listofgym[0].name));
    
//   // }
//   // console.log(typeof(d));

// })
// .catch(function (error) {
//   console.log(error);
// });
function Signup() {
  const [items,setitems]=useState([]);
  const [email, setEmail] = useState("");
  const [name,setname]=useState("");
  const [phone,setphone]=useState("");
  const [noofdays,setnoofdays]=useState("");
  const [password, setpassword] = useState("");
  const [address,setaddress]=useState("");
  const navigate = useNavigate();
  // const femail='tushar@gmail.com';
  const listofgymers=[];

  axios
  .get(`http://localhost:3001/students/gymer@gmail.com`, {
   
  })
  .then(function (response) {
    for(let key in response.data){
      listofgymers.push({...response.data[key],id:key})
    }
    console.log(listofgymers);
    

  });
  // useEffect(()=>{
  //   const fetchitems = async()=>{
  //     try{
  //       const response=await fetch(`http://localhost:3001/students?fields=name`);
  //       if(!response.ok) throw  Error('Did not received expected data')
  //       const listitems =await response.json();
  //       console.log(listitems);
  //       setitems(listitems);
  //       // setfetcherror(null);
  //     }catch(err){
  //     console.log(err.message);
  //     // setfetcherror(err.message);
  //     }finally{
  //       // setisloading(false);
  //     }
  //   }
  //   setTimeout(()=>{
  //     (async ()=> await fetchitems())();
  //   },2000)
    
  // },[])





 
// axios
//   .get(`?email=${femail}`)
//   .then(function (response) {
//     console.log(response.data);
//   });
// import axios from 'axios';
// axios.get('http://localhost:3001/students/', {
//     params: {
//       email:'tushar@gmail.com'
//     }
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
 
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = async (e) => {
    axios.post('http://localhost:3001/students', {
    name: name,
    password:password,
    email:email,
    phone: phone,
    noofdays:noofdays,
    address:address
    
   
    
  }
  
  )
  .then(function (response) {
    console.log(response);
    window.alert('New account created');
    navigate('/login');
  })
  .catch(function (error) {
    console.log(error);
    window.alert('Wrong detailes entred')
  
  });


  // axios
  // .get(`http://localhost:3001/students/`, {
    
  // })
  // .then(function (response) {
  //   const listitems=response.json();
  //   console.log(listitems);
  //   setitems(listitems);

  // });
  console.log('usercreated')
    e.preventDefault();

  };

  var container = document.getElementById("di-locations");

  // iterate locations
  for (var loc of items) {
    // iterate location properties
    for (var prop in loc) {
      if (Object.prototype.hasOwnProperty.call(loc, prop)) {
        //create and append grid item
        var item = document.createElement("DIV");
        item.classList.add(loc[prop]);
        item.innerHTML = loc[prop];
        container.appendChild(item);
      }
    }
  }
  return (
    <>
      <section className="login-section ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
         Sign Up 
           
          </h1>
        </div>
        {/* form  */}
        <div className="py-[10rem] flex justify-center page-padding">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
            <label className="text-[2rem] text-white mb-3 font-medium ">
              Email
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="gymate@gymail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label className="text-[2rem] text-white mb-3 font-medium ">
              Name
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="Gymate"
              type="text"
              onChange={(e) => setname(e.target.value)}
            ></input>
               <label className="text-[2rem] text-white mb-3 font-medium ">
              Address
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="India"
              type="text"
              onChange={(e) => setaddress(e.target.value)}
            ></input>
            <label className="text-[2rem] text-white mb-3 font-medium ">
              Phone no.
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="0000000000"
              type="number"
              onChange={(e) => setphone(e.target.value)}
            ></input>
             <label className="text-[2rem] text-white mb-3 font-medium ">
              No. of days of membership
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="365"
              type="number"
              onChange={(e) => setnoofdays(e.target.value)}
            ></input>
            <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
              Password
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="Password"
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            ></input>

            <button
              type="submit"
              className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              
                 Sign Up
          
            
            </button>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">Already have account?</p>
              <Link
                to="/login"
                className="text-[#ff0336] font-bold text-[1.5rem]"
              >
                Sign In
              </Link>
            </div>
            {/* <p className="text-[#ffffffbc] text-[1.3rem] mt-5">
              ( Make <span className="text-[#ff0336]">new Accout</span> or go to
              <span className="text-[#ff0336]"> Sign In</span> Page for Test
              Account )
            </p> */}
          </form>
          <div id="locations-grid">
  <div id="di-locations"></div>
</div>
        
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Signup;
