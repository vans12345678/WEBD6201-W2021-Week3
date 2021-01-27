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
        
        paragraphOneElement.textContent = paragraphOneText;
        //paragraphOneElement.style = "color: blue; font-weight: bold;";
        paragraphOneElement.className = "fs-5 fw-bold text-center";

        //Step 1. document.createElement
        let newParagraph = document.createElement("p");
        //Step 2. Configure the element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "... And this is paragraph two";
        //Step 3. Select parent element
        let mainContent = document.getElementsByTagName("main")[0];
        //Step 4. Add / Insert the element
        mainContent.appendChild(newParagraph);

        newParagraph.className = "fs-6";

        //Another way of injecting content`
        let paragraphDiv = document.createElement('div');
        let paragraphThree =  `<p id = "paragraphThree" class = "fs-7 fw-bold">...And this is the Third paragraph</p>`;
        paragraphDiv.innerHTML = paragraphThree;
        // mainContent.innerHTML = paragraphThree;
        // console.log(paragraphOneElement);

        //insertion before node
        //newParagraph.before(paragraphDiv);

        //insertion after node
        newParagraph.after(paragraphDiv);

        //deletions
        //example of removing a single element
        //paragraphOneElement.remove();

        //example of removeChild
        mainContent.removeChild(paragraphOneElement);

        //update / modification
        //mainContent.firstElementChild.textContent = "Welcome home";


    }

    window.addEventListener("load", Start);

})();