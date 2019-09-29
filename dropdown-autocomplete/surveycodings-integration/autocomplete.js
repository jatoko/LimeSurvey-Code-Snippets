$(document).ready(function() {
  $.getScript( "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js", function( data, textStatus, jqxhr ) {
        var placeholderText = "Type to view results.";
        var searchType = "industry"; // Must be one of ["industry", "occupation", "education"]
        var searchLanguage = "de_DE";
        var searchEmpty = "No results found."

        var input{SGQ} = $('input[id="answer{SGQ}"]');
        input{SGQ}.hide();
        $('<input class="form-control" type="text" name="_{SGQ}}" id="_answer{SGQ}">').insertBefore(input{SGQ});
        var input2{SGQ} = $('input[id="_answer{SGQ}"]');
        input2{SGQ}.attr("placeholder", placeholderText{SGQ} );

        // prepare autocomplete
        input2{SGQ}.autocomplete({
            delay: 50,
            source: function(req, resp) {
                $.ajax({
                    url: " https://api.surveycodings.org/codings/search.json",
                    data: {
                        type: searchType{SGQ} ,
                        mode: "search",
                        context: searchLanguage{SGQ} ,
                        search: req.term
                    },
                    success: function(data) {
                        if (data.codings.length == 0) {
                            data.codings = {
                                "no_res": searchEmpty{SGQ}
                            }
                        }

                        resp(
                            $.map(data.codings, function(key, val) {
                                key = key.trim();
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
            change: function(ev, ui) {
                if(ui.item == null){
                input{SGQ}.val(input2{SGQ}.val() + " []");
                } else {
                input{SGQ}.val(ui.item.value + " [" + ui.item._value + "]");
                }
            }
        }).focus(function() {
            if (this.value == "") {
                $(this).autocomplete("search");
            }
        });
    });
});