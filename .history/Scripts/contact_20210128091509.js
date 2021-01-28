"use strict";
class Contact {
    //Getters and setters
    get FullName() {
        return this.m_fullName;
    }
    set FullName(value) {
        this.m_fullName = value;
    }
    get ContactNumber() {
        return this.m_contactNumber;
    }
    set ContactNumber(value) {
        this.m_contactNumber = value;
    }
    get EmailAddress() {
        return this.m_emailAddress;
    }
    set EmailAddress(value) {
        this.m_emailAddress = value;
    }
    /**
     * 
     * @param {string} fullName 
     * @param {string} contactNumber 
     * @param {string} emailAddress 
     */
    constructor(fullName, contactNumber, emailAddress) {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    //Methods
    toString() {
        return  `Full Name     : ${this.FullName}
                Contact Number: ${this.ContactNumber}
                Email Address : ${this.EmailAddress}`;
    }

    /**
     *This method overrides the built-in toString() method for Contact class
     *
     * @return {*} 
     * @memberof Contact
     */
    toString()
    {
        return `Full Name       : ${this.FullName} \nContactNumber       : ${this.ContactNumber} 
        \nEmailAddress       :${this.EmailAddress}`;
    }
    /**
     *This method returns a JSON object made up of the properties of the Contact class
     *
     * @return {Object} 
     * @memberof Contact
     */
    toJSON()
    {
        return{
            "fullName": this.FirstName,
            "contactNumber": this.ContactNumber,
            "emailAddress": this.EmailAddress 
        }
    }
    /**
     *
     *This method returns the Contact into a comma-separated value string
     * @return {string} 
     * @memberof Contact
     */
    serialize()
    {
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== ""){
            return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`
        }
        else{
            return console.error("Contact is empty");
        }
        
    }
    /**
     *This method takes a comma-separated data string assigns values to the Contact class properties
     *
     * @param {string} data
     * @returns {void}
     * @memberof Contact
     */
    deserialize(data)
    {
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];

    }
}