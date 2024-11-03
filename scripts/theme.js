export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

export function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const themeToApply = savedTheme ? savedTheme : "light"; // Por defecto, tema claro
  document.documentElement.setAttribute("data-theme", themeToApply);
}
