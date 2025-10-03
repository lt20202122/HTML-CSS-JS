"use client";
import {useState} from 'react'
import React from 'react'
import Link from 'next/link'

export function DropdownOne () {
  const [toggle, setToggle] = useState(false)
  return (
    <div id="dropdownOneDIV" className="flex flex-col items-center justify-center group relative">
      <button id="dropdownOne" className="text-[3.5rem]">Books</button>
      <div className="pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 flex flex-col transition-opacity duration-350 ease-in-out">
        <Link href="#">Print Books</Link>
        <Link href="#">E-Books</Link>
        <Link href="#">Audio Books</Link>
      </div>
    </div>
  )
}


export function DropdownTwo () {
  const [toggle, setToggle] = useState(false)
  return (
    <div id="dropdownTwoDIV" className="flex flex-col items-center justify-center group relative">
      <button id="dropdownTwo" className="text-[3.5rem]">Furniture</button>
      <div id="menuTwo" className="pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 flex flex-col transition-opacity duration-350 ease-in-out">
        <Link href="#">Kitchen</Link>
        <Link href="#">Bedroom</Link>
        <Link href="#">Household</Link>
      </div>
    </div>
  )
}

export function DropdownThree () {
  const [toggle, setToggle] = useState(false)
  return (
    <div id="dropdownThreeDIV" className="flex flex-col items-center justify-center group relative">
      <button id="dropdownThree" className="text-[3.5rem]">Tech</button>
      <div id="menuThree" className="pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 flex flex-col transition-opacity duration-350 ease-in-out">
        <Link href="#">Laptops</Link>
        <Link href="#">Desktops</Link>
        <Link href="#">Monitors</Link>
        <Link href="#">Computer Mice</Link>
      </div>
    </div>
  )
}


