import React from "react";
import { Icon } from "@iconify/react";

import config from "../config.json";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100 max-md:hidden py-4">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">{config.businessName}</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {config.pages.map((page, index) => (
              <li key={index} className="text-xl">
                <a href={page.url}>{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary text-white">Call Us Today</a>
        </div>
      </div>
      <div className="flex justify-between items-center py-4 px-4 md:hidden sticky">
        <a className="btn btn-ghost text-2xl">{config.businessName}</a>
        <button className="btn btn-ghost">
          <Icon icon="mdi:menu" className="text-5xl" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
