$(".header__title-counter").click(() => {

  if ($(".counter__view").css("display") === "none") {
      $(".counter__view").css("display", "block");
  }
  else {
      $(".counter__view").css("display", "none");
  }
});
