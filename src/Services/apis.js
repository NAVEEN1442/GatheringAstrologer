const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log("BASE URL IS ", BASE_URL);
export const endpoint = {
    SIGNUP_API: BASE_URL + "/auth/signUp",
    LOGIN_API: BASE_URL + "/auth/logIn",
};
