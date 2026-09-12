const dialog = document.querySelector('dialog');

dialog.onclick = (event) => {
    event.target?.requestClose();
};