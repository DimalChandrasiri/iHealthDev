import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import NavDropdownButton from "./NavDropdown";

import desktopLogo2 from "src/Assets/Brand/desktopLogoSecond.png";
import desktopLogo from "src/Assets/Brand/logo-nav-desktop.png";
import mobileLogo from "src/Assets/Brand/logo-nav-mobile.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";

/* 
  ===========================================================
  This is the Navigation Bar for the Desktop 
  ===========================================================
  */

/* NavLogo*/
const NavLogo = () => {
  return (
    <div className="nav-logo-block">
      <NavLink className="nav-logo">
        <picture>
          <source media="(max-width: 1023px)" srcSet={mobileLogo} />
          <img className="nav-logo-img" src={mobileLogo} alt="confidential" />
        </picture>
      </NavLink>
    </div>
  );
};

// MenuItems
const MenuList = () => {
  const menuItems = [
    {
      title: "Home",
      url: "/",
      className: "nav-home",
    },
    {
      title: "About Us",
      url: "/about-us",
      className: "nav-about-us",
      subMenu: [
        {
          title: "Corporate Info",
          url: "/about-us/#Hero",
        },
        {
          title: "Our Team",
          url: "/about-us/#Team",
        },
        {
          title: "Financial Transparency",
          url: "/about-us/#Finance",
        },
        {
          title: "Terms Of Use",
          url: "/about-us/#Terms",
        },
        {
          title: "Volunteer from Anywhere",
          url: "/about-us/#",
        },
      ],
    },

    {
      title: "Research",
      url: "/research",
      className: "nav-research",
      subMenu: [
        {
          title: "Research Tools & Resources",
          url: "/research/#",
        },
        {
          title: "Clinical Drug Therapies",
          url: "/research/#",
        },
        {
          title: "Participate in Research",
          url: "/research/#",
        },
      ],
    },
    {
      title: "Stories of Strength",
      url: "/services",
      className: "nav-services",
      subMenu: [
        {
          title: "Share Your Story",
          url: "/services/#",
        },
        {
          title: "Create Your Blog",
          url: "/services/#",
        },
        {
          title: "Blogs",
          url: "/services/#",
        },
      ],
    },
    {
      title: "Ways to Give",
      url: "/donate",
      className: "ways-to-give",
      subMenu: [
        {
          title: "Donate Online",
          url: "/donate/#",
        },
        {
          title: "Individual Donation",
          url: "/donate/#",
        },
        {
          title: " Make a Corporate Donation",
          url: "/donate/#",
        },
        {
          title: "Fundraise on Facebook",
          url: "/donate/#",
        },
        {
          title: "Create Your Own Fundraiser",
          url: "/donate/#",
        },
        {
          title: "Raise $500 in 10 days",
          url: "/donate/#",
        },
      ],
    },
  ];

  return (
    <ul className="nav-links-list desktop">
      {menuItems.map((menu) => (
        <li className="nav-links-listitem nav-dropdown" key={menu.title}>
          <NavLink
            to={menu.url}
            className={({ isActive }) => {
              return (
                `nav-links ${menu.className}` +
                (isActive ? `nav-links actives ${menu.className}` : "")
              );
            }}
          >
            {menu.title}
          </NavLink>

          {menu.subMenu && (
            <div className="nav-dropdown-content">
              {menu.subMenu.map((sub) => (
                <HashLink to={sub.url} key={sub.title}>
                  {sub.title}
                </HashLink>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

// SignUp & signIn
const SignUpSignIn = () => {
  return (
    <li className="nav-links-listitem nav-dropdown">
      <NavLink
        className="nav-links nav-signin"
        to={"/"}
        onClick={() => {
          document.querySelector("#UnderConst-wrapper").style.display = "flex";
        }}
      >
        <AccountCircleIcon
          className="circle-icon"
          sx={{ fontSize: 32, marginLeft: 0 }}
          sm={{ fontSize: 48 }}
        />
        <span className="nav-signin-span">Sign In or Sign Up</span>
      </NavLink>
      <div className="nav-dropdown-content ">
        <a
          onClick={() => {
            document.querySelector("#UnderConst-wrapper").style.display =
              "flex";
          }}
          href="#"
        >
          Sign In
        </a>
        <a
          onClick={() => {
            document.querySelector("#UnderConst-wrapper").style.display =
              "flex";
          }}
          href="#"
        >
          Sign Up Now
        </a>
        <a
          onClick={() => {
            document.querySelector("#UnderConst-wrapper").style.display =
              "flex";
          }}
          href="#"
        >
          Donate as a Guest
        </a>
      </div>
    </li>
  );
};

// Main Component
const Navbar = () => {
  // Menu Lists

  return (
    <nav className="nav-container">
      <div className="nav-inner-container">
        <NavDropdownButton />
        <div className="nav-links-container">
          {/* NavLogo */}
          <NavLogo />

          <div className="nav-links-block">
            {/* Menu List*/}
            <MenuList />

            <ul className="nav-links-list">
              {/* SignIn & Signup */}
              <SignUpSignIn />

              {/* Donate Link */}
              <li className="nav-links-listitem">
                <NavLink
                  onClick={() => {
                    document.querySelector(
                      "#UnderConst-wrapper"
                    ).style.display = "flex";
                  }}
                  className="nav-links nav-donate"
                >
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Old codebase
/*
const Navbar = () => {
  
  return (
    <nav className="nav-container">
      <div className="nav-inner-container">
        <NavDropdownButton />
        <div className="nav-links-container">
          <div className="nav-logo-block">
            <NavLink to="/" className="nav-logo">
              <picture>
                <source media="(max-width: 1023px)" srcSet={mobileLogo} />
                <img
                  className="nav-logo-img"
                  src={desktopLogo}
                  alt="confidential"
                />
              </picture>
            </NavLink>
          </div>

          <div className="nav-links-block">
            // Desktop 

            <ul className="nav-links-list desktop">
              <li className="nav-links-listitem">
                <NavLink to="/" className="nav-links nav-home">
                  Home
                </NavLink>
              </li>

              <li className="nav-links-listitem nav-dropdown">
                <NavLink to="/services" className="nav-links nav-services">
                  Services
                </NavLink>
                <div className="nav-dropdown-content">
                  <a href="#">Stories of Strength</a>
                  <a href="#">Share Your Story</a>
                  <a href="#">Create Your Blog</a>
                </div>
              </li>

              // about us 
              <li className="nav-links-listitem nav-dropdown">
                <NavLink to="/about-us" className="nav-links nav-about-us">
                  About Us
                </NavLink>
                <div className="nav-dropdown-content">
                  <HashLink to={"/about-us/#Hero"} >Corporate  info</HashLink>
                  <HashLink to={"/our-team"}>Our Team </HashLink>
                  <HashLink to={"/about-us/#Finance"}>Financial Transparency </HashLink>
                  <HashLink to={"/about-us/#Terms"}>Terms Of Use</HashLink>
                  <HashLink to={""}>Volunteer from Anywhere</HashLink>



                </div>
              </li>

              // Research 
              <li className="nav-links-listitem nav-dropdown">
                <NavLink to="/" className="nav-links nav-research">
                  Research
                </NavLink>
                <div className="nav-dropdown-content ">
                  <a href="#">Research Tools & Resources</a>
                  <a href="#">Clinical Drug Therapies</a>
                  <a href="#">Participate in Research</a>
                </div>
              </li>
            </ul>

            // Sign up & sign in 
            <ul className="nav-links-list">
              <li className="nav-links-listitem nav-dropdown">
                <NavLink
                  className="nav-links nav-signin"
                  onClick={() => {
                    document.querySelector(
                      "#UnderConst-wrapper"
                    ).style.display = "flex";
                  }}
                >
                  <AccountCircleIcon
                    className="circle-icon"
                    sx={{ fontSize: 32, marginLeft: 0 }}
                    sm={{ fontSize: 48 }}
                  />
                  <span className="nav-signin-span">Sign up or Log In</span>
                </NavLink>
                <div className="nav-dropdown-content ">
                  <a href="#">Sign In</a>
                  <a href="#">Sign Up Now</a>
                  <a href="#">Donate as a Guest</a>
                </div>
              </li>

              // Donate Link
              <li>
                <NavLink className="nav-links nav-donate ">Donate</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
*/
