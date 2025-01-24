/*var username:string="Bibhu";
console.log("Hello "+username);*/
//=================================
/*var num:number=0b1010;
console.log(num);
var num2:number=2e3;
console.log(num2);
var num:number=0b1010;
console.log(num);
var aa:undefined=undefined;
console.log(typeof aa); //undefined
var bb:null=null;
console.log(typeof bb); //null
*/
//====================================================
/*var Name:string = "Samsung TV";
var Price:number|undefined;
//Price = 35000.44;
if(Price){
    console.log(`Name=${Name}\nPrice=${Price}`);
} else {
    console.log(`Name=${Name}`);
}*/
//============================================================================================
/*var Student:any[]=[11,"Bibhu",true];
var[Id,Name,Eligibility]=Student;
console.log(`Id:${Id} Name:${Name} Eligibility:${Eligibility}`);
var Product:any[]=[1901,"TV",["Samsung","LG"],function(){console.log("Welcome to Typescript")}];
console.log(Product[0]+" "+Product[1]+" "+Product[2][0]+" "+Product[2][1]);
Product[3]();*/
//==============================================================
/*var Student:any[]=[11,"Bibhu",true];
for(var prop in Student){
    console.log(`${prop} ${Student[prop]}`);
}
for(var prop2 of Student){
    console.log(`${prop2}`);
}*/
//==============================================================
/*var Student:String[] | Number[]=[10,20];
console.log(Student[0]);  //possible similar type of data
//var Student2:String[] | Number[]=[10,"Bibhu"];
//console.log(Student2[0]); //Does not possible initialization in case of different type of data
var Student3:String[] | Number[]=[];
Student3[0]=20;
Student3[1]="Bibhu";
console.log(Student3[0]);
console.log(Student3[1]);*/
//==========================================================
/*let values:string[] = [];
values["0"] = "Samsung TV";
values["1"] = "Nike Casuals";
console.log(values.toString());*/
//let arr:any[];
//arr[0]=10; error
//=====================================================================
/*var arr:readonly any[]=[12,"Jilu"];
arr.push(20); // Error because readonly prevents the changing of array
console.log(Array.toString(arr));*/
//=====================================================================
/*var arr=[1,2,3];
arr.push(4);
arr.push("5"); //Error*/
//===========================================================================
//Tuples
// var tup:[Number,boolean,String]=[12,true,"Welcome to Typescript"]; //Order is Imp otherwise error
// console.log(tup.toString());
// var tup2:readonly [Number,boolean,String];
// tup2=[12,false,"Welcome to Array"];
// var tup3:[x:Number,y:boolean,z:String]=[12,true,"Welcome to Typescript"]; // Named Tuples
/*var tup4:[Number,boolean,String]=[12,true,"Welcome to Typescript"];
var[id,Eligibility,Message]=tup4;
console.log(id+" "+Eligibility+" "+Message);*/
//===========================================================================
/*var str:Number|String;
str.toUpperCase(); //Error
console.log(str);

var str:Number|String;
str="Hello";
str.toUpperCase(); //no Error
console.log(str);*/
//===========================================================================
/*let tv:{Name:String,Quantity:number,Price:number,Models:String[],Rating:{Rate:Number,Count:Number},Total:any,Print?:any}={
 Name:"Samsung",
 Quantity:3,
 Price:12000,
 Models:["1901Model","2020Model"],
 Rating:{Rate:5,Count:34},
 Total: function(){
    return this.Quantity*this.Price;
 },
 Print:function(){
    console.log(`${this.Name}\n${this.Quantity}\n${this.Price}\n${this.Models.toString()}\n${this.Rating.Rate}\n${this.Rating.Count}\n${this.Total()}`);
 }
}
tv.Print();*/
//==================================================================================================
// var Students:{Name:String,Age:number}[]=[
// {Name:"Bibhu",Age:20},
// {Name:"Jilu",Age:22},
// ];
// for(var stu of Students){
//     console.log(stu.Name+" "+stu.Age);
// }
/*var Students2:any[]=[
    {Name:"Bibhu",Age:20},
    {Name:"Jilu",Age:22},
    ];
    for(var stu of Students2){
        console.log(stu.Name+" "+stu.Age);
    }*/
var stu = new Map();
stu.set("Name", "Bibhu");
stu.set("RollNo", 26);
console.log(stu.keys());
console.log(stu.values());
console.log(stu.entries());
/*  var num={
    num1:23  }
num.num1=34;
num.num1="Jilu"; //Error(Inference)*/
//=====================================================================
/*let ProductId=Symbol();
let Product:any={
    [ProductId]:1900,
    Name:"Washing Machine",
    Price:23900
}
for(var items in Product){   // If for-of then Error
    console.log(items);
}*/
//====================================================================================
/*function fun(a:number,b:number):number{
    return a*b;
}
function fun2(Name:string):String{
    return `Hello ${Name}`;
}
function fun3():void{
   console.log("Hello JavaFSD");
}
function fun4(Name:String,City?:String):void{
    if(City){
        console.log("Name:"+Name+"  City:"+City);
    }
    else{
        console.log("Name:"+Name);
    }
}
function Default_Parameter(Num:number,exp:number=10):number{
    return Num*exp;
}

console.log(fun(20,10));
console.log(fun2("Bibhudatt"));
fun3();
fun4("Kamal","Hyd");
fun4("Ankit");
console.log(Default_Parameter(20)); //200
console.log(Default_Parameter(20,20)); //400
*/
//=====================================================================================
/*interface iProduct{
    Name?:string;
    Price:number;
    Quantity:number;
    readonly dAddress:string;
    Total():Number;
    Print():void;
    Hello(Nm:String):string;
}
let res:iProduct={
    Name:"TV",
    Price:17500,
    Quantity:3,
    dAddress:"Amerpeet",
    Total: function(){
        return this.Quantity * this.Price;
    },
    Print:function(){
    console.log("Product Name:"+this.Name+"\nPrice:"+this.Price+"\nNo of products:"+this.Quantity+"\nProduct delivery address:"+this.dAddress+"\nTotal Cost of Product:"+this.Total()+"\n"+this.Hello('Jilu'));
    },
    Hello:function(user){
        return "Hello "+user;
    }
}
//res.Name="Refrigerator";
//res.Price=22000;
//res.dAddress="Satyam Theatre Road"; //Error cause of readonly
//console.log(res.Name+"  "+res.Price+"  "+res.dAddress);
res.Print(); */
/*interface HDFC{
Loans:string;
LoanAmount:number;
}
interface HDFC2 extends HDFC{
    LoanDuration:String;
}
let res:HDFC2={
    Loans:"Home_Loan",
    LoanAmount:200000,
    LoanDuration:"3 year"
}
console.log(res.Loans+"  "+res.LoanAmount+"  "+res.LoanDuration); */
/* interface HDFC1{
  Loans:string;
  LoanAmount:number;
  }
  interface HDFC2{
      LoanDuration:String;
  }
  interface HDFC extends HDFC1,HDFC2{

  }
  let res:HDFC={
      Loans:"Home_Loan",
      LoanAmount:200000,
      LoanDuration:"3 year"
  }
  console.log(res.Loans+"  "+res.LoanAmount+"  "+res.LoanDuration);
*/
//=========================================================================================
/*var CategoryName:String="Electronics";
var Demo=class{};
if(CategoryName=="Hardware"){
    Demo=class{
   Name="Pipe";
   Price=2000;
    }
}
else{
    Demo=class{
    Name="TV";
    Price=9000;
     }
    }
    */
