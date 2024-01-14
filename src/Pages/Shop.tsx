import React from 'react'
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewCollections from "../Components/NewCollections/NewCollections";

const Shop = ()=>{
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollections/>
        </div>
    )
}

export default Shop