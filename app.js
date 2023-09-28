var name = +prompt("Enter your name")
var eng  = +prompt("Enter your English Marks")
var urdu  = +prompt("Enter your urdu Marks")
var maths  = +prompt("Enter your maths Marks") 
var pst  = +prompt("Enter your pakistan studies Marks") 
var chemistry  = +prompt("Enter your chemistry Marks") 

var total= eng + urdu + maths + pst + chemistry

document.write(total+" "+ "Total", "<br>") 

 var percentage= (total / 500) * 100
 document.write(percentage+"%"+" "+"Percentage", "<br>")

 if(percentage >=80 && percentage < 101){
    document.write("A+"+" "+ "Grade")
 }

 else if(percentage >=70 && percentage < 80){
    document.write("A"+" "+ "Grade")
 }
 else if(percentage >=60 && percentage < 70){
    document.write("B"+" "+ "Grade")
 }
 else if(percentage >=50 && percentage < 60){
    document.write("C"+" "+ "Grade")
 }
 else if(percentage >=40 && percentage < 50){
    document.write("D"+" "+ "Grade")
 }


 else{
    document.write("Fail")
 }














