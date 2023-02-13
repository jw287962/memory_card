import './App.css';
import React, {useState} from 'react'
import Image from './components/Image';



const allOriginalImages = importAll(require.context('./images',false,/\.(png|jpe?g|svg|gif)$/));

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
  const newImageArray = []
  console.log(images);
  const originalImageHolder = images.map(a => ({a}));
  console.log(originalImageHolder);
  while(originalImageHolder.length >0){
    let random = Math.floor(Math.random(originalImageHolder.length));
    newImageArray.push(originalImageHolder.splice(random,1))
  }
  // console.log(newImageArray);
return newImageArray;
}


// 
const App = (props) => {

  const [counter,setCount] = useState(0);
  const [highscore,setHighScore] = useState(0);
  const [images,setImages] = useState(allOriginalImages);
  const [clickedImages, setClickedImages] = useState([]);

  const clickedImage = (e) => {
      e.preventDefault();

      let arrayNum = e.target.parentElement.getAttribute('akey');
      let newImageArray = getNewRandomImageArray(images);
      let clicked = false;

      clickedImages.forEach(element => {
        if(element.imageName === images[arrayNum].imageName){
          setClickedImages([]);
          setHighScore(counter);
          setCount(0);
          clicked = true;
          return;
        }
      });

      if(clicked){

      }else{
        setClickedImages(clickedImages.concat(images[arrayNum]));
      setImages(newImageArray);

      
      increaseCounter();
      }
      
    }
    const changeImages = (e) => {
      e.preventDefault();
      let newImageArray = getNewRandomImageArray(images);
      setImages(newImageArray);
    }

  

    const increaseCounter = () => {
      setCount(counter +1);
    }
  
    return (

    
    <div className="App">
      <div className='header'>Memory Card </div>
      <div className='scoreboard'>
        <div className='counter'>Counter: {counter}</div>
        <div>Highscore: {highscore}</div>
      </div>
      <div className='images'>
            {images.map((image,i=0) => {
                if (i < 7){
                  i++;
                  return(
                    <button className={image.imageName} id="pokeimages" akey={i-1} key={image.imageName} onClick={clickedImage}> <Image currentImage={image}></Image></button>
                  )
                }
                
                else{
                }
                  i++;
            })}

      </div>
      <button className='skip' onClick={changeImages}>Skip!</button>

    </div>
  );
}

export default App;
