// We have access the elements

// what is selector --> a unique identification of dom element  used to access the element in the tool/dom is called selectors

// there 2 types of selectors 

// 1 Xpath selectors --> selenuium  // playwright 
// 2 CSS selectors  --> cypress and playwright 

// some do and dont in finding selector 

// if you finding a selector make sure its unique that it is    1 out 1
 
// CSS SELECTORS 

// HOW TO ACTUAL SELECT ELEMENTS 


//<textarea         name=  "message"       class="feedback-input" placeholder="Comments"> </textarea>

// 1 tagname 
// 2 by class 
// 3 by id 
// 4 attruibute and value 
// 5 general formula 


// 1 tagname 

// just enter tag name 
//example  --> title 

// 2 class 

// by classvalue  -->
// how to select 
// .classvalue

// the space in class value indicate that there are two class 
// you will paste the class value 
// remove the space and add dot in start of every calssvalue 

// example 

//class="FQZ6ZB yBSM00"

// .FQZ6ZB.yBSM00


// 3 by id ---> 

// you will paste the value 
// at # at the start 
//id="contact_form"

//#contact_form

id="contact-us"

// #contact-us


// 4 attruibute and value 

// name="username"

// [name="username"]

//<input class="lNPl8b" type="text" title="Search for Products, Brands and More" name="q" autocomplete="off" placeholder="Search for Products, Brands and More" value="">

//[title="Search for Products, Brands and More"][type="text"]

//5 general formula 

//  tagname[attribute="value"]

// example 
// input[name="username"]


// when to which which type --> this decision is completey upto you -->
// but if your working in a project you will to follow the framework guidelines



// assignemnt 

// visit --> https://opensource-demo.orangehrmlive.com/web/index.php/auth/login --> find at least 10 unique selector 
// visit -->https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html --> find at least 10 unique selector 
//  visit amazon or flipkart and find uqiue selector for login  serachbox 


// [class="FQZ6ZB yBSM00"]