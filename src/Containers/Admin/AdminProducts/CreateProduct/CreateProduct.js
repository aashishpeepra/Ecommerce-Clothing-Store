import React from "react";
import "./CreateProduct.css";
import { connect } from "react-redux";
import Button from "../../../../Components/Navigation/Buttons/Button";
import { storage, db } from '../../../../firebase';
class CreateProduct extends React.Component {
    state = {
        title: "",
        price: 0,
        sizes: [],
        gender: "m",
        category: "",
        images: [
            "https://images.unsplash.com/photo-1576250263863-11f6bfa98823?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
            "https://images.unsplash.com/photo-1517116389657-26ab3000c026?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            "https://images.unsplash.com/photo-1544455655-08ede5c4d415?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ],
        file: undefined,
        progress: 0,
        uploadImage: "",
        material: "",
        offer: "",
        old: false,
        oldTitle: "",
        clicked: false
    }
    UNSAFE_componentWillMount() {
        console.log(this.props.location);
        if (this.props.location.state.desc !== undefined) {
            let temp = this.props.location.state;
            this.setState({
                title: temp.title,
                price: temp.price,
                offer: temp.offer,
                id: temp.id,
                images: temp.images,
                sizes: temp.desc.sizes,
                gender: temp.desc.gender,
                category: temp.desc.category,
                material: temp.desc.material,
                old: true,
                oldTitle: temp.title
            })
        }
    }
    onTitleChange = (e) => {
        this.setState({ title: e.target.value });
    }
    onPrice = (e) => {
        this.setState({ price: e.target.value });
    }
    onOffer = (e) => {
        this.setState({ offer: e.target.value });
    }
    onMaterial = (e) => {
        this.setState({ material: e.target.value });
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
            let storageRef = storage.ref();
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
                    upload.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        let copy = [...this.state.images];
                        copy.push(downloadURL);
                        this.setState({ images: copy, uploadImage: downloadURL});
                    })
                })
        }
    }
    deleteProduct = () => {
        let val = prompt("Are you sure you want to delete?");
        if (val) {
            this.setState({ clicked: true })
            db.collection("Clothes").doc(this.state.title).delete()
                .then((res) => {
                    this.setState({ clicked: false });
                    alert("Deleted Successfully");

                    this.props.history.push("/admin/products")
                })
                .catch(err => {
                    console.log("Some Error Occured");
                })

        }
    }
    editProduct = () => {
        const data = {
            title: this.state.title,
            price: this.state.price,
            offer: this.state.offer,
            images: this.state.images,
            desc: {
                material: this.state.material,
                category: this.state.category,
                gender: this.state.gender,
                sizes: this.state.sizes,
            },
            id: this.state.id
        }
        this.setState({ clicked: true });
        if (this.state.title === this.state.oldTitle) {
            db.collection("Clothes").doc(this.state.title).update(data).then(() => this.setState({ clicked: false }));
        }
        else {
            db.collection("Clothes").doc(this.state.oldTitle).delete();
            db.collection("Clothes").doc(this.state.title).set(data).then(() => this.setState({ clicked: false }));
        }

    }
    uploadProductToFirebase = () => {
        const data = {
            title: this.state.title,
            price: this.state.price,
            offer: this.state.offer,
            images: this.state.images,
            desc: {
                material: this.state.material,
                category: this.state.category,
                gender: this.state.gender,
                sizes: this.state.sizes,
            },
            id: Math.floor(Math.random() * 100000 + 100)
        }
        this.setState({clicked:true});
        db.collection("Clothes").doc(data.title).set(data)
            .then(res => this.setState({clicked:false}))
            .catch(err => console.log(err));
    }
    render() {
        console.log(this.state);
        return (
            <div className="User Login">
                {
                    this.state.clicked?(
                        <div className="spinner">
                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>
                </div>
                    ):null
                }
                <h1>Product Editing</h1>
                <div className="User-info-container">
                    <h4>General Information</h4>
                    <form>

                        <fieldset>
                            <label htmlFor="number">Title</label>
                            <input onChange={this.onTitleChange} value={this.state.title} type="text" name="title" id="text" placeholder="Black Cotton Tshirt" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">Price</label>
                            <input onChange={this.onPrice} value={this.state.price} type="number" name="price" id="phone" placeholder="250" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">Offer</label>
                            <input onChange={this.onOffer} value={this.state.offer} type="text" name="offer" id="offer" placeholder="30% Off" />
                        </fieldset>
                        <fieldset className="special">
                            <h5 style={{marginBottom:"20px"}}>Select Available Sizes</h5>
                            <label htmlFor="S">9/12 Months</label>
                            <input onChange={this.onCheckBoxChange} defaultChecked={this.state.sizes.includes('S') || this.state.sizes.includes('s')} type="checkbox" name="S" id="S" />
                            <label htmlFor="S">12/18 Months</label>
                            <input onChange={this.onCheckBoxChange} defaultChecked={this.state.sizes.includes('M') || this.state.sizes.includes('m')} type="checkbox" name="M" id="M" />
                            <label htmlFor="S">18/24 Months</label>
                            <input onChange={this.onCheckBoxChange} defaultChecked={this.state.sizes.includes('L') || this.state.sizes.includes('l')} type="checkbox" name="L" id="L" />
                            <label htmlFor="S">2/3 Years</label>
                            <input onChange={this.onCheckBoxChange} defaultChecked={this.state.sizes.includes('X') || this.state.sizes.includes('x')} type="checkbox" name="X" id="X" />
                            <label htmlFor="S">3/4 Years</label>
                            <input onChange={this.onCheckBoxChange} defaultChecked={this.state.sizes.includes('XL') || this.state.sizes.includes('xl')} type="checkbox" name="XL" id="XL" />
                        </fieldset>
                    </form>
                </div>
                <div className="User-info-container">
                    <h4>Product Descriptionss</h4>
                    <form>
                        <fieldset>
                            <label htmlFor="city">Material</label>
                            <input onChange={this.onMaterial} value={this.state.material} type="text" name="material" id="material" placeholder="Material" />
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
                                <option value="tshirts">T shirt</option>
                                <option value="shirts">Shirt</option>
                                <option value="skirts">Skirts</option>
                                <option value="jeans">Jeans</option>
                                <option value="jacket">Jackets</option>
                                <option value="shorts">Shorts</option>
                                <option value="2pc">2 PC</option>
                                <option value="3pc">3 PC</option>
                                <option value="dungaree">Dungarees</option>
                                <option value="denim">Denim</option>
                                <option value="tights">Tights</option>
                                <option value="kurtis">Kurtis</option>
                                <option value="frocks">Frocks</option>
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

                    {
                        this.state.old ? (
                            <React.Fragment>
                                <div style={{ display: "inline-block", marginLeft: "20px" }}>
                                    <Button click={this.uploadProductToFirebase} text="Save Changes" big={true} />
                                </div>
                                <div style={{ display: "inline-block", marginLeft: "20px" }}>
                                    <Button click={this.deleteProduct} text="Delete Product" big={true} />
                                </div>
                            </React.Fragment>
                        ) : (
                                <div style={{ display: "inline-block", marginLeft: "20px" }}>
                                    <Button click={this.uploadProductToFirebase} text="Add Product" big={true} />
                                </div>
                            )
                    }



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