
var common =( name1 , name2)=>
{   var count=0;
   for(let i=0;i<name1.length;i++)
   {
     for(let j=0;j<name2.length;j++)
     {
        if(name1[i]===name2[j])
        {
            count++;
            name2[j]='$';
            break;
        }
     }
   }
   return count;
}
var check=(name1,name2)=>
{
    let res=common(name1,name2);
    let len=name1.length+name2.length-2*res;
    let mychemistry=["friends","Sisters","Lover","Enemies","Brother"];
    while(mychemistry.length>1)
    {
       let remover=len%(mychemistry.length)-1;
       mychemistry.splice(remover,1);
    }
    return mychemistry[0];
}

let chemistry=check("neelam","riya");
console.log(chemistry);
document.getElementById("chemistry").addEventListener("click",function()
{
const myname=document.getElementById("myname").value;
const othername=document.getElementById("othername").value;
let res=check(myname,othername);
const result=document.createElement('h1');
result.style.width='30%';
result.style.border="10px solid red";
result.style.marginLeft='35%';
result.style.marginRight='35%';
result.style.marginTop="20px";
result.style.padding="20px";
result.style.fontfamily="cursive";
result.style.borderRadius="20px";
result.style.textAlign="center";
result.innerHTML=`${res}`;
document.body.appendChild(result);

});
