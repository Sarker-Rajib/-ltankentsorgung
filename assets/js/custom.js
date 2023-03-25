const miniTrigger = document.getElementById('mini-trigger');
const expTrigger = document.getElementById('expp-trigger');
const miniSection = document.getElementById('mini');
const expandedSection = document.getElementById('expanded');

miniTrigger.addEventListener('click', () => {
    miniSection.classList.add('d-none');
    expandedSection.classList.remove('d-none');
});

expTrigger.addEventListener('click', () => {
    miniSection.classList.remove('d-none');
    expandedSection.classList.add('d-none');
});

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