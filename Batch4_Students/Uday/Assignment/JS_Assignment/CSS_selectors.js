//CSS Selectors practice

//URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
//1. Select input element with name attribute equal to "username" fr username field

/*
<div data-v-957b4417="" class=""><input data-v-1f99f73c="" class="oxd-input oxd-input--active" name="username" placeholder="Username" autofocus=""></div>
*/
[name="username"]

//2. Select input element with name attribute equal to "password" for password field
    
    /*
<div data-v-957b4417="" class=""><input data-v-1f99f73c="" class="oxd-input oxd-input--active" name="password" placeholder="Password" type="password"></div>
*/
[name="password"]

//3. Select button element with type attribute equal to "submit" for login button

/* 
<button data-v-10d463b7="" data-v-0af708be="" type="submit" class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"><!----> Login <!----></button>
*/
[type="submit"]

//4. Select input element with placeholder attribute equal to "Search" for search field

/*
<input data-v-1f99f73c="" data-v-636d6b87="" class="oxd-input oxd-input--active" placeholder="Search">
*/
input[placeholder="Search"]

//5. Selector for user name in the top right corner after login

/*
<p data-v-bdd6d943="" class="oxd-userdropdown-name">manda user</p>
*/


p[class="oxd-userdropdown-name"]
