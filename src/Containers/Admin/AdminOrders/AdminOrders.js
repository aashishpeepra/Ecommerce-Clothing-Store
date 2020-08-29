import React from "react";
import { connect } from "react-redux";
import "./AdminOrders.css";
import OrderTile from "../../../Components/UI/OrderTile/orderTile";
import {db} from "../../../firebase";

class AdminOrders extends React.Component{
    state={
        data:[]
    }
    navToEachOrder=(data,user)=>{
        this.props.history.push({
            pathname:"/admin/orders/"+data.orderId,
            state:{
                data:data,
                userInf:user
            }
        })
    }
    componentWillMount(){
        db.collection("Orders").get().then(querySnapshot=>{
            const data=querySnapshot.docs.map(doc=>doc.data());
            this.setState({data:data});
            console.log(this.state.data);
            console.log(this.state.data.map(each=>each.orders.map((e)=>console.log(e))))
        })
    }
    returnTimeSortedData(data){
        let dt=[];
        data.forEach(arr => {
            arr.orders.forEach(order=>{
                dt.push({userData:arr.userData,data:order})
            })
        });
        return dt.sort((a,b)=>b.data.time-a.data.time);
    }
    render(){
        return (
            <section className="AdminOrders">
                <h1>AdminOrders</h1>
                <div className="AdminOrders-data">
                    {
                        this.state.data.length>0? this.returnTimeSortedData(this.state.data).map(each=><OrderTile complete={true} func={()=>this.navToEachOrder(each.data,each.userData)} data={each.data}/>)  :null   
                    }
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
  
  
  export default connect(mapStateToProps)(AdminOrders);
