

function DropdownTwo() {
    return(
        <div id="dropdownTwoDIV">
          <button id="dropdownTwo">Furniture</button>
          <div id="menuTwo" className="menuTwo">
            <a href="furniture.html?type=kitchen">Kitchen</a>
            <a href="furniture.html?type=bedroom">Bedroom</a>
            <a href="furniture.html?type=household">Household</a>
          </div>
      </div>
    )
}

export default DropdownTwo