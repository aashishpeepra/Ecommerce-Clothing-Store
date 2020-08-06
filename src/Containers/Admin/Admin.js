import React from "react";
import {connect} from 'react-redux';
import Button from "../../Components/Navigation/Buttons/Button";
import "./Admin.css";

class Admin extends React.Component{
    state={

    }
    takeToPath=(path)=>{
        this.props.history.push(path)
    }
    componentWillMount(){
        if(this.props.loggedIn && this.props.userInfo.email!="thissiteadmin753654@admin.com")
        {
            this.props.history.push("/");
        }
    }
    render(){
        return(
            <section className="Admin">
                <div className="Admin-head">
                    <h1>Welcome Admin</h1>
                <p>You can do all the modification form here. Select one to proceed</p>
                </div>
                
                <div className="Admin-btn-holder">
                    <Button text={"Go to Products Section"} big={true} click={()=>this.takeToPath("/admin/products")}/>
                    <Button text={"Go to Orders Section"} big={true} click={()=>this.takeToPath("/admin/orders")}/>
                </div>
                
            </section>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
      loggedIn: state.loggedIn,
      userInfo: state.userInfo
    };
  };
  
  
  export default connect(mapStateToProps)(Admin);