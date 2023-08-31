var name = +prompt("Enter your name")
var eng  = +prompt("Enter your English Marks")
var urdu  = +prompt("Enter your urdu Marks")
var maths  = +prompt("Enter your maths Marks") 
var pst  = +prompt("Enter your pakistan studies Marks") 
var chemistry  = +prompt("Enter your chemistry Marks") 

var total= eng + urdu + maths + pst + chemistry

document.write(total,"<br>") 

 var percentage= (total / 500) * 100
 document.write(percentage+"%", "<br>")

 if(percentage >=80 && percentage < 101){
    document.write("A+")
 }

 else if(percentage >=70 && percentage < 80){
    document.write("A")
 }
 else if(percentage >=60 && percentage < 70){
    document.write("B")
 }
 else if(percentage >=50 && percentage < 60){
    document.write("C")
 }
 else if(percentage >=40 && percentage < 50){
    document.write("D")
 }


 else{
    document.write("nkl krwayy")
 }














