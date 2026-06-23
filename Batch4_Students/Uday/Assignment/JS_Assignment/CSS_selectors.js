//CSS Selectors practice

//URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
//1. Select input element with name attribute equal to "username" fr username field

/*
<div data-v-957b4417="" class=""><input data-v-1f99f73c="" class="oxd-input oxd-input--active" name="username" placeholder="Username" autofocus=""></div>
*/
[name = "username"]

//2. Select input element with name attribute equal to "password" for password field

/*
<div data-v-957b4417="" class=""><input data-v-1f99f73c="" class="oxd-input oxd-input--active" name="password" placeholder="Password" type="password"></div>
*/
[name = "password"]

//3. Select button element with type attribute equal to "submit" for login button

/* 
<button data-v-10d463b7="" data-v-0af708be="" type="submit" class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"><!----> Login <!----></button>
*/
[type = "submit"]

//4. Select input element with placeholder attribute equal to "Search" for search field

/*
<input data-v-1f99f73c="" data-v-636d6b87="" class="oxd-input oxd-input--active" placeholder="Search">
*/
input[placeholder = "Search"]

//5. Selector for user name in the top right corner after login

/*
<p data-v-bdd6d943="" class="oxd-userdropdown-name">manda user</p>
*/


p[class= "oxd-userdropdown-name"]


//URL: https://webdriveruniversity.com/Data-Table/index.html#

/*<table id="t01" style="width:100%">
          <tbody><tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>John</td>
            <td>Smith</td>
            <td>45</td>
          </tr>
          <tr>
            <td>Jemma</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          <tr>
            <td>Michael</td>
            <td>Doe</td>
            <td>20</td>
          </tr>
        </tbody></table>
*/
[id = "t01"] tr: nth - child(2) td: nth - child(1)
/*
<table class="table table-light traversal-table">
          <thead>
            <tr class="bg-primary">
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-info">
              <th scope="row">1</th>
              <td>Andy</td>
              <td>Otto</td>
            </tr>
            <tr class="bg-info">
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Jones</td>
            </tr>
            <tr class="bg-info">
              <th scope="row">3</th>
              <td>Larry</td>
              <td>Scott</td>
            </tr>
          </tbody>
        </table>
        */
[class= "table table-light traversal-table"] tr: nth - child(3) td: nth - child(2)

// dynmiac table -->https://www.uitestingplayground.com/dynamictable

/*
 
<div role="table" aria-label="Tasks" aria-describedby="table_desc"><div id="table_desc">Task Manager</div><div role="rowgroup"><div role="row"><span role="columnheader">Name</span><span role="columnheader">Memory</span><span role="columnheader">CPU</span><span role="columnheader">Disk</span><span role="columnheader">Network</span></div></div><div role="rowgroup"><div role="row"><span role="cell">System</span><span role="cell">35.1 MB</span><span role="cell">7%</span><span role="cell">0.9 MB/s</span><span role="cell">3.9 Mbps</span></div><div role="row"><span role="cell">Internet Explorer</span><span role="cell">41.1 MB</span><span role="cell">8.1%</span><span role="cell">0.9 MB/s</span><span role="cell">0.8 Mbps</span></div><div role="row"><span role="cell">Chrome</span><span role="cell">70.5 MB</span><span role="cell">8.7%</span><span role="cell">0.9 MB/s</span><span role="cell">7.7 Mbps</span></div><div role="row"><span role="cell">Firefox</span><span role="cell">15.9 MB</span><span role="cell">4%</span><span role="cell">0.7 MB/s</span><span role="cell">4.8 Mbps</span></div></div></div>

*/
[role="rowgroup"]:nth-child(3) [role="row"]:nth-child(4)


//https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7

//1. Selector for My Info >> Marital Status field

[class="oxd-grid-item oxd-grid-item--gutters"]:nth-child(2) [class="oxd-select-wrapper"]


//2. Selector for My Info >> Contact Details >> Country Dropdown field

[class="oxd-grid-item oxd-grid-item--gutters"] [class="oxd-select-wrapper"]


//3. Selector for Performance >> Employee Review >> Job Title Dropdown field

[class="oxd-grid-item oxd-grid-item--gutters"]:nth-child(2) [class="oxd-select-wrapper"] 


///////////////////////////////////EXPATH////////////////////////////////////////////////////////

//1. Xpath for Serch element
// Element: <input data-v-1f99f73c="" data-v-636d6b87="" class="oxd-input oxd-input--active" placeholder="Search">
// Expath: //input[@placeholder='Search']

//2. Amazon
/*/ Element: <a href="/ref=nav_logo" id="nav-logo-sprites" class="nav-logo-link nav-progressive-attribute" aria-label="Amazon.in" lang="en">
      <span class="nav-sprite nav-logo-base"></span>
      <span id="logo-ext" class="nav-sprite nav-logo-ext nav-progressive-content"></span>
      <span class="nav-logo-locale">.in</span>
    </a>
    */

    // Expath:- //a[@id="nav-logo-sprites"]

    //3. Return and Order
    /* Element: <a href="/gp/css/order-history?ref_=nav_orders_first" class="nav-a nav-a-2   nav-progressive-attribute" id="nav-orders" tabindex="0">
  <span class="nav-line-1">Returns</span>
  <span class="nav-line-2">&amp; Orders<span class="nav-icon nav-arrow"></span></span>
</a>*/
    //Expath: //a[@id="nav-orders"]

    //4. Cart
    /*
    <a href="/gp/cart/view.html?ref_=nav_cart" class="nav-a nav-a-2 nav-progressive-attribute" id="nav-cart" tabindex="0">
  <span id="nav-cart-count" class="nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content" aria-hidden="true">0</span>
  <span class="nav-cart-icon nav-sprite"></span>  */

  // Xpath: //a[@id="nav-cart"]

  //URL: https://webdriveruniversity.com/Contact-Us/contactus.html
//5. First Name field
  // Element: <input name="first_name" type="text" class="feedback-input" placeholder="First Name">

  //input[@name="first_name"]

  //6. Last Name field
  // Element: <input name="last_name" type="text" class="feedback-input" placeholder="Last Name"> 
  //input[@name="last_name"]

  //7. Email field
  // Element: <input name="email" type="text" class="feedback-input" placeholder="Email">
  //input[@placeholder="Email Address"]

  //8. Reset button
  // Element: <input type="reset" value="RESET" id="form_buttons" class="reset">
  //input[@type="reset"]  


  //9. Submit button

  // Element: <input type="submit" value="SUBMIT" id="form_buttons" class="button">
  //input[@type="submit"]

  //10. Flipkart Login Button

  //a[@title="Login"]

  