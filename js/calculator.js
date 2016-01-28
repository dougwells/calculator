$(document).ready(function(){

  var display = $("input[name^='display']").val();
  var arr =[];
  var mathButtonPushed = false;

  $(".number").on("click", function(event) {
    display = Number(""+display+this.value);
    if (mathButtonPushed){
      display = this.value;
      mathButtonPushed = false;
    };
    $("input").val(display);
    event.preventDefault();
  });

  $(".decimal").on("click", function(event) {
    display = (""+display+".");
    $("input").val(display);
    event.preventDefault();
  });

  $(".clear").on("click", function(event) {
    display=0;
    $("input").val(display);
    event.preventDefault();
  });

  $(".changeSign").on("click", function(event) {
    display = -display;
    $("input").val(display);
    event.preventDefault();
  });

  $(".mathOp").on("click", function(event) {
    arr.push(Number(display));
    arr.push(this.value);
    console.log(this.value);
    mathButtonPushed=true;
    $("input").val(display);
    // console.log(arr);
    // console.log(display);
    // console.log(mathButtonPushed)
    event.preventDefault();
  });

  $(".equal").on("click", function(event) {
    (arr[1]=="+" ? display=arr[0]+Number(display) : display = display);
    (arr[1]=="-" ? display=arr[0]-Number(display) : display = display);
    (arr[1]=="*" ? display=arr[0]*Number(display) : display = display);
    (arr[1]=="/" ? display=arr[0]/Number(display) : display = display);

    $("input").val(display);
    arr = [];
    event.preventDefault();
  });


});
