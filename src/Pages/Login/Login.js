import React from "react";
import Nav from "../../Shared/Nav";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {

const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);   

  return (
    <div>
        <Nav/>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <img
              className="responsive"
              src="https://i.ibb.co/5R0T3bN/man-with-laptop.png"
              alt=""
            />
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
            </button>
            <div class="separator py-5 ">
              <div class="line"></div>
              <h2>Alternative Login</h2>
              <div class="line"></div>
            </div> 
                <button onClick={() => signInWithGoogle()} className="text-gray-dark bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"  >Login With Google</button>
          </div>
        </div>
      </section>
    </div>
  );
}; 

export default Login;
