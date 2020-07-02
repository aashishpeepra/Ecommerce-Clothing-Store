import React, { Component } from 'react';
import Products from "../../Components/UI/Products/Products";
import Customers from "../../Components/UI/Customers/Customers";

export default class Home extends Component {
    state = {

    }
    render() {
        return (
            <main>
                <h1>Home</h1>
                <Products type="listed"  />
                <Customers/>
            </main>

        );
    }
}