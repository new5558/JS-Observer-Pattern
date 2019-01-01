class Observable {
    constructor() {
        this.handlers = [];
    }

    subscribe(fn) {
        this.handlers.push(fn);
    }

    unsubscribe(fn) {
        this.handlers = this.handlers.filter(element => fn !== element);
    }

    notify(argument) {
        this.handlers.forEach(item => item(argument));
    }
}

let textbox = document.getElementById('textbox');
let t1 = document.getElementById('t1');
let t2 = document.getElementById('t2');
let t3 = document.getElementById('t3');

const updateT1 = text => t1.innerHTML = text;
const updateT2 = text => t2.innerHTML = text;
const updateT3 = text => t3.innerHTML = text;

let observer = new Observable();
observer.subscribe(updateT1);
observer.subscribe(updateT2);
observer.subscribe(updateT3);

textbox.addEventListener('keyup', e => observer.notify(e.target.value));

let btnsSubscribe = document.querySelectorAll(".subscribe");
let btnsUnsubscribe = document.querySelectorAll(".unsubscribe");
btn1.addEventListener('click', e => {
    observer.unsubscribe(updateT1)
});