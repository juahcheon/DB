$(function(){

    // list-group toggle
    var toggleBtn = $(".list_wrap li");
    var toggleText = $(".list_list").find("li");

    toggleText.hide();

    toggleBtn.on("click", function(){
        $(this).find("ul li").slideToggle();
    });







})