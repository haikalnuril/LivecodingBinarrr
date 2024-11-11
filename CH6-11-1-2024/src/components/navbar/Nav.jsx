import React from "react";
import { NavLink } from "react-router-dom";
import NavList from "./NavList";
import { BsCart3 } from "react-icons/bs";
import { Si4Chan } from "react-icons/si";
import { FaBars } from "react-icons/fa6";

const Nav = () => {
    return (
        <>
            <nav className="bg-base-200">
                <div className="navbar mx-auto max-w-6xl px-8 lg:px-0">
                    <div className="navbar-start">
                        <NavLink
                            to="/"
                            className="hidden lg:flex btn btn-primary text-3xl items-center"
                        >
                            <Si4Chan />
                        </NavLink>
                        {/* mobile */}

                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <FaBars className="h-6 w-6"/>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-[85vw] flex flex-col items-center">
                                <NavList className="text-center"/>
                            </ul>
                        </div>
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal">
                                <NavList />
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md">
                            <div className="indicator">
                                <BsCart3 />
                                <span className="badge badge-primary badge-sm indicator-item">
                                    3
                                </span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;