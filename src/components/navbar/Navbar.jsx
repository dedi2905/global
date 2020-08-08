import React from "react";
import { useStoreState } from "easy-peasy";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menu = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "about",
      url: "/about",
    },
  ];
  const like = useStoreState((state) => state.comment.like);
  return (
    <nav
      style={{
        width: "100vw",
        height: "10vh",
        position: "sticky",
        top: "0px",
        left: "0px",
        display: "flex",
        padding: "4px 10%",
        alignItems: "center",
        justifyContent: "start",
        backgroundColor: "#eaeaea",
        boxShadow: "4px 5px 6px rgba(0,0,0,0.300)",
      }}
    >
      <h3>dedi jaya</h3>
      <div
        className="menu"
        style={{
          width: "150px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      ></div>
      {menu.map((e) => {
        return (
          <NavLink
            to={e.url}
            as="a"
            style={{
              padding: "0px 20px",
            }}
          >
            {e.name}
          </NavLink>
        );
      })}
      <h5 style={{ marginLeft: "auto" }}> Like :{like} </h5>
    </nav>
  );
};

export default Navbar;
