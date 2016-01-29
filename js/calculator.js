$(document).ready(function(){

  var display = $(".display").text();
  var arr =[];
  var mathButtonPushed = false;

  $(".number").on("click", function(event) {
    display = Number(""+display+$(this).text());
    if (mathButtonPushed){
      display = $(this).text();
      mathButtonPushed = false;
    };
    $(".display").text(display);
    event.preventDefault();
  });

  $(".decimal").on("click", function(event) {
    display = (""+display+".");
    $(".display").text(display);
    event.preventDefault();
  });

  $(".clear").on("click", function(event) {
    display=0;
    $(".display").text(display);
    event.preventDefault();
  });

  $(".changeSign").on("click", function(event) {
    display = -display;
    $(".display").text(display);
    event.preventDefault();
  });

  $(".pi").on("click", function(event) {
    display = Math.PI;
    $(".display").text(display);
    event.preventDefault();
  });

  $(".mathOp").on("click", function(event) {
    arr.push(Number(display));
    arr.push($(this).text());
    console.log($(this).text());
    mathButtonPushed=true;
    $(".display").text(display);
    event.preventDefault();
  });

  $(".equal").on("click", function(event) {
    (arr[1]=="+" ? display=arr[0]+Number(display) : display = display);
    (arr[1]=="-" ? display=arr[0]-Number(display) : display = display);
    (arr[1]=="x" ? display=arr[0]*Number(display) : display = display);
    (arr[1]=="÷" ? display=arr[0]/Number(display) : display = display);
    // (arr[1]=="π" ? display=Math.PI : display = display);


    $(".display").text(display);
    arr = [];
    event.preventDefault();
  });


});
