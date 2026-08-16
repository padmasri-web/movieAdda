document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.querySelector("#themeBtn");
  const savedTheme = localStorage.getItem("movieadda-theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
    document.documentElement.setAttribute("data-bs-theme", "light");
    updateThemeBtn(true);
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light");
      document.documentElement.setAttribute("data-bs-theme", isLight ? "light" : "dark");
      localStorage.setItem("movieadda-theme", isLight ? "light" : "dark");
      updateThemeBtn(isLight);
    });
  }

  function updateThemeBtn(isLight) {
    if (!themeBtn) return;
    themeBtn.innerHTML = isLight
      ? `<i class="fa-solid fa-sun text-warning"></i> <span>Light</span>`
      : `<i class="fa-solid fa-moon"></i> <span>Dark</span>`;
  }
});