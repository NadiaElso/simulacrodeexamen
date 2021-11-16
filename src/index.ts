//Escribir una programa que calcule 
//y retorne el número de días que faltan 
//hasta final de año, a partir de una 
//determinada fecha (dia, mes, año) 
//teniendo en cuenta si el año es bisiesto.
// Puede usar la siguiente pagina como 
//referencia para verificar si un año es 
//bisiesto o no 
//https://es.wikihow.com/calcular-los-a%C3%B1os-bisiestos.
// Agregue el código como respuesta y lcomentarios que crea 
//necesariosos 

function año(año:number,mes:number,dia:number) {
  let sumaraños:any[]=new Array(1);
  let sumarmeses:any[]=new Array(1);
  let sumardia:any[]=new Array(1);
  for (let index = 0; index < sumaraños.length; index++) {
   
    if (año%4===0&&año%100===0&&año%400===0) {
      año=366
      console.log(año);
    } else {
      año=365
      console.log(año);
      
    }
    
  }
  for (let index = 0; index < sumarmeses.length; index++) {
    sumarmeses[index]=0;
  
    
if (mes===4||mes ===6||mes===9||mes===11) {
  sumarmeses[index]=30;
     console.log(sumarmeses);
} 
else if(mes===1||mes===3||mes===5||mes===7||mes===8||mes===10||mes===12) {
sumarmeses[index]=31;
console.log(sumarmeses); 
  
} 
 
  else if ((mes===2)&&(año%4===0&&año%100===0&&año%400===0)){
sumarmeses[index]=29;
        console.log(sumarmeses);

} else {
  sumarmeses[index]=28;
  console.log(sumarmeses);

}
  }for (let index = 0; index < sumardia.length; index++) {
    sumardia[index]=(año-mes-dia);
   console.log(sumardia);
    
  }

  return año
} 


año(2020,2,13);
console.log(año);




