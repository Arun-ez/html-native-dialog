const dialog = document.querySelector('dialog');

dialog.onclick = (event) => {
    if (event.target === event.currentTarget) {
        event.target?.requestClose();
    }
};