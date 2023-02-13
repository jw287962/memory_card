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
      console.log(e.target.parentElement);

      let arrayNum = e.target.parentElement.getAttribute('akey');
      console.log(arrayNum);
      let newImageArray = getNewRandomImageArray(images);
      console.log(newImageArray,'all imagesarray')
      let clicked = false;

        console.log(clickedImages);
      clickedImages.forEach(element => {
        console.log(images[arrayNum].imageName);
        console.log(element);
        if(element.imageName === images[arrayNum].imageName){
          console.log("clicked");
          setClickedImages([]);
          setHighScore(counter);
          setCount(0);
          clicked = true;
          return;
        }
      });

      if(clicked){

      }else{
        console.log('updating clickedimages with new clicked image')
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
