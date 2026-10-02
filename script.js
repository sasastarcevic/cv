const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll(".hero .reveal").forEach((el) => {
  el.classList.add("is-visible");
});

if (!reduceMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    if (!el.closest(".hero")) observer.observe(el);
  });
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}
