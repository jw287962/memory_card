import React, {useState} from "react";

const Image = (props) => {

const [image,setImage] = useState(props.currentImage);

console.log(image.imageFile, "image componenet");

  return (
      <img src={image.imageFile}></img>

  )
}

export default Image;