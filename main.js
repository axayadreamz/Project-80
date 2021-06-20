function para_1()
{
    var input=[];
    for(var i=1; i<=6; i++)
    {
        input.push(document.getElementById("para_"+i).value);

    }
    document.getElementById("show1").innerHTML=input.join(".");
    
}
function para_2()
{
    var input=[];
    for(var i=1; i<=6; i++)
    {
        input.push(document.getElementById("par_"+i).value);

    }
    document.getElementById("show").innerHTML=input.join(".");
    
}