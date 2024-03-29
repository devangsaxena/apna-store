import React from 'react'
import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import {useDispatch} from "react-redux";
import {addToBasket,removeFromBasket} from "../slices/basketSlice";
function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime
    }) {
    const dispatch=useDispatch();
    const addItemToBasket=()=>{
        const product={
            id, title, price, rating, description, category, image, hasPrime
        };
        //pushing items to redux
        dispatch(addToBasket(product));
    };
    const removeItemFromBasket=()=>{
        //removing the item from redux
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className='grid grid-cols-5'>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <p className='text-xs mt-2 mb-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} currency="INR" />
                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img 
                            loading="lazy"
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=""
                        />
                        <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
                    </div>
                )}
            </div>
            
            {/*right add/remove buttons */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
               { /*<button className="button" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>*/}
                <button onClick={addItemToBasket} class="h-10 px-6 font-semibold rounded-md bg-black text-white ">Add to Basket</button>
        
        <button onClick={removeItemFromBasket} class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 ">Remove from Basket</button>
        
            </div>
        </div>
    )
}

export default CheckoutProduct
