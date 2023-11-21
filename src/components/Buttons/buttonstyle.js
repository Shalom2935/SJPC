import React from 'react'
export function style(){
let buttons = document.querySelectorAll('button');
buttons.forEach((e)=> {
    e.onmouseover = function() {
        var color = this.style.color;
        this.style.color = this.style.backgroundColor;
        this.style.backgroundColor = color;
      }
      e.onmouseout = function() {
        var color = this.style.color;
        this.style.color = this.style.backgroundColor;
        this.style.backgroundColor = color;
      }
})
}
style();



