import React, { Component } from "react";
import Products from "../../Components/UI/Products/Products";
import Customers from "../../Components/UI/Customers/Customers";
import Category from "../../Components/UI/Categorize/Categorize";
import Slider from "../../Components/Slider/Slider";

import "./Home.css";
export default class Home extends Component {

    
    
    render() {
        return (
            <main className="Home">
               
                
                {/* <h1>Home</h1> */}
                <section className="Home-Trending">
                    <h3>Trending Products</h3>
                <Products type="listed"  />
                </section>
                
               
                 <Category/>
                 <section className="Home-Trending">
                     <h3>Top Picks For you</h3>
                <Products type="listed"  />
                 </section>
                
                 <Customers/>
                  
            </main>

        );
    }
}




