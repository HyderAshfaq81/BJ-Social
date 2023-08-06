import React, { useRef, useState } from "react";
import signupImg from "../../assets/signupImg.jpeg";
import google from "../../assets/google.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSignup } from "../../redux/actions/Authentication";
import MBALogo from '../../assets/MBALogo.png';

const Signup = () => {
  const [first_name, setFname] = useState("")
  const [last_name, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const formRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append("user[first_name]", first_name);
    formdata.append("user[last_name]", last_name);
    formdata.append("user[address]", address);
    formdata.append("user[email]", email);
    formdata.append("user[password]", password);

    const response = dispatch(userSignup(formdata));
    if (response.error) {
      formRef.current.reset();
    } else {
      formRef.current.reset();
      navigate('/login')
    }

    // try {
    //   var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: formdata,
    //     redirect: 'follow'
    //   };
    //   fetch(`http://127.0.0.1:3000/signup`, requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result)
    //     if(result.status.code >= 200 && result.status.code < 400) {
    //       toast.success(result.status?.message);
    //       formRef.current.reset();
    //       navigate('/login')
    //     } else {
    //       toast.error(result.status?.message)
    //       formRef.current.reset();
    //     }
    //   })
    //   .catch(error => {
    //     toast.error("Error While Creating account");
    //     formRef.current.reset();
    // });
    // }
    // catch(error) {
    //   toast.error("Error While Creating account")
    // }
  }
  return (
    <div className="mt-10 w-full min-h-screen">
      <div className="flex justify-center my-4">
        <a href="/home" className="flex hover:text-[#FF7294] text-white mb-5">
          <img src={MBALogo} alt="logo" width={100} height={100} className=""/>
        </a>
      </div>
      <div className="bg-grey2 w-full min-h-screen pt-10">
        <div className="w-full xl:w-[1280px] m-auto p-10 flex border-[0.1px] border-grey1/30 rounded-[8px]">
          <div className="lg:flex hidden w-[30%] relative">
            <img
              src={signupImg} alt="signupImg"
              className="h-[450px] "
            />
            <div className="absolute bottom-0 bg-white w-[75%] h-[80px] m-4 rounded-[8px]">
              <div className="font-bold flex ml-2 mt-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                </div>
                <div> Quick Tip </div>
              </div>
              <div className="ml-2 mt-2">Already a member? <a href="/login" className="text-[#1075d3] hover:underline"> Sign In   </a></div>
            </div>
          </div>
          <div className="w-full lg:w-[70%] lg:ml-4">
            <div className="text-[28px] font-bold mb-4">Create a new profile</div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
                <div className="mb-4 w-full">
                  <label className="ml-2 text-base text-black/70">First Name</label>
                  <input
                    className="mt-2 tracking-[0.01em] w-[98%] text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                    type="text"
                    name="first_name"
                    placeholder="Enter your First Name"
                    required
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="ml-2 text-base text-black/70">Last Name</label>
                  <input
                    className="mt-2 tracking-[0.01em] w-[98%] text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                    type="text"
                    name="last_name"
                    placeholder="Enter your Last Name"
                    required
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="ml-2 text-base text-black/70">Email Address</label>
                  <input
                    className="mt-2 tracking-[0.01em] w-[98%] text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                    type="email"
                    name="first_name"
                    placeholder="Enter your Email Address"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="ml-2 text-base text-black/70">Password</label>
                  <input
                    className="mt-2 tracking-[0.01em] w-[98%] text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                    type="password"
                    name="last_name"
                    placeholder="Enter your Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="ml-2 text-base text-black/70">Home Address</label>
                  <input
                    className="mt-2 tracking-[0.01em] w-[98%] text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                    type="text"
                    name="first_name"
                    placeholder="Enter your Home Address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <button className="cursor-pointer bg-[#FFC0CA] w-full h-[50px] flex justify-center items-center rounded-[8px] text-white text-[18px] font-bold border-[0.2px] border-black/50 mt-4">
                SUBMIT
              </button>
            </form>
            <div className="flex items-center justify-center my-4 w-full">
            <button className="flex w-full text-center items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <img src={google} alt="google" className="w-6 h-6"/>
                <span>Continue with Google</span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Signup;
