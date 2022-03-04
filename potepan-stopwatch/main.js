
$(document).ready(function(){
 
 
 let hour = 0;
 let min= 0;
 let sec = 0;
 let tenthOfSec = 0;
  
 //以下スタートボタンを押した時の動作//   
$(".startbutton").click(function() {
 $(this).prop("disabled" , true);
 $(".stopbutton").prop("disabled" , false);
 $(".resetbutton").prop("diasbled" , false);
 

//以下１０分の１秒〜秒//

 timer1= setInterval(function() {
 $("#hour").html(hour);
 $("#min").html(min);
 $("#sec").html(sec);
 $("#tenthOfSec").html(tenthOfSec);
 
  tenthOfSec++;
 if(tenthOfSec == 10){
 tenthOfSec = 0;
 sec++;
   };
  },100);
 
 //以下秒〜分//
 timer2= setInterval(function(){
 $("#hour").html(hour);
 $("#min").html(min);
 $("#sec").html(sec);
 $("#tenthOfSec").html(tenthOfSec);
 
 if(sec == 60){
 sec = 0;
 min++;
   };
  },1000);
  
  //以下分〜時間//
 timer3= setInterval(function(){
 $("#hour").html(hour);
 $("#min").html(min);
 $("#sec").html(sec);
 $("#tenthOfSec").html(tenthOfSec);
 
 if(min == 60){
 min = 0;
 hour++;
   };
  },60000);
  
 

});//スタートボタンここまで//
 


//以下ストップボタンを押した時の動作//
$(".stopbutton").click(function(){
$(this).prop("disabled" , true);
$(".startbutton").prop("disabled" , false);
$(".resetbutton").prop("diasbled" , false);
clearInterval(timer1);//timer1止めたら全部止まる//
    

    

});

//以下リセットボタンを押した時の動作//
$(".resetbutton").click(function(){
    
$(".startbutton").prop("disabled" , false);
$(".stopbutton").prop("disabled" , false);

clearInterval(timer1);
hour=0;
min = 0;
sec = 0;
tenthOfSec = 0;

});

 });