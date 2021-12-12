import React from 'react'
import Image from 'next/image'
import {signIn, signOut, useSession} from "next-auth/client";
import { useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectItems} from "../slices/basketSlice";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
}from "@heroicons/react/outline";
const myLoader=({src})=>{
    return "https://bit.ly/3nH8JrD";
  }
function Header() {
    const [session]=useSession();
    const router=useRouter();

    const items=useSelector(selectItems);
    return (
        <header >
            {/*top navbar */}
            <div className="  flex  items-center bg-amazon_blue p-1 flex-grow py-2 ">
                
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    <Image
                    onClick={()=>router.push('/')}
                    loader={myLoader} src="https://bit.ly/3nH8JrD"
                        width={90}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                     />
                     /*<div className="link" ><p onClick={()=>router.push('/')} className="font-extrabold md:text-xl text-white mr-10 -ml-8 mb-3 mt-2">Apna-Store</p></div>
                     
                </div>
                
                {/*Search bar */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-white">
                    <p className="items-center  animate-bounce font-extrabold text-lg italic "> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
                    🛒   अब &nbsp;करो&nbsp; जी&nbsp;  भर&nbsp;&nbsp;के&nbsp; खरीदारी &nbsp;...🛒  </p>
                    {/*<input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4" />*/}
                </div>
                {/*right icons */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className=" link">
                        
                        <p onClick={!session ?signIn : signOut}>{session?`Hello, ${session.user.name}`:"Sign In"}</p>
                        <p className="font-extrabold md:text-sm">Sign Out</p>
                    </div>
                    <div onClick={()=>  router.push("/orders")} className="cursor-pointer link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div onClick={()=>router.push("/checkout")} className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>
            {/*bottom navbar */}
            {/*<div className=' flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
                
                   <MenuIcon className="h-6 mr-1"/>
                    All
                   <p className='link flex items-center'>
                    </p>
                   
                <p className='link'>Prime Video</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Today's deal</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                    <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
            </div>*/}
        </header>
    )
}

export default Header
