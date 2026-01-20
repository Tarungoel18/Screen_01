$(document).ready(function () {
  $(".btn").click(function () {
    $(".modal").fadeIn();
    $(".modal").css("display", "flex");
    $(".modal-backdrop").fadeIn();
  });
  $(".toggle-city-show").click(function () {
    $(this).css("display", "none");
    $(".other-city-container").css("display", "flex");
    $(".toggle-city-hide").css("display", "flex");
  });
  $(".toggle-city-hide").click(function () {
    $(this).css("display", "none");
    $(".other-city-container").css("display", "none");
    $(".toggle-city-show").css("display", "flex");
  });
  $(".close-icon").click(function () {
    $(".modal").css("display", "none");
    $(".modal-backdrop").fadeOut();
  });
});
