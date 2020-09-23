import React, { Component } from "react";
import Products from "../../Components/UI/Products/Products";
import Customers from "../../Components/UI/Customers/Customers";
import Category from "../../Components/UI/Categorize/Categorize";
import Carousel from "../../Components/Slider/Slider";
import logo from "../../assets/logo/sukainah-mart.png";
import {connect} from 'react-redux';
import "./Home.css";
import {db} from "../../firebase";

class Home extends Component {
    state={
        data:[],
        images:[]
    }
    componentDidMount(){
        db.collection("Clothes").get().then(querySnapshot=>{
            const data=querySnapshot.docs.map(doc=>doc.data());
            this.setState({data:data});
        })
        db.collection("Home").doc("Slider").get()
        .then(data=>{
            this.setState({images:data.data().images})
        })
        .catch(err=>{
            console.log(err)
            alert('Check Internet Connection');
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
               
                
                <div className="Icon-Holder">
                    <img src={logo} alt="baby Sukainah mart"/>
                </div>
                <Carousel images={this.state.images}/>
                <section className="Home-Trending">
                    <h3 style={{color:"#e8a49c"}}>Deals</h3>
                <Products nav={this.navigator} type="listed" data={this.state.data.slice(0,4)} />
                </section>
                
                
                 {/* <Category/> */}
                 <section className="Home-Trending">
                     <h3  style={{color:"#e8a49c"}}>Top Trends</h3>
                <Products nav={this.navigator} type="listed" data={this.state.data.slice(0,4)} />
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

