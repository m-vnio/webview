const CREDENTIALS_USER = {
  username: "nhs76X6SA",
  password: "NwGqGVSjm8Ag",
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
