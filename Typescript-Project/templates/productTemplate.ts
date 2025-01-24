import iCategory,{iProduct} from "../contracts/productContract";

export abstract class Products implements iCategory,iProduct{
    Name:string="";
    Price:number=0;
    Qty:number=0;
    public abstract Total():number;
    public abstract Print():void;
    CategoryName:string="";
}
