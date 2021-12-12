import Head from "next/head";
import Header from "../components/Header"
import Banner from "../components/Banner"
import ProductFeed from "../components/ProductFeed"
import {getSession} from "next-auth/client"
import Footer from "../components/footer";
import ChatBot from "../components/ChatBot";
export default function Home({products}) {
  return (
    <div>
      <Head className="bg-gray-100">
        <title>Apna-Store</title>
      </Head>

      {/*Header */}
      <Header />
      <main className='max-w-screen-2xl mx-auto bg-gray-100'>
        {/*Banner */}
        <Banner />
        {/*Product feed */}
        <ProductFeed products={products} />
        
        
        <ChatBot/>
        <Footer />
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const session= await getSession(context);
  const products=await fetch("https://fakestoreapi.com/products").then(
    (res)=>res.json()
  );

  return {
    props:{
    products,
    session
  },
  };
}