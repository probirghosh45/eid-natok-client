
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MySubscriptionDetails = ({ natok , handleDelete}) => {
  const { natokName, directorName, starring, subscriptionFee } = natok;
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

 

 
  return (
    <>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4">{natokName}</td>
          <td class="px-6 py-4"> &#2547; {subscriptionFee}</td>
          <td class="px-6 py-4"> Pay Now</td>
          <td class="px-6 py-4"> Pending</td>
          {/* <td class="px-6 py-4"> Pending</td>  */}
          <td class="px-6 py-4">
            <button
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              onClick={() => setShowModal(true)}
              
            >
              Delete
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
                          Delete this natok ?
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
                          onClick={()=>handleDelete(natok._id)}
                          

                        >
                          Confirm Delete
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

export default MySubscriptionDetails;
