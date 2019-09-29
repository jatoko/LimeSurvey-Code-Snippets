var scaleNameLeft = "left side text";
var scaleNameRight = "right side text";
$(document).ready(function() {
    $('.ls-answers.answers-list.radio-list.list-unstyled.form-inline').each(function() {
        if ($(this).find(".answer-item.radio-item.scale-name-left").size() == 0) {
            $(this).prepend("<li class='answer-item radio-item scale-name-left'>" + scaleNameLeft + "</li>");
        }
        if ($(this).find(".answer-item.radio-item.scale-name-right").size() == 0) {
            $(this).append("<li class='answer-item radio-item scale-name-right' style='padding-left: 0px; padding-right: 30px;'>" + scaleNameRight + "</li>");
        }
        if ($(this).find(".answer-item.radio-item.noanswer-item").size() > 0) {
            $(this).find(".answer-item.radio-item.scale-name-right").after($(this).find(".answer-item.radio-item.noanswer-item"));
        }
    });
});