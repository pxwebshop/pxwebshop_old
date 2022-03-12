$(document).ready( ()=>{
    $(".c-menu__action--user").hide();
    $('.btn-user').on("click", function(){
        $(this).find("span").addClass('account__define');
        $(this).find('.c-menu__action--user').toggle();
        $(this).siblings().find(".c-menu__action--user").hide();
    });
});