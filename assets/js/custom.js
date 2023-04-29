// form file add
const addButton = document.getElementById('addMoreFile');

addButton.addEventListener('click', () => {
    const filesParent = document.getElementById('fileHolder');

    const child = document.createElement('input')
    child.type = 'file'
    child.classList.add('form-control')
    child.classList.add('file-input')
    filesParent.appendChild(child);
})