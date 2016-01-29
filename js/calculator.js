$(document).ready(function(){

  var display = $(".display").text();
  var arr =[];
  var mathButtonPushed = false;
  var i = 0; //image array incrementor
  var imageURL = [
    ['url("https://dl.dropboxusercontent.com/s/2c9cmd3zpf9ot7i/triathelete.jpg")', "col-md-offset-2"],
    ['url("https://dl.dropboxusercontent.com/s/4pccyow004a4fz8/pushupGirlOneHand.jpg")', "col-md-offset-1"],
    ['url("https://dl.dropboxusercontent.com/s/fzmqo87d9m9x4el/sfo.jpg")', "col-md-offset-6"],
    ['url("https://dl.dropboxusercontent.com/s/ve1o0rvptdf8gnq/track.jpg")', "col-md-offset-1"]
  ];

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
    (i>imageURL.length ? i=0 : i=i);
    $(".display").text("Surprise ...!");
    $("body").css({"background-image": imageURL[i][0]});
    setTimeout(function () { $(".display").text(Math.PI)}, 2000);
    i++;

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
