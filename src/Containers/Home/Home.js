import React, { Component } from "react";
import Products from "../../Components/UI/Products/Products";
import Customers from "../../Components/UI/Customers/Customers";
import Category from "../../Components/UI/Categorize/Categorize";
import Carousel from "../../Components/Slider/Slider";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import "./Home.css";
import {db} from "../../firebase";

class Home extends Component {
    state={
        data:[]
    }
    componentDidMount(){
        db.collection("Clothes").get().then(querySnapshot=>{
            const data=querySnapshot.docs.map(doc=>doc.data());
            this.setState({data:data});
        })
        // this.props.getAllData();
    }
    navigator=(obj)=>{
        this.props.history.push({
            pathname:`/clothing/${obj.title}`,
            state:obj
        })
    }
    render() {
        return (
            <main className="Home">
               
                
                {/* <h1>Home</h1> */}
                <Carousel/>
                <section className="Home-Trending">
                    <h3 style={{color:"#5b6b6a"}}>Trending Products</h3>
                <Products nav={this.navigator} type="listed" data={this.state.data} />
                </section>
                
                
                 <Category/>
                 <section className="Home-Trending">
                     <h3  style={{color:"#5b6a6b"}}>Top Picks For you</h3>
                <Products nav={this.navigator} type="listed" data={this.state.data} />
                 </section>
                
                 <Customers/>
                  
            </main>

        );
    }
}


function mapStateToProps(state){
    return {data:state.data}
}

export default connect(mapStateToProps)(Home);

