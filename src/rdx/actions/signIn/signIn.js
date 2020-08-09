import {AUTH} from "../../types";

class LogInActions {
    logIn(){
        return {
            type:AUTH
        }
    }
}
export default  new LogInActions