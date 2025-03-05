$(document).ready(function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    $("body").attr("data-theme", savedTheme);
  } else {
    $("body").attr("data-theme", "light");
  }

  $(".switch-color").click(function () {
    const currentTheme = $("body").attr("data-theme");

    if (currentTheme === "dark") {
      $("body").attr("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      $("body").attr("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
