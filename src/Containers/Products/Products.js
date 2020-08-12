import React from "react";
import "./Products.css";
import Prds from "../../Components/UI/Products/Products";
import { db } from "../../firebase";

export default class Products extends React.Component {

    state = {
        blockAge: false,
        gender: "",
        size: -1,
        sort: 0,
        category: "",
        checkCategory: [],
        data: [],
        price: 5000,
        age: "1",
        checkAge: []
    }
    componentWillMount() {

        let search = this.props.location.search;
        if (search !== "")
            search = search.substring(search.indexOf("=") + 1)
        console.log(this.props.location.search.indexOf("="))

        const pathname = this.props.location.pathname;
        console.log(pathname);
        let temp = [];
        let catGirls = [
            { name: "Frock & Jumpsuit", value: "frock" },
            { name: "kurti", value: "kurti" },
            { name: "T-shirts", value: "tshirts" },
            { name: "Tunics & blouses", value: "blouse" },
            { name: "Doungree", value: "doungree" },
            { name: "Pants & Jeans", value: "pants" },
            { name: "Tights", value: "tights" },
            { name: "Shorts & skirts", value: "short" },
            { name: "Trouser", value: "trouser" },
            { name: "Sets", value: "sets" },
            { name: "Sleepwear", value: "sleepwear" }
        ];
        let catBoys = [
            { name: "Shirts", value: "shirts" },
            { name: "T-shirts", value: "tshirts" },
            { name: "Doungree", value: "doungree" },
            { name: "Trousers", value: "trousers" },
            { name: "Shorts", value: "shorts" },
            { name: "Sets", value: "sets" },
            { name: "Sleepwear", value: "sleepwear" }
        ]
        
        if (pathname.endsWith("babyboys")) {
            temp = [{ name: "0/3M", value: "s" }, { name: "3/6M", value: "m" }, { name: "6/9M", value: "l" }, { name: "9/12M", value: "x" }, { name: "12/18M", value: "xl" }, { name: "18/24M", value: "xxl" }, { name: "2/3Y", value: "xxxl" }]
            this.setState({ gender: "M", checkAge: temp, checkCategory: catBoys, category: search });
            return;
        }

        if (pathname.endsWith("babygirls")) {
            temp = [{ name: "0/3M", value: "s" }, { name: "3/6M", value: "m" }, { name: "6/9M", value: "l" }, { name: "9/12M", value: "x" }, { name: "12/18M", value: "xl" }, { name: "18/24M", value: "xxl" }, { name: "2/3Y", value: "xxxl" }]
            this.setState({ gender: "F", checkAge: temp, checkCategory: catGirls, category: search });
            return;
        }
        if (pathname.endsWith("boys")) {
            temp = [{ name: "3/4Y", value: "s" }, { name: "5/6Y", value: "m" }, { name: "7/8Y", value: "l" }, { name: "9/10Y", value: "x" }, { name: "11/12Y", value: "xl" }, { name: "13/14Y", value: "xxl" }]

            this.setState({ gender: "M", checkAge: temp, checkCategory: catBoys, category: search });
            return;
        }

        if (pathname.endsWith("girls")) {
            temp = [{ name: "3/4Y", value: "s" }, { name: "5/6Y", value: "m" }, { name: "7/8Y", value: "l" }, { name: "9/10Y", value: "x" }, { name: "11/12Y", value: "xl" }, { name: "13/14Y", value: "xxl" }]
            this.setState({ gender: "F", checkAge: temp, checkCategory: catGirls, category: search });
            return;
        }
        if (pathname.endsWith("accessories")) {
            this.setState({ blockAge: true })
        }


    }

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
    filter = (data) => {
        let gender = data.desc.gender.toLowerCase() === this.state.gender.toLowerCase() || this.state.gender === "";
        console.log(this.state.age)
        let age = data.desc.sizes.includes(this.state.age.toUpperCase()) || this.state.age === "1";
        // UnComment when you change category to list
        // let temp=false;
        // for(let i=0;i<data.desc.category.length;i++)
        //     if(data.desc.category[i].toLowerCase()==this.state.category.toLowerCase())
        //         temp=true;
        let category = data.desc.category.toLowerCase().includes(this.state.category.toLowerCase()) || this.state.category === "";
        let price = data.price <= this.state.price;
        let accessory =this.state.blockAge? data.desc.category.toLowerCase().includes("accessories") :true;
        return gender && age && category && price &&accessory;
    }
    onChangeAge = (e) => {
        this.setState({ age: e.target.value });
    }
    onChangeCategory = (e) => {
        this.setState({ category: e.target.value });
    }
    onChangeSort = (e) => {
        this.setState({ sort: e.target.value });
    }
    onChangeGender = (e) => {
        this.setState({ gender: e.target.value });
    }
    sorter = (data) => {
        function sortByPriceLtoH(dt) {
            for (let i = 0; i < dt.length; i++) {
                for (let j = 0; j < dt.length - i - 1; j++) {
                    if (dt[j].price > dt[j + 1].price) {
                        let temp = dt[j];
                        dt[j] = dt[j + 1];
                        dt[j + 1] = temp;
                    }
                }
            }
            return dt;
        }
        function sortByPriceHtoL(dt) {
            for (let i = 0; i < dt.length; i++) {
                for (let j = 0; j < dt.length - i - 1; j++) {
                    if (dt[j].price < dt[j + 1].price) {
                        let temp = dt[j];
                        dt[j] = dt[j + 1];
                        dt[j + 1] = temp;
                    }
                }
            }
            return dt;
        }
        switch (this.state.sort) {
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
    changeRange = (e) => {
        this.setState({ price: parseInt(e.target.value) })
    }
    render() {
        console.log(this.state);
        return (
            <div className="Prds-wrapper">
                <main className="Prd-input-holder">
                    {this.state.blockAge ? null : (
                        <React.Fragment>
                        <div className="select">
                            <select value={this.state.age} name="slct" onChange={this.onChangeAge} id="age">
                                <option disabled>Sizes</option>
                                {this.state.checkAge.map(each => <option value={each.value} key={each.value} >{each.name}</option>)}

                                <option value="1">All</option>
                            </select>
                        </div>
                        <div className="select" >
                        <select value={this.state.gender} onChange={this.onChangeGender} name="slct" id="gender">
                            <option disabled>Gender</option>
                            <option value="M">Boys</option>
                            <option value="F">Girls</option>
                            <option value="">Both</option>
                        </select>
                    </div>
                    <div className="select" >
                        <select value={this.state.category} onChange={this.onChangeCategory} name="slct" id="category">
                            <option disabled>Category</option>
                            {this.state.checkCategory.map(each => <option value={each.value} key={each.value}>{each.name}</option>)}
                            <option value="">All</option>
                        </select>
                    </div>
                    </React.Fragment>
                    )}
                    
                    <div className="select" onChange={this.onChangeSort}>
                        <select name="slct" id="relevance">
                            <option disabled>Sort</option>
                            <option value={0}>Relevance</option>
                            <option value={1}>Price Low to High</option>
                            <option value={2}>Price High to Low</option>
                        </select>
                    </div>
                    <div className="select2" >
                        <span>Select Range</span>
                        <span >0</span>
                        <input type="range" min="0" max={5000} name="sld3" value={this.state.price} onChange={this.changeRange} />
                        <span >{this.state.price}</span>
                    </div>

                </main>
                {this.state.data.length === 0 ? <div>Loading</div> : <Prds type="stacked" btn={true} data={this.sorter(this.state.data.filter(this.filter))} nav={this.navigator} />}

            </div>
        );
    }
}
