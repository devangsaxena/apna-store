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
    return "https://bit.ly/3pNibwh";
  }
  const myLoader1=({src})=>{
    return "https://bit.ly/3jNk6NC";
  }
  const myLoader2=({src})=>{
    return "https://bit.ly/3bp68wZ";
  }
  const myLoader3=({src})=>{
    return "https://bit.ly/3mnrZeh";
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
                        src="	https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
                        width={1020}
                        height={250}
                        objectFit="contain" 
                    />
                </div>
                {/*left side */}
                <div className="flex-grow m-5 shadow-sm">
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className="text-3xl border-b pb-4 font-bold">SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</h1>
                       
                        <h1 className="text-1xl ">Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.</h1>
                        
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
                                <td>Black</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>Internal SSD 1TB</td>
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
                       
                            loader={myLoader} src="https://bit.ly/3pNibwh"
                            width={920}
                            height={950}
                            objectFit="contain" 
                            />
                            <Image 
                       
                                loader={myLoader1} src="https://bit.ly/3jNk6NC"
                                width={920}
                                height={950}
                                objectFit="contain" 
                            />
                            <Image 
                       
                            loader={myLoader2} src="https://bit.ly/3bp68wZ"
                            width={920}
                            height={950}
                            objectFit="contain" 
                            />
                            <Image 
                       
                            loader={myLoader3} src="https://bit.ly/3mnrZeh"
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
                        <h1 className="text-xs text-green-600  "><b className="text-red-500 text-4xl">₹ 109.00</b> <strike className="text-gray-600 text-xs">₹ 509.95</strike> <b>(50% off)</b></h1>
                        
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
