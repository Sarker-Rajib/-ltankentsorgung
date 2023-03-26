// image slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// --


// form file add
const addButton = document.getElementById('addMoreFile');

addButton.addEventListener('click', () => {
    const filesParent = document.getElementById('fileHolder');

    const child = document.createElement('input')
    child.type = 'file'
    child.name = 'name1'
    child.classList.add('form-control')
    child.classList.add('file-input')
    filesParent.appendChild(child);
})