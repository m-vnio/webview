const CREDENTIALS_USER = {
  server: "http://goldfull.pro:8880",
  username: "42u4T2H556",
  password: "22cGAJMkBJUq",
};

const FUNCTIONS_APP = {
  fetch: (url = "") => url,
  img: (url = "") => {
    return `https://img.vniox.com/index.php?url=${encodeURIComponent(url)}`;
  },
};

function fetchWebElementAndroid(url) {
  return new Promise((resolve) => {
    const content = Android.getPageContent(url);
    const $content = document.createElement("div");
    $content.innerHTML = content;

    resolve($content);
  });
}
