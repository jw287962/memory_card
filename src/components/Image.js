import React, {useState} from "react";
import './image.css'

const Image = (props) => {

const [image,setImage] = useState(props.currentImage);


  return (
      <img src={image.imageFile} width="150" height="150" alt={image.imageName}></img>

  )
}

export default Image;