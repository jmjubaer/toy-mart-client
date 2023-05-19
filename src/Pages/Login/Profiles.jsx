import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../Shered Page/LoadingSpinner";
import { AuthContest } from "../../Provider/AuthProvider";
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";

const Profiles = () => {
  const { user,logout,loading } = useContext(AuthContest);
const navigate = useNavigate();
  const handleSignOut = () => {
    logout();
    navigate("/")
  }
  if(loading){
    return <LoadingSpinner/>
  }
return (
    <div className="min-h-screen flex items-center justify-center my-10 btn_gradient w-fit mx-auto p-10 rounded-3xl">
        <div className="text-center">
            <img className="w-64 mx-auto h-64 rounded-full object-cover border-8 border-dashed p-2 border-[#ff6899]" src={user?.photoURL} alt="" />
            <div className="flex rounded-3xl gap-5 items-center p-3 border-2 border-[#ff6899] my-8">
              <FaUser className="text-3xl"/>
              <div className="border-l-2 text-left pl-5">
                <h4 className="font-bold">Full Name:</h4>
                <p className="text-xl">{user?.displayName}</p>
              </div>
            </div>

            <div className="flex rounded-3xl gap-5 items-center p-3 border-2 border-[#ff6899] my-8">
              <FaEnvelope className="text-3xl"/>
              <div className="border-l-2 text-left pl-5">
                <h4 className="font-bold">Email:</h4>
                <p className="text-xl">{user?.email}</p>
              </div>
            </div>

            <div className="flex rounded-3xl gap-5 items-center p-3 border-2 border-[#ff6899] my-8">
              <FaPhoneAlt className="text-3xl"/>
              <div className="border-l-2 text-left pl-5">
                <h4 className="font-bold">Mobile Number</h4>
                <p className="text-xl">{user?.phoneNumber}</p>
              </div>
            </div>
            <button onClick={handleSignOut} className="jm_btn mx-auto mt-5 w-1/2">Log out</button>
        </div>
    </div>
    );

};

export default Profiles;
