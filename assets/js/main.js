var changeForm=document.querySelector(".change");
var change=[];
changeForm.onsubmit=function(e){
    e.preventDefault();
    var ele=e.target.elements;
    change={
        number:ele[0].value,
        types:ele[1].value,
    };
    printchange();
}
function printchange(){
    var n=0;
    if(change.types == "Dollar")
    {
        n= change.number / 3.75;
    }
    else if(change.types == "Dinar")
    {
        n = change.number / 5.29;
    }
    else{
        n = change.number;
    }
    document.querySelector(".result").innerHTML=n;
    document.querySelector(".r1").innerHTML=change.types;
}

