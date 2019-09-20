//VARIABLES

let size = 100;
let grow = true;

//PROGRAM

div = document.createElement('div');
document.body.appendChild(div);

// STYLE
document.body.style.height = '10000px';

div.style.width = 100 + '%';
div.style.position = 'fixed';
div.style.top = 0;
div.style.left = 0;
div.style.height = size + 'px';

//PROGRAM

function changeHeight() {
    if (size > window.innerHeight / 2) {
        grow = !grow;
    } else if (size == 0) {
        grow = !grow;
    }

    if (grow) {
        size += 5;
        div.style.height = size + 'px';
        div.style.backgroundColor = 'green'
    } else {
        size -= 5;
        div.style.height = size + 'px';
        div.style.backgroundColor = 'red'
    }
}

window.addEventListener('scroll', changeHeight);