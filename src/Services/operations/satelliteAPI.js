import {satellite} from "../apis";
import { apiConnector } from "../apiConnector";
import { toast } from "react-toastify";
import { setLoading } from "../../slices/authSlice"

const {
    
    SATELLITE_API,
    SATELLITE_API_ID,

} = satellite;


export function satelliteData(satID, navigate) {
    return async (dispatch) => {
      
        dispatch(setLoading(true));
        let finalURL = satID === null ? SATELLITE_API : SATELLITE_API_ID.replace(":id", satID);
        try {
            const response = await apiConnector("GET", finalURL);
            

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            const finalData = response.data;
            // toast.success("DATA FETCHED");
            navigate("/satellite");
            return finalData;
        } catch (error) {
            toast.error(`${error}`);
            navigate("/Services");
        } finally {
            dispatch(setLoading(false));
            
        }
    };
}

