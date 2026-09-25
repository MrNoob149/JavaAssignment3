'use strict';
const target = document.querySelector('#target');

const browser = navigator.appVersion;
const browsername = navigator.userAgent;
const os = navigator.platform;

const screenwidth = screen.width;
const screenheight = screen.height;

const avaiwidth = screen.availWidth;
const availHeight = screen.availHeight;

const Schedule = new Date();

const date = Schedule.toLocaleDateString('fi-FI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

const time = Schedule.toLocaleTimeString('fi-FI', {
    hour: '2-digit',
    minute: '2-digit'
});

target.insertAdjacentHTML('beforeend', `<p>${browser}</p>`);
target.insertAdjacentHTML('beforeend', `<p>${os}</p>`);
target.insertAdjacentHTML('beforeend', `<p>${browsername}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Screen Width: ${screenwidth}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Screen height: ${screenheight}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Avaiable height: ${availHeight}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Avaiable width: ${avaiwidth}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Time: ${Schedule}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Time in finland: ${date}</p>`);
target.insertAdjacentHTML('beforeend', `<p>${time}</p>`);


