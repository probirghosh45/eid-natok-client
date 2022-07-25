import React from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import {signOut } from 'firebase/auth';
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import profilePhoto from "../profile-picture-5.jpg"
const Nav = () => {
  const logout = () => {
    localStorage.removeItem("JWT Token Key")
    signOut(auth);
  };

  let [user] = useAuthState(auth);
console.log("user info" , user )
  return (
    <div className="sticky top-0 z-50">
      <Navbar fluid={true} rounded={true}>
        <Link to="/">
          <Navbar.Brand>
            <img
              src="https://i.ibb.co/kXNwLmX/favicon.png"
              className="mr-1 h-12 sm:h-12"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Eid Natok
            </span>
          </Navbar.Brand>
        </Link>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                // alt="User settings"
                img={user ? user?.photoURL : profilePhoto}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              {/* <span className="block text-sm">Probir Ghosh</span>
              <span className="block truncate text-sm font-medium">
                pk@pk.com
              </span> */}
            </Dropdown.Header>
            <Link to="/">
              <Dropdown.Item>Home</Dropdown.Item>
            </Link>
            {/* <Link to="/login">
              <Dropdown.Item>Login</Dropdown.Item>
            </Link>
            <Link to="/" onClick = {() => signOut() } >
              <Dropdown.Item>Log Out</Dropdown.Item>
            </Link> */}


{
                            user ? <>
                            <Link to="/" onClick={()=>logout()}> Sign Out</Link>
                            </> :
                            <Link to="/login">
                            <Dropdown.Item>Login</Dropdown.Item>
                          </Link>
                        }
            
            <Link to="/dashboard">
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>
            {/* <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item> */}
          </Dropdown>
          {/* <Navbar.Toggle /> */}
        </div>
        {/* <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default Nav;
