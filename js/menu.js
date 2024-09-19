class Layout {
  static menu = () => {
    const a = document.createElement("div");
    a.innerHTML = `
    <div class="div_BkWERok" data-keydown-parent>
    
                <button class="a_lW7dgpk" data-keydown="key-EeqSpNOJkulRszU">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-search">
                            <path
                                d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z">
                            </path>
                        </svg>
                    </div>
                    <!-- <span>Lives</span> -->
                </button>

                <a href="./live.html" class="a_lW7dgpk" data-name="live" data-keydown="key-EeqSpNOJkulRszU">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-live">
                            <path
                                d="m7,9v5h1c.552,0,1,.448,1,1s-.448,1-1,1h-1.5c-.827,0-1.5-.673-1.5-1.5v-5.5c0-.552.448-1,1-1s1,.448,1,1Zm16,1c.553,0,1-.448,1-1s-.447-1-1-1h-1.5c-.827,0-1.5.673-1.5,1.5v5c0,.827.673,1.5,1.5,1.5h1.5c.553,0,1-.448,1-1s-.447-1-1-1h-1v-1h1c.553,0,1-.448,1-1s-.447-1-1-1h-1v-1h1Zm-13-1v6c0,.552.448,1,1,1s1-.448,1-1v-6c0-.552-.448-1-1-1s-1,.448-1,1ZM1.5,13.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5Zm15.552-4.816l-1.052,3.154-1.052-3.154c-.175-.523-.737-.808-1.265-.632-.523.175-.807.741-.632,1.265l2,6c.136.408.518.684.948.684s.812-.275.948-.684l2-6c.175-.524-.108-1.09-.632-1.265-.527-.175-1.091.109-1.265.632Zm5.286,9.567c-.547.483-1.252.75-1.983.75H5c-1.654,0-3-1.346-3-3,0-.552-.448-1-1-1s-1,.448-1,1c0,2.757,2.243,5,5,5h15.354c1.22,0,2.395-.444,3.308-1.25.414-.365.453-.998.088-1.412-.366-.414-.997-.452-1.412-.087ZM1,9c.552,0,1-.448,1-1,0-1.654,1.346-3,3-3h15.354c.731,0,1.437.266,1.983.75.415.366,1.046.327,1.412-.087.365-.414.326-1.046-.088-1.412-.913-.807-2.088-1.25-3.308-1.25H5C2.243,3,0,5.243,0,8c0,.552.448,1,1,1Z">
                            </path>
                        </svg>
                    </div>
                    <!-- <span>Lives</span> -->
                </a>

                <a href="./pelicula.html" class="a_lW7dgpk" data-name="pelicula" data-keydown="key-EeqSpNOJkulRszU">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            data-svg-name="fi fi-rr-clapperboard-play">
                            <path
                                d="m19,1H5C2.243,1,0,3.243,0,6v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V6c0-2.757-2.243-5-5-5Zm3,6h-3.894l3.066-3.066c.512.538.828,1.266.828,2.066v1Zm-2.734-3.988l-3.973,3.973s-.009.01-.014.015h-3.423l4-4h3.144c.09,0,.178.005.266.012Zm-6.238-.012l-3.764,3.764c-.071.071-.13.151-.175.236h-3.483l4-4h3.422Zm-8.028,0h1.778L2.778,7h-.778v-1c0-1.654,1.346-3,3-3Zm14,18H5c-1.654,0-3-1.346-3-3v-9h20v9c0,1.654-1.346,3-3,3Zm-3.953-5.2l-4.634,2.48c-.622.373-1.413-.075-1.413-.8v-4.961c0-.725.791-1.173,1.413-.8l4.634,2.48c.604.362.604,1.238,0,1.6Z">
                            </path>
                        </svg>
                    </div>
                    <!-- <span>Pelicula</span> -->
                </a>

                <a href="./serie.html" class="a_lW7dgpk" data-name="serie" data-keydown="key-EeqSpNOJkulRszU">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-tv-retro">
                            <path
                                d="m19,6h-4.865l3.633-4.36c.354-.424.296-1.055-.128-1.408s-1.054-.296-1.408.128l-4.232,5.078L7.768.36c-.354-.424-.984-.482-1.408-.128-.424.354-.481.984-.128,1.408l3.633,4.36h-4.865c-2.757,0-5,2.243-5,5v8c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-8c0-2.757-2.243-5-5-5Zm3,13c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3v-8c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v8Zm-9-9h-7c-1.103,0-2,.897-2,2v6c0,1.103.897,2,2,2h7c1.103,0,2-.897,2-2v-6c0-1.103-.897-2-2-2Zm-7,8v-6h7v6s-7,0-7,0Zm14-5.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm0,5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z">
                            </path>
                        </svg>
                    </div>
                    <!-- <span>Serie</span> -->
                </a>


                <a href="./anime.html" class="a_lW7dgpk" data-name="anime" data-keydown="key-EeqSpNOJkulRszU">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            data-svg-name="fi fi-rr-face-awesome">
                            <path
                                d="M6,11c-.55,0-1-.45-1-1v-1c0-1.65,1.35-3,3-3s3,1.35,3,3v1c0,.55-.45,1-1,1s-1-.45-1-1v-.65c-.15,.09-.31,.15-.5,.15-.55,0-1-.45-1-1,0-.15,.04-.28,.09-.41-.35,.16-.59,.5-.59,.91v1c0,.55-.45,1-1,1Z">
                            </path>
                            <path
                                d="M19,9v1c0,.55-.45,1-1,1s-1-.45-1-1v-.65c-.15,.09-.31,.15-.5,.15-.55,0-1-.45-1-1,0-.15,.04-.28,.09-.41-.35,.16-.59,.5-.59,.91v1c0,.55-.45,1-1,1s-1-.45-1-1v-1c0-1.65,1.35-3,3-3s3,1.35,3,3Z">
                            </path>
                            <g>
                                <path
                                    d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12,12-5.38,12-12S18.62,0,12,0Zm0,22c-5.51,0-10-4.49-10-10S6.49,2,12,2s10,4.49,10,10-4.49,10-10,10Z">
                                </path>
                                <path
                                    d="M18.08,13.32H5.92c-.59,0-1.05,.56-.88,1.13,.88,3.02,3.66,5.22,6.97,5.22s6.08-2.21,6.97-5.22c.17-.57-.29-1.13-.88-1.13Zm-6.08,4.54s-.02,0-.04,0c.49-1.57,1.94-2.72,3.67-2.72,.38,0,.73,.01,1.04,.05-.95,1.6-2.68,2.67-4.67,2.67Z">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <!-- <span>Anime</span> -->
                </a>

                <a href="https://m-vnio.github.io/share-webview/index.html" class="a_lW7dgpk" data-name="anime" data-keydown="key-EeqSpNOJkulRszU">
                    <div>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-svg-name="fi fi-rr-data-transfer">
                            <path
                                d="m8 0h-4a4 4 0 0 0 -4 4v1a4 4 0 0 0 4 4h1v2h-2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2h1a4 4 0 0 0 4-4v-1a4 4 0 0 0 -4-4zm2 5a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2-2v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm10 6h-2a4 4 0 0 0 -4 4v5a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-5a4 4 0 0 0 -4-4zm2 9a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2-2v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm-8-16a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v2a1 1 0 0 1 -2 0v-2a1 1 0 0 0 -1-1h-2a1 1 0 0 1 -1-1zm-2 16a1 1 0 0 1 -1 1h-3a3 3 0 0 1 -3-3v-2a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1zm8 0a1 1 0 1 1 -1-1 1 1 0 0 1 1 1z">
                            </path>
                        </svg>
                    </div>
                    <!-- <span>Anime</span> -->
                </a>
            </div>
    `;

    const b = a.firstElementChild;
    a.innerHTML = "";

    const path = location.pathname.split("/")[1];

    const focus =
      b.querySelector(
        `a[data-name="${path.slice(0, path.lastIndexOf("."))}"]`
      ) ||
      b.querySelector(`a[data-name="pelicula"]`) ||
      document.createElement("div");
    focus.classList.add("focus");

    b.querySelector("button").addEventListener("click", () => {
      location.href = `/search.html?from=${encodeURIComponent(
        path.slice(0, path.lastIndexOf("."))
      )}`;
    });

    return b;
  };
}
