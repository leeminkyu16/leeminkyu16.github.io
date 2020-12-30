import React from "react";
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        className="inline-flex items-center px-3 py-6 mr-4 text-blue-100 hover:text-blue-300 text-4xl font-bold cursive tracking-widest"
                        activeClassName="text-white">
                            Min-Kyu
                    </NavLink>
                    <NavLink
                        to="/experience"
                        className="inline-flex text-lg items-center px-3 py-3 my-6 rounded text-blue-100 hover:text-blue-300"
                        activeClassName="text-blue-100 bg-blue-700">
                            Experience
                    </NavLink>
                    <NavLink
                        to="/skill"
                        className="inline-flex text-lg items-center px-3 py-3 my-6 rounded text-blue-100 hover:text-blue-300"
                        activeClassName="text-blue-100 bg-blue-700">
                            Skills
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex text-lg items-center px-3 py-3 my-6 rounded text-blue-100 hover:text-blue-300"
                        activeClassName="text-blue-100 bg-blue-700">
                            Projects
                    </NavLink>
                    <NavLink
                        to="/award"
                        className="inline-flex text-lg items-center px-3 py-3 my-6 rounded text-blue-100 hover:text-blue-300"
                        activeClassName="text-blue-100 bg-blue-700">
                        Awards
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex text-lg items-center px-3 py-3 my-6 rounded text-blue-100 hover:text-blue-300"
                        activeClassName="text-blue-100 bg-blue-700">
                            Blog
                    </NavLink>
                </nav>
                <div className="inline-flex px-3 py-3 my-6">
                    <div className = "icons">
                        <SocialIcon url="https://www.linkedin.com/in/leeminkyu16/" classname="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                        <SocialIcon url="https://github.com/leeminkyu16" classname="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                    </div>
                </div>     
            </div>
        </header>
    )
}
