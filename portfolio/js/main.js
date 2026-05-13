(function () {
  var nav = document.querySelector("[data-nav-list]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var links = nav ? nav.querySelectorAll("a[href^='#']") : [];

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    links.forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var sections = document.querySelectorAll("main section[id]");
  if (!sections.length || !links.length) return;

  function setCurrent() {
    var id = "";
    var scrollY = window.scrollY || window.pageYOffset;
    sections.forEach(function (sec) {
      var top = sec.offsetTop - 120;
      if (scrollY >= top) id = sec.id;
    });
    links.forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === "#" + id) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  window.addEventListener("scroll", setCurrent, { passive: true });
  setCurrent();
})();
