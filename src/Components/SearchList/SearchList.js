import React from "react";
import {NavLink} from "react-router-dom";
import "./SearchList.css";

export default class SearchList extends React.Component {

  state={
    open:false,
    search:"",
    data:[
      {name:"boys",value:"tshirts",show:"T shirt"},
      {name:"boys",value:"shirts",show:"Shirts"},
      {name:"girls",value:"skirts",show:"Skirts"},
      {name:"boys",value:"jeans",show:"Jeans"},
      {name:"boys",value:"jacket",show:"Jacket"},
      {name:"boys",value:"shorts",show:"Shorts"},
      {name:"girls",value:"2pc",show:"2 PC"},
      {name:"girls",value:"3pc",show:"3 PC"},
      {name:"boys",value:"dungaree",show:"Dungarees"},
      {name:"boys",value:"denim",show:"Denim"},
      {name:"girls",value:"tights",show:"Tights"},
      {name:"girls",value:"frocks",show:"Frocks"},
  
    ]
  }
  renderSelected=()=>{
    return this.state.data.filter(data=>{return data.value.includes(this.state.search.toLowerCase()) && this.state.search!==""});
  }
  onTextChanged = (e) => {
    const value = e.target.value;

    if (value.length === 0 && this.state.text.length !== 0) {
      this.setState({ text: "" });
    }
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      const suggestions = this.items.sort().filter((v) => regex.test(v));
      this.setState(() => ({
        suggestions: suggestions,
        text: value,
      }));
    }
  };

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    console.log(suggestions);
    return (
      <ul>
        {suggestions.map((item) => (
          <li key={item} onClick={() => this.suggestionSelected(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  render() {
    return (
      <div className="SearchList">
        <i onClick={()=>this.setState({open:true})} class="fa fa-search" style={{fontSize:"25px",color:"#fff",transform:"rotate(5deg"}} aria-hidden="true"></i>
        {
          this.state.open?(
            <div className="search_box">
              <div className="search_box_form_holder">
                <div>

                <label htmlFor="search">Search</label>
                <input type="text" id="search" name="search" value={this.state.search} onChange={(e)=>this.setState({search:e.target.value})}/>
                </div>
                <div className="search_box_close" onClick={()=>this.setState({open:false})}>
                  <p>X</p>
                </div>
              </div>
              <div className="search_box_result">
                <ul>
                  {this.renderSelected().map(each=>{
                    return <li onClick={()=>this.setState({open:false})} key={each.value}> <NavLink  to={`/clothings/${each.name}?q=${each.value}`}>{each.show}</NavLink></li>
                  })}
                  </ul>
              </div>
            </div>
          ):null
        }
      </div>
    );
  }
}
