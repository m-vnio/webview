const keys = {
  array: [],
  index: 0,
};

const focus = {
  element: null,
  parent: null,
  index: 0,
};

function elementDisplay(element, status = true) {
  element.style.display = Boolean(status) ? "" : "none";
  return element;
}

function getColumnCount(container, gap = 0, padding = 0) {
  const total = container.offsetWidth / container.children[0].offsetWidth;
  const widthGapPadding = (total - 1) * gap + padding * 2;

  return Math.floor(
    total - Math.floor(widthGapPadding / container.children[0].offsetWidth)
  );
}

addEventListener("DOMContentLoaded", () => {
  const searchParams = new URLSearchParams(location.search);

  keys.array = searchParams.get("id")
    ? [
        "key-RfwNgjwVeLgKee7",
        "key-qCVDDxQ4q1Wnr5o",
        "key-7HbIa9IIQgtEjQM",
        "key-rQ7yhRmYoRqmeZV",
      ]
    : [
        "key-EeqSpNOJkulRszU",
        // "key-RfwNgjwVeLgKee7",
        "key-UOO23MW014kVXu",
        "key-qCVDDxQ4q1Wnr5o",
      ];

  document
    .getElementById("app")
    .append(
      searchParams.get("id") ? "" : Layout.menu(),
      searchParams.get("id") ? one(searchParams.get("id")) : all()
    );

  const focus =
    document.querySelector("[data-keydown].focus") ||
    document.querySelector("[data-keydown]");

  console.log(focus);
  focus.focus();
});

addEventListener("focusin", (e) => {
  if (e.target.getAttribute("data-keydown") != null) {
    focus.element = e.target;
    focus.parent = focus.element.closest("[data-keydown-parent]") || document;

    keys.index = keys.array.findIndex(
      (string) => string == e.target.getAttribute("data-keydown")
    );

    const keydowns = Array.from(
      document.querySelectorAll(`[data-keydown='${keys.array[keys.index]}']`)
    );

    keydowns.forEach((keydown) => {
      if (keydown === focus.element) keydown.classList.add("active");
      else keydown.classList.remove("active");
    });

    focus.element.scrollIntoView({
      behavior: "smooth", // Opcional: para hacer el desplazamiento suave
      block: "center", // Centra el elemento verticalmente
      inline: "center", // Centra el elemento horizontalmente (si aplica)
    });
  }
});

addEventListener("keydown", (e) => {
  // e.preventDefault();

  if (e.key != "Enter") {
    e.preventDefault();
  }

  if (document.activeElement.getAttribute("data-keydown") == null) {
    focus.element.focus();
    return;
  }

  if (["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].includes(e.key)) {
    dispatchEvent(new CustomEvent(keys.array[keys.index], { detail: { e } }));
  }
});

const eventKeydownKeyup = () => {
  addEventListener(
    "keydown",
    (e) => {
      e.preventDefault();

      if (e.key != "Enter") return eventKeydownKeyup();

      let second = false;

      const time = setTimeout(() => {
        second = true;
        console.log("segundo evento");
      }, 400);

      addEventListener(
        "keyup",
        (e) => {
          clearTimeout(time);
          eventKeydownKeyup();
          if (!second) {
            console.log("hacer primer evento");
          }
        },
        { once: true }
      );
    },
    { once: true }
  );
};

// eventKeydownKeyup();
