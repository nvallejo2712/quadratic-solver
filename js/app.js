const quadratic=(a,b,c,sign)=>{
  let resultado1=(-b + Math.sqrt(b*b - 4*a*c))/(2*a);
  let resultado2=(-b - Math.sqrt(b*b - 4*a*c))/(2*a);

if((b*b - 4*a*c)<0){
  return ("No tiene raices reales")
}
  else{

    if (sign==1){
      return resultado1;
     }
     else{
       return resultado2;
     }

  }

 
}

const result=()=>{
    let resp1 =Number(document.getElementById("resp-1").value);
    let resp2= Number(document.getElementById("resp-2").value);
    let resp3= Number(document.getElementById("resp-3").value);

    let resultado1=document.querySelector(".result-1");
    resultado1.innerHTML=quadratic(resp1,resp2,resp3,1);
 
    let resultado2=document.querySelector(".result-2");
    resultado2.innerHTML=quadratic(resp1,resp2,resp3,0);
    

    


}