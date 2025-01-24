import { Products } from "../templates/productTemplate";
export class Product2 extends Products{
    Name="TV";
    Price=23500;
    Qty=3;
    Total(){
        return this.Price*this.Qty;
    }
    public Print(): void {
        console.log(this.Name+"  "+this.Price+"  "+this.Qty+"  "+this.Total());
    }
    CategoryName="Electronics";
}