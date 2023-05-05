import { Link } from "react-router-dom";
import Login from "../../Pages/Login";

function NavList(props) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
  const active = localStorage.getItem('loggedin');
  console.log(active);
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/">Home</a>
        </li>
       
        <li
          style={{ transition: "all 0.3s"}}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/gallery/page-1"}>
            Exercises
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s",display: active==='user'? '':'none' }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/schedule"}>
            Your QR
          </Link>
        </li>
        {/* <li
          style={{ transition: "all 0.3s",display: active==='user'? '':'none' }}
          className=" cursor-pointer hover:text-[#ff0336]"
          onClick={localStorage.clear()}
        >
          <Link onClick={goTop} to={"/signup"}>
            Logout
          </Link>
        </li> */}
        {/* <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/blog"}>
            Blog
          </Link>
        </li> */}
        {/* <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/pricing"}>
            Pricing
          </Link>
        </li> */}
        <li
          style={{ transition: "all 0.3s",display: active==='admin'? '':'none' }}
         
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/classes"} >
Scan your QR          </Link>
        </li>
         <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/about"}>
            About
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/contact"}>
            Contact
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s",display: active==='user' || active==='admin'? '':'none' }}
          className=" cursor-pointer hover:text-[#ff0336]"
          onClick={(e)=>{localStorage.clear()}}
        >
          <Link onClick={goTop} to={"/signup"}>
            Logout
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;
