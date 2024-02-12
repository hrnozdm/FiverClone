import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState(true);
    const [dropdown, setDropdown] = useState(false)

    const {pathname}=useLocation();

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

    const currentUser = {
        id: 1,
        name: 'John Doe',
        isSeller: true,
    };

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
                        <span>Sign In</span>
                    </Link>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button type='submit' className='border px-4 py-1 rounded-md hover:bg-green-600'>Join</button>}
                    {currentUser && (
                        <div className='user flex items-center relative cursor-pointer'>
                            <img src="https://media06.ligtv.com.tr/img/news/2023/2/25/quaresmadan-flas-itiraf-orada-yalnizdim-ve-kaybolmustum/800_440/quaresma.jpg" alt="" width={80} height={80} className='rounded-full bg-cover'  onClick={()=>onChangeDropDown()}/>
                            <span  onClick={()=>onChangeDropDown()}>{currentUser?.name}</span>
                            <div className={dropdown ? 'options absolute top-14 right-0 p-4 bg-gray-100 border border-gray-200 rounded-md flex flex-col text-gray-500' : 'hidden'}>
                                {currentUser?.isSeller && (
                                    <>
                                        <span>Gigs</span>
                                        <span>Add New Gigs</span>
                                    </>
                                )}
                                <span>Orders</span>
                                <span>Messages</span>
                                <span>Logout</span>
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
