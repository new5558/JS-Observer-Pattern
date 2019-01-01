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
// let t1 = document.getElementById('t1');
// let t2 = document.getElementById('t2');
// let t3 = document.getElementById('t3');
let arrayOfTextElement = document.querySelectorAll(".text");

function update(text) {
    this.innerHTML = text;
}
// const updateT1 = text => this.innerHTML = text;
// const updateT2 = text => t2.innerHTML = text;
// const updateT3 = text => t3.innerHTML = text;

let observer = new Observable();
arrayOfTextElement.forEach(element => observer.subscribe(update.bind(element)));
// observer.subscribe(updateT1);
// observer.subscribe(updateT2);
// observer.subscribe(updateT3);

textbox.addEventListener('keyup', e => observer.notify(e.target.value));

let btnsSubscribe = document.querySelectorAll(".subscribe");
let btnsUnsubscribe = document.querySelectorAll(".unsubscribe");

// please fix subscribe button
btnsSubscribe.forEach((element, index) => {
    element.addEventListener('click', e => observer.subscribe(update.bind(arrayOfTextElememt[index])));
});

// please add unsubscribe button
btnsUnsubscribe.forEach((element, index) => {
    element.addEventListener('click', e => observer.unsubscribe(update.bind(arrayOfTextElement[index])));
});
