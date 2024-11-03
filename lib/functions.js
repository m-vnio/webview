function fetchWebElementAndroid(url) {
  return new Promise((resolve) => {
    const content = Android.getPageContent(url);
    const $content = document.createElement("div");
    $content.innerHTML = content;

    resolve($content);
  });
}
