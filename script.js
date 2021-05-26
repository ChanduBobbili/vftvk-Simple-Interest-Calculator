function compute(){
    var p = document.getElementById("principal").value;
    var t = document.getElementById("rate").value;
    var r = document.getElementById("year").value;
    var si = (p*t*r)/100;
    
    var year = new Date().getFullYear()+parseInt(r);
    
    document.getElementById('result').innerHTML = "If you deposit "+p+"<br> at an interest rate of "+t+"%"+"<br> you will receive an amount of <b>"+si+"</b> <br> in the year of "+year;
    
    
    
    
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
    
}


  
