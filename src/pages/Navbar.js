import { Outlet, Link } from "react-router-dom"
import React, { useState } from "react";

const Navbar = ({ navbarData, companyName }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className={isOpen ? "isOpen bg-indigo-100" : "bg-indigo-100"}>
                <button className=" px-3 py-1 border-none text-3xl cursor-pointer md:hidden block bg-indigo-100 text-gray-800 hover:bg-indigo-50" onClick={() => setIsOpen(!isOpen)}>&#8801;</button>
                <ul className="list-none p-0 m-0">
                    <li className="block float-left text-center py-4 px-9 no-underline text-gray-800 text-2xl">
                        <Link to='/'>{companyName}</Link>
                    </li>
                    {navbarData.map((link, index) => (
                        <li key={index} className="block float-left text-center p-5 no-underline text-gray-800 hover:bg-indigo-50">
                            <Link to={link.link}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Navbar;