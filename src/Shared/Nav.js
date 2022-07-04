import React from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="">
          <img
            src="https://i.ibb.co/kXNwLmX/favicon.png"
            className="mr-1 h-12 sm:h-12"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Eid Natok
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Probir Ghosh</span>
              <span className="block truncate text-sm font-medium">
                pk@pk.com
              </span>
            </Dropdown.Header>
            <Link to="/"><Dropdown.Item>Home</Dropdown.Item></Link>
            <Link to="/dashboard"><Dropdown.Item>Dashboard</Dropdown.Item></Link>
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
