import { useEffect } from "react";
import { useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  

  useEffect(() => {
    // console.log("User Info",user);
    const email = user?.email;

    if (email) {
      fetch(`http://localhost:4700//admin/${email}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          'authorization' : `Bearer ${localStorage.getItem("JWT Token Key")}`
        },
      })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            const admin = data.admin;
            setAdmin(admin);
        });
    }
  }, [user]);

  return [admin];
};

export default useAdmin;
