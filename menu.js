$(document).ready(function() {
  $(".next").on("click", function() {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    }
  });
  $(".prev").on("click", function() {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    }
  });
});

$("mobile-menu").click(function() {
  $("nav").hide();
});

$(".mobile-menu").click(function(e) {
  $(this)
    .siblings("nav")
    .slideToggle("slow");
});

$(".hover").click(function() {
  $(this)
    .find(".sub-menu")
    .slideToggle();
});

$(".key-features").click(function() {
  $(this)
    .find("li")
    .slideToggle();
});
