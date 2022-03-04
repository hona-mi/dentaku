

//"."についてはいつでも数字に並べて表示する指示。０なら０.に書き換えて次の式での書き換えを防ぐ//
  function clickdot(){
  let startNumber = document.getElementById("result");
  console.log(startNumber);
  if(startNumber.textContent === "0"){
   startNumber.textContent =  "0.";
  }else{
  startNumber.textContent += "." ;
  }
  }

 //clickbutton(value)について・・・画面の文字が０なら入れ替え、０以外なら横に書き連ねる指示//
 function clickbutton(value){
     let resultContent = document.getElementById("result");//画面の式全部//
     console.log(resultContent.textContent);
  
     if (resultContent.textContent  == "0"){
       resultContent.textContent = value;
      } else{
     resultContent.textContent += value;
     }
  }
  //イコールを押下すると数式を取り出して計算する指示//
  function calculate(){
    let numberPhrase = document.getElementById("result");
    console.log(numberPhrase.textContent);
    let answer = eval(numberPhrase.textContent);
    console.log(answer);
    numberPhrase.textContent = answer;
  }
  
  //ACを押下すると現在の文字列を取り出して、とにかく０にする指示//
  function clearScreen(){
    let monitorNumber = document.getElementById("result");
    console.log(monitorNumber);
    monitorNumber.textContent ="0" ;
  }
 

  




$(document).ready(function(){
 //最初は００と＋など押せないようにする// 
 $(".button2 , .button00").prop("disabled" , true);
 //でも数字をクリックしたら押せるようにする//
 $(".button").on("click" , function() {
  $(".button2 , .button00").prop("disabled", false);
 });
 
 //2回連続で押されないようにする処理//
 $(".button2").on("click", function() {
     $(".button2 , .button00").prop('disabled', true);
    });
  $(".button").on("click" , function(){
    $(".button2 , .button00").prop("disabled" , false);
  }); 
  
//ACを押しても複数のボタンが押せなくなる処理//
$(".buttonAC").on("click" ,function(){
 $(".button2 , .button00").prop("disabled" , true);
});
//でもなんらかの数字が押されたら復活//
  $(".button").on("click" , function() {
  $(".button2 , .button00").prop("disabled", false);
 });
 
 
 //0ボタンが押されたら００ボタンが押せなくなるか、　.ボタンだけ押せるようにする//



 });
 

 
 
 