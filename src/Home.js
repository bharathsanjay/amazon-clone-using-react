import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
        <img 
            className= "home-logo"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""

        />
        <div className="home-row">
        <Product
            id="235478"
            title = "cracking the coding interview"
            price = {11.96}
            rating = {5}
            img = "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln+L._SX348_BO1,204,203,200_.jpg"
            
        />
        <Product
            id="235478"
            title = "cracking the coding interview"
            price = {11.96}
            rating = {5}
            img = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"            
        />
        
        </div>
        <div className="home-row">
        <Product
            id="235478"
            title = "cracking the coding interview"
            price = {11.96}
            rating = {5}
            img = "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            
        />
        <Product
            id="235478"
            title = "cracking the coding interview"
            price = {11.96}
            rating = {5}
            img = "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln+L._SX348_BO1,204,203,200_.jpg"
            
        />
        
        </div>
       
            
        </div>
    );
}

export default Home;
