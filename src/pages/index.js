import Head from "next/head";
import Header from "../components/Header"
import Banner from "../components/Banner"
import ProductFeed from "../components/ProductFeed"
export default function Home({products}) {
  return (
    <div>
      <Head className="bg-gray-100">
        <title>Amazon 2.0</title>
      </Head>

      {/*Header */}
      <Header />
      <main className='max-w-screen-2xl mx-auto bg-gray-100'>
        {/*Banner */}
        <Banner />
        {/*Product feed */}
        <ProductFeed products={products} />
        
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const products=await fetch("https://fakestoreapi.com/products").then(
    (res)=>res.json()
  );

  return {
    props:{
    products,
  },
  };
}