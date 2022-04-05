import { getSession, useSession } from 'next-auth/client'
import Header from '../components/Header'

import Image from 'next/image'
import db from '../../firebase'
import Order from '../components/Order'
import Head from 'next/head'
import moment from "moment";
const myLoader=({src})=>{
    return "https://bit.ly/36lDgq6";
  }
function returnn({ orders }) {
    const [session]=useSession();
    return (
        <div>
            <Header/>
            <main className='max-w-screen-lg mx-auto p-10'>
                <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>Return Policy</h1>

                <h2><b>Returns:</b> Once your items are delivered, you have 7 days from the date of delivery to ship them back to us for a full refund. Returns shipped after the first 7 days will be eligible for store credit (store credits never expire). After 30 days, all sales are FINAL and returns will not be accepted.</h2><br></br>
                <h2><b>If there is a problem with your order, please be sure to contact us immediately!</b>
All returned merchandise must be in its original packaging. We do not reimburse shipping or return fees. However, we will provide a return label (at no cost to you) via email for any orders that were fulfilled incorrectly.
</h2><br></br>
                <h2><b>Return Instructions:</b> All returns must include a tracking number . Please provide us with the tracking number for your return (devangsaxena2018@gmail.com). Failure to do so may delay the processing of your return/credit. </h2><br></br>
                <h2><b>Exchanges:</b> At this time, we do not accept exchanges.</h2><br></br>
                <br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <Image
                    onClick={()=>router.push('/')}
                    loader={myLoader} src="https://bit.ly/36lDgq6"
                    width={180}
                    height={180}
                    objectFit="contain"
                    className="cursor-pointer center"
                />
            </main>
            
        </div>
        
    );
}

export default returnn;

