import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ManageUserDetails = ({ user , handleDelete}) => {
  const { email } = user;
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
 
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => console.log(data);

 const makeAdmin = () => {

  // console.log("Clicked");
  fetch(`http://localhost:4700/user-info/admin/${email}`, {
    method: 'PUT',
    body: JSON.stringify(),
    headers: {
      // 'Content-type': 'application/json; charset=UTF-8',
      'authorization' : `Bearer ${localStorage.getItem("JWT Token Key")}`
    }
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
 }

 
  return (
    <>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          {/* <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            PK
          </th> */}
          <td class="px-6 py-4">{email}</td>
          <td class="px-6 py-4">User/Admin</td>
          <td class="px-6 py-4">        
          <button onClick={()=> makeAdmin()} className="px-2 py-1 text-xl font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-pink-400 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
          Make Admin
            </button>
          </td>
          <td class="px-6 py-4">
            <button
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              onClick={() => setShowModal(true)}
              
            >
              Remove User
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Remove this user ?
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4">
                          Are you sure you want to delete this natok? All of
                          your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-red-400 text-gray-dark active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          // onClick={() => setShowModal(false)}
                          onClick={()=>handleDelete(user._id)}
                          

                        >
                          Confirm Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ManageUserDetails;
