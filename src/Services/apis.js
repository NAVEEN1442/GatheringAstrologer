const BASE_URL = process.env.REACT_APP_BASE_URL;


export const endpoint = {
    SIGNUP_API: BASE_URL + "/auth/signUp",
    LOGIN_API: BASE_URL + "/auth/logIn",
    OTP_API: BASE_URL + "/auth/sendotp",

};

export const satellite = {
    SATELLITE_API_ID : BASE_URL + "/fetch/satellite/:id",
    SATELLITE_API : BASE_URL + "/fetch/satellite",

}

