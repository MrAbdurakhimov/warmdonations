$(window).ready(function () {
  setInterval(() => {
    $("#loader").hide();
    $("#app").fadeIn();
  }, 3000);

  console.log("loaded");
});
