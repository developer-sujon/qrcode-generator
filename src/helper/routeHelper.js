import {Redirect} from "react-router";
import {getLoginStatus, removeLoginInfo} from "./sessionHelper";
class RouteHelper{
    RouteRedirect(isRedirect,RedirectPath){
        if(isRedirect===true){
            return(
                <Redirect to={RedirectPath}/>
            )
        }
    }
    CheckLoginRedirect(){
        let LoginStatus=getLoginStatus();
        if(LoginStatus!=="YES"){
            removeLoginInfo();
            return(
                <Redirect to="/"/>
            )
        }
    }
    logOutRedirect(){
        removeLoginInfo();
    }
}

export const{RouteRedirect,CheckLoginRedirect,logOutRedirect}=new RouteHelper();
