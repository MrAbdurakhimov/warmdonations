$(window).ready(function () {
  setInterval(() => {
    $("#loader").fadeOut(1000);
    $("#app").fadeIn();
  }, 3000);

  console.log("loaded");
});
