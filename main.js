$(document).ready(function(){
	$(".nav-tabs > li.active").removeClass("active");
	 //hdhh
	 $(".nav-tabs").on("click", "a", function (e) {
        e.preventDefault();
        if (!$(this).hasClass('add-contact')) {
            $(this).tab('show');
        }
    })
    .on("click", "span", function () {
        var anchor = $(this).siblings('a');
        $(anchor.attr('href')).remove();
        $(this).parent().remove();
        $(".nav-tabs li").children('a').first().click();
    });

$('.add-contact').click(function (e) {
    e.preventDefault();
    var idi = $(".nav-tabs").children().length; 
    var tabId = 'contact_' + idi;
    $(this).closest('li').before('<li class="newtab"><a href="#contact_' + idi + '">SECTION ' + idi + '</a> <span><i class="fa fa-close"></i></span></li>');
    //$('.tab-content').append('<div class="tab-pane" id="' + tabId + '">Contact Form: New Contact ' + id + '</div>');
    $('.tab-content').append('<div class="tab-pane" id="' + tabId + '"><form><textarea name="editor' + idi +'" id="editor'+ idi + '" rows="10" cols="80"></textarea></form></div>');
   $('.nav-tabs li:nth-child(' + idi + ') a').click();
   CKEDITOR.replace('editor' + idi);
});


});

