

function solve(){
    // declearing variables 
    var a,b,c,answer1,answer2;
    //asigning variables
     a = document.getElementById('a').value;
     b = document.getElementById('b').value;
     c = document.getElementById('c').value;

    // for the denomerator in the formular
    var denomerator = 2*a;
    // Constant variable
    const determinant = Math.pow(b,2)- (4*a*c);

    // for the numerator in the formular
    var numeratorWithMinus = -b - Math.sqrt(determinant);
    
    var numeratorWithPlus = -b + Math.sqrt(determinant);
    
    // determine weather the equation have real root or complex root
    if(determinant >= 0){
         answer1 = numeratorWithMinus/denomerator;
         answer2 = numeratorWithPlus/denomerator;
    document.getElementById('display-answers').innerHTML = "The values of x are :<br> x<sub>1</sub> = " + answer1 + "<br>x<sub>2</sub> = " + answer2;
}
    else{
        var ip = -b/denomerator;
        var rp = Math.sqrt(-determinant)/denomerator;
        
        answer1 = ip + " + " + rp + "<b>i</b>" ;
        answer2 =  ip+ " - " + rp + "<b>i</b>" ;
     
    document.getElementById('display-answers').innerHTML = "The values of x are :<br> x<sub>1</sub> = " + answer1 + "<br>x<sub>2</sub> = " + answer2;

    }
}