import React, { Component } from 'react';
import Products from "../../Components/UI/Products/Products";

export default class Home extends Component {
    state = {

    }
    render() {
        return (
            <main>
                <h1>Home</h1>
                <Products type="listed" btn={true} />
            </main>

        );
    }
}