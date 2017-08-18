function appendResult(result){
  if ((result % 3 === 0) && (result % 5 === 0)){
    return $(".results").append('<li>pingpong</li>');
  } else if (result % 5 === 0){
    return $(".results").append('<li>pong</li>');
  } else if (result % 3 === 0){
    return $(".results").append('<li>ping</li>');
  } else {
    return $(".results").append('<li>' + String(result) + '</li>');
  }
}


$(document).ready(function(){
  $("form#ping-pong-form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#number").val());

    for (i = 1; i <= userInput; i++){
      appendResult(i);
    }
  });

  $("#clear").click(function(event){
    event.preventDefault();
    $("ul").empty();
  });
});
