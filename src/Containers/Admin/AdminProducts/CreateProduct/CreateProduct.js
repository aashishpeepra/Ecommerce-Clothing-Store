import React from "react";
import "./CreateProduct.css";
import { connect } from "react-redux";
import Button from "../../../../Components/Navigation/Buttons/Button";
import { storage, db } from '../../../../firebase';
class CreateProduct extends React.Component {
    state = {
        title:"",
        price:0,
        sizes: [],
        gender: "m",
        category: "",
        age: "1",
        images: [
            "https://images.unsplash.com/photo-1576250263863-11f6bfa98823?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
            "https://images.unsplash.com/photo-1517116389657-26ab3000c026?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            "https://images.unsplash.com/photo-1544455655-08ede5c4d415?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ],
        file: undefined,
        progress: 0,
        uploadImage: "",
        material:"",
        offer:""
    }
    onCheckBoxChange = (e) => {
        let check = false;
        let index = 0;
        for (let i = 0; i < this.state.sizes.length; i++)
            if (this.state.sizes[i] === e.target.name) {
                check = true;
                index = i;
            }

        if (check) {
            let copy = this.state.sizes;
            copy.splice(index, 1);
            this.setState({ sizes: copy });
        }
        else {
            let copy = this.state.sizes;
            copy.push(e.target.name);
            this.setState({ sizes: copy });
        }
    }
    onRadioChange = (e) => {
        this.setState({ gender: e.target.value.toUpperCase() });
    }
    onSelectChange = (e) => {
        this.setState({ category: e.target.value.toUpperCase() });
    }
    onSelectChange2 = (e) => {
        this.setState({ age: e.target.value.toUpperCase() });
    }
    removeImage = (index) => {
        let copy = this.state.images;
        copy.splice(index, 1);
        this.setState({ images: copy });
    }
    onFileUpload = (e) => {
        this.setState({ file: e.target.files[0] });
    }
    uploadToFirebase = () => {
        if (this.state.file === undefined)
            alert("Please select an image");
        else {
            let storageRef=storage.ref();
            const upload = storageRef.child(`images/${this.state.file.name}`).put(this.state.file);
            const temp = upload.on('state_changed',
                (snapshot) => {
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    this.setState({ progress: progress });

                },
                (err) => {
                    alert("Some Error Occured");
                    console.log(err);
                },
                () => {
                    console.log(upload.snapshot);
                    upload.snapshot.ref.getDownloadURL().then( (downloadURL)=> {
                        let copy = [...this.state.images];
                        copy.push(downloadURL);
                        this.setState({ images: copy, uploadImage: downloadURL });
                    })
                })
        }
    }
    uploadProductToFirebase=()=>{
       const data={
           title:this.state.title,
           price:this.state.price,
           offer:this.state.offer,
           images:this.state.images,
           offer:this.state.offer,
           desc:{
               material:this.state.material,
               age:this.state.age,
               category:this.state.category,
               gender:this.state.gender,
               sizes:this.state.sizes,
           },
           id:Math.floor(Math.random()*100000+100)
       }
       db.collection("Clothes").doc(data.title).set(data)
       .then(res=>console.log(res))
       .catch(err=>console.log(err));
    }
    render() {
        console.log(this.state);
        return (
            <div className="User Login">
                <h1>{this.props.userInfo.name}</h1>
                <div className="User-info-container">
                    <h4>General Information</h4>
                    <form>

                        <fieldset>
                            <label htmlFor="number">Title</label>
                            <input value={this.props.loggedIn ? this.state.title : ""} text="text" name="text" id="text" placeholder="Black Cotton Tshirt" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">Price</label>
                            <input value={this.props.loggedIn ? this.state.price : 0} text="number" name="phone" id="phone" placeholder="250" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">Offer</label>
                            <input value={this.props.loggedIn ? this.state.offer : 0} text="text" name="offer" id="offer" placeholder="30% Off" />
                        </fieldset>
                        <fieldset className="special">
                            <h5>Select Available Sizes</h5>
                            <label htmlFor="S">S</label>
                            <input onChange={this.onCheckBoxChange} type="checkbox" name="S" id="S" />
                            <label htmlFor="S">M</label>
                            <input onChange={this.onCheckBoxChange} type="checkbox" name="M" id="M" />
                            <label htmlFor="S">L</label>
                            <input onChange={this.onCheckBoxChange} type="checkbox" name="L" id="L" />
                            <label htmlFor="S">X</label>
                            <input onChange={this.onCheckBoxChange} type="checkbox" name="X" id="X" />

                        </fieldset>
                    </form>
                </div>
                <div className="User-info-container">
                    <h4>Product Descriptionss</h4>
                    <form>
                        <fieldset>
                            <label htmlFor="city">Material</label>
                            <input value={this.props.loggedIn ? this.state.props : ""} type="text" name="material" id="material" placeholder="Material" />
                        </fieldset>
                        <fieldset className="special">
                            <h5>Select Gender</h5>
                            <label htmlFor="m">M</label>
                            <input onChange={this.onRadioChange} checked={this.state.gender.toUpperCase() === "M"} type="radio" name="Male" value="m" id="m" />
                            <label htmlFor="f">F</label>
                            <input onChange={this.onRadioChange} checked={this.state.gender.toUpperCase() === "F"} type="radio" name="Female" value="f" id="f" />
                        </fieldset>
                        <fieldset className="special2">
                            <label htmlFor="category">Cetegory</label>
                            <select onChange={this.onSelectChange} id="category">
                                <option value="tshirt">T shirt</option>
                                <option value="shirt">Shirt</option>
                                <option value="skirts">Skirts</option>
                                <option value="jeans">Jeans</option>
                                <option value="jacket">JAckets</option>
                            </select>
                        </fieldset>
                        <fieldset className="special2">
                            <label htmlFor="age">Age</label>
                            <select onChange={this.onSelectChange2} id="age">
                                <option value="0">Infants</option>
                                <option value="1">Age 0-6</option>
                                <option value="2">Age 6-12</option>
                                <option value="3">Age 12-18</option>

                            </select>
                        </fieldset>
                    </form>
                    <form>
                        <h4>Product Images</h4>
                        <fieldset className="special3">
                            <progress value={this.state.progress} max="100" id="uploader">{this.state.progress}</progress>
                            <input onChange={this.onFileUpload} name="addimage" type="file" />
                            <Button click={this.uploadToFirebase} text="Upload Image" big={false} />
                        </fieldset>
                    </form>
                </div>
                <div className="CreateProducts-current-images">
                    {
                        this.state.images.map((each, index) => {
                            return (
                                <div className="CreateProducts-images">
                                    <div className="CreateProducts-images-holder">
                                        <img src={each} alt="Product" />
                                    </div>
                                    <Button text="Remove" click={() => this.removeImage(index)} color="red" />
                                </div>
                            )

                        })
                    }


                </div>

                <div style={{ marginTop: "20px" }}>


                    <div style={{ display: "inline-block", marginLeft: "20px" }}>
                        <Button text="Add Product" big={true} />
                    </div>

                </div>

                <div className="User-info-container">

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userInfo: state.userInfo
    };
};


export default connect(mapStateToProps)(CreateProduct);