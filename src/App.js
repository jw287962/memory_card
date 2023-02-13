import './App.css';
import React, {useState} from 'react'
import Image from './components/Image';



const allOriginalImages = importAll(require.context('./images',false,/\.(png|jpe?g|svg)$/));

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

function getNewRandomImageArray(images){
  let newImageArray = []
  for(let i = images.length-1 ;i >= 0; i--){
    newImageArray.push(images[i]);
  }
return newImageArray;
}


// 
const App = (props) => {

const [counter,setCount] = useState(0);
const [highscore,setHighScore] = useState(0);
const [images,setImages] = useState(allOriginalImages);
const [clickedImages, setClickedImages] = useState();

const clickedImage = (e) => {
  e.preventDefault();
  console.log(e.target.parentElement)
  let newImageArray = getNewRandomImageArray(images);
  setImages(newImageArray);
}

console.log(images);
  return (


    <div className="App">
      Memory Card: 
      <div className='images'>
            {images.map((image,i) => {
                if (i <= 3)
                return(
                  <button className={image.imageName} key={image.imageName} onClick={clickedImage}> <Image currentImage={image}></Image></button>
                )
                else{
                }

            })}


      </div>
    </div>
  );
}

export default App;
