//Loader Animation
/* $(window).on("load", function() {
   let loading = document.querySelector(".loading");
  let letters = loading.textContent.split("");
  loading.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i / 5}s`;
    loading.append(span);
  });

  $(".loading")
    .fadeIn(3000)
    .delay(3500)
    .fadeOut("slow");
}); */

//init WOW
new WOW().init();

//Timeout

setTimeout(function() {
  document.getElementById("hi-tech").style.display = "block";
  console.log("wilton hi-tech park");
}, 5000);

/* setTimeout(function() {
  document.getElementById("visit-btn").style.opacity = "1";
  console.log("Visit Website");
}, 7000);
 */
$("#visit-btn")
  .fadeIn(9000)
  .delay(25000)
  .fadeIn("slow");
