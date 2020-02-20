
// contains all authentication functions

export const authService = {
    login,
    logout,
    isAuthenticated,
    renewToken,
    facebookLoginHandler
}
 const FB = window.FB;
console.log("Facebook", FB);


async function login() {
    if (!FB) return;
    FB.getLoginStatus(response => {
        if (response.status === 'connected') {
            facebookLoginHandler(response);
        } else {
            FB.login(facebookLoginHandler, {scope: 'public_profile'});
        }
    }, );
}


async function logout() {
    // do lougout stuff here
}

// check if current user is authenticated
async function isAuthenticated() {
    try {
       const res = await FB.getLoginStatus(facebookLoginHandler);
       console.log("Response",  res);
       return true;

    } catch(e) {
        console.error(e);
        return false;
    }

}
function facebookLoginHandler(response) {
    if (response.status === 'connected') {
        FB.api('/me', userData => {
            let result = {
                ...response,
                user: userData
            };
            console.log("Result",result)
            return true;
           // this.props.onLogin(true, result);
        });
    } else {
        return false
        //this.props.onLogin(false);
    }
}

async function renewToken() {

}
