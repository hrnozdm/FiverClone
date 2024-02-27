import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [active, setActive] = useState(true);
    const [dropdown, setDropdown] = useState(false)

    const {pathname}=useLocation();
    const navigate=useNavigate();

    const isActive = () => {
        window.scrollY > 0 ? setActive(false) : setActive(true);
    };

    useEffect(() => {
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive);
        };
    }, []);

    const onChangeDropDown=()=>{
        setDropdown(!dropdown);
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const  handleLogout=async ()=>{
        try {
            await api.post("/auth/logout")
            localStorage.setItem("currentUser",null);
            navigate('/');
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    //console.log(currentUser.user);

    return (
        <div className={(active || pathname==="/") ? 'bg-green-900 sticky top-0' : 'bg-white sticky top-0'}>
            <div className={(active || pathname==="/") ? 'flex items-center justify-between p-4 text-white cursor-pointer' : 'flex items-center justify-between p-4 text-black cursor-pointer'}>
                <div className="logo flex items-center">
                    <Link to="/">
                        <span className='text-2xl font-bold'>Fiverr.</span>
                    </Link>
                </div>
                <div className={(active || pathname==="/") ? 'links flex items-center space-x-4 text-white cursor-pointer' : 'links flex items-center space-x-4 text-black cursor-pointer'}>
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <Link to="/login">
                        <span>Oturum Aç</span>
                    </Link>
                    {!currentUser?.user?.isSeller && <span>Become a Seller</span>}
                    <Link to="/register">
                    {!currentUser && <button type='submit' className='border px-4 py-1 rounded-md hover:bg-green-600'>Bize Katılın</button>}
                    </Link>
                    {currentUser && (
                        <div className='user flex items-center relative cursor-pointer'>
                            <img src={currentUser?.user?.img || "/images/noavatar.jpg"} alt="" width={30} height={30} className='rounded-full bg-cover'  onClick={()=>onChangeDropDown()}/>
                            <span  onClick={()=>onChangeDropDown()}>{currentUser?.user?.username}</span>
                            <div className={dropdown ? 'options absolute top-14 right-0 p-4 bg-gray-100 border border-gray-200 rounded-md flex flex-col text-gray-500' : 'hidden'}>
                                {currentUser?.user?.isSeller && (
                                    <>
                                        <span>Gigs</span>
                                        <span>Add New Gigs</span>
                                    </>
                                )}
                                <span>Orders</span>
                                <span>Messages</span>
                                <Link onClick={handleLogout}>
                                  <span>Logout</span>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <hr className='text-gray'/>

            <div className='menu flex items-center justify-around '>
                <span className='text-gray-300'>Web Tasarım</span>
                <span className='text-gray-300'>Photosohop</span>
                <span className='text-gray-300'>Video Edit</span>
            </div>
        </div>
    );
};

export default Navbar;
