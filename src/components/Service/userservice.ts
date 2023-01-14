import axios from "axios";

export const signup = (signupObject: any) => {
    let result = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/adminSignUp", signupObject)
    return result
        
}