import React, {useState} from 'react';
import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {addToBasket} from "../slices/basketSlice";

const MAX_RATING=5;
const MIN_RATING=1;
function Product({id,title,price,description,category,image}) {
    const dispatch = useDispatch();
    const router=useRouter();
    const [rating]=useState(
        Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1))+MIN_RATING
    );
    const [hasPrime]=useState(Math.random()<0.5);

    const addItemToBasket=()=>{
        const product ={
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };
        //sending the product as an action to the redux store..the  basket slice
        dispatch(addToBasket(product))
    }
    const seeview=()=>{
        const product ={
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };
        if(id==1)router.push("/viewproduct1")
        if(id==2)router.push("/viewproduct2")
        if(id==3)router.push("/viewproduct3")
        if(id==4)router.push("/viewproduct4")
        if(id==5)router.push("/viewproduct5")
        if(id==6)router.push("/viewproduct6")
        if(id==7)router.push("/viewproduct7")
        if(id==8)router.push("/viewproduct8")
        if(id==9)router.push("/viewproduct9")
        if(id==10)router.push("/viewproduct10")
        if(id==11)router.push("/viewproduct11")
        if(id==12)router.push("/viewproduct12")
        if(id==13)router.push("/viewproduct13")
        if(id==14)router.push("/viewproduct14")
        if(id==15)router.push("/viewproduct15")
        if(id==16)router.push("/viewproduct16")
        if(id==17)router.push("/viewproduct17")
        if(id==18)router.push("/viewproduct18")
        if(id==19)router.push("/viewproduct19")
        if(id==20)router.push("/viewproduct20")
    }

    return (
        <div className="relative border-4 border-indigo-100 border-b-indigo-400 flex flex-col m-1 bg-white z-30 p-8 ">
            <p className="absolute top-2 right-2 text-xs italic text-black-400 ">{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" /><br></br><br></br>
            <div class="flex-auto flex space-x-4 ">
             <button onClick={addItemToBasket} class="h-10 px-6 font-semibold rounded-md bg-black text-white ">Add to Basket</button>
        
            <button onClick={seeview} class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 border-black ">View</button>
            
            </div>
            <br></br>
            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <StarIcon className="h-5 text-yellow-500" />
                ))
                }
                
            </div>
            <p className="text-xs my-2">{description}</p>
            <div className="mb-5">
                <Currency quantity={price} currency="INR" />
                
            </div>
        </div>
        
    )
}

export default Product
