const dialog = document.querySelector("dialog");

dialog.addEventListener("click", (event) => {
    if (event.target.localName === 'dialog') {
        event.target.requestClose();
    }
});