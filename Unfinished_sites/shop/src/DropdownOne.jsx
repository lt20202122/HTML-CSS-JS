
function DropdownOne(){
    return (
        <div id="dropdownOneDIV">
            <button id="dropdownOne">Books</button>
            <div className="menuOne" id="menuOne">
                <a href="books.html?type=print-books">Print Books</a>
                <a href="books.html?type=ebooks">E-Books</a>
                <a href="books.html?type=audiobooks">Audio Books</a>
            </div>
        </div>
    )
}

export default DropdownOne