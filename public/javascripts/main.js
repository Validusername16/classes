(function() {
    "use strict";

    import AClass from './myClass.js';
    let myObject = new AClass("meme");
    let myButton = document.getElementById("myButton");
    myButton.addEventListener('click', () => {
        myObject.myFunction();
    });
}());
