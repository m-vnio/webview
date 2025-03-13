function all() {
  const useThis = {
    reactivity: {
      datas: defineVal([]),
      load: defineVal(true),
    },
    value: {
      datas: [],
    },
    functions: {},
  };

  const $element = createNodeElement(`
          <div class="div_1YmtSIZ">
          
              <header class="header_GxE7xRu">
                  <h2 style="margin: auto 0">Lives</h2>
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

        template.innerHTML = `<button class="a_YOLFLmd" data-keydown="key-qCVDDxQ4q1Wnr5o" data-data="${encodeInput(
          JSON.stringify(data)
        )}">
          <picture class="picture_GJjPp2J" style="aspect-ratio:1/1;"><img data-src="${FUNCTIONS_APP.img(
            data.stream_icon
          )}"></picture>
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
  });

  useThis.functions.dataLoad = () => {
    const length = $elements.itemTrue.children.length;

    const encodeQueryString = encodeQueryObject({
      route: "/live",
      //   search: $elements.inputSearch.value.trim(),
      category: $elements.divGenres
        .querySelector("button.focus")
        .getAttribute("data-id"),
      start: length,
      end: 50,
    });

    console.log(encodeQueryString);

    fetch(`https://api.vniox.com/iptv/api.php?${encodeQueryString}`)
      .then((res) => res.json())
      .then((data) => {
        useThis.value.datas = useThis.value.datas.concat(data);
        useThis.reactivity.datas.value = data;
        useThis.reactivity.load.value = false;
        // $elements.loader.style.display = "none";
        // $elements.items.style.display = "";
        // functions.peliculas(json);
      });
  };

  $elements.divGenres.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    console.log(button);
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
        `${CREDENTIALS_USER.server}/live/${CREDENTIALS_USER.username}/${CREDENTIALS_USER.password}/${data.stream_id}.ts`,
        "video/*"
      );
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

  fetch("https://api.vniox.com/iptv/api.php?route=category-live")
    .then((res) => res.json())
    .then((json) => {
      const fragment = document.createDocumentFragment();
      fragment.append(
        ...json.map((data) => {
          return createNodeElement(`
        <button data-keydown="key-UOO23MW014kVXu" data-id="${data.category_id}">${data.category_name}</button>
        `);
        })
      );

      $elements.divGenres.append(fragment);
    });

  useThis.functions.dataLoad();
  return $element;
}
