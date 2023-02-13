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
  const [clickedImages, setClickedImages] = useState([]);

  const clickedImage = (e) => {
      e.preventDefault();
      let arrayNum = e.target.parentElement.getAttribute('akey')-1;
      console.log(arrayNum);
      let newImageArray = getNewRandomImageArray(images);
      let clicked = false;

      clickedImages.forEach(element => {
        console.log(images[arrayNum].imageName);
        if(element.imageName === images[arrayNum].imageName){
          console.log("clicked");
          setClickedImages([])
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
      <div className='header'>Memory Card: </div>
      <div className='scoreboard'>
        <div className='counter'>Counter: {counter}</div>
        <div>Highscore: {highscore}</div>
      </div>
      <div className='images'>
            {images.map((image,i =0) => {
                if (i < 4){
                  i++;
                  return(
                    <button className={image.imageName} id="pokeimages" akey={i}key={image.imageName} onClick={clickedImage}> <Image currentImage={image}></Image></button>
                  )
                }
                
                else{
                }
                  i++;
            })}

          <button className='skip' onClick={changeImages}>Skip!</button>
      </div>
    </div>
  );
}

export default App;
