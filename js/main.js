$(document).ready(function () {
    "use strict";
    
    $(".header_block_mobile_other button").click(function() {
        $(".dropdown_menu").addClass("active");
    });

    $(".dropdown_menu button").click(function() {
        $(".dropdown_menu").removeClass("active");
    });

});