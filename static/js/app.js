// Dark mode toggle
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("darkToggle");
  if (!btn) return;

  const stored = localStorage.getItem("theme");
  if (stored) document.documentElement.setAttribute("data-theme", stored);

  btn.addEventListener("click", () => {
    const cur = root.getAttribute("data-theme") || "light";
    const next = cur === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();