// Address Book JavaScript
// don't forget to validate at https://jslint.com

/*jslint devel: true, browser: true */

/* self-executing "global" anonymous function
 it's here to keep variable and function scope
 contained within our script */
(function () {

    // use strict enforces more rules
    // rules make us better programmers
    "use strict";

    // === === === === === === === === === === === === ===
    // === === === ===   global variables  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===

    // initializes a string variable


    // this is how we output to the console log
    // useful for debugging your programs!
    console.log("-- address-book.js starting --");

    console.log("-----------------------------\n\n\n");

    // === === === === === === === === === === === === ===
    // === === === ===   global functions  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===

    function Contact() {

        var _name;

        var my = {
            name: _name
        };

        var name = function(value) {
            //error checking to see if this is a valid name
            if (value !== "") {
                _name = value;
            } else {
                return _name;
            }
        };
        return my;
    }




    function AddressBook() {

// the _ in contacts basically means it is a private variable
        var _contacts = [];

        var my = {
            contacts: _contacts
        };

        var contacts = function (value) {
            //error checking to see if this is a valid contacts array
            if (value !== "") {
                _contacts = value;
            } else {
                return _contacts;
            }
        };

        return my;
    }

    new AddressBook();

}());
