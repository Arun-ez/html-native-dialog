const dialog = document.querySelector("dialog");

dialog.addEventListener(
    'click',
    (event) => {
        if (event.target === dialog) {
            dialog.requestClose();
        }
    }
);