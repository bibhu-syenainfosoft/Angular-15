export interface iProduct{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print():void;
}
export default interface iCategory{
    CategoryName:string;
}