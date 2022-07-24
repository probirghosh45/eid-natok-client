import React from "react";
import Nav from "../../Shared/Nav";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class="flex  overflow-hidden bg-white">
        <div class="hidden md:flex md:flex-shrink-0">
          <div class="flex flex-col w-72 h-screen  ">
            <div class="flex flex-col flex-grow pt-5 overflow-y-auto bg-pink-500 border-r">
              <div class="flex flex-col items-center flex-shrink-0 px-4">
                <Link to="/" class="px-8 text-left focus:outline-none">
                  <h2 class="block p-2 text-xl font-medium tracking-tighter text-white transition duration-500 ease-in-out transform cursor-pointer hover:text-white">
                    Home
                  </h2>
                </Link>
                <button class="hidden rounded-lg focus:outline-none focus:shadow-outline">
                  <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex flex-col flex-grow px-4 mt-5">
                <nav class="flex-1 space-y-1 bg-pink-500">
                  <ul>
                  <li>
                      <Link
                        to="/dashboard/my-subscription"
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-pink-600 rounded-lg focus:shadow-outline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                        <span class="ml-4">My Subscription</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/manage-subscription"
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-pink-600 rounded-lg focus:shadow-outline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                        <span class="ml-4">Manage Subscription</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/add-natok"
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-pink-600 rounded-lg focus:shadow-outline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                        <span class="ml-4">Add Natok</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/manage-natok"
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-pink-600 rounded-lg focus:shadow-outline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                        <span class="ml-4">Manage Natok</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/manage-user"
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-pink-600 rounded-lg focus:shadow-outline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                        <span class="ml-4">Manage User</span>
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to=""
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-pink-600 rounded-lg focus:shadow-outline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                        <span class="ml-4">Update Information</span>
                      </Link>
                    </li> */}
                  </ul>
                </nav>
              </div>
              <div class="flex flex-shrink-0 p-4 px-4 bg-pink-700">
                <Link to="/" class="flex-shrink-0 block w-full group">
                  <div class="flex items-center">
                    <div>
                      <img
                        class="inline-block rounded-full h-11 "
                        src="https://i.ibb.co/kXNwLmX/favicon.png"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-xl font-medium text-white">Eid Natok</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col flex-1 w-0 overflow-hidden bg-blue-300">
          <main class="relative flex-1 overflow-y-auto focus:outline-none">
            <div class="py-6">
              <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <div class="py-4">
                  <div class="rounded-lg">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
