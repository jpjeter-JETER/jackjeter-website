/* Google Analytics 4 (gtag.js)
   Paste your Measurement ID below (it starts with G-).
   Every page loads this one file, so this is the only place to change it. */
var GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

if (GA_MEASUREMENT_ID.indexOf("XXXX") === -1) {
  var gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}
