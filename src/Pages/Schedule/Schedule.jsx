import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import React from 'react';

const Schedule = () => {
  const name =localStorage.getItem('email');

  function getqr(name){
      return `https://api.qrserver.com/v1/create-qr-code/?data=${name}&amp;size=200x200"`;
  }

  return (
    <>
      <section className="">
        <div className="login-banner relative justify-center flex">
       
        </div>
        
        {/* schedule */}
        <div className="container page-padding py-[10rem]">
          <h2 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>Your QR</h2>
         <h3 style={{
           fontSize: '4rem',
           fontWeight: 'bold',
           textAlign: 'center'
         }}>Scan for attendance</h3>
        <img  style={{
          margin:'auto',
          paddingTop:'2rem'
        }}  src={getqr(name)} alt="" title="" />

  
          <Outlet />
        </div>
        <Footer />
      </section>
   
    </>
  );
}

export default Schedule;







