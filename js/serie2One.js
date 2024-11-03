function one(id) {
  const useThis = {
    reactivity: {
      datas: defineVal([]),
      load: defineVal(true),
    },
    value: {
      datas: [],
    },
    functions: {
      fetch: (url = "") =>
        `https://api-fetch.victor01sp.com/get.php?url=${encodeURIComponent(
          url
        )}`,
    },
  };

  const $element = createNodeElement(`
                <div class="div_1YmtSIZ div_lMqzJhY">
        
                    <picture class="picture_HsVx30S">
                        <img style="display: none;" id="backdrop" src="" alt="">
                    </picture>

                    <header class="header_zTAx4zz">
                      <div class="div_cr8aRBY">
                        
                        <button class="button_mzTN7sc" data-keydown="key-RfwNgjwVeLgKee7" onclick="history.back()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-left"><path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"></path></svg></button>
                        <button id="buttonPlay" class="button_mzTN7sc" data-keydown="key-RfwNgjwVeLgKee7"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-list"><path d="M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z"></path><path d="M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"></path><path d="M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"></path><circle cx="2" cy="5" r="2"></circle><circle cx="2" cy="12" r="2"></circle><circle cx="2" cy="19" r="2"></circle></svg></button>

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

                    <div id="divSeasonEpisode" class="div_ZePMTkk" style="display:none">
                        <div class="div_diDlIDW scrollbar-y">
                            <div id="season" class="div_pB8ilFk"></div>
                        </div>
                        <div class="div_diDlIDW scrollbar-y" style="background: rgb(0 0 0 / 0.1);">
                            <div id="chapter" class="div_3mx7M8x"></div>
                        </div>
                    </div>

                    <div id="divLoadVideo" class="div_g82EBDS" style="display:none"><div class="element-loader" style="--color:#ffffff; --pixel:60px"></div></div>
        
                </div>    
            `);

  const $elements = createObjectElement(
    $element.querySelectorAll("[id]"),
    "id",
    true
  );

  useThis.reactivity.load.observe((load) => {
    elementDisplay($elements.itemNull, load);
    elementDisplay($elements.itemFalse, !load && !useThis.value.datas.length);
    elementDisplay($elements.itemTrue, !load && useThis.value.datas.length);
    elementDisplay($elements.backdrop, !load && useThis.value.datas.length);
  });

  useThis.reactivity.datas.observe((data) => {
    if (Object.keys(data).length) {
      $elements.backdrop.src = FUNCTIONS_APP.img(
        data.images.poster.replace("/original/", "/w342/")
      );

      $elements.image.src = FUNCTIONS_APP.img(
        data.images.poster.replace("/original/", "/w342/")
      );

      $elements.title.textContent = data.titles.name;
      $elements.sinopsis.textContent = data.overview;

      $elements.season.innerHTML = data.seasons
        .map((season, index) => {
          return `<button class="button_c0MLqUI" data-keydown="key-qCVDDxQ4q1Wnr5o" data-index="${index}">Temporada ${season.number}</button>`;
        })
        .join("");

      useThis.functions.seasonIndex(0);
    }
  });

  useThis.functions.seasonIndex = (seasonIndex) => {
    $elements.chapter.innerHTML = useThis.reactivity.datas.value.seasons[
      seasonIndex
    ].episodes
      .map((episode) => {
        return `<button class="button_27QVWfx" data-keydown="key-7HbIa9IIQgtEjQM" data-data="${encodeInput(
          JSON.stringify(episode)
        )}">
          <picture class="picture_xPpWSeU">
            <img style="margin-bottom:auto; border-radius:5px;" src="${FUNCTIONS_APP.img(
              episode.image
            )}">
          </picture>
          <span class="span_Vth2Cyo">${episode.title}</span>
        </button>`;
      })
      .join("");

    Array.from($elements.season.children).forEach((d, i) => {
      if (seasonIndex == i) d.classList.add("focus");
      else d.classList.remove("focus");
    });
  };

  useThis.functions.dataLoad = () => {
    const length = $elements.itemTrue.children.length;

    fetchWebElementAndroid(
      FUNCTIONS_APP.fetch(`https://cuevana.biz/serie/${id}/${id}`)
    ).then(($text) => {
      const __NEXT_DATA__ = JSON.parse(
        $text.querySelector("#__NEXT_DATA__").textContent
      );

      useThis.value.datas = useThis.value.datas.concat(
        __NEXT_DATA__.props.pageProps.thisSerie
      );
      useThis.reactivity.datas.value = __NEXT_DATA__.props.pageProps.thisSerie;
      useThis.reactivity.load.value = false;

      Array.from($text.querySelectorAll("img")).forEach((img) => {
        img.removeAttribute("src");
        img.removeAttribute("srcset");
      });
    });
  };

  $elements.buttonPlay.addEventListener("click", () => {
    elementDisplay($elements.divSeasonEpisode, true);

    history.pushState(null, null, location.href);

    const active =
      document.querySelector(
        `[data-keydown='${keys.array[keys.index + 1]}'].active`
      ) ||
      document.querySelector(`[data-keydown='${keys.array[keys.index + 1]}']`);
    if (active) active.focus();
  });

  $elements.season.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (button) {
      if (focus.element.classList.contains("focus")) {
        $elements.chapter.append(
          ...Array.from($elements.chapter.children)
            .map((child) => {
              child.classList.remove("active");
              return child;
            })
            .reverse()
        );
      } else {
        const keydowns = Array.from(
          document.querySelectorAll(
            `[data-keydown='${keys.array[keys.index]}']`
          )
        );
        Array.from(keydowns).forEach((button) =>
          button.classList.remove("focus")
        );
        focus.element.classList.add("focus");
        useThis.functions.seasonIndex(
          parseInt(focus.element.getAttribute("data-index"))
        );
      }
    }
  });

  $elements.chapter.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (button) {
      history.pushState(null, null, location.href);
      elementDisplay($elements.divLoadVideo, true);

      const data = JSON.parse(button.getAttribute("data-data"));

      let url = data.url.slug.replace("series/", "serie/");
      url = url.replace("/seasons/", "/temporada/");
      url = url.replace("/episodes/", "/episodio/");
      url = `https://cuevana.biz/${url}`;

      // console.log(data);
      fetchWebElementAndroid(FUNCTIONS_APP.fetch(url)).then(($text) => {
        const __NEXT_DATA__ = JSON.parse(
          $text.querySelector("#__NEXT_DATA__").textContent
        );

        const countArray = (array) => (array.length ? array : false);

        const videos =
          countArray(__NEXT_DATA__.props.pageProps.episode.videos.latino) ||
          countArray(__NEXT_DATA__.props.pageProps.episode.videos.spanish) ||
          countArray(__NEXT_DATA__.props.pageProps.episode.videos.english) ||
          countArray(__NEXT_DATA__.props.pageProps.episode.videos.japanese) ||
          [];

        const video = videos.find((video) => video.cyberlocker == "streamwish");

        fetchWebElementAndroid(FUNCTIONS_APP.fetch(video.result)).then(
          ($text) => {
            Array.from($text.querySelectorAll("img")).forEach((img) => {
              img.removeAttribute("src");
              img.removeAttribute("srcset");
            });

            Array.from($text.querySelectorAll("script")).forEach((script) => {
              const urls = extractURLs(script.innerHTML);
              if (urls[0]) {
                const url = urls[0].slice(0, urls[0].lastIndexOf("'"));

                if (url) {
                  const content = Android.getPageContent(url);
                  const $content = document.createElement("div");
                  $content.innerHTML = content;

                  const script = Array.from(
                    $content.querySelectorAll("script")
                  ).find((script) => script.innerHTML.includes("eval"));

                  if (script) {
                    const script2 = script.innerHTML.slice(
                      script.innerHTML.indexOf("}('") + 2,
                      script.innerHTML.lastIndexOf("))")
                    );

                    const final = new Function(
                      `const fn = (...p) => p; return fn(${script2})`
                    );

                    const validate = (p, a, c, k, e, d) => {
                      while (c--)
                        if (k[c]) {
                          p = p.replace(
                            new RegExp("\\b" + c.toString(a) + "\\b", "g"),
                            k[c]
                          );
                        }

                      const scriptFunction = new Function(
                        `return ${p.slice(p.indexOf("{"), p.indexOf(");"))}`
                      );
                      return scriptFunction();
                    };

                    if ($elements.divLoadVideo.style.display != "none") {
                      Android.openWithDefault(
                        validate(...final()).sources[0].file,
                        "video/*"
                      );

                      history.back();
                    }
                  }
                }
              }
            });
          }
        );

        Array.from($text.querySelectorAll("img")).forEach((img) => {
          img.removeAttribute("src");
          img.removeAttribute("srcset");
        });
      });
    }
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

  addEventListener("key-qCVDDxQ4q1Wnr5o", ({ detail }) => {
    const e = detail.e;

    const num = 1;

    const keydowns = Array.from(
      document.querySelectorAll(`[data-keydown='${keys.array[keys.index]}']`)
    );

    const index = keydowns.findIndex((keydown) => keydown === focus.element);

    if (e.key == "ArrowRight") {
      const active =
        document.querySelector(
          `[data-keydown='${keys.array[keys.index + 1]}'].active`
        ) ||
        document.querySelector(
          `[data-keydown='${keys.array[keys.index + 1]}']`
        );

      if (active) active.focus();
    }

    if (e.key == "ArrowDown") {
      if (keydowns[index + num]) {
        keydowns.forEach((keydown) => keydown.classList.remove("active"));
        keydowns[index + num].classList.add("active");
        keydowns[index + num].focus();
      }
    }

    if (e.key == "ArrowUp") {
      if (keydowns[index - num]) {
        keydowns.forEach((keydown) => keydown.classList.remove("active"));
        keydowns[index - num].classList.add("active");
        keydowns[index - num].focus();
      }
    }
  });

  addEventListener("key-7HbIa9IIQgtEjQM", ({ detail }) => {
    const e = detail.e;

    const num = getColumnCount($elements.chapter, 10, 10);

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
          document.querySelector(
            `[data-keydown='${keys.array[keys.index - 1]}'].active`
          ) ||
          document.querySelector(
            `[data-keydown='${keys.array[keys.index - 1]}']`
          );

        if (active) active.focus();
      }
    }

    if (e.key == "ArrowDown") {
      if (keydowns[index + num]) {
        keydowns.forEach((keydown) => keydown.classList.remove("active"));
        keydowns[index + num].classList.add("active");
        keydowns[index + num].focus();
      } else {
        keydowns.reverse()[0].focus();
      }
    }

    if (e.key == "ArrowUp") {
      if (keydowns[index - num]) {
        keydowns.forEach((keydown) => keydown.classList.remove("active"));
        keydowns[index - num].classList.add("active");
        keydowns[index - num].focus();
      }
    }
  });

  addEventListener("popstate", () => {
    if ($elements.divLoadVideo.style.display != "none") {
      elementDisplay($elements.divLoadVideo, false);
      return;
    }

    if ($elements.divSeasonEpisode.style.display == "") {
      $elements.divSeasonEpisode.style.display = "none";
      document.querySelector(`[data-keydown='${keys.array[0]}']`).focus();
    }
  });

  useThis.functions.dataLoad();
  return $element;
}
