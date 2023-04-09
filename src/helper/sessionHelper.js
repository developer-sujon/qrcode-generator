class SessionHelper{
    setSingleQRInfo(SingleQRInfo){
        sessionStorage.setItem("SingleQRInfo",SingleQRInfo)
    }
    getSingleQRInfo(){
       return  sessionStorage.getItem("SingleQRInfo")
    }
}
export const {setSingleQRInfo,getSingleQRInfo}=new SessionHelper();