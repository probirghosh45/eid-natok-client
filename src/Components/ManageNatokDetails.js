import React from "react";

const ManageNatokDetails = ({ natok }) => {
    const {natokName,directorName,starring,subscriptionFee} = natok;
  return (
    <>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {natokName}
          </th>
          <td class="px-6 py-4">{starring}</td>
          <td class="px-6 py-4">{directorName}</td>
          <td class="px-6 py-4"> &#2547; {subscriptionFee}</td>
          <td class="px-6 py-4 text-right">
            <a
              href="/"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
          <td class="px-6 py-4 text-right">
            <a
              href="/"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ManageNatokDetails;
