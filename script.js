function toggleMore() {
  const more = document.getElementById("moreContent");
  more.style.display = more.style.display === "none" ? "block" : "none";
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

function changeCardContent() {
  const text = document.getElementById("dynamicText");
  text.textContent = "This content was changed using JavaScript!";
}

$(document).ready(function () {
  $("#toggleBtn").click(function () {
    $("#funBlock").slideToggle();
  });

  $("#funImage").hover(function () {
    $(this).fadeOut().fadeIn();
  });

  $("#loadQuote").click(function () {
    $("#quoteBox").load("quote.txt");
  });

  $("#nameInput").on("keyup", function () {
    let name = $(this).val();
    $("#greeting").text("Hello, " + name + "!");
  });

  $("#hoverBox").hover(
    function () {
      $(this).css("background-color", "#f0bd4e");
    },
    function () {
      $(this).css("background-color", '');
    }
  );

  $("#animateBtn").click(function () {
    $("#animateBox").slideUp().slideDown();
  });
});
