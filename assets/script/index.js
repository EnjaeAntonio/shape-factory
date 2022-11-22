'use strict';
import {onEvent, select, selectAll, create, log} from './utils';


const createBtn = select('.create')

class Shape {
    constructor(name, colours) {
        this.name = name;
        this.colours = colours;
    }

    getInfo() {
        
    }

}



onEvent('click', createBtn, function() {
    create()
})

createShape(){

}

// const colours = ['#0f9', '#9f0', '#f90', '#f09', '#90f'];
// const shapes = new Shape('Square', 'Circle', shapes);


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