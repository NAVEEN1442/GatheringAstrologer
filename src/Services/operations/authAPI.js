import { toast } from "react-toastify"
import { apiConnector } from "../apiConnector"
import { endpoint } from "../apis"
import { setLoading } from "../../slices/authSlice"


const {
    SIGNUP_API,
    LOGIN_API
} = endpoint


export function signUp(email, password, confirmPassword, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            console.log("Sending signup request...");
            console.log("SIGNUP API",SIGNUP_API)
            const response = await apiConnector("POST", SIGNUP_API, {
                email,
                password,
                confirmPassword,
            });
            console.log("SIGNUP API RESPONSE............", response);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("SignUp Successful");
            navigate("/GatheringAstrologer/login");
        } catch (error) {
            console.error("SignUp API Error....", error);
            toast.error(`${error}`);
            navigate("/GatheringAstrologer/signup");
        }
        dispatch(setLoading(false))
    toast.dismiss(toastId)
    };
};

export function logIn(email,password,navigate){
    return async(dispatch) =>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))

        try {
            
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password,
            });
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("LogIN Successful");
            navigate("/GatheringAstrologer");


        } catch (error) {
            console.error("SignUp API Error....", error);
            toast.error(`${error}`);
            navigate("/GatheringAstrologer/login");
        }
        dispatch(setLoading(false))
    toast.dismiss(toastId)
    }
}

