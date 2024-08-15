var popup_overlay = document.querySelector(".popup-overlay")
var popup_box = document.querySelector(".popup-box")
var add_popup_btn = document.querySelector("#add-popup-btn")
var cancel_book = document.querySelector("#cancel-book")
var add_book = document.querySelector("#add-book")
//for popup open
add_popup_btn.addEventListener("click", function () {
    popup_overlay.style.display = "block"
    popup_box.style.display = "block"
})
//for popup close

cancel_book.addEventListener("click", function (event) {
    event.preventDefault();
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
})
add_book, addEventListener("click", function (event) {
    event.preventDefault();
})
// <!-- srikanth.levi -->


//select container,addbook,book title,book author,description
var container = document.querySelector(".container")
var book_title_input = document.querySelector("#book-title-input")
var book_author_input = document.querySelector("#book-author-input")
var book_description_input = document.querySelector("#book-description-input")
var add_book = document.querySelector("#add-book")

add_book.addEventListener("click", function () {
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${book_title_input.value}</h2>
    <h5>${book_author_input.value}</h5>
    <p>${book_description_input.value}</p>
    <button onclick="deletebook(event)">Delete</button>`;
    container.append(div)
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
})
function deletebook(event) {
    event.target.parentElement.remove()

}