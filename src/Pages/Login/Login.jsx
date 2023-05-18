import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash,FaEye } from "react-icons/fa";


const Login = () => {
    const [show,setShow] = useState(false);
    const [err, setErr] = useState("");

    const handleSign = (event) => {
        event.preventDefault();
        setErr("");
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            event.target.reset();
            navigate(from)
        })
        .catch(err => {
            setErr(err.message)
            console.log(err);
        })
    }
  return (
    <div className="min-h-screen my-5 flex items-center justify-center">
        <div className="w-1/2 border-2 rounded-lg p-10">
            <h2 className="text-3xl text-center my-5">Login your account</h2>
            <form onSubmit={handleSign}>
                <label className="block my-5 text-xl" htmlFor="email">Email</label>
                <input required className="jm_input" placeholder="Enter your Email" type="email" name="email" id="email" />
                <label className="block my-5 text-xl" htmlFor="password">Password</label>
                <div className="relative">
                    <input required className="jm_input" placeholder="Enter your Password" type={show ? "text" : "password"} name="password" id="password" />
                    <span className='absolute text-2xl bottom-3 right-2 cursor-pointer' onClick={()=> setShow(!show)}>
                    {
                        show ? <FaEyeSlash /> : <FaEye/>
                    }
                        </span>
                </div>
                <span className="text-red-500">{err}</span>
                <input className="jm_btn w-full" type="submit" value="Login" />
            </form>

            <div className="divider">OR</div>


            <Link to="/register" ><button className="w-1/2 jm_btn mx-auto">Sign Up</button></Link>
        </div>
    </div>
  );
};

export default Login;
