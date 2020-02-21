
// contains all authentication functions

export const authService = {
    login,
    logout,
    isAuthenticated,
    renewToken
}

const FB = window.FB;
console.log("Facebook", FB);


function login() {
    console.log('login clicked 222')

    FB.login((response) => {
        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', (response) => {
                console.log('login response: ', response);
                window.location.replace('/');
                return response;
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    });
}


async function logout() {
    console.log('inside logout function... ')
    FB.logout((response) => {
        console.log('lougout: ', response)
    });
}

// check if current user is authenticated
async function isAuthenticated(callback) {
    try {
        // FB.getLoginStatus(response => {
        //     console.log('response: ', response)
        //     if (response.status === 'connected') {
        //         console.log('isAuthenticated - if')
        //         callback(true);
                
        //         var uid = response.authResponse.userID;
        //         var accessToken = response.authResponse.accessToken;
        //     } else if (response.status === 'not_authorized') {
        //         console.log('isAuthenticated -  else if')
        //         callback(false);
        //         login();
        //       // The user hasn't authorized your application.  They
        //       // must click the Login button, or you must call FB.login
        //       // in response to a user gesture, to launch a login dialog.
        //     } else {
        //         console.log('isAuthenticated - else ')
        //         callback(false);
        //       // The user isn't logged in to Facebook. You can launch a
        //       // login dialog with a user gesture, but the user may have
        //       // to log in to Facebook before authorizing your application.
        //     }
        // });

        callback(true)
    } catch(e) {
        console.error(e);
        callback(false);
    }

}


async function renewToken() {

}
