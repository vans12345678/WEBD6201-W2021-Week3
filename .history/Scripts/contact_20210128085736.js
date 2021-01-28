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
        this.m_fullName = fullName;
        this.m_contactNumber = contactNumber;
        this.m_emailAddress = emailAddress;
    }
    //Methods
    toString() {
        return  `Full Name     : ${this.m_fullName}
                Contact Number: ${this.m_contactNumber}
                Email Address : ${this.m_emailAddress}`;
    }

    /**
     *This method overrides the built-in toString() method for Contact class
     *
     * @return {*} 
     * @memberof Contact
     */
    toString()
    {
        return `Full Name       : ${this.m_fullName} \nContactNumber       : ${this.m_contactNumber} 
        \nEmailAddress       :${this.m_emailAddress}`;
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
            "fullName": this.firstName,
            "contactNumber": this.contactNumber,
            "emailAddress": this.emailAddress 
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
        return `${this.m_fullName}, ${this.m_contactNumber},${this.m_emailAddress}`
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
        this.fullName = propertyArray[0];
        this.contactNumber = propertyArray[1];
        this.emailAddress = propertyArray[2];

    }
}