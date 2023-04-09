import moment from "moment";

class ConversionHelper{
    WarrantyLeft(purchaseDate,warrantyDuration){
        let Today = new Date();
        let Date1 = moment([purchaseDate.split("/")[2], purchaseDate.split("/")[1],purchaseDate.split("/")[0]]);
        let Date2= moment([Today.getFullYear(), Today.getMonth(), Today.getDate()]);
        let daysLeft= parseInt(warrantyDuration)-parseInt( Date1.diff(Date2, 'days'))
        if(daysLeft<0){
           return "Expired "+ Math.abs(daysLeft)+ " Days Ago";
       }
       else {
            return daysLeft+ " Days Left"
        }
    }

    DateStringToObject(DateString){
        let dateParts = DateString.split("/");
        return  new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    }



}
export const {WarrantyLeft,DateStringToObject}=new ConversionHelper();