import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";


const Navbar = () => {
    const[visible,setVisible]=useState(false);
    
      const{setShowSearch,getCartCount,navigate,token,setCartItems,setToken}=useContext(ShopContext);
      
      const logout = ()=>{
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
        
      }

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to='/'><img src={assets.logo} alt="" className="w-36" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4  h-[1.5px] border-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4  h-[1.5px] border-gray-700 hidden" />
        </NavLink>
        
        <NavLink to="/about" className="flex flex-col items-center gap-1 ">
          <p>ABOUT</p>
          <hr className="w-2/4  h-[1.5px] border-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1 ">
          <p>CONTACT</p>
          <hr className="w-2/4  h-[1.5px] border-gray-700 hidden" />
        </NavLink>
      </ul>


      <div className="flex items-center gap-5 sm:gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="" className="w-5 cursor-pointer" />
        
        <div className="group relative">
            {/*   Dropdown menu  */}
        
        <img onClick={()=>token ? null : navigate('/login')} src={assets.profile_icon} alt="" className="w-5 cursor-pointer" />
        {/* drop down menu */}
          {
            token && 
             <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>

            </div>

        </div>
          } 
        </div>
        <Link to='/Cart' className="relative">
            <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} className="w-5 cursor-pointer sm:hidden" src={assets.menu_icon} alt="" />
      </div>
      
      {/* sidebar menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0' }`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3">
                    <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
                    <p>Back</p>

                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                
            </div> 
      </div>
    </div>
  );
};

export default Navbar;
