import React, { useEffect, useState } from 'react'
import "../App.css"


const Greeting = ({onFinish}) => {

const greets = [
  "こんにちは",
  "안녕하세요",
  "مرحبا",
  "வணக்கம்",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "Привет",
  "Bonjour",  
  "Hola",
  "Ciao",
  "Olá",
  "नमस्ते",
  "Hello"];


    const [index, setIndex] = useState(0);

   
    useEffect(() => {
        if(index < greets.length-1){
            setTimeout(() => setIndex(index+1), 180);
        }else{
            setTimeout(onFinish, 500);
        }
    })


  return (
    <div className="greeting-container">
        <span className="dot"></span>
        <span className="greet-text">{greets[index]}</span>
    </div>
  )
}

export default Greeting
