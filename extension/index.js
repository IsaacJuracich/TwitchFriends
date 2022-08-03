function inject(url) {
  var s = document.createElement("script");
  s.src = chrome.extension.getURL(url);
  s.onload = function () {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(s);
}
function injectByUrl(url) {
  var s = document.createElement("script");
  s.src = url;
  s.onload = function () {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(s);
}
function injectModule(url) {
  var s = document.createElement("script");
  s.src = url;
  s.type = "module";
  s.onload = function () {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(s);
}
inject("libs/jquery.js");
inject("libs/fetch.js");
inject("scripts/script.js");
inject("views/tfwCategory.js");
inject("views/tfwTwitchee.js");
inject("views/tfwSelf.js");
