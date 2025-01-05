function one(id) {
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
                <div class="div_1YmtSIZ div_lMqzJhY">
        
                    <picture class="picture_HsVx30S">
                        <img style="display: none;" id="backdrop" src="" alt="">
                    </picture>

                    <header class="header_zTAx4zz">
                      <div class="div_cr8aRBY">
                        
                        <button class="button_mzTN7sc" data-keydown="key-RfwNgjwVeLgKee7" onclick="history.back()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-left"><path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"></path></svg></button>
                        <button id="buttonPlay" class="button_mzTN7sc" data-keydown="key-RfwNgjwVeLgKee7"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-play"><path d="M20.494,7.968l-9.54-7A5,5,0,0,0,3,5V19a5,5,0,0,0,7.957,4.031l9.54-7a5,5,0,0,0,0-8.064Zm-1.184,6.45-9.54,7A3,3,0,0,1,5,19V5A2.948,2.948,0,0,1,6.641,2.328,3.018,3.018,0,0,1,8.006,2a2.97,2.97,0,0,1,1.764.589l9.54,7a3,3,0,0,1,0,4.836Z"></path></svg></button>
                    
                      </div>
                    </header>

                    <div class="div_HR6EjtL">
                        <div id="itemNull" class="element-loader" style="--color:#ffffff; --pixel:60px"></div>
                        <div id="itemFalse" class="div_4el4d3E" style="display: none;"></div>
                        <div id="itemTrue" class="div_33qcuHa" style="display: none;" data-keydown-parent>
                          <div class="div_G4EThnx">
                              <picture class="picture_rC8z3Zj">
                                  <img id="image" src="" alt="">
                              </picture>
                              <div>
                                  <h3 id="title"></h3>
                                  <p id="sinopsis"></p>
                              </div>
                          </div>
                        </div>
                    </div>
        
                </div>    
            `);

  const $elements = createObjectElement(
    $element.querySelectorAll("[id]"),
    "id",
    true
  );

  // const intersectionObserver = new IntersectionObserver(
  //   (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         observer.unobserve(entry.target);
  //         useThis.functions.dataLoad();
  //       }
  //     });
  //   },
  //   { root: null, rootMargin: "0px", threshold: 0 }
  // );

  useThis.reactivity.load.observe((load) => {
    elementDisplay($elements.itemNull, load);
    elementDisplay($elements.itemFalse, !load && !useThis.value.datas.length);
    elementDisplay($elements.itemTrue, !load && useThis.value.datas.length);
    elementDisplay($elements.backdrop, !load && useThis.value.datas.length);
  });

  useThis.reactivity.datas.observe((data) => {
    if (Object.keys(data).length) {
      console.log(data);

      $elements.backdrop.src = FUNCTIONS_APP.img(data.info.movie_image);

      $elements.image.src = FUNCTIONS_APP.img(data.info.movie_image);

      $elements.title.textContent = data.info.name;
      $elements.sinopsis.textContent = data.info.plot;
    }
  });

  useThis.functions.dataLoad = () => {
    const length = $elements.itemTrue.children.length;

    const encodeQueryString = encodeQueryObject({
      route: "/pelicula",
      //   search: $elements.inputSearch.value.trim(),
      //   category: $elements.divGenres
      //     .querySelector("button.focus")
      //     .getAttribute("data-id"),
      start: length,
      end: 50,
    });

    console.log(encodeQueryString);

    fetch(
      "https://fetch.vniox.com/get.php?url=" +
        encodeURIComponent(
          `http://goldfull.pro:8880/player_api.php?username=${CREDENTIALS_USER.username}&password=${CREDENTIALS_USER.password}&action=get_vod_info&vod_id=${id}`
        )
    )
      .then((res) => res.json())
      .then((data) => {
        useThis.value.datas = useThis.value.datas.concat(data);
        useThis.reactivity.datas.value = data;
        useThis.reactivity.load.value = false;
      });
  };

  $elements.buttonPlay.addEventListener("click", () => {
    Android.openWithDefault(
      `http://goldfull.pro:8880/movie/${CREDENTIALS_USER.username}/${CREDENTIALS_USER.password}/${useThis.reactivity.datas.value.movie_data.stream_id}.${useThis.reactivity.datas.value.movie_data.container_extension}`,
      "video/*"
    );
  });

  addEventListener("key-RfwNgjwVeLgKee7", ({ detail }) => {
    const e = detail.e;

    const keydowns = Array.from(
      document.querySelectorAll(`[data-keydown='${keys.array[keys.index]}']`)
    );

    const index = keydowns.findIndex((keydown) => keydown === focus.element);

    if (e.key == "ArrowDown") {
      if (keydowns[index + 1]) {
        keydowns[index + 1].focus();
      }
    }

    if (e.key == "ArrowUp") {
      if (keydowns[index - 1]) {
        keydowns[index - 1].focus();
      }
    }
  });

  useThis.functions.dataLoad();
  return $element;
}
