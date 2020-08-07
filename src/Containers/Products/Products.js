import React from "react";
import "./Products.css";
import Prds from "../../Components/UI/Products/Products";
import { db } from "../../firebase";

export default class Products extends React.Component {

    state = {
        gender:"",
        size:-1,
        sort:0,
        category:"",
        data:[]
    }
    componentWillMount(){
        if(this.props.location.state)
        {
            const data=this.props.location.state;
            this.setState(data);
        }
        else{
            this.setState({gender:"",category:"",age:-1})
        }
        console.log(this.props)
    }
    shouldComponentUpdate(nextProps,nextState){
        
        let st= (
            this.state.age!=nextState.age || this.state.category!=nextState.category || this.state.gender!=nextState.gender || this.state.data!=nextState.data || this.state.sort != nextState.sort
        )
        if(st)
            return st;
        if(nextProps.location.state)
        {
            let data=nextProps.location.state;
            let temp=Object.keys(data);
            let check=false;
            for(let i=0;i<temp.length;i++)
            {
                if(nextState[temp[i]]!=data[temp[i]])
                {
                    check=true;
                    break;
                }
            }
            console.log(check,data,nextState)
            return !check;
        }
        return true;
    }
    componentWillReceiveProps(){
        if(this.props.location.state)
        {
            const data=this.props.location.state;
            this.setState(data);
        }
    }
    // componentWillMount(){
    //     if(this.props.location.state)
    //     {
    //         let data=this.props.location.state;
    //         let temp=Object.keys(data);
    //         let check=true;
    //         for(let i=0;i<temp.length;i++)
    //         {
    //             if(this.state[temp[i]]!=data[temp[i]])
    //             {
    //                 check=false;
    //                 break;
    //             }
    //         }
    //         console.log(check,data)
    //         // if(!check)
    //         this.setState(data);
    //         console.log("Will")
    //     }
    //     else{
    //         this.setState({age:-1,category:"",gender:""});
    //     }
        
    // }
    // componentWillReceiveProps(){
    //     console.log("props")
    //     if(this.props.location.state)
    //     {
    //         let data=this.props.location.state;
    //         console.log("SetState Props",data)
    //         this.setState({gender:data.gender,category:data['category'],age:data.age});
    //     }
    //     else{
    //         this.setState({age:-1,category:"",gender:""});
    //     }
        
    // }
    componentDidMount() {
        db.collection("Clothes").get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({ data: data });
        })
    }
    navigator = (obj) => {
        console.log(this.props)
        this.props.history.push({ pathname: `/clothing/` + obj.title, state: obj });
    }
    filter=(data)=>{
        let gender=data.desc.gender.toLowerCase()===this.state.gender.toLowerCase() || this.state.gender==="";
        let age=data.desc.sizes.includes(this.state.age) || this.state.age==-1;
        // UnComment when you change category to list
        // let temp=false;
        // for(let i=0;i<data.desc.category.length;i++)
        //     if(data.desc.category[i].toLowerCase()==this.state.category.toLowerCase())
        //         temp=true;
        let category= data.desc.category.toLowerCase() === this.state.category.toLowerCase() || this.state.category==="";
        return gender && age && category;
    }
    onChangeAge=(e)=>{
        this.setState({age:e.target.value});
    }
    onChangeCategory=(e)=>{
        this.setState({category:e.target.value});
    }
    onChangeSort=(e)=>{
        this.setState({sort:e.target.value});
    }
    onChangeGender=(e)=>{
        this.setState({gender:e.target.value});
    }
    sorter=(data)=>{
        function sortByPriceLtoH(dt){
            for(let i=0;i<dt.length;i++)
            {
                for(let j=0;j<dt.length-i-1;j++)
                {
                    if(dt[j].price>dt[j+1].price)
                    {
                        let temp=dt[j];
                        dt[j]=dt[j+1];
                        dt[j+1]=temp;
                    }
                }
            }
            return dt;
        }
        function sortByPriceHtoL(dt){
            for(let i=0;i<dt.length;i++)
            {
                for(let j=0;j<dt.length-i-1;j++)
                {
                    if(dt[j].price<dt[j+1].price)
                    {
                        let temp=dt[j];
                        dt[j]=dt[j+1];
                        dt[j+1]=temp;
                    }
                }
            }
            return dt;
        }
        switch(this.state.sort){
            case "0":
                return data;
            case "1":
                return sortByPriceLtoH(data);
            case "2":
                return sortByPriceHtoL(data);
            default:
                return data;
        }
    }
    render() {
        console.log(this.props.location);
        return (
            <div className="Prds-wrapper">
                <main className="Prd-input-holder">

                    <div class="select">
                        <select name="slct" onChange={this.onChangeAge} id="slct">
                            <option disabled>Sizes</option>
                            <option value="S">9/12 Months</option>
                            <option value="M">12/18 Months</option>
                            <option value="L">18/24 Months</option>
                            <option value="X">2/3 Years</option>
                            <option value="XL">3/4 Years</option>
                            <option value="-1">All</option>
                        </select>
                    </div>
                    <div class="select" onChange={this.onChangeGender}>
                        <select name="slct" id="slct">
                            <option disabled>Gender</option>
                            <option value="M">Boys</option>
                            <option value="F">Girls</option>
                            <option value="">Both</option>
                        </select>
                    </div>
                    <div class="select" onChange={this.onChangeCategory}>
                        <select name="slct" id="slct">
                            <option  disabled>Category</option>
                            <option value="Tshirt">Tshirts</option>
                            <option value="Shirt">Shirts</option>
                            <option value="Jeans">Jeans</option>
                            <option value="shorts">Shorts</option>
                            <option value="">All</option>
                        </select>
                    </div>
                    <div class="select" onChange={this.onChangeSort}>
                        <select name="slct" id="slct">
                            <option  disabled>Sort</option>
                            <option value={0}>Relevance</option>
                            <option value={1}>Price Low to High</option>
                            <option value={2}>Price High to Low</option>
                        </select>
                    </div>


                </main>
                {this.state.data.length === 0 ? <div>Loading</div> : <Prds type="stacked" btn={true} data={this.sorter(this.state.data.filter(this.filter))} nav={this.navigator} />}

            </div>
        );
    }
}
