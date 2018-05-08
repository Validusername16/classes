(function() {
"use strict";
export class AClass{
    constructor(variable1) {
        this.variable1 = variable1;
        alert("object created");
    };
    myFunction() {
        console.log("test");
        alert(this.variable1);
    }
}

});

