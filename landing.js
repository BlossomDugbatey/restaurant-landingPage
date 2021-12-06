$(window).scroll(function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("sticky")
    } else {
        $("nav").removeClass("sticky")
    }
});

// $(window).load(function() {
//     $(".btn-nav").on("click tap", function() {
//       $(".nav-items").toggleClass("showNav hideNav").removeClass("hidden");
//       $(this).toggleClass("animated");
//     });
//   });

document.getElementById("menu").addEventListener('click', menuDisplay)
function menuDisplay(){
    var menuList = document.getElementById("menu-image")
    if (menuList.style.display === "none"){
        menuList.style.display = "block"
    }else {
        menuList.style.display = "none"
    }
    console.log(menuDisplay)
};

