function goTo(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
    page.setAttribute("aria-hidden", "true");
  });

  const target = document.getElementById(pageId);

  if (target) {
    target.classList.add("active");
    target.setAttribute("aria-hidden", "false");
    target.focus();

    // Screen reader announcement
    const announcer = document.getElementById("sr-announcer");
    if (announcer) {
      announcer.textContent = target.querySelector("h2").textContent + " page loaded";
    }
  }
}
