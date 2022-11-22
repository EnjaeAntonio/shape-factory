'use strict';
// import {onEvent, select, selectAll, create, log} from './utils';

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}


function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
}


function create(element, parent = document) {
    return parent.createElement(element);
}

function log(content) {
    console.log(content);
}




const createBtn = select('.create')
const shapes = select('.shapes')
const colours = select('.colours')
const output = select('.output p')

class Shape {
    constructor(shape, colours) {
        this.shape = shape;
        this.colours = colours;
    }
    
    getColour(){
        this._colours = this.colours;
        return this._colours;
    }

    getShape() {
        this._shape = this.shape;
        return this.shape
    }

    getInfo() {
        return `${this._shape} & ${this._colours}`
    }    
}    



function createShape(shapes, colours) {    
    const newShape = new Shape(shapes, colours)
    return newShape;
}

function grab(x) {
    let index = x.getAttribute('number')
    let colourCode = x.getAttribute('name')
    output.innerText = `${index}: ${colourCode}`
    console.log(colourCode)
}


const arr = [];

function info(obj) {
    const parent = select('.select-box');

    let createDiv = create('div');


    if (obj.getShape() == 'circle'){
        createDiv.classList.add('circle');
        createDiv.classList.remove('square');
    } else {
        createDiv.classList.add('square');
        createDiv.classList.remove('circle');
    }

    let colour = obj.getColour();


    switch(colour) {

        case 'blue': 
            createDiv.style.backgroundColor = '#09f'
            break;
        
        case 'green':
            createDiv.style.backgroundColor = '#9f0'
            break;

        case 'orange':
            createDiv.style.backgroundColor = '#f90'
            break;

        case 'pink':
            createDiv.style.backgroundColor = '#f09'
            break;

        case 'purple':
            createDiv.style.backgroundColor = '#90f'
            break;
    }

    createDiv.setAttribute('name', obj.getInfo())
    createDiv.setAttribute('number', `${arr.length + 1}`)
    createDiv.setAttribute('onclick', 'grab(this)')
    
    parent.appendChild(createDiv);
    arr.push(obj);

};


onEvent('click', createBtn, function() {
     info(createShape(shapes.value, colours.value));
});






// In this assignment, you will develop a web application that allows users to create different shapes
// with different colours and get information about them.
// Directions and requirements
// • Implement two select elements, one for the shapes and one for the colours.
// • Create a box (grid) to contain at least 20 different shapes (circles and squares).
// • Add the necessary style for circles and squares. Colours will be defined via JavaScript.
// • Create a class named Shape with a constructor, 2 accessor properties (name and colour) and
// 1 method - getInfo().
// • Name and colour (actually _name and _colour) must be accessed through get properties.
// • The ‘Create’ button will create a Shape object, save it in an array and add a new shape (div)
// to the grid. This div is the HTML representation of the JavaScript object.
// • Implement a function named createShape() to create and append a shape to the grid box.
// • getInfo() returns the name of the shape and its colour. This method is called when the user
// clicks on one of the shapes.