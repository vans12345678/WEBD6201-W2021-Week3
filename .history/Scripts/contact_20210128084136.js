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
    serialize()
    {
        return `${this.m_fullName}, ${this.m_contactNumber},${this.m_emailAddress}`
    }
}