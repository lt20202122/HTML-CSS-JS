import React from 'react'

export function DropdownOne () {
  return (
    <div id="dropdownOneDIV">
      <button id="dropdownOne">Books</button>
      <div className="menuOne" id="menuOne">
        <a href="#">Print Books</a>
        <a href="#">E-Books</a>
        <a href="#">Audio Books</a>
      </div>
    </div>
  )
}


export function DropdownTwo () {
  return (
    <div id="dropdownTwoDIV">
      <button id="dropdownTwo">Furniture</button>
      <div id="menuTwo" className="menuTwo">
        <a href="#">Kitchen</a>
        <a href="#">Bedroom</a>
        <a href="#">Household</a>
      </div>
    </div>
  )
}

export function DropdownThree () {
  return (
    <div id="dropdownThreeDIV">
      <button id="dropdownThree">Tech</button>
      <div id="menuThree" className="menuThree">
        <a href="#">Laptops</a>
        <a href="#">Desktops</a>
        <a href="#">Monitors</a>
        <a href="#">Computer Mice</a>
      </div>
    </div>
  )
}


