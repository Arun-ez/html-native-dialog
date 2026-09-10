
// document.querySelector('dialog').onclick = (event) => {

//     if (event.target === event.currentTarget) {

//         const id = event.target?.id;

//         const button = document.createElement('button');

//         button.command = 'close';
//         button.commandfor = id;

//         button.click();
//         console.log('Clicked on dialog');
//     }
// }

const dialog = document.querySelector('dialog');

dialog.onclick = (event) => {
    if (event.target === event.currentTarget) {
        const id = event.target?.id;

        const button = document.createElement('button');

        button.setAttribute('command', 'close');
        button.setAttribute('commandfor', id);


        document.body.append(button);
        button.click();
        button.remove();
    }
};