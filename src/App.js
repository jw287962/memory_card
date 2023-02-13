import './App.css';
import React, {useState} from 'react'
import Image from './components/Image';



const allOriginalImages = importAll(require.context('./images',false,/\.(png|jpe?g|svg)$/));
console.log(allOriginalImages);

function importAll(img){
  let object = [];
  let allImages = img.keys().map(img);


  img.keys().forEach((element,i) => {
    let imageName = element.substring(2,element.substring(2).indexOf('.')+2);
    let imageFile = allImages[i];
    object.push({imageName,imageFile});
    i++;
  });
  return object;
}


const App = (props) => {

const [counter,setCount] = useState(0);
const [highscore,setHighScore] = useState(0);
const [images,setImages] = useState(allOriginalImages);
const [clickedImages, setClickedImages] = useState();

const clickedImage = (e) => {
  e.preventDefault();
  console.log(e.target.parentElement)

  setImages()
}

console.log(images);
  return (


    <div className="App">
      Memory Card: 
      <div className='images'>
            {images.map((image) => {
                return(
                  <button className={image.imageName} onClick={clickedImage}> <Image currentImage={image}></Image></button>

                )

            })}

          <button className={images[0].imageName} onClick={clickedImage}> <Image currentImage={images[0]}></Image></button>
          {/* <button> <Image></Image></button> */}
          {/* <button> <Image></Image></button> */}


      </div>
    </div>
  );
}

export default App;
