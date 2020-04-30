var scaleNameLeft = "left side text"; // e.g. "do not aggree"
var scaleNameRight = "right side text"; // e.g. "aggree"

// manual and custom text splitting for small screens
if(screen.width < 900.00){
    scaleNameLeft = "do not<br>aggree";
    scaleNameRight = "completely<br>aggree";
}

$(document).ready(function() {
    $('.ls-answers.answers-list.radio-list.list-unstyled.form-inline').each(function(){
      if($( this ).find(".answer-item.radio-item.scale-name-left").size() == 0){
          $( this ).prepend("<li class='answer-item radio-item scale-name-left'>" + scaleNameLeft + "</li>");
      }
      if($( this ).find(".answer-item.radio-item.scale-name-right").size() == 0){
        $( this ).append("<li class='answer-item radio-item scale-name-right'>" + scaleNameRight + "</li>");
      }
      if($( this ).find(".answer-item.radio-item.noanswer-item").size() > 0){
          $( this ).find(".answer-item.radio-item.scale-name-right").after($(this ).find(".answer-item.radio-item.noanswer-item"));
      }
      $( this ).find(".answer-item.radio-item.noanswer-item").wrap("<p></p>");
    });

    // Tag all elements:
    $('label').each(function(){
      $( this ).addClass("likert");
    });
    $('ul').each(function(){
      $( this ).addClass("likert");
    });
    $('li').each(function(){
      $( this ).addClass("likert");
    });

    // Move radio button element into label:
    $('input[type="radio"]').each(function(){
      $( this ).addClass("likert");
      $( this ).appendTo('label[for=' + $(this).attr("id")+ ']');
    });
});
