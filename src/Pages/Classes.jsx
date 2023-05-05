import { useState } from "react";
import ClassesBox from "../components/ClassesBox/ClassesBox";
import { Component } from "react";
// import { QrReader } from "react-qr-reader";
import { QrScanner } from "@yudiel/react-qr-scanner";
import Footer from "../components/Footer/Footer";
import { fontSize } from "@mui/system";
import axios from "axios";
const data=''
// class Qrreader extends Component{
  
//   constructor(props){
//     super(props)
//     this.state={
//       result:'hold qr code steady and clear to scan',
//     }
//     this.handlescan=this.handlescan.bind(this)
//   }
//   handlescan(result){
//     this.setState({
//       result: data
//     })
//   }
//   handleerror(err){
//     console.error(err)
//   }

//   render(){
//     const previewstyle={
//       height:700,
//       width:1000,
//       display:'flex',
//       justifyContent:'center'
//     }
//     const textstyle={
//       fontSize:'30px',
//       textAlign:'center',
//       marginTop:'-50px'
//     }
//     const camstyle={
//       display:'flex',
//       textAlign:'center',
//       marginTop:'-50px'
//     }
//     return(
//       <section className="login-section text-center ">
//       <div className="login-banner relative justify-center flex">
//         <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
//           Classes
//         </h1>
//       </div>

//       <>
//         <div style={camstyle}>
// <QrReader
//   delay={100}
//   style={previewstyle}
//   onError={this.handleerror}
//   onScan={this.handlescan}
// />
//         </div>
//         <p style={textstyle}>{this.state.result}</p>
//       </>

    

//       <Footer />
//     </section>



//     )




//   }








// }

function Qrreader() {
  const [load, setLoad] = useState(true);
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [noofdays,setnoofdays]=useState(0);
  const [active,setactive]=useState('false');

  const userToPatch = {
      noofdays: noofdays - 1,
      
      
  };
  
  const handleClick = async () => {
    setactive('false');
    const response = await axios
  
        .patch('http://localhost:3001/students/'+ email, userToPatch)
        .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
        console.log(response);
        console.log(response.data);
    }
  };

const setupdate = async (data)=>{
setemail(data);
axios.get('http://localhost:3001/students/'+ email)
.then(response => {
  console.log('reached')
  // Match the response with the outside JavaScript variable
  // const variable=response.data;
  // console.log(variable)
  // const myVariable = response.data[0];

  const no = response.data[0].noofdays;
  // no-=1;
  console.log(no);
  setnoofdays(no);
  window.alert('Attendance Marked')
  setactive('true');

  // console.log(password);
   // Output the variable to the console
  // Authenticate(myVariable,name);

 

})
.catch(error => {
  console.error(error);
});


const name1=localStorage.getItem('name');
setname(name1);
// Function to make API call and decrement noOfDays by 1


  handleClick();




  // axios.patch('http://localhost:3001/students/, {
  //   numberVariable: 42 // the new value for the number variable
  // })
  //   .then(response => {
  //     console.log(response.data); // handle success response
  //   })
  //   .catch(error => {
  //     console.error(error); // handle error response
  //   });
}

  const loadMore = () => {
    setLoad(!load);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
        <section className="login-section text-center ">
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Classes
        </h1>
      </div>

      {/* <>
        <div style={camstyle}>
<QrReader
  delay={100}
  style={previewstyle}
  onError={this.handleerror}
  onScan={this.handlescan}
/>
        </div>
        <p style={textstyle}>{this.state.result}</p>
      </> */}
      <div style={{
        height: '500px',
        width: '500px',
        margin: 'auto',
        paddingTop:'30px',
        paddingBottom:'30px',
        fontSize:'30px',
        fontWeight:'bold'
              }}>
        <h2>Scan your QR here</h2>
      <QrScanner
          onDecode={(result) => setupdate(result)}
          onError={(error) => console.log(error?.message)}
      /> 
      {/* <h2 style={{
        paddingBottom:'84px',
        paddingTop:'40px'
      }}>Welcome: {name.toUpperCase()}
      <br/>
      <br />
      <br /></h2> */}
      </div>

    

      <Footer style={{paddingTop:'80px'}}/>
    </section>
    </>
  );
}

export default Qrreader;
