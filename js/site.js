document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector(".nav-wrapper");

  if (!nav) {
    return;
  }

  var body = document.body;
  var desktopHoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  var mobileWidthQuery = window.matchMedia("(max-width: 991px)");

  enhanceStickyNav();
  setupDropdowns();
  setupMobileMenu();

  function enhanceStickyNav() {
    function syncNavState() {
      nav.classList.toggle("nav-scrolled", window.scrollY > 12);
    }

    syncNavState();
    window.addEventListener("scroll", syncNavState, { passive: true });
  }

  function setupDropdowns() {
    var dropdowns = Array.from(nav.querySelectorAll(".nav-dropdown"));

    if (!dropdowns.length) {
      return;
    }

    function setOpen(dropdown, isOpen) {
      var trigger = dropdown.querySelector(".nav-dropdown-trigger");

      dropdown.classList.toggle("is-open", isOpen);

      if (trigger) {
        trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
    }

    function closeAll(except) {
      dropdowns.forEach(function (dropdown) {
        if (dropdown !== except) {
          setOpen(dropdown, false);
        }
      });
    }

    dropdowns.forEach(function (dropdown) {
      var trigger = dropdown.querySelector(".nav-dropdown-trigger");

      if (!trigger) {
        return;
      }

      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");

      dropdown.addEventListener("mouseenter", function () {
        if (!desktopHoverQuery.matches || mobileWidthQuery.matches) {
          return;
        }

        closeAll(dropdown);
        setOpen(dropdown, true);
      });

      dropdown.addEventListener("mouseleave", function () {
        if (!desktopHoverQuery.matches || mobileWidthQuery.matches) {
          return;
        }

        setOpen(dropdown, false);
      });

      trigger.addEventListener("click", function (event) {
        if (mobileWidthQuery.matches) {
          return;
        }

        if (desktopHoverQuery.matches) {
          return;
        }

        event.preventDefault();

        var shouldOpen = !dropdown.classList.contains("is-open");
        closeAll(dropdown);
        setOpen(dropdown, shouldOpen);
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".nav-dropdown")) {
        closeAll();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeAll();
      }
    });
  }

  function setupMobileMenu() {
    var container = nav.querySelector(".container-max") || nav;
    var toggle = document.createElement("button");
    var mobileMenu = buildMobileMenu();

    toggle.type = "button";
    toggle.className = "nav-toggle";
    toggle.setAttribute("aria-label", "Toggle navigation");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<span class="nav-toggle-lines"></span>';

    container.appendChild(toggle);
    nav.insertAdjacentElement("afterend", mobileMenu);

    function setMenu(open) {
      body.classList.toggle("menu-open", open);
      nav.classList.toggle("nav-open", open);
      mobileMenu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }

    toggle.addEventListener("click", function () {
      setMenu(!body.classList.contains("menu-open"));
    });

    mobileMenu.addEventListener("click", function (event) {
      if (event.target === mobileMenu) {
        setMenu(false);
      }
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    window.addEventListener("resize", function () {
      if (!mobileWidthQuery.matches) {
        setMenu(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenu(false);
      }
    });
  }

  function buildMobileMenu() {
    var menu = document.createElement("div");
    var panel = document.createElement("div");
    var primary = document.createElement("div");
    var primaryLabel = document.createElement("div");

    menu.className = "mobile-menu";
    panel.className = "mobile-menu-panel";
    primary.className = "mobile-menu-primary";
    primaryLabel.className = "mobile-menu-label";
    primaryLabel.textContent = "Pages";

    menu.appendChild(panel);
    panel.appendChild(primary);
    primary.appendChild(primaryLabel);

    Array.from(nav.querySelectorAll(".nav-link:not(.nav-item-hidden)")).forEach(function (link) {
      primary.appendChild(createMenuLink(link, "mobile-menu-link"));
    });

    Array.from(nav.querySelectorAll(".nav-dropdown")).forEach(function (dropdown) {
      var trigger = dropdown.querySelector(".nav-dropdown-trigger");
      var items = Array.from(dropdown.querySelectorAll(".nav-dropdown-item"));

      if (!trigger || !items.length) {
        return;
      }

      var group = document.createElement("div");
      var label = document.createElement("div");

      group.className = "mobile-menu-group";
      label.className = "mobile-menu-label";
      label.textContent = trigger.textContent.replace("▾", "").trim();

      group.appendChild(label);
      items.forEach(function (item) {
        group.appendChild(createMenuLink(item, "mobile-menu-sublink"));
      });

      panel.appendChild(group);
    });

    var cta = nav.querySelector(".cta-button");

    if (cta) {
      panel.appendChild(createMenuLink(cta, "cta-button mobile-menu-cta"));
    }

    return menu;
  }

  function createMenuLink(source, className) {
    var link = document.createElement("a");

    link.className = className;
    link.href = source.getAttribute("href") || "#";
    link.textContent = source.textContent.trim();

    if (source.getAttribute("aria-current") === "page") {
      link.setAttribute("aria-current", "page");
    }

    return link;
  }
});
