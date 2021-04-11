// ==UserScript==
// @name         Journal-AutoLogin-UTM
// @namespace    sirqaf
// @version      0.1
// @description  auto login journal website using utm web-vpn
// @author       sirqaf
// @match        https://www.sciencedirect.com/*
// @match        https://ieeexplore.ieee.org/*
// @match        https://link.springer.com/*
// @match        https://www.springer.com/*
// @match        https://www.emerald.com/*
// @grant        GM_openInTab
// ==/UserScript==

(function () {
  "use strict";
  var html_title = new Array();
  html_title[0] = "www.sciencedirect.com";
  html_title[1] = "ieeexplore.ieee.org";
  html_title[2] = "www.springer.com";
  html_title[3] = "link.springer.com";
  html_title[4] = "www.emerald.com";

  let link = window.location.host;

  if (link == html_title[0]) {
    link = location.href;
    link = link.replace(
      "www.sciencedirect.com",
      "www-sciencedirect-com.ezproxy.utm.my"
    );
  } else if (link == html_title[1]) {
    link = location.href;
    link = link.replace(
      "ieeexplore.ieee.org",
      "ieeexplore-ieee-org.ezproxy.utm.my"
    );
  } else if (link == html_title[2]) {
    link = location.href;
    link = link.replace("www.springer.com", "link-springer-com.ezproxy.utm.my");
  } else if (link == html_title[3]) {
    link = location.href;
    link = link.replace(
      "link.springer.com",
      "link-springer-com.ezproxy.utm.my"
    );
  } else if (link == html_title[4]) {
    link = location.href;
    link = link.replace("www.emerald.com", "www-emerald-com.ezproxy.utm.my");
  }
  GM_openInTab(link, { active: true });
})();
