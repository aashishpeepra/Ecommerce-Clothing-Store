import React from "react";
import "./Products.css";
import Prds from "../../Components/UI/Products/Products";


export default class Products extends React.Component {
    state = {

    }
    render() {
        return (
            <div>
                <h1>Navigation</h1>
                <main className="Prd-input-holder">

                    <div class="wrapper"><ul class="main-menu">
                        
                        <li id="menu-item-16" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16"><a href="#">Age</a>
                            <ul class="sub-menu">
                                <li id="menu-item-7" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7"><a href="/sample-page/">Sub Page 1</a></li>
                                <li id="menu-item-14" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><a href="/sample-page-2/">Sub Page 2</a></li>
                            </ul>
                        </li>
                        <li id="menu-item-16" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16"><a href="#">Category</a>
                            <ul class="sub-menu">
                                <li id="menu-item-7" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7"><a href="/sample-page/">Sub Page 1</a></li>
                                <li id="menu-item-14" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><a href="/sample-page-2/">Sub Page 2</a></li>
                            </ul>
                        </li>
                        
                        <li id="menu-item-15" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15"><a href="/contact-us/">Sort By</a>
                            <ul class="sub-menu">
                                <li id="menu-item-78" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78"><a href="contact-us-2/our-location/">Our Location</a></li>
                            </ul>
                        </li>
                    </ul></div>

                </main>
                <Prds type="stacked" btn={true} />
            </div>
        );
    }
}