/* Custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";


(function(){

    function displayHome()
    {
        
        let introText = "This is a simple site to demonstrate the specified requirements for Lab 1 WEBD 6201 - Client Side Scripting"; 
        let introTextElement = document.getElementById("intro");
        
        introTextElement.textContent = introText;
        introTextElement.style = "color: blue; font-weight: bold;";
        introTextElement.className = "fs-5 fw-bold text-center";

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


        mainContent.innerHTML =
        `<h1 id = "firstHeading">Welcome to WEBD6201 - Lab 1</h1>
        <p id = "paragraphOne" class = "fs-3 fw-bold">This is my first paragraph</p>
        `;
        
    }
    function displayAbout()
    {
        
    }
    function displayProjects()
    {
        
    }
    function displayServices()
    {
        
    }
    function displayContact()
    {

        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        //form validation
        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function()
        {
            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Please enter an appropriate name > 2 characters";
            }
            else
            {
                messageArea.removeAttribute("class");
                messageArea.hidden = true;
            }
        });
            let sendButton = document.getElementById("sendButton");
            sendButton.addEventListener("click", function(event)
            {
                //event.preventDefault();
                // //Displays twice?

                let contact = new Contact(fullName.value,contactNumber.value, emailAddress.value);

                //console.log(contact.serialize());
                if(contact.serialize())
                {
                    localStorage.setItem((localStorage.length + 1).toString(),contact.serialize());
                }     
            });
    }
    function displayContactList()
    {
        if(localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");
            let data = "";

            for (let index = 0; index < localStorage.length; index++) 
            {
                let contactData = localStorage.getItem((index + 1).toString());
                let contact = new Contact();

                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row">${index + 1}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
              </tr>`;
            }
            contactList.innerHTML = data;
        }
         
    }
    
    function Start()
    {
        console.log("App Started...");

        switch(document.title)
        {
            case "Home":
                displayHome();
                break;
            case "About":
                displayAbout();
                break;
            case "Projects":
                displayProjects();  
                break;
            case "Services":
                displayServices();  
                break;   
            case "Contact Us":
                displayContact();  
                break; 
            case "Contact-List":
                displayContactList();  
                break; 
        }
        

    }

    window.addEventListener("load", Start);

})();