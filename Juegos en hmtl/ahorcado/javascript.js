var esta=false;
var palabra=new Array();
var cont=0, cont2=0, i=0, n=0, j=0, aleatorio=0;
var desabilitarTeclado=false;
var lin=new Array();

aleatorio=Math.floor(Math.random()*20);//escoje una palabra al azar

switch(aleatorio){

 case 0:

 n=5;
 palabra[0]='j';
 palabra[1]='e';
 palabra[2]='r';
 palabra[3]='r';
 palabra[4]='y';

 break;

 case 1:

 n=6;
 palabra[0]='a';
 palabra[1]='g';
 palabra[2]='u';
 palabra[3]='i';
 palabra[4]='l';
 palabra[5]='a';

 break;

 case 2:

 n=8;
 palabra[0]='c';
 palabra[1]='o';
 palabra[2]='l';
 palabra[3]='o';
 palabra[4]='m';
 palabra[5]='b';
 palabra[6]='i';
 palabra[7]='a';

 break;

 case 3:

 n=7;
 palabra[0]='s';
 palabra[1]='a';
 palabra[2]='n';
 palabra[3]='t';
 palabra[4]='a';
 palabra[5]='n';
 palabra[6]='a';

 break;

 case 4:

 n=12;
 palabra[0]='p';
 palabra[1]='r';
 palabra[2]='o';
 palabra[3]='g';
 palabra[4]='r';
 palabra[5]='a';
 palabra[6]='m';
 palabra[7]='a';
 palabra[8]='c';
 palabra[9]='i';
 palabra[10]='o';
 palabra[11]='n';

 break;

 case 5:

 n=10;
 palabra[0]='c';
 palabra[1]='o';
 palabra[2]='m';
 palabra[3]='p';
 palabra[4]='u';
 palabra[5]='t';
 palabra[6]='a';
 palabra[7]='d';
 palabra[8]='o';
 palabra[9]='r';

 break;

 case 6:

 n=6;
 palabra[0]='f';
 palabra[1]='u';
 palabra[2]='t';
 palabra[3]='b';
 palabra[4]='o';
 palabra[5]='l';

 break;

 case 7:

 n=11;
 palabra[0]='m';
 palabra[1]='i';
 palabra[2]='l';
 palabra[3]='l';
 palabra[4]='o';
 palabra[5]='n';
 palabra[6]='a';
 palabra[7]='r';
 palabra[8]='i';
 palabra[9]='o';
 palabra[10]='s';

 break;

 case 8:

 n=7;
 palabra[0]='t';
 palabra[1]='e';
 palabra[2]='c';
 palabra[3]='l';
 palabra[4]='a';
 palabra[5]='d';
 palabra[6]='o';

 break;


 case 9:

 n=10;
 palabra[0]='a';
 palabra[1]='s';
 palabra[2]='t';
 palabra[3]='r';
 palabra[4]='o';
 palabra[5]='n';
 palabra[6]='o';
 palabra[7]='m';
 palabra[8]='i';
 palabra[9]='a';

 break;


 case 10:

 n=8;
 palabra[0]='g';
 palabra[1]='u';
 palabra[2]='i';
 palabra[3]='t';
 palabra[4]='a';
 palabra[5]='r';
 palabra[6]='r';
 palabra[7]='a';

 break;

 case 11:

 n=4;
 palabra[0]='a';
 palabra[1]='z';
 palabra[2]='u';
 palabra[3]='l';

 break;

 case 12:

 n=5;
 palabra[0]='a';
 palabra[1]='r';
 palabra[2]='b';
 palabra[3]='o';
 palabra[4]='l';

 break;

 case 13:

 n=5;
 palabra[0]='v';
 palabra[1]='i';
 palabra[2]='r';
 palabra[3]='u';
 palabra[4]='s';

 break;

 case 14:

 n=11;
 palabra[0]='m';
 palabra[1]='a';
 palabra[2]='t';
 palabra[3]='e';
 palabra[4]='m';
 palabra[5]='a';
 palabra[6]='t';
 palabra[7]='i';
 palabra[8]='c';
 palabra[9]='a';
 palabra[10]='s';

 break;

 case 15:

 n=8;
 palabra[0]='h';
 palabra[1]='u';
 palabra[2]='m';
 palabra[3]='b';
 palabra[4]='e';
 palabra[5]='r';
 palabra[6]='t';
 palabra[7]='o';

 break;

 case 16:

 n=7;
 palabra[0]='a';
 palabra[1]='m';
 palabra[2]='e';
 palabra[3]='r';
 palabra[4]='i';
 palabra[5]='c';
 palabra[6]='a';

 break;

 case 17:

 n=6;
 palabra[0]='m';
 palabra[1]='u';
 palabra[2]='s';
 palabra[3]='i';
 palabra[4]='c';
 palabra[5]='a';

 break;

 case 18:

 n=7;
 palabra[0]='e';
 palabra[1]='c';
 palabra[2]='l';
 palabra[3]='i';
 palabra[4]='p';
 palabra[5]='s';
 palabra[6]='e';

 break;

 case 19:

 n=10;
 palabra[0]='m';
 palabra[1]='u';
 palabra[2]='r';
 palabra[3]='c';
 palabra[4]='i';
 palabra[5]='e';
 palabra[6]='l';
 palabra[7]='a';
 palabra[8]='g';
 palabra[9]='o';

 break;

}



function abc(cad){

if(desabilitarTeclado==false){

 document.getElementById(cad).style.backgroundColor='#00ff00';

 esta=false;
 ganaste=false;

 for(i=0;i<n;i++){
  if(cad==palabra[i]){
	
   document.getElementById('l'+i).innerHTML=cad;

   esta=true;

   cont2++;
 
  }else{  

   if(esta!=true){

     esta=false;

   }

  }

 }//for

  if(esta==false){
     cont++;
     dibujo(cont);

  }


  if(cont2==n){
   alert('Adivinaste');
   desabilitarTeclado=true;
  }
 

}else{ alert('No puedes hacer más movimientos'); }

}//finfuncion


function dibujo(c){

 switch(c){

  case 1:
   document.getElementById('ahorcado').src="2.PNG";
  break;

  case 2:
   document.getElementById('ahorcado').src="3.PNG";
  break;

  case 3:
   document.getElementById('ahorcado').src="4.PNG";
  break;

  case 4:
   document.getElementById('ahorcado').src="5.PNG";
  break;

  case 5:
   document.getElementById('ahorcado').src="6.PNG";
  break;

  case 6:
   document.getElementById('ahorcado').src="7.PNG";
   alert('Perdiste');
   desabilitarTeclado=true;
  break;  

 } 

}


function lineas(){

 for(j=0; j<n; j++){
  lin[j]='<div id="l'+j+'">__</div>';
  
 }

 for(j=0; j<n; j++){

  document.getElementById('lineas').innerHTML=document.getElementById('lineas').innerHTML+lin[j];

 }

 
}