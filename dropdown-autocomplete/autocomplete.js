$(document).on('ready pjax:scriptcomplete', function () {
    var select = $('select[name="{SGQ}"]');
    select.hide();
    // exract options:
    var options = select.find('option').map(function () {
        var label = $('option[value="' + $(this).val() + '"]').text().trim();
        var value = $(this).val();
        return { 'label': label, '_value': value };
    }).get();
    // insert new text input field
    $("<input id=\"input{SGQ}\" type=\"text\" class=\"form-control\"/>").insertBefore(select);
    // prepare autocomplete
    $.when.apply(null, options).done(function () {
        $('input[id="input{SGQ}"]').autocomplete({
            source: options, // add extracted options
            minLength: 0, // display suggestions after N characters
            select: function (ev, ui) {
                // update selected option
                $('select[name="{SGQ}"] option[value="' + ui.item._value + '"]').attr('selected', true);
                // update value to selected option
                $('input[id="java{SGQ}"]').val(ui.item._value);
            }
        }).focus(function () {
            if (this.value == "") {
                $(this).autocomplete("search");
            }
        });
    });
});

