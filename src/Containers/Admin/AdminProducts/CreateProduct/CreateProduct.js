import React from "react";
import "./CreateProduct.css";
import { connect } from "react-redux";
import Button from "../../../../Components/Navigation/Buttons/Button";
import { storage, db } from "../../../../firebase";
class CreateProduct extends React.Component {
  state = {
    title: "",
    price: 0,
    sizes: [],
    gender: "m",
    category: "",
    images: [],
    file: undefined,
    progress: 0,
    uploadImage: "",
    material: "",
    offer: "",
    old: false,
    oldTitle: "",
    clicked: false,
    agesSelect: [
      { name: "0/3M", value: "0/3M" },
      { name: "3/6M", value: "3/6M" },
      { name: "6/9M", value: "6/9M" },
      { name: "9/12M", value: "9/12M" },
      { name: "12/18M", value: "12/18M" },
      { name: "18/24M", value: "18/24M" },
      { name: "2/3Y", value: "2/3Y" },
      { name: "3/4Y", value: "3/4Y" },
      { name: "5/6Y", value: "5/6Y" },
      { name: "7/8Y", value: "7/8Y" },
      { name: "9/10Y", value: "9/10Y" },
      { name: "11/12Y", value: "11/12Y" },
      { name: "13/14Y", value: "13/14Y" },
      { name: "15/16Y", value: "15/16Y" },
      { name: "17/18Y", value: "17/18Y" },
    ],
    isaccessory: false,
    forsale: false,
    newarrival: false,
    para: "",
    quantity: "",
    unisex: false,
    oldPrice: "",
    stock:{}
  };
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
        isaccessory:
          temp.desc.isaccessory === undefined ? false : temp.desc.isaccessory,
        forsale: temp.desc.forsale === undefined ? false : temp.desc.forsale,
        newarrival:
          temp.desc.newarrival === undefined ? false : temp.desc.newarrival,
        para: temp.desc.para === undefined ? "" : temp.desc.para,
        old: true,
        oldTitle: temp.title,
        quantity: temp.quantity === undefined ? 0 : temp.quantity,
        unisex: temp.unisex === undefined ? false : temp.unisex,
        oldPrice: temp.oldPrice === undefined ? temp.price : temp.oldPrice,
        stock:temp.stock===undefined? {}:temp.stock
      });
    }
    
  }
  onTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  onPrice = (e) => {
    this.setState({ price: e.target.value });
  };
  onOffer = (e) => {
    this.setState({ offer: e.target.value });
  };
  onMaterial = (e) => {
    this.setState({ material: e.target.value });
  };
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
    } else {
      let copy = this.state.sizes;
      copy.push(e.target.name);
      this.setState({ sizes: copy });
    }
  };
  onRadioChange = (e) => {
    this.setState({ gender: e.target.value.toUpperCase() });
  };
  onSelectChange = (e) => {
    this.setState({ category: e.target.value });
  };
  onSelectChange2 = (e) => {
    this.setState({ age: e.target.value.toUpperCase() });
  };
  removeImage = (index) => {
    let copy = this.state.images;
    copy.splice(index, 1);
    this.setState({ images: copy });
  };
  onFileUpload = (e) => {
    this.setState({ file: e.target.files[0] });
  };
  uploadToFirebase = () => {
    if (this.state.file === undefined) alert("Please select an image");
    else {
      let storageRef = storage.ref();
      const upload = storageRef
        .child(`images/${this.state.file.name}`)
        .put(this.state.file);

      const temp = upload.on(
        "state_changed",
        (snapshot) => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
            this.setState({ images: copy, uploadImage: downloadURL });
          });
        }
      );
    }
  };
  deleteProduct = () => {
    let val = prompt("Are you sure you want to delete?");
    if (val) {
      this.setState({ clicked: true });
      db.collection("Clothes")
        .doc(this.state.title)
        .delete()
        .then((res) => {
          this.setState({ clicked: false });
          alert("Deleted Successfully");

          this.props.history.push("/admin/products");
        })
        .catch((err) => {
          console.log("Some Error Occured");
        });
    }
  };
  editProduct = () => {
    const data = {
      title: this.state.title,
      price: parseInt(this.state.price),
      offer: this.state.offer,
      images: this.state.images,
      desc: {
        material: this.state.material,
        category: this.state.category,
        gender: this.state.gender,
        sizes: this.state.sizes,
        newarrival: this.state.newarrival,
        forsale: this.state.forsale,
        isaccessory: this.state.isaccessory,
        para: this.state.para,
      },
      id: this.state.id,
      unisex: this.state.unisex,
      oldPrice: this.state.oldPrice,
      stock:this.state.stock
    };
    this.setState({ clicked: true });
    if (this.state.title === this.state.oldTitle) {
      db.collection("Clothes")
        .doc(this.state.title)
        .update(data)
        .then(() => this.setState({ clicked: false }));
    } else {
      db.collection("Clothes").doc(this.state.oldTitle).delete();
      db.collection("Clothes")
        .doc(this.state.title)
        .set(data)
        .then(() => this.setState({ clicked: false }));
    }
  };
  uploadProductToFirebase = () => {
    const data = {
      title: this.state.title,
      price: parseInt(this.state.price),
      offer: this.state.offer,
      images: this.state.images,
      desc: {
        material: this.state.material,
        category: this.state.category,
        gender: this.state.gender,
        sizes: this.state.sizes,
        newarrival: this.state.newarrival,
        forsale: this.state.forsale,
        isaccessory: this.state.isaccessory,
        para: this.state.para,
      },
      id: Math.floor(Math.random() * 100000 + 100),
      unisex: this.state.unisex,
      oldPrice: this.state.oldPrice,
      stock:this.state.stock
    };
    this.setState({ clicked: true });
    db.collection("Clothes")
      .doc(data.title)
      .set(data)
      .then((res) => this.setState({ clicked: false }))
      .catch((err) => console.log(err));
  };
  changeQuantity=(name,qty)=>{
        let updateKey={...this.state.stock}
        updateKey[name]=qty;
        this.setState({stock:updateKey})
  }
  returnQuantity=(name)=>{
    
      if(this.state.stock[name]!==undefined)
      return this.state.stock[name];
      return 0;
      
  }
  rednderAges = () => {
    return this.state.agesSelect.map((each, index) => {
      return (
        <div className="age-info-holder" key={Math.random()*100}>
          <label key={each.name + Math.random()}>{each.name}</label>
          <input
            type="checkbox"
            onChange={this.onCheckBoxChange}
            name={each.value}
            value={each.value}
            key={each.value}
            checked={this.state.sizes.includes(each.value)}
          />
          <input  type="text" onChange={(e)=>this.changeQuantity(each.name,e.target.value)} value={this.returnQuantity(each.name)} />
        </div>
      );
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="User Login">
        {this.state.clicked ? (
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
        ) : null}
        <h1>Product Editing</h1>
        <div className="User-info-container">
          <h4>General Information</h4>
          <form>
            <fieldset>
              <label htmlFor="number">Title</label>
              <input
                onChange={this.onTitleChange}
                value={this.state.title}
                type="text"
                name="title"
                id="text"
                placeholder="Enter Title"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Price</label>
              <input
                onChange={this.onPrice}
                value={this.state.price}
                type="number"
                name="price"
                id="phone"
                placeholder="enter Price"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="old-price">Old Price</label>
              <input
                onChange={(e) => this.setState({ oldPrice: e.target.value })}
                value={this.state.oldPrice}
                type="text"
                name="old-price"
                id="old-price"
                placeholder="Enter old Price"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Offer</label>
              <input
                onChange={this.onOffer}
                value={this.state.offer}
                type="text"
                name="offer"
                id="offer"
                placeholder="Enter Percentage Off"
              />
            </fieldset>
            <fieldset className="special">
              <h5>Is this for new Arrival?</h5>
              <label htmlFor="arrival1">Yes</label>
              <input
                onChange={() => this.setState({ newarrival: true })}
                id="arrival1"
                checked={this.state.newarrival}
                value="yes"
                type="radio"
              />

              <label htmlFor="arrival2">No </label>
              <input
                onChange={() => this.setState({ newarrival: false })}
                value="no"
                checked={!this.state.newarrival}
                id="arrival2"
                type="radio"
              />
            </fieldset>
            <fieldset className="special">
              <h5>Is this for sale?</h5>
              <label htmlFor="sale1">Yes</label>
              <input
                onChange={() => this.setState({ forsale: true })}
                id="sale1"
                checked={this.state.forsale}
                value="yes"
                type="radio"
              />

              <label htmlFor="sale2">No </label>
              <input
                onChange={() => this.setState({ forsale: false })}
                value="no"
                checked={!this.state.forsale}
                id="sale2"
                type="radio"
              />
            </fieldset>
            <fieldset className="special">
              <h5>Is this an unisex product?</h5>
              <label htmlFor="Unisex-true">Yes</label>
              <input
                type="radio"
                checked={this.state.unisex}
                onChange={(e) => this.setState({ unisex: true })}
                value={this.state.unisex}
                name="unisex-true"
                id="unisex-true"
              />
              <label htmlFor="Unisex-false">No</label>
              <input
                type="radio"
                checked={!this.state.unisex}
                onChange={(e) => this.setState({ unisex: false })}
                value={this.state.unisex}
                name="unisex-false"
                id="unisex-false"
              />
            </fieldset>
            <fieldset className="special">
              <h5>Is this an accessory?</h5>
              <label htmlFor="accessory1">Yes</label>
              <input
                onChange={() => this.setState({ isaccessory: true })}
                id="accessory1"
                checked={this.state.isaccessory}
                value="yes"
                type="radio"
              />

              <label htmlFor="accessory2">No </label>
              <input
                onChange={() => this.setState({ isaccessory: false })}
                value="no"
                checked={!this.state.isaccessory}
                id="accessory2"
                type="radio"
              />
            </fieldset>
            {this.state.isaccessory ? null : (
              <React.Fragment>
               
                <fieldset className="special">
                  <h5 style={{ marginBottom: "20px" }}>
                    Select Available Sizes
                  </h5>
                  {this.rednderAges()}
                </fieldset>
              </React.Fragment>
            )}
          </form>
        </div>
        <div className="User-info-container">
          <h4>Product Descriptionss</h4>
          <form>
         

            <fieldset>
              <label
                htmlFor="city"
                style={{ display: "block", margin: "10px" }}
              >
                Material
              </label>
              <input
                onChange={this.onMaterial}
                value={this.state.material}
                type="text"
                name="material"
                id="material"
                placeholder="Material"
              />
            </fieldset>
            <fieldset>
              <label
                htmlFor="para"
                style={{ display: "block", margin: "10px" }}
              >
                Description
              </label>
              <textarea
                onChange={(e) => this.setState({ para: e.target.value })}
                id="para"
                name="para"
                placeholder="Enter Product Description"
                className="text-area-create"
              ></textarea>
            </fieldset>
            {this.state.isaccessory ? null : (
              <fieldset className="special">
                <h5>Select Gender</h5>
                <label htmlFor="m">Male </label>
                <input
                  onChange={this.onRadioChange}
                  checked={this.state.gender.toUpperCase() === "M"}
                  type="radio"
                  name="Male"
                  value="m"
                  id="m"
                />
                <label htmlFor="f">Female</label>
                <input
                  onChange={this.onRadioChange}
                  checked={this.state.gender.toUpperCase() === "F"}
                  type="radio"
                  name="Female"
                  value="f"
                  id="f"
                />
              </fieldset>
            )}

            <fieldset className="special2" style={{ marginBottom: "40px" }}>
              <h5 htmlFor="category">Cetegory</h5>
              <select
                value={this.state.category}
                onChange={this.onSelectChange}
                id="category"
              >
                <option value="tshirts">T shirts and Polos</option>
                <option value="shirts">Shirts</option>
                <option value="skirts">Shorts / Skirts</option>
                <option value="jeans">Trousers / PJ/ Jeans</option>
                <option value="trousers">Trousers only</option>
                <option value="jacket">Jackets</option>
                <option value="shorts">Shorts</option>
                <option value="sets">Sets</option>
                <option value="2pc">2 PC</option>
                <option value="3pc">3 PC</option>
                <option value="dungaree">Dungarees</option>
                <option value="denim">Denim</option>
                <option value="tshirts">Tshirts</option>
                <option value="tights">Tights</option>
                <option value="kurtis">Kurtis</option>
                <option value="frocks">Frocks/Jump Suits</option>
                <option value="sleepwear">SleepWear</option>
                <option value="blouses">Tunics/ Blouses</option>
                <option value="eastern">Eastern Wear</option>
                <option value="undergarments">Undergrarments/Socks</option>
                <option value="caps">Caps</option>
                <option value="bibs">Bibs</option>
                <option value="bags">Bags</option>
                <option value="babynest">Baby Nest</option>
                <option value="babybedding">Baby Bedding</option>
                <option value="socks">Socks</option>
              </select>
            </fieldset>
          </form>
          <form>
            <h4>Product Images</h4>
            <fieldset className="special3">
              <progress value={this.state.progress} max="100" id="uploader">
                {this.state.progress}
              </progress>
              <input onChange={this.onFileUpload} name="addimage" type="file" />
              <Button
                click={this.uploadToFirebase}
                text="Upload Image"
                big={false}
              />
            </fieldset>
          </form>
        </div>
        <div className="CreateProducts-current-images">
          {this.state.images.map((each, index) => {
            return (
              <div className="CreateProducts-images">
                <div className="CreateProducts-images-holder">
                  <img
                    style={{ height: "100px", width: "100px" }}
                    src={each}
                    alt="Product"
                  />
                </div>
                <Button
                  text="Remove"
                  click={() => this.removeImage(index)}
                  color="red"
                />
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "20px" }}>
          {this.state.old ? (
            <React.Fragment>
              <div style={{ display: "inline-block", marginLeft: "20px" }}>
                <Button
                  click={this.editProduct}
                  text="Save Changes"
                  big={true}
                />
              </div>
              <div style={{ display: "inline-block", marginLeft: "20px" }}>
                <Button
                  click={this.deleteProduct}
                  text="Delete Product"
                  big={true}
                />
              </div>
            </React.Fragment>
          ) : (
            <div style={{ display: "inline-block", marginLeft: "20px" }}>
              <Button
                click={this.uploadProductToFirebase}
                text="Add Product"
                big={true}
              />
            </div>
          )}
        </div>

        <div className="User-info-container"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps)(CreateProduct);
