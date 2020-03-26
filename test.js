function sum(num1 ,num2){

    if (num1+num2<100 )
    return true

    else 
    return false

}
 
//exercice 2:

function equal(num1 ,num2){

    if (num1==num2 )
    return true

    else 
    return false

}
//exercice3:
function nmbre(num1,num2,num3){
if (num1*num2>num3)
return true
else
return false


}

//exercice4:

function str(arwa){

    if (arwa== "")

    return true

     else 
     
     return false
    
}
//exercice 5:
function comp(n){
    if(n<=0)
    return true
    else 
    return false
}
//exercice 6:
function div(n){
    if (n%100 ==0)
    return true
    else 
    return false
}
//exercice 7:
function str(hello,word){
    if (hello.length == word.length )
    return true
    else return
    false
}


//exercice8:
function even( num1,num2){
    if (num1 %num2==0)
    return true
    else 
    return false
}

//exercice 9:
function mod(mood){
if (mood!="")return `today iam feeling ${mood}`
else return 'today iam feeling neutre'
}

//exercice 10:
function isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
  }
  
  function isOdd(n) {
    return isEven(Number(n) + 1);
  }
  
//exercice 11:

function match (a,b){
    if( a.toUpperCase()==b.toUpperCase())
    return true
    else return false
}

//exercice12:
function str(string){
    if (string==string.toUpperCase())
    return "upper"
    else 
    if (string==string.toLowerCase())
    return "lower" 
    else 
    return "mixte"
}

//exercice13:
function swap(string) {
    return string.split('').reverse().join();

}



//exercice 14:

function alphabet_order(str)
  {
return str.split('').sort().join('');
  }

// exercice 15:
function onlyCase(str) { 

    if (str==str.toUpperCase()|| str==str.toLowerCase())
    return true
    else 
    return false
}
//exercice 16:

function checkEnding(str1, str2) { 

return str1.endsWith(str2)

    
} 

//exercice 17:

function incre (num1) { 

 return num1% 2==0? num1-1:num1+1;
 } 
 
 //exercice18:
 function str (num1,num2) { 
     return Math.min (Number(num1),Number(num2)).toString()

     
     }
     
