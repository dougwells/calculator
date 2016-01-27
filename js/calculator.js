$(document).ready(function(){

  var oldValue = $("input[name^='answer']").val();

  $(".number").on("click", function(event) {
    var buttonNumber = this.value;
    var newValue = Number(""+oldValue+buttonNumber);
    $("input").val(newValue);
    oldValue=newValue;
    event.preventDefault();
  });

  $(".decimal").on("click", function(event) {
    var buttonNumber = this.value;
    var newValue = Number(""+oldValue+buttonNumber+"4");
    console.log(newValue);

    $("input").val(newValue);
    oldValue=newValue;
    event.preventDefault();

    // var precision = oldValue.length;
    // oldValue=oldValue.precision(precision+1);
    //
    // var n = num.toFixed(2)
    // event.preventDefault();
  });


});
