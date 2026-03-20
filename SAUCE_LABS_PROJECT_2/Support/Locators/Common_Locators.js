class Common_Locators {

    //Locators form the login page
    static Login_page_locators = {
        Login_Page_Title: '[class="login_logo"]',
        USER_NAME: '[id="user-name"]',
        PASSWORD: '[id="password"]',
        LOGIN_BUTTON: '[id="login-button"]',
        LOGIN_ERROR_POPUP: '[class="error-message-container error"] h3'
    }

    static Product_page_locators = {
        HOME_LOGO: '[class="app_logo"]',
        Product_page_title: '[class="title"]',
        Inventory_Item: '[data-test="inventory-item"]',
        ProductName: '[data-test="inventory-item-name"]',
        AddToCartBtn: '[data-test^="add-to-cart"]',
        RemoveBtn: '[data-test^="remove-sauce"]' // starts with ^  endswith $  parctial check *
    }

    static Labels = {
        Remove: 'Remove'
    }



}
export { Common_Locators }