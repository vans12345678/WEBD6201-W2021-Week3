/* Custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

(function(){

    function Start()
    {
        console.log("App Started...");

        let paragraphOneText = "This is a simple site to demonstrate DOM Manipulation for ICE 1"; 
        let paragraphOneElement = document.getElementById("paragraphOne");
        let paragraphOneParagraph = document.getElementsByTagName("p")[0];

        console.log(paragraphOneElement);
        console.log(paragraphOneParagraph);


    }

    window.addEventListener("load", Start);

})();