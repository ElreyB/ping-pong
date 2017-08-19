function appendResult(result){
  if ((result % 3 === 0) && (result % 5 === 0)){
    return $(".results").append(`<li><div><img src="img/ping.png" alt="black ping-pong paddel" class="img-rounded"><img src="img/pong.png" alt="black ping-pong paddel" class="img-rounded"></div></li>`);
  } else if (result % 5 === 0){
    return $(".results").append(`<li><div><img src="img/pong.png" alt="black ping-pong paddel" class="img-rounded"></div></li>`);
  } else if (result % 3 === 0){
    return $(".results").append(`<li><div><img src="img/ping.png" alt="black ping-pong paddel" class="img-rounded"></div></li>`);
  } else {
    return $(".results").append(`<li><div>${result}</div></li>`);
  }
}

// animation http://jsfiddle.net/adeneo/ft9tb2cb/
function showpanel(index, elements) {
  index = index === elements.length-1 ? 0 : index+1;
  elements.eq(index).show(1).delay(1000).hide(1, function() {
      showpanel(index, elements);
  });
}

$(document).ready(function(){
  $("form#ping-pong-form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#number").val());

      if (isNaN(userInput)){
        $("input").addClass("error");
        $("p").fadeToggle(3500,function() {
          $("p, .well").hide();
        });
      }

    for (i = 1; i <= userInput; i++){
      appendResult(i);
    }
    $(".well").show();

    showpanel(-1, $("ul#list > li"));
  });

  $(".clear").click(function(event){
    event.preventDefault();
    $("ul").empty();
    $(".well").hide();
    $("input").removeClass("error");
  });
});
