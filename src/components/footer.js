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
function Footer() {
const [session]=useSession();
const router=useRouter();
const items=useSelector(selectItems);
return (
    <footer class=" bottom-0 z-50">
        <div class=" bg-amazon_blue">
            <div class=" grid grid-cols-2 gap-2 p-5 mx-auto text-sm text-white sm:p-8 md:p-10 md:grid-cols-3 max-w-screen-2xl lg:grid-cols-4">
                <div class="p-2">
                    <div class="my-2 text-base font-bold">Get to Know Us</div>
                    <div class="space-y-1">
                        <p class="link" href="#">Careers</p>
                        <p class="link" href="#">Blog</p>
                        <div onClick={()=>  router.push("/returnpolicy")} className="cursor-pointer link"><p>Apna Store Return Policy</p></div>
                        <div onClick={()=>  router.push("/privacypolicy")} className="cursor-pointer link"><p>Apna Store Privacy Policy</p></div>
                        <p class="link" href="#">Invester Relations</p>
                        <p class="link" href="#">Apna Store devices</p>
                        <p class="link" href="#">Apna Store Tours</p>
                    </div>
                    </div>
                    <div class="p-2">
                        <div class="my-2 text-base font-bold">Make Money with Us</div>
                        <div class="space-y-1">
                            <p class="link" href="#">Sell products on Apna Store</p>
                            <p class="link" href="#">Sell on Apna Store Business</p>
                            <p class="link" href="#">Sell apps on Apna Store</p>
                            <p class="link" href="#">Become an Affiliate</p>
                            <p class="link" href="#">Advertise Your Products</p>
                            <p class="link" href="#">Self-Publish with Us</p>
                            <p class="link" href="#">Host an Apna Store Hub</p>
                        </div>
                        </div>
                        <div class="p-2">
                            <div class="my-2 text-base font-bold">Is Your Internet Down ?😞<br/> No Worry, We Got Your Back !!</div>
                            <div class="space-y-1">
                                <p class="" href="">📞 <b>Call Us At:</b> +1 786-549-1955</p>
                                <p class="" href="">📲 <b>Connect Us With Smart Google Assistant &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enabled Devices</b></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            <div>  
        </div>
    </footer>
    )
}
export default Footer
