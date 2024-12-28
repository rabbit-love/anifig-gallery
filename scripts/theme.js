export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const toggleThemBtn = document.getElementById("theme-toggle");

  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  if (newTheme === "dark") {
    toggleThemBtn.textContent = "☀️";
  } else {
    toggleThemBtn.textContent = "🌙";
  }
}

export function loadTheme() {
  const toggleThemBtn = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme");
  const themeToApply = savedTheme ? savedTheme : "light"; // Por defecto, tema claro
  document.documentElement.setAttribute("data-theme", themeToApply);

  if (themeToApply === "dark") {
    toggleThemBtn.textContent = "☀️";
  } else {
    toggleThemBtn.textContent = "🌙";
  }
}
