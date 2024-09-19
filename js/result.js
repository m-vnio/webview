const keys = {
  array: ["key-UOO23MW014kVXu", "key-qCVDDxQ4q1Wnr5o"],
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

  const $elements = createObjectElement(
    document.querySelectorAll("[id]"),
    "id"
  );

  const useThis = {
    reactivity: {
      datas: defineVal([]),
      load: defineVal(true),
    },
    value: {
      datas: [],
    },
    functions: {
      server: (url) => {
        return `https://api-fetch.victor01sp.com/get.php?url=${encodeURIComponent(
          url
        )}`;
      },
      img: (url) => {
        return `https://img.victor01sp.com/index.php?url=${encodeURIComponent(
          url
        )}`;
      },
    },
  };

  const intersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          useThis.functions.dataLoad();
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0 }
  );

  useThis.reactivity.load.observe((load) => {
    elementDisplay($elements.itemNull, load);
    elementDisplay($elements.itemFalse, !load && !useThis.value.datas.length);
    elementDisplay($elements.itemTrue, !load && useThis.value.datas.length);
  });

  useThis.reactivity.datas.observe((datas) => {
    if (datas.length) {
      if (
        $elements.divGenres
          .querySelector("button.focus")
          .getAttribute("data-id") == "anime"
      ) {
        useThis.functions.dateRenderAnime(datas);
      }

      if (
        $elements.divGenres
          .querySelector("button.focus")
          .getAttribute("data-id") == "pelicula"
      ) {
        useThis.functions.dateRenderPelicula(datas);
      }

      if (
        $elements.divGenres
          .querySelector("button.focus")
          .getAttribute("data-id") == "serie"
      ) {
        useThis.functions.dateRenderSerie(datas);
      }

      if (
        $elements.divGenres
          .querySelector("button.focus")
          .getAttribute("data-id") == "live"
      ) {
        useThis.functions.dateRenderLive(datas);
      }
    }
  });

  useThis.functions.dateRenderAnime = (datas) => {
    const fragment = document.createDocumentFragment();
    fragment.append(
      ...datas.map((data) => {
        const template = document.createElement("div");

        template.innerHTML = `<a href="./anime.html?id=${data.href
          .split("/")
          .pop()}" class="a_YOLFLmd" data-keydown="key-qCVDDxQ4q1Wnr5o">
          <picture class="picture_GJjPp2J"><img data-src="${useThis.functions.img(
            data.poster
          )}"></picture>
          <span>${data.title}</span>
        </a>`;

        IntersectionObserverImage.load(template.querySelector("img"), true);

        return template.firstElementChild;
      })
    );

    $elements.itemTrue.append(fragment);

    if (datas.length == 24) {
      intersectionObserver.observe(
        $elements.itemTrue.children[
          Math.floor($elements.itemTrue.children.length / 2)
        ]
      );
    }
  };

  useThis.functions.dateRenderPelicula = (datas) => {
    const fragment = document.createDocumentFragment();
    fragment.append(
      ...datas.map((data) => {
        const template = document.createElement("div");

        template.innerHTML = `<a href="./pelicula.html?id=${
          data.stream_id
        }" class="a_YOLFLmd" data-keydown="key-qCVDDxQ4q1Wnr5o">
          <picture class="picture_GJjPp2J"><img data-src="${`https://img.victor01sp.com/index.php?url=${encodeURIComponent(
            data.stream_icon
          )}`}"></picture>
          <span>${data.name}</span>
        </a>`;

        IntersectionObserverImage.load(template.querySelector("img"), true);

        return template.firstElementChild;
      })
    );

    $elements.itemTrue.append(fragment);

    if (datas.length == 50) {
      intersectionObserver.observe(
        $elements.itemTrue.children[
          Math.floor($elements.itemTrue.children.length / 2)
        ]
      );
    }
  };

  useThis.functions.dateRenderSerie = (datas) => {
    const fragment = document.createDocumentFragment();
    fragment.append(
      ...datas.map((data) => {
        const template = document.createElement("div");

        template.innerHTML = `<a href="./serie.html?id=${
          data.series_id
        }" class="a_YOLFLmd" data-keydown="key-qCVDDxQ4q1Wnr5o">
          <picture class="picture_GJjPp2J"><img data-src="${`https://img.victor01sp.com/index.php?url=${encodeURIComponent(
            data.cover
          )}`}"></picture>
          <span>${data.name}</span>
        </a>`;

        IntersectionObserverImage.load(template.querySelector("img"), true);

        return template.firstElementChild;
      })
    );

    $elements.itemTrue.append(fragment);

    if (datas.length == 50) {
      intersectionObserver.observe(
        $elements.itemTrue.children[
          Math.floor($elements.itemTrue.children.length / 2)
        ]
      );
    }
  };

  useThis.functions.dateRenderLive = (datas) => {
    const fragment = document.createDocumentFragment();
    fragment.append(
      ...datas.map((data) => {
        const template = document.createElement("div");

        template.innerHTML = `<button class="a_YOLFLmd" data-keydown="key-qCVDDxQ4q1Wnr5o" data-data="${encodeInput(
          JSON.stringify(data)
        )}">
          <picture class="picture_GJjPp2J" style="aspect-ratio:1/1;"><img data-src="${`https://img.victor01sp.com/index.php?url=${encodeURIComponent(
            data.stream_icon
          )}`}"></picture>
          <span>${data.name}</span>
        </button>`;

        IntersectionObserverImage.load(template.querySelector("img"), true);

        return template.firstElementChild;
      })
    );

    $elements.itemTrue.append(fragment);

    if (datas.length == 50) {
      intersectionObserver.observe(
        $elements.itemTrue.children[
          Math.floor($elements.itemTrue.children.length / 2)
        ]
      );
    }
  };

  useThis.functions.dataLoadAnime = () => {
    const encodeQueryString = encodeQueryObject({
      q: searchParams.get("search"),
      page: Math.floor($elements.itemTrue.children.length / 24) + 1,
    });

    fetchWebElement(
      useThis.functions.server(
        `https://www3.animeflv.net/browse?${encodeQueryString}`
      )
    ).then((element) => {
      const array = Array.from(
        element.querySelector(".ListAnimes.AX.Rows.A03.C02.D02").children
      ).map((li) => {
        return {
          href: li.querySelector("a").getAttribute("href"),
          title: li.querySelector(".Title").textContent,
          poster: li.querySelector("img").src,
          type: li.querySelector(".Type").textContent,
        };
      });

      useThis.value.datas = useThis.value.datas.concat(array);
      useThis.reactivity.datas.value = array;
      useThis.reactivity.load.value = false;
      Array.from(element.querySelectorAll("img")).forEach((img) =>
        img.removeAttribute("src")
      );
    });
  };

  useThis.functions.dataLoadPelicula = () => {
    const length = $elements.itemTrue.children.length;

    const encodeQueryString = encodeQueryObject({
      route: "/pelicula",
      search: searchParams.get("search"),
      start: length,
      end: 50,
    });

    fetch(`https://api.victor01sp.com/iptv/api.php?${encodeQueryString}`)
      .then((res) => res.json())
      .then((data) => {
        useThis.value.datas = useThis.value.datas.concat(data);
        useThis.reactivity.datas.value = data;
        useThis.reactivity.load.value = false;
      });
  };

  useThis.functions.dataLoadSerie = () => {
    const length = $elements.itemTrue.children.length;

    const encodeQueryString = encodeQueryObject({
      route: "/serie",
      search: searchParams.get("search"),
      start: length,
      end: 50,
    });

    fetch(`https://api.victor01sp.com/iptv/api.php?${encodeQueryString}`)
      .then((res) => res.json())
      .then((data) => {
        useThis.value.datas = useThis.value.datas.concat(data);
        useThis.reactivity.datas.value = data;
        useThis.reactivity.load.value = false;
      });
  };

  useThis.functions.dataLoadLive = () => {
    const length = $elements.itemTrue.children.length;

    const encodeQueryString = encodeQueryObject({
      route: "/live",
      search: searchParams.get("search"),
      start: length,
      end: 50,
    });

    fetch(`https://api.victor01sp.com/iptv/api.php?${encodeQueryString}`)
      .then((res) => res.json())
      .then((data) => {
        useThis.value.datas = useThis.value.datas.concat(data);
        useThis.reactivity.datas.value = data;
        useThis.reactivity.load.value = false;
      });
  };

  useThis.functions.dataLoad = () => {
    if (
      $elements.divGenres
        .querySelector("button.focus")
        .getAttribute("data-id") == "anime"
    ) {
      useThis.functions.dataLoadAnime();
    }

    if (
      $elements.divGenres
        .querySelector("button.focus")
        .getAttribute("data-id") == "pelicula"
    ) {
      useThis.functions.dataLoadPelicula();
    }

    if (
      $elements.divGenres
        .querySelector("button.focus")
        .getAttribute("data-id") == "serie"
    ) {
      useThis.functions.dataLoadSerie();
    }

    if (
      $elements.divGenres
        .querySelector("button.focus")
        .getAttribute("data-id") == "live"
    ) {
      useThis.functions.dataLoadLive();
    }
  };

  $elements.divGenres.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (button) {
      Array.from($elements.divGenres.querySelectorAll("button")).forEach(
        (button) => {
          button.classList.remove("focus");
        }
      );
      button.classList.add("focus");

      $elements.itemTrue.innerHTML = "";
      useThis.value.datas = [];
      useThis.reactivity.load.value = true;
      useThis.functions.dataLoad();
    }
  });

  $elements.itemTrue.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (button) {
      const data = JSON.parse(button.getAttribute("data-data"));
      Android.openWithDefault(
        `http://tvlatino.club:2082/live/MLKP90SAZs/4Z3KWMe7GnW2/${data.stream_id}.ts`,
        "video/*"
      );
    }
  });

  addEventListener("key-UOO23MW014kVXu", ({ detail }) => {
    const e = detail.e;

    const keydowns = Array.from(
      document.querySelectorAll(`[data-keydown='${keys.array[keys.index]}']`)
    );

    const index = keydowns.findIndex((keydown) => keydown === focus.element);

    if (e.key == "ArrowRight") {
      if (keydowns[index + 1]) {
        keydowns.forEach((keydown) => keydown.classList.remove("focus"));
        keydowns[index + 1].classList.add("focus");
        keydowns[index + 1].focus();
      }
    }

    if (e.key == "ArrowLeft") {
      if (keydowns[index - 1]) {
        keydowns.forEach((keydown) => keydown.classList.remove("focus"));
        keydowns[index - 1].classList.add("focus");
        keydowns[index - 1].focus();
      }
    }

    if (e.key == "ArrowDown") {
      const active =
        document.querySelector(
          `[data-keydown='${keys.array[keys.index + 1]}'].active`
        ) ||
        document.querySelector(
          `[data-keydown='${keys.array[keys.index + 1]}']`
        );

      if (active) active.focus();
    }
  });

  addEventListener("key-qCVDDxQ4q1Wnr5o", ({ detail }) => {
    const e = detail.e;

    const num = getColumnCount(focus.parent, 10, 10);

    console.log(focus.parent);

    const keydowns = Array.from(
      document.querySelectorAll(`[data-keydown='${keys.array[keys.index]}']`)
    );

    const index = keydowns.findIndex((keydown) => keydown === focus.element);

    if (e.key == "ArrowRight") {
      if (keydowns[index + 1]) {
        keydowns[index + 1].focus();
      }
    }

    if (e.key == "ArrowLeft") {
      if (keydowns[index - 1] && index % num != 0) {
        keydowns[index - 1].focus();
      }
    }

    if (e.key == "ArrowDown") {
      if (keydowns[index + num]) {
        keydowns[index + num].focus();
      }
    }

    if (e.key == "ArrowUp") {
      if (keydowns[index - num]) {
        keydowns[index - num].focus();
      } else {
        if (keys.array[keys.index - 1]) {
          const active =
            document.querySelector(
              `[data-keydown='${keys.array[keys.index - 1]}'].active`
            ) ||
            document.querySelector(
              `[data-keydown='${keys.array[keys.index - 1]}']`
            );

          if (active) active.focus();
        }
      }
    }
  });

  $elements.search.textContent = searchParams.get("search");
  (
    $elements.divGenres.querySelector(
      `button[data-id="${searchParams.get("from")}"]`
    ) || document.createElement("div")
  ).classList.add("focus");

  (
    document.querySelector("[data-keydown].focus") ||
    document.querySelector("[data-keydown]")
  ).focus();

  useThis.functions.dataLoad();
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
