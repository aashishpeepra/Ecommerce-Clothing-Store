import React from "react";
import "./Products.css";
import Prds from "../../Components/UI/Products/Products";


export default class Products extends React.Component {
    state = {

    }
    render() {
        return (
            <div>
                <main className="Prd-input-holder">

                    <div class="wrapper"><ul class="main-menu">
                        
                        <li id="menu-item-16" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16"><a href="#">Age</a>
                            <ul class="sub-menu">
                                <li id="menu-item-7" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7"><a href="/sample-page/">Infants</a></li>
                                <li id="menu-item-14" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><a href="/sample-page-2/">Age 2-6</a></li>
                                <li id="menu-item-14" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><a href="/sample-page-2/">Age 6-12</a></li>
                                <li id="menu-item-14" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><a href="/sample-page-2/">Age 12-18</a></li>
                            </ul>
                        </li>
                        <li id="menu-item-16" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16"><a href="#">Gender</a>
                            <ul class="sub-menu">
                                <li id="menu-item-7" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7"><a href="/sample-page/">Infants</a></li>
                                <li id="menu-item-14" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><a href="/sample-page-2/">Boys</a></li>
                                <li id="menu-item-14" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><a href="/sample-page-2/">Girls</a></li>
                            </ul>
                        </li>
                        <li id="menu-item-16" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16"><a href="#">Category</a>
                            <ul class="sub-menu">
                                <li id="menu-item-7" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7"><a href="/sample-page/">T-shrts</a></li>
                                <li id="menu-item-14" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><a href="/sample-page-2/">Jeans</a></li>
                                <li id="menu-item-14" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><a href="/sample-page-2/">Tops</a></li>
                            </ul>
                        </li>
                        
                        <li id="menu-item-15" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15"><a href="/contact-us/">Sort By</a>
                            <ul class="sub-menu">
                                <li id="menu-item-78" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78"><a href="contact-us-2/our-location/">Relevance</a></li>
                                <li id="menu-item-78" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78"><a href="contact-us-2/our-location/">Price: Low to High</a></li>
                                <li id="menu-item-78" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78"><a href="contact-us-2/our-location/">Price: High to Low</a></li>
                            </ul>
                        </li>
                    </ul></div>

                </main>
                <Prds type="stacked" btn={true} />
            </div>
        );
    }
}