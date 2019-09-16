$(document).on('ready pjax:scriptcomplete', function() {
    var select = $('input[name="{SGQ}"]');
    select.hide();
  // insert new text input field
  if($('#input{SGQ}').size() == 0){
    $("<input id=\"input{SGQ}\" type=\"text\" class=\"form-control\"/>").insertBefore(select);
  }
  // prepare autocomplete
        $('input[id="input{SGQ}"]').autocomplete({
            source: function( req, resp ) {
              $.ajax({
                url: " https://api.surveycodings.org/codings/search.json",
                data: {
                  type: "occupation", // chose one of occupation, industry, education
                  mode: "search",
                  context: "en_GB", // language, e.g. de_DE, en_GB
                  search: req.term
                },
                success: function( data ) {
                  resp(
                    $.map(data.codings, function(key, val){
                   		return {
                          label: key,
                          value: key,
                          _value: val,
                          name: key
                        };
                    }));
                }
              });
            },
            minLength: 3, // display suggestions after N characters
            select: function(ev, ui) {
              // update selected option
                $('input[id="answer{SGQ}"]').val(ui.item._value);
            }
        }).focus(function() {
            if (this.value == "") {
                $(this).autocomplete("search");
            }
        });
});