import React,{useState} from 'react'
import Header from "../components/Header"
import Image from "next/image"
import {useSelector} from "react-redux";
import {selectItems,selectTotal} from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Product from "../components/Product";
import Currency from "react-currency-formatter";
import {useSession} from "next-auth/client";
import {loadStripe} from "@stripe/stripe-js";
import axios from "axios";
const stripePromise=loadStripe(process.env.stripe_public_key);
import {useDispatch} from "react-redux";
import {addToBasket} from "../slices/basketSlice";
import Footer from '../components/footer';
import ChatBot from '../components/ChatBot'
const MAX_RATING=5;
const MIN_RATING=1;
const myLoader=({src})=>{
    return "https://bit.ly/3EoMoGc";
  }
  const myLoader1=({src})=>{
    return "https://bit.ly/3nIg8ac";
  }
  const myLoader2=({src})=>{
    return "https://bit.ly/3nBBfLv";
  }
  const myLoader3=({src})=>{
    return "https://bit.ly/3bjocZi";
  }
function view1({id,title,price,description,category,image}) {
    const items= useSelector(selectItems);
    const total=useSelector(selectTotal);
    const [session]=useSession();
    const dispatch = useDispatch();
    const createCheckoutSession= async ()=>{
        const stripe=await stripePromise;

        //calling the backened to create a checkout session
        const checkoutSession=await axios.post('/api/create-checkout-session',{
            items:items,
            email:session.user.email,
        })
        // redirect user to stripe checkout
        const result= await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })

        if(result.error){
            alert(result.error.message);
        }
    };
    const [rating]=useState(
        Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1))+MIN_RATING
    );
    const [hasPrime]=useState(Math.random()<0.5);
    


    return (
        <div className='bg-gray-100'>
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
            <div className='flex space-y-10  bg-white p-10 shadow-md'>
                    <Image 
                        src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
                        width={1070}
                        height={250}
                        objectFit="contain" 
                    />
                </div>
                {/*left side */}
                <div className="flex-grow m-5 shadow-sm">
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className="text-3xl border-b pb-4 font-bold">BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats</h1>
                       
                        <h1 className="text-1xl ">Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates</h1>
                        
                        <h1 className="text-2xl font-bold">Product Details</h1>
                        <table class="table-auto">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Style Code</td>
                                <td>BG-7216-GRY</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Color Code</td>
                                <td>Violet</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>Winter Coat</td>
                                <td></td>
                            </tr>
                            
                            <tr>
                                <td>Color Available</td>
                                <td>
                                <a  class="bg-gray-500 hover:bg-gray-700 text-white text-center py-2 px-4 rounded-full h-5 w-5 inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </a>
                                <a  class="bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 rounded-full h-5 w-5 inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </a>
                                <a  class="bg-yellow-500 hover:bg-yellow-700 text-white text-center py-2 px-4 rounded-full h-5 w-5 inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </a>
                                </td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                        <div className='flex space-y-10  bg-white p-10 shadow-md'>
                            <Image 
                       
                            loader={myLoader} src="https://bit.ly/3EoMoGc"
                            width={920}
                            height={950}
                            objectFit="contain" 
                            />
                            <Image 
                       
                                loader={myLoader1} src="https://bit.ly/3nIg8ac"
                                width={920}
                                height={950}
                                objectFit="contain" 
                            />
                            <Image 
                       
                            loader={myLoader2} src="https://bit.ly/3nBBfLv"
                            width={920}
                            height={950}
                            objectFit="contain" 
                            />
                            <Image 
                       
                            loader={myLoader3} src="https://bit.ly/3bjocZi"
                            width={920}
                            height={950}
                            objectFit="contain" 
                            />
                         
                        </div>
                        <h1 className="text-xl font-bold">Available offers</h1>
                        <p className="text-xs">➤ <b>Bank Offer</b> : 10% off on SBI Credit Card, up to ₹1500. On orders of ₹5000 and above T&C</p>
                        <p className="text-xs">➤ <b>Bank Offer</b> : Flat ₹1500 off on SBI Credit Card. On order of ₹30,000 and above T&C</p>
                        <p className="text-xs">➤ <b>EMI offers</b> : EMI starting from ₹125/month T&C</p>
                        <p className="text-xs  text-gray-500">➦ 14 days replacement policy</p>
                        <h1 className="text-xs text-green-600  "><b className="text-red-500 text-4xl">₹ 56.99</b> <strike className="text-gray-600 text-xs">₹ 509.95</strike> <b>(50% off)</b></h1>
                        
                    </div>
                    
                </div>
                {/*right side */}
                
            </main>
            <ChatBot />
            <Footer />
        </div>
    )
}

export default view1
