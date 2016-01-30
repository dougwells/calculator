$(document).ready(function(){

  var display = $(".display").text();
  var arr =[];
  var mathButtonPushed = false;
  var i = 0; //image array incrementor
  var imageURL = [
    'url("https://dl.dropboxusercontent.com/s/b3bx1htfwao0lei/man_on_the_mountain.jpg")',
    'url("https://dl.dropboxusercontent.com/s/ihldzg2u6l0drph/surferGirl.jpg")',
    'url("https://dl.dropboxusercontent.com/s/s08q7kaodwztwkq/robotStart.jpg")',
    'url("https://dl.dropboxusercontent.com/s/ve1o0rvptdf8gnq/track.jpg")'
  ];

// Controls Display.  Converted from String to a Number at this point
  $(".number").on("click", function(event) {
    display = Number(""+display+$(this).text());
    if (mathButtonPushed){
      display = $(this).text();
      mathButtonPushed = false;
    };
    $(".display").text(display);
  });

//When you hit the decimal button
  $(".decimal").on("click", function(event) {
    display = (""+display+".");
    $(".display").text(display);
  });

  $(".clear").on("click", function(event) {
    display=0;
    $(".display").text(display);
  });

  $(".changeSign").on("click", function(event) {
    display = -display;
    $(".display").text(display);
  });

// Would you like some pi?
  $(".pi").on("click", function(event) {
    (i<imageURL.length ? i=i : i=0);
    $(".display").text("Surprise ...!");
    $("body").css({"background-image": imageURL[i]});
    setTimeout(function () { $(".display").text(Math.PI)}, 1000);
    i++;
    setTimeout(function(){display=Math.PI}, 1100);

  });

//Handles math after + - X etc hit (this took some thinking ...)
  $(".mathOp").on("click", function(event) {
    arr.push(Number(display));
    arr.push($(this).text());
    console.log($(this).text());
    mathButtonPushed=true;
    $(".display").text(display);
  });

//Pretty efficient way to handle different math operations.
  $(".equal").on("click", function(event) {
    (arr[1]=="+" ? display=arr[0]+Number(display) : display = display);
    (arr[1]=="-" ? display=arr[0]-Number(display) : display = display);
    (arr[1]=="x" ? display=arr[0]*Number(display) : display = display);
    (arr[1]=="÷" ? display=arr[0]/Number(display) : display = display);
    $(".display").text(display);
    arr = [];
  });

});
