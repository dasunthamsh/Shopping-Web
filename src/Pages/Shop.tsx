import React from 'react'
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer/Footer";
import LoginSignup from "./LoginSignup";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import product from "./Product";

const Shop = ()=>{
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}

export default Shop