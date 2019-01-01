class Observable {
    constructor() {
        this.handlers = [];
    }

    subscribe(fn) {
        this.handlers.push(fn);
    }

    unsubscribe(fn) {
        this.handlers = this.handlers.filter(element => {
            return fn.toString() !== element.toString();
        });
    }

    notify(argument) {
        this.handlers.forEach(item => item(argument));
    }
}

let textbox = document.getElementById('textbox');
let arrayOfTextElement = document.querySelectorAll(".text");

function generateUpdate(index) {
    const update = (text) => {
        arrayOfTextElement[index].innerHTML = text;
    }
    update.toString = () => "generateUpdate("+ index + ")";
    return update;
}

let observer = new Observable();

textbox.addEventListener('keyup', e => observer.notify(e.target.value));

let btnsSubscribe = document.querySelectorAll(".subscribe");
let btnsUnsubscribe = document.querySelectorAll(".unsubscribe");

for(let i = 0; i < arrayOfTextElement.length; i++) {
    observer.subscribe(generateUpdate(i));
    btnsSubscribe[i].addEventListener('click', e => {
        observer.subscribe(generateUpdate(i));
    });
    btnsUnsubscribe[i].addEventListener('click', e=> {
        observer.unsubscribe(generateUpdate(i));
    });
}