import React from "react";
import "./SearchList.css";

export default class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      "shirts",
      "t shirts",
      "half shirts",
      "jeans",
      "sasdad1",
      "s2asda",
      "s3asdas",
      "hfh",
      "s2acvncvsda",
      "s3cvncasdas",
      "half jeans",
      "shorts",
      "half shorts",
      "full shirts",
      "infant shirts",
      "infant half shirts",
      "frocks",
      "pink frocks",
      "trousers",
    ];
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    // let suggestions = [];
    // console.log(value,this.state.value)
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
    const { text } = this.state;
    return (
      <div className="SearchList">
        <input
          placeholder="Search Here"
          value={text}
          type="text"
          onChange={this.onTextChanged}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}
