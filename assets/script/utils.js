'use strict';
/*
  Intro to ES modules

  As our program gros biggers, it may contain many lines of code. Instead of
  putting eveyrthing in a simple file, you can use modules to seperate codes in
  seperate files as per their functionality. This makes our code oragnized and
  easier to maintain

  A module is a file that contains 
*/


// Utility Functions
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

export {onEvent, select, selectAll, create, log};