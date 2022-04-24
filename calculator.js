
let op=false;
function setValue(val,type="number")
{

    if(type==="number")
    {
        document.querySelector(".inp").value+=val;
        op=false;
    }

    if(type==="operator" && op===false)
    {
        document.querySelector(".inp").value+=val;
        op=true;
       
    }

    
    
}


function calculate()
{
    let data=document.querySelector(".inp").value;
    let answer=eval(data);
    document.querySelector(".inp").value=answer;

}

function clearAll()
{
    document.querySelector(".inp").value="";
}

function backSpace()
{

    let data=document.querySelector(".inp").value;
    let newData=data.substring(0,data.length-1);
    document.querySelector(".inp").value=newData;
    op=false;


}

function squareRoot()
{
    let data=document.querySelector(".inp").value;
    let answer=Math.sqrt(Number(data));
    document.querySelector(".inp").value=answer;

}