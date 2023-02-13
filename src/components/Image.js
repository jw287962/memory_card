import React, {useState} from "react";

const Image = (props) => {

const [image,setImage] = useState(props.currentImage);


  return (
      <img src={image.imageFile}></img>

  )
}

export default Image;