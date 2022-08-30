// JavaScript program to find Smallest
// of three integers without
// comparison operators

let num1=12;
let num2=44;
let num3=2;

let smallestnumber;
if(num1 <= num2 && num1<= num3){
   smallestnumber = num1;
}
if(num2 <= num1 && num2<= num3){
   smallestnumber = num2;
   }
   else{
   smallestnumber = num3;
   }
   
   console.log('the smallestnumber is '+ smallestnumber);
   