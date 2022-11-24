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
        return this._shape
    }

    getInfo() {
        return `Properties: ${this.shape} & ${this.colours}`
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

    createDiv.setAttribute('name', obj.getInfo())
    createDiv.setAttribute('number', `${arr.length + 1  }`)
    createDiv.setAttribute('onclick', 'grab(this)')
    
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
    parent.appendChild(createDiv);
    arr.push(obj);

};

onEvent('click', createBtn, function() {
     info(createShape(shapes.value, colours.value));

     if (arr.length >= 20) {
        createBtn.disabled = true;
        output.innerText = `Limit Exceeded`
    }else if (shapes.selectedIndex == 0 || colours.selectedIndex == 0) {
        output.innerText = `Select an option`
    }
});
