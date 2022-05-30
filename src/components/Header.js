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
    return "https://bit.ly/36lDgq6";
  }
function Header() {
    const [session]=useSession();
    const router=useRouter();

    const items=useSelector(selectItems);
    return (
        <header >
            {/*top navbar */}
            <div className=" flex  items-center bg-blue-900  p-1 flex-grow py-2 ">
                
                <div className='-mt-1 flex items-center flex-grow sm:flex-grow-0'>
                    <Image
                    onClick={()=>router.push('/')}
                    loader={myLoader} src="https://bit.ly/36lDgq6"
                        width={90}
                        height={47}
                        objectFit="contain"
                        className="cursor-pointer"
                     />
                     <div className="link" ><p onClick={()=>router.push('/')} className="font-extrabold md:text-xl text-white mr-5 -ml-4 mb-2 mt-2">Apna Store   </p></div>
                     
                </div>
                
                {/*Search bar */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-violet-900">
                    <marquee scrollamount="15" ><p className="items-center   font-extrabold text-2xl italic text-white"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
                    🛒   अब &nbsp;करो&nbsp; जी&nbsp;  भर&nbsp;&nbsp;के&nbsp; खरीदारी &nbsp;...🛒  </p></marquee>
                    
                </div>
                {/*right icons */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className=" link">
                        
                        <p onClick={!session ?signIn : signOut}>{session?`Hello, ${session.user.name}`:"Sign In"}</p>
                        <p className="font-extrabold md:text-sm">Sign Out</p>
                    </div>
                    <div onClick={()=>  router.push("/orders")} className="cursor-pointer link">
                        <p>Orders</p>
                        <p className="font-extrabold md:text-sm"> History</p>
                    </div>
                    <div onClick={()=>router.push("/checkout")} className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
