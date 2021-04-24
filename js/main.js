$(window).ready(function () {
  setInterval(() => {
    $("#loader").fadeOut(1000);
  }, 3000);
  console.log("loaded");
});
