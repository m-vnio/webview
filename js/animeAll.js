function all() {
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
        // return url;
        return `https://fetch.vniox.com/get.php?url=${encodeURIComponent(url)}`;
      },
      img: (url) => {
        return url.replace("http://", "https://");
        return `https://img.vniox.com/index.php?url=${encodeURIComponent(
          url
        )}`;
      },
    },
  };

  const $element = createNodeElement(`
          <div class="div_1YmtSIZ">
          
              <header class="header_GxE7xRu">
                  <h2 style="margin: auto 0">Animes</h2>
              </header>
  
              <div class="div_xbSsVY0">
                  <div id="divGenres" class="div_A1ZaHx" data-keydown-parent>
                      <button class="focus" data-keydown="key-UOO23MW014kVXu" data-id="">Todos</button>
                  </div>
              </div>
  
              <div class="div_HR6EjtL scrollbar-y">
                  <div id="itemNull" class="element-loader" style="--color:#ffffff; --pixel:60px"></div>
                  <div id="itemFalse" class="div_4el4d3E" style="display: none;"></div>
                  <div id="itemTrue" class="div_4el4d3E" style="display: none;" data-keydown-parent></div>
              </div>
  
          </div>    
      `);

  const $elements = createObjectElement(
    $element.querySelectorAll("[id]"),
    "id",
    true
  );

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
    const fragment = document.createDocumentFragment();
    fragment.append(
      ...datas.map((data) => {
        const template = document.createElement("div");

        template.innerHTML = `<a href="./anime.html?id=${data.href
          .split("/")
          .pop()}" class="a_YOLFLmd" data-keydown="key-qCVDDxQ4q1Wnr5o">
          <picture class="picture_GJjPp2J"><img data-src="${FUNCTIONS_APP.img(
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
  });

  useThis.functions.dataLoad = () => {
    /* */
    const gender = $elements.divGenres
      .querySelector("button.focus")
      .getAttribute("data-id");

    // const q = encodeURIComponent(search.get("search") || "");

    // console.log(
    //   `https://www3.animeflv.net/browse?page=${
    //     Math.floor($elements.itemTrue.children.length / 24) + 1
    //   }${gender ? `&genre[]=${gender.split(" ").join("-").toLowerCase()}` : ""}`
    // );

    fetchWebElement(
      useThis.functions.server(
        `https://www3.animeflv.net/browse?page=${
          Math.floor($elements.itemTrue.children.length / 24) + 1
        }${
          gender ? `&genre[]=${gender.split(" ").join("-").toLowerCase()}` : ""
        }`
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

      useThis.reactivity.load.value = true;
      useThis.reactivity.datas.value = array;
      useThis.reactivity.load.value = false;

      Array.from(element.querySelectorAll("img")).forEach((img) =>
        img.removeAttribute("src")
      );
    });
    /* */

    // const length = $elements.itemTrue.children.length;

    // const encodeQueryString = encodeQueryObject({
    //   route: "/serie",
    //   //   search: $elements.inputSearch.value.trim(),
    //   //   category: $elements.divGenres
    //   //     .querySelector("button.focus")
    //   //     .getAttribute("data-id"),
    //   start: length,
    //   end: 50,
    // });

    // fetch(`https://api.vniox.com/iptv/api.php?${encodeQueryString}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     useThis.value.datas = useThis.value.datas.concat(data);
    //     useThis.reactivity.datas.value = data;
    //     useThis.reactivity.load.value = false;
    //     // $elements.loader.style.display = "none";
    //     // $elements.items.style.display = "";
    //     // functions.peliculas(json);
    //   });
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

  addEventListener("key-EeqSpNOJkulRszU", ({ detail }) => {
    const e = detail.e;

    const keydowns = Array.from(
      document.querySelectorAll(`[data-keydown='${keys.array[keys.index]}']`)
    );

    const index = keydowns.findIndex((keydown) => keydown === focus.element);

    if (e.key == "ArrowUp") {
      if (keydowns[index - 1]) {
        keydowns[index - 1].focus();
      }
    }

    if (e.key == "ArrowDown") {
      if (keydowns[index + 1]) {
        keydowns[index + 1].focus();
      }
    }

    if (e.key == "ArrowRight") {
      if (keys.array[keys.index + 1]) {
        const active =
          document.querySelector(
            `[data-keydown='${keys.array[keys.index + 1]}'].active`
          ) ||
          document.querySelector(
            `[data-keydown='${keys.array[keys.index + 1]}']`
          );

        if (active) active.focus();
      }
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
      } else {
        const active =
          document.querySelector(`[data-keydown='${keys.array[0]}'].active`) ||
          document.querySelector(`[data-keydown='${keys.array[0]}']`);

        if (active) active.focus();
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
      } else {
        const active =
          document.querySelector(`[data-keydown='${keys.array[0]}'].active`) ||
          document.querySelector(`[data-keydown='${keys.array[0]}']`);

        if (active) active.focus();
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

  fetch("./json/categoria_anime.json")
    .then((res) => res.json())
    .then((json) => {
      const fragment = document.createDocumentFragment();
      fragment.append(
        ...json.map((data) => {
          return createNodeElement(`
        <button data-keydown="key-UOO23MW014kVXu" data-id="${data}">${data}</button>
        `);
        })
      );

      $elements.divGenres.append(fragment);
    });

  useThis.functions.dataLoad();
  return $element;
}
