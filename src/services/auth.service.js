
// contains all authentication functions

export const authService = {
    login,
    logout,
    isAuthenticated,
    renewToken
}


async function login(username, pass) {
    // do login stuff here
}


async function logout() {
    // do lougout stuff here
}

// check if current user is authenticated
async function isAuthenticated() {
    try {
        // do check here
        
        return true;

    } catch(e) {
        console.error(e);
        return false;
    }

}


async function renewToken() {

}