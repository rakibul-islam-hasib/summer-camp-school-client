import React, { useState } from 'react';
import { BiHomeAlt, BiSelectMultiple } from "react-icons/bi";
import { MdExplore, MdOfflineBolt, MdPendingActions } from "react-icons/md";
import { GiFigurehead } from "react-icons/gi";
import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
import Scroll from '../hooks/useScroll';
import { ToastContainer } from 'react-toastify';
import { useUser } from '../hooks/useUser';
import { IoSchoolSharp } from "react-icons/io5";
import { IoMdDoneAll } from "react-icons/io";
import { BsFillPostcardFill } from 'react-icons/bs';
const adminNavItems = [
    { to: "/dashboard/admin-home", icon: <BiHomeAlt className="text-2xl" />, label: "Dashboard Home" },
    { to: "/dashboard/manage-users", icon: <FaUsers className="text-2xl" />, label: "Manage Users" },
    { to: "/dashboard/manage-class", icon: <BsFillPostcardFill className="text-2xl" />, label: "Manage Class" },
    { to: "/browse", icon: <GiFigurehead className="text-2xl" />, label: "Following" },
];
const instructorNavItem = [
    { to: "/dashboard/instructor-cp", icon: <FaHome className="text-2xl" />, label: "Home" },
    { to: "/dashboard/add-class", icon: <MdExplore className="text-2xl" />, label: "Add A class" },
    { to: "/dashboard/my-classes", icon: <IoSchoolSharp className="text-2xl" />, label: "My Classes" },
    { to: "/dashboard/my-pending", icon: <MdPendingActions className="text-2xl" />, label: "Pending Classes" },
    { to: "/dashboard/my-approved", icon: <IoMdDoneAll className="text-2xl" />, label: "Approved Classes" },
];
const student = [
    { to: "/dashboard/student-cp", icon: <BiHomeAlt className="text-2xl" />, label: "Dashboard" },
    { to: "/dashboard/my-selected", icon: <BiSelectMultiple className="text-2xl" />, label: "My Selected" },
    { to: "/trending", icon: <MdOfflineBolt className="text-2xl" />, label: "Trending" },
    { to: "/browse", icon: <GiFigurehead className="text-2xl" />, label: "Following" },
];
const lastMenuItems = [
    { to: "/", icon: <BiHomeAlt className="text-2xl" />, label: "Main Home" },
    { to: "/browse", icon: <MdExplore className="text-2xl" />, label: "Browse" },
    { to: "/trending", icon: <MdOfflineBolt className="text-2xl" />, label: "Trending" },
    { to: "/browse", icon: <GiFigurehead className="text-2xl" />, label: "Following" },
];


const DashboardLayout = () => {
    const [open, setOpen] = useState(true);
    const { currentUser, isLoading } = useUser();

    const role = currentUser?.role;

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex">
            <div
                className={`${open ? "w-72 overflow-y-auto" : "w-[90px] overflow-auto"
                    } bg-dark-purple h-screen p-5 hidden md:block pt-8 relative duration-300`}
            >
                <div className="flex gap-x-4 items-center">
                    <img
                        src='https://i.ibb.co/26dQJcm/musical-note.png'
                        onClick={() => setOpen(!open)}
                        className={`cursor-pointer h-[40px] duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-dark-primary cursor-pointer font-bold origin-left text-xl duration-200 ${!open && "scale-0"
                            }`}
                        onClick={() => setOpen(!open)}
                    >
                        SOUND SAFARI
                    </h1>
                </div>
                {/* Nav links  */}
                {
                    role === 'admin' && <ul className="pt-6">
                        <p className={`ml-3 text-light-gray-4 ${!open && "hidden"}`}><small>MENU</small></p>
                        {role === 'admin' && adminNavItems.map((menuItem, index) => (
                            <li key={index} className="mb-2">
                                <NavLink
                                    to={menuItem.to}
                                    className={({ isActive }) =>
                                        `flex ${isActive ? "bg-red-500 text-white " : "text-[#413F44]"
                                        }  duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white  font-bold text-sm items-center gap-x-4  `
                                    }
                                >
                                    {menuItem.icon}
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        {menuItem.label}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                }
                {
                    role === 'instructor' && <ul className="pt-6">
                        <p className={`ml-3 text-light-gray-4 ${!open && "hidden"}`}><small>MENU</small></p>
                        {instructorNavItem.map((menuItem, index) => (
                            <li key={index} className="mb-2">
                                <NavLink
                                    to={menuItem.to}
                                    className={({ isActive }) =>
                                        `flex ${isActive ? "bg-red-500 text-white " : "text-[#413F44]"
                                        }  duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white  font-bold text-sm items-center gap-x-4  `
                                    }
                                >
                                    {menuItem.icon}
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        {menuItem.label}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                }
                {
                    role === 'user' && <ul className="pt-6">
                        <p className={`ml-3 text-light-gray-4 ${!open && "hidden"}`}><small>MENU</small></p>
                        {student.map((menuItem, index) => (
                            <li key={index} className="mb-2">
                                <NavLink
                                    to={menuItem.to}
                                    className={({ isActive }) =>
                                    `flex ${isActive ? "bg-red-500 text-white " : "text-[#413F44]"
                                    }  duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white  font-bold text-sm items-center gap-x-4  `
                                }
                                >
                                    {menuItem.icon}
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        {menuItem.label}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                }
                <ul className="pt-6">
                    <p className={`ml-3 uppercase text-light-gray-4 ${!open && "hidden"}`}><small>Useful Links</small></p>
                    {lastMenuItems.map((menuItem, index) => (
                        <li key={index} className="mb-2">
                            <NavLink
                                to={menuItem.to}
                                className={({ isActive }) =>
                                    `flex ${isActive ? "bg-dark-primary-3 text-dark-primary" : "text-[#413F44]"
                                    }  duration-150 rounded-md p-2 cursor-pointer hover:bg-dark-primary-3  font-bold text-sm items-center gap-x-4  `
                                }
                            >
                                {menuItem.icon}
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {menuItem.label}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <ul className="pt-6">
                    <p className={`ml-3 uppercase text-light-gray-4 ${!open && "hidden"}`}><small>Useful Links</small></p>
                    {lastMenuItems.map((menuItem, index) => (
                        <li key={index} className="mb-2">
                            <NavLink
                                to={menuItem.to}
                                className={({ isActive }) =>
                                    `flex ${isActive ? "bg-dark-primary-3 text-dark-primary" : "text-[#413F44]"
                                    }  duration-150 rounded-md p-2 cursor-pointer hover:bg-dark-primary-3  font-bold text-sm items-center gap-x-4  `
                                }
                            >
                                {menuItem.icon}
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {menuItem.label}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-screen overflow-y-auto px-8 flex-1">
                {/* <NavBar /> */}
                <Scroll />
                <Outlet />
                <ToastContainer />
            </div>
        </div>
    );
};

export default DashboardLayout;
