import { useEffect } from "react";
import { useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
// console.log("token Data",token);
  useEffect(() => {
    // console.log("User Info",user);
    const email = user?.email;
    const currentUser = { email: email  };

    if (email) {
      fetch(`http://localhost:4700/user-info/${email}`, {
        method: "PUT",
        body: JSON.stringify(currentUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            const accessTokenData = data.token;
            // console.log(accessTokenData);
            setToken(accessTokenData);
            localStorage.setItem("JWT Token Key" ,accessTokenData)


        });
    }
  }, [user]);

  return [token];
};

export default useToken;
