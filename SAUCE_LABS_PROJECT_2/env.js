class env {

    getCredentials(type) {
        let Credential = {};
        //standard user
        if (type === "standard_user") {
            Credential["username"] = "standard_user",
            Credential["password"] = "secret_sauce"
            return Credential
        }
        //locked out user
        if (type === "locked_out_user") {
            Credential["username"] = "locked_out_user",
            Credential["password"] = "secret_sauce"
            return Credential
        }
    }


}
export const Env = new env()


