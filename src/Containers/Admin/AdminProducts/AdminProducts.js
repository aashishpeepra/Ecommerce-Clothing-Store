import React from "react";
import "./AdminProducts.css";
import {db} from "../../../firebase";
import Products from "../../../Components/UI/Products/Products";
import Button from "../../../Components/Navigation/Buttons/Button";

class AdminProducts extends React.Component{
    state={
        data:[]
    }
    componentWillMount(){
        db.collection("Clothes").get().then(querySnapshot=>{
            const data=querySnapshot.docs.map(doc=>doc.data());
            this.setState({data:data});
        })
    }
    navToPath=(path,data)=>{
        this.props.history.push({
            pathname:"/admin/products/"+path,
            state:{
                data:data
            }
        })
    }
    navigator = (obj) => {
        this.props.history.push({ pathname: `/admin/products/` + obj.title, state: obj });
    }
    
    render(){
        return (
            <section className="AdminProducts">
                <h1>All Products</h1>
                <div className="AdminProducts-btn-holder">
                    <Button text="Add new Product" big={true} click={()=>this.navToPath("new",{})} />
                </div>
                {/* Add nav={this.navigator} for opening */}
                <Products nav={this.navigator} type="stacked" data={this.state.data} />
            </section>
            
        )
    }
}

export default AdminProducts;