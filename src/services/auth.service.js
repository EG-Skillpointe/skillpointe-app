
// contains all authentication functions

export const authService = {
    login,
    logout,
    isAuthenticated,
    renewToken
};

const FB = window.FB;
console.log("Facebook", FB);


function login(user) {
    console.log('inside auth.service - login, with user: ', user);
    localStorage.setItem('user', JSON.stringify(user));
    return true
}

async function logout() {
    console.log('inside auth.service - logout ');
    localStorage.removeItem('user');
    window.location.replace('/');
    return true;
}

// check if current user is authenticated
function isAuthenticated(callback) {
    try {
        var user = JSON.parse(localStorage.getItem('user'));
        console.log('user: ', user);
        
        if(user && user != null) {
            callback(true);
        } else {
            callback(false);
        }
    } catch(e) {
        console.error(e);
        callback(false);
    }
}


async function renewToken() {

}
