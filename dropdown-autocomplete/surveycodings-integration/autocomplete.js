var placeholderText = "Type to view results.";
var searchType = "industry"; // Must be one of ["industry", "occupation", "education"]
var searchLanguage = "de_DE";
var searchEmpty = "No results found."

$(document).on('ready pjax:scriptcomplete', function() {
    var input = $('input[id="answer{SGQ}"]');
    input.attr("placeholder", placeholderText);

    // prepare autocomplete
    input.autocomplete({
        delay: 50,
        source: function(req, resp) {
            $.ajax({
                url: " https://api.surveycodings.org/codings/search.json",
                data: {
                    type: searchType,
                    mode: "search",
                    context: searchLanguage,
                    search: req.term
                },
                success: function(data) {
                    if (data.codings.length == 0) {
                        data.codings = {
                            "no_res": searchEmpty
                        }
                    }

                    resp(
                        $.map(data.codings, function(key, val) {
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
            input.val(ui.item.value);
        }
    }).focus(function() {
        if (this.value == "") {
            $(this).autocomplete("search");
        }
    });
});