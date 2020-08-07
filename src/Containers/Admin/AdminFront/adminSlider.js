import React from 'react';
import Button from "../../../Components/Navigation/Buttons/Button";
import "./adminSlider.css";
import { storage, db } from '../../../firebase'
import { findAllInRenderedTree } from 'react-dom/test-utils';
class AdminSlider extends React.Component {
    state = {
        images: [
            


        ],
        file: undefined,
        progress: 0,
        uploadImage: "",
    }
    componentWillMount(){
        db.collection("Home").doc("Slider").get()
        .then(data=>{
            this.setState({images:data.data().images})
        })
        .catch(err=>{
            console.log(err)
            alert('Check Internet Connection');
        })
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
            const upload = storageRef.child(`slider/${this.state.file.name}`).put(this.state.file);

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
                        copy.push({image:downloadURL,to:"",head:"",para:""});
                        this.setState({ images: copy, uploadImage: downloadURL });
                    })
                })
        }
    }
    saveFirebase = () => {

        db.collection("Home").doc("Slider").set({images:this.state.images})
        .then(res=>{
            alert("Updated the information");
        })
        .catch(error=>{
            console.log(error);
            alert('Some Error occured')
        })
    }
    updateInfoHead=(index,e)=>{
        let copy=[...this.state.images];
        copy[index]['head']=e.target.value;
        this.setState({images:copy});
    }
    
    updateInfoPara=(index,e)=>{
        let copy=[...this.state.images];
        copy[index]['para']=e.target.value;
        this.setState({images:copy});
    }
    updateInfoLink=(index,e)=>{
        let copy=[...this.state.images];
        copy[index]['to']=e.target.value;
        this.setState({images:copy});
    }
    render() {
        return (
            <div className="Admin-Slider">
                <h1>All Images For Slider</h1>
                <div className="Admin-allImage">
                    {
                        this.state.images.map((each, index) => {
                            return (
                                <div className="CreateProducts-images">
                                    <div className="CreateProducts-images-holder">
                                        <img src={each.image} alt="Product" />
                                    </div>
                                    <div className="Admin-Info-deep">

                                        <input placeholder="Title" type="text" value={this.state.images[index].head} onChange={(e)=>this.updateInfoHead(index,e)} name="Head"/>
                                        <textarea type="text" placeholder="Related Paragraph" value={this.state.images[index].para} onChange={(e)=>this.updateInfoPara(index,e)} name="para"/>
                                        <input type="text" placeholder="Link to Button" value={this.state.images[index].to} onChange={(e)=>this.updateInfoLink(index,e)} name="link"/>
                                    </div>
                                    <Button text="Remove" click={() => this.removeImage(index)} color="red" />
                                </div>
                            )
                        })
                    }

                </div>
                <form>
                    <h4>Add a new Image</h4>
                    <fieldset className="special3">
                        <progress value={this.state.progress} max="100" id="uploader">{this.state.progress}</progress>
                        <input onChange={this.onFileUpload} name="addimage" type="file" />
                        <Button click={this.uploadToFirebase} text="Upload Image" big={false} />
                    </fieldset>
                </form>
                <Button click={this.saveFirebase} text="Save Changes" big={true} />
            </div>
        )
    }
}

export default AdminSlider;