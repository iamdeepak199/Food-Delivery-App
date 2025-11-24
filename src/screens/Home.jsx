import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products";

export default function Home() {
  const [search,setSearch] = useState('')
  console.log(search);
  return (
    <div>
     <Navbar setSearch={setSearch} />
      <div className="products-container">
        {productsData.length > 0 ? (
          productsData.filter((item)=>{
            return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search.toLowerCase())


          }).map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              rating={item.rating}
              spice={item.spice}
              price={item.price}
            />
          ))
        ) : (
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>
            No food found 😔
          </h2>
        )}
      </div>

      <Footers />
    </div>
  );
}
