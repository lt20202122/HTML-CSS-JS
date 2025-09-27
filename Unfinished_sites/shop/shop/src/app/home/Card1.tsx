import React from 'react'
import Image from 'next/image'
import './Card1.css'
import imgOne from '@/assets/imgOne.png'

export default function Card1 (){
  return (
    <div className="CardContainer">
      <h1>Save now up to 30%!</h1>
      <div className="Card">
        <Image src={imgOne} alt="Card 1 img" id="imgOne" />
        <p>Only 45.99$</p>
      </div>
    </div>
  )
}

