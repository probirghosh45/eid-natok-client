import React from "react";
import { useForm } from "react-hook-form";

const AddNatok = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add Natok
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="natokName">
                Natok Name
              </label>
              <input
                {...register("natokNameRequired", { required: true })}
                id="natokName"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.natokNameRequired && <span>This field is required</span>}
            </div>

            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="directorName"
              >
                Director Name
              </label>
              <input
                 {...register("directorNameRequired", { required: true })}             
                id="directorName"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
               {errors.directorNameRequired && <span>This field is required</span>}
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="starring">
              Starring
              </label>
              <input
              {...register("StarringNameRequired", { required: true })}
                id="starring"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
               {errors.StarringNameRequired && <span>This field is required</span>}
            </div>

            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="description"
              >
                Description
              </label>
              <input
              {...register("descriptionRequired", { required: true })}
                id="description"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
               {errors.descriptionRequired && <span>This field is required</span>}
            </div>
            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="coverPhoto"
              >
                Cover Photo (link only)
              </label>
              <input
                {...register("coverPhotoRequired", { required: true })}
                id="coverPhoto"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
               {errors.coverPhotoRequired && <span>This field is required</span>}
            </div>
            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="subscriptionFee"
              >
                Subscription Fee
              </label>
              <input
              {...register("subscriptionFeeRequired", { required: true })}
                id="subscriptionFee"
                type="number"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
               {errors.subscriptionFeeRequired && <span>This field is required</span>}
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button type="submit" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            {/* <input type="submit" /> */}
            Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddNatok;
