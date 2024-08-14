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
           
            const response = await apiConnector("POST", SIGNUP_API, {
                email,
                password,
                confirmPassword,
            });
          
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("SignUp Successful");
            navigate("/login");
        } catch (error) {
           
            toast.error(`${error}`);
            navigate("/signup");
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
            navigate("/");


        } catch (error) {
         
            toast.error(`${error}`);
            navigate("/login");
        }
        dispatch(setLoading(false))
    toast.dismiss(toastId)
    }
}

