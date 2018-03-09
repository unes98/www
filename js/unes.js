$(document).ready(function(){
    $("#email1").on('change keyup paste', function() {
        console.log($(this).val());
    });
});