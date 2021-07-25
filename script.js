        //Funtions to show the amount of the selection at displacement bar
function updateRate()
{
    var rateval = document.getElementById("rate").value; 
    document.getElementById("rate_val").innerText=rateval;
}

function bigerThan ()
{
	var invAmount=document.getElementById("principal");
	if(invAmount.value<"1"){
		alert("!Error! Enter a Positive Number");
		invAmount.focus();
		return false;
	}
}

function compute()
{
    //Retriving and store the variables to calculate
	var principal= document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
	//Making the Calculation
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
	//Printing result to hogligth the results we use the mark tag inside the html
    var results = document.getElementById("result").innerHTML= 
    "If you deposit <mark>  "+principal+ " </mark>,<br/> at an interest rate of <mark> "
    + rate+" </mark> %,</br> You Will recibe an amount of : <mark> " +interest+ 
    " </mark> ,</br> in the year: <mark> "+year;" </mark> <br>";
    
}