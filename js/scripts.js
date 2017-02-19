var link = document.querySelector(".feedback_button");

var popup = document.querySelector(".modal_overlay");
var popup = document.querySelector(".feedback_modal");

var close = popup.querySelector(".feedback_modal_close");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal_overlay_show");
    popup.classList.add("feedback_modal_show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal_overlay_show");
    popup.classList.remove("feedback_modal_show");

});