/*class Demo{
    static s=0;
    n=1;
    constructor(){
        Demo.s=Demo.s+1;
        this.n=this.n+1;
    }
    Print(){
        console.log("StaticVal:"+Demo.s+" NonstaticVal:"+this.n);
    }
}
let obj=new Demo();
obj.Print();
let obj2=new Demo();
obj2.Print();
let obj3=new Demo();
obj3.Print(); */
/*var username:string|null=prompt("Enter Username:");
var role:string|null=prompt("Enter Role:","Admin|Manager|Customer");
var productname:string|null=prompt("Enter Name of the Product:");
class Product{
    public _productName:string|null=null;
    get ProductName(){
        return this._productName;
    }
    set ProductName(NewName:string|null){
        if(role=="Admin"){
            this._productName=NewName;
        }
        else{
            console.log("Hello "+username+" Your role "+role+" is not authorized to set productname");
        }

    }
}
let tv=new Product();
tv.ProductName=productname;
if(tv.ProductName){
    console.log(tv.ProductName);
}*/
//=========================================================================
/* class Product{
  public Name:string|null="Samsung TV";
  public Rating:any={
    VendorRating:{ Rate:3.4,count:300},
    CustomerRating:{ Rate:4.4,count:230}
  }
  get VendorRating(){
    return this.Rating.CustomerRating.count;
  }
}
let obj=new Product;
console.log(obj.VendorRating); */
/*
class Database{
   constructor(dname:String){
    console.log("You Connected to "+dname+" Database.");
   }
   public Insert():void{
    console.log("Record Inserted");
   }
   public Delete():void{
    console.log("Record Deleted");
   }
}
let obj=new Database("MySQL");
obj.Insert();
*/
//==================================================================
/*
class abc{
    constructor(){
        console.log("Base class constructor");
    }
}
class def extends abc{
    constructor(){
        super();
        console.log("Derieved class constructor");
    }
}
new def();
*/
//=================================================================================
/*
class Employee{
    public FirstName:string="";
    public LastName:string="";
    public Designation:string="";
    public Print():void{
        document. write (this.FirstName+"\n"+this.LastName+"\n"+this.Designation+"\n");
    }
}
class Employee2 extends Employee{
     FirstName="Bibhudatt";
     LastName="Behera";
     Designation="Developer";
     Role="Website Developer";
     Print(){
        super.Print();
        document. write (this.Role);
    }
    }
    class Employee3 extends Employee{
        FirstName="Nirmal";
        LastName="Behera";
        Designation="Admin";
        Role="Authentication";
        Print(){
           super.Print();
           document. write (this.Role);
       }
       }
       class Employee4 extends Employee{
        FirstName="Amit";
        LastName="Chatterjee";
        Designation="Manager";
        Role="Leading";
        Print(){
           super.Print();
           document. write (this.Role);
       }
       }
       let employees:Employee[]=[new Employee2(),new Employee3(),new Employee4()];
*/
//===================================================================================
//Generics
/*
interface iProduct{
    Name:string;
    Price:number;
}
interface iEmployee{
    fName:string;
    Designation:string;
    Salary:number;
}
class Service{
public getData<L>(data:L){
    for(var property in data){
        console.log(property+"     "+data[property]);
    }
}
}
let obj=new Service();
console.log("Product Details...");
obj.getData<iProduct>({Name:"TV",Price:23000});
console.log("Employee Details...");
obj.getData<iEmployee>({fName:"Bibhu",Designation:"FullstackDeveloper",Salary:42000});
*/
/*
interface Oracle{
    Username:string;
    Password:string;
    Database:string;
}
interface MySQL{
    Host:string;
    user:string;
    pwd:string;
    Db:string;
}
interface MongoDB{
    Url:string;
}
class Database<T>{
    public connectionString:T|null=null;
    public Connect():void{
        for(var property in this.connectionString){
            console.log(property+"        "+this.connectionString[property]);
        }
    }
}

console.log("Oracle Database");
let orcl=new Database<Oracle>;
orcl.connectionString={
    Username:"system",
    Password:"Jilucse2002",
    Database:"Student"
}
orcl.Connect();
console.log("MySQL Database");
let mysql=new Database<MySQL>;
mysql.connectionString={
    Host:"Localhost",
    user:"root",
    pwd:"Jilucse@2002",
    Db:"bibhu"
}
mysql.Connect();
console.log("MongoDB Database");
let mongo=new Database<MongoDB>;
mongo.connectionString={
    Url:"mongodb://127.0.0.1:27017"
}
mongo.Connect();
*/
//=========================================================================
/*
enum errorCode{
code,
code2,
status="success",
notFound=404,
notFound2,
}
console.log(errorCode.code+" "+errorCode.code2+" "+errorCode.status+" "+errorCode.notFound+" "+errorCode.notFound2);
console.log(errorCode[405]); */
// tsc index.ts     node index.js
