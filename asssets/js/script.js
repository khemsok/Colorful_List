var input = null;
var convert = null;
var x = 0;

$(".plus").on("click",function(e){
    $("input").fadeToggle(500);
});

$(".delete").on("click", function(){
    $("ul").fadeOut(function(){
        $(this).empty();
    });
});


$("ul").on("click", "li", function(){
    $(this).toggleClass("crossOff");
});

$("ul").on("click", ".trash", function (e) {
    e.stopPropagation();
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
});


$("#input").keypress(function (e) {
    if (e.which == 13 && $("#input").val().length > 0) {
        $("ul").css("display", "block");
        input = $("#input").val();
        console.log(input);
        x++;
        convert = "<li class = \"fix1\">" + "<span class = \"trash\"><i class=\"fas fa-trash-alt\"></i> </span>" + input + "</li>";
        $(convert).appendTo("ul");
        $("#input").val("");


    }

 



});

