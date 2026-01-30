document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".scroll-section");
  const arrows = { up: document.querySelector(".arrow.up"), down: document.querySelector(".arrow.down") };
  let current = 0;
  let scrolling = false;

  function updateSections() {
    sections.forEach((sec, i) => {
      sec.classList.remove("prev","next","active");
      if(i < current) sec.classList.add("prev");
      else if(i > current) sec.classList.add("next");
      else sec.classList.add("active");
    });
  }

  function scrollToSection(index) {
    if(index < 0) index = 0;
    if(index >= sections.length) index = sections.length-1;
    if(scrolling || index === current) return;
    scrolling = true;
    current = index;
    updateSections();
    setTimeout(()=> scrolling = false, 800); // соответствует transition
  }

  // колесо мыши
  window.addEventListener("wheel", e => {
    if(e.deltaY > 0) scrollToSection(current+1);
    else scrollToSection(current-1);
  });

  // стрелки
  arrows.down.addEventListener("click", ()=>scrollToSection(current+1));
  arrows.up.addEventListener("click", ()=>scrollToSection(current-1));
});
