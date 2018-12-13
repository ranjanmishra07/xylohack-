import React, { Component } from 'react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import axios from 'axios';
export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedImages: []
    }
  }
  onImageAdd = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'dgxpjwy2f',
        upload_preset: 'zsmfehg7',
        tags: ['miniflix'],
        sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
      },
      (error, result) => {
        const newImage = {
          public_id: result[0].public_id,
          version: result[0].version,
          format: result[0].version,
          type: result[0].type,
          width: 1536,
          height: 864,
          secure_url: result[0].secure_url,
          created_at: result[0].created_at
        }
        this.setState({ uploadedImages: [...this.state.uploadedImages, newImage] })
        axios.post('http://localhost:8000', { data: [newImage] })
          .then(res => {
            console.log('res', res);
          }).catch(e => console.log(e))
      }
    );
  }

  onDeleteImage = (public_id) => {
    const newstate = this.state.uploadedImages.filter(i=>i.public_id!==public_id).map(i=>i);
    axios.delete(`http://localhost:8000/delete/${public_id}`).then(()=>this.setState({uploadedImages:newstate}));
  }

  componentDidMount() {
    axios.get('http://localhost:8000/getImages').then(res => {
      console.log('res from get', res);
      this.setState({ uploadedImages: res.data })
    })
  }

  render() {
    return (
      <div>
        {/* <SimpleStorage parent={this} prefix={"ImageUpload"} /> */}
        <input className="search-bar" onChange={this.onchange}></input>
        <button onMouseDown={this.onImageAdd}>add image</button>
        <div className="image-list">
          <CloudinaryContext cloudName="unicodeveloper">
            {this.state.uploadedImages.map((data, index) => (
              <div key={index} style={{ display: "inline-block", margin: "20px" }}>
                {/* <Image publicId={data.public_id} width="200" height="200" controls src={data.secure_url} > */}
                <img height="200" width="200" src={data.secure_url}></img>
                <button onClick={() => this.onDeleteImage(data.public_id)}>delete</button>
              </div>
            ))
            }
          </CloudinaryContext>
        </div>
      </div>
    )
  }
}
