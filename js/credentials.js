const CREDENTIALS_USER = {
  username: "DSNJx6xsbt",
  password: "jEyV7kWC4aMA",
};

const FUNCTIONS_APP = {
  fetch: (url = "") => url,
  img: (url = "") => (url || "").replace("http://", "https://"),
};

function fetchWebElementAndroid(url) {
  return new Promise((resolve) => {
    const content = Android.getPageContent(url);
    const $content = document.createElement("div");
    $content.innerHTML = content;

    resolve($content);
  });
}
