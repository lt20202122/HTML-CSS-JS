
function DropdownThree () {
    return(
        <div id="dropdownThreeDIV">
          <button id="dropdownThree">Tech</button>
          <div id="menuThree" className="menuThree">
            <a href="furniture.html?type=kitchen">Laptops</a>
            <a href="furniture.html?type=bedroom">Desktops</a>
            <a href="furniture.html?type=household">Monitors</a>
            <Link to="/tech">computer mouses</Link>
          </div>
      </div>
    )
}

export default DropdownThree