function openTab(tabIndex) {
  $(".tab-pane").removeClass("show active");
  $("#tab" + (tabIndex + 1)).addClass("show active");
}
