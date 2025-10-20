(function () {
  const mobileURL = "https://xcode-avitech.github.io/Tapoh-Admin/mobile/";
  const desktopURL = "https://xcode-avitech.github.io/Tapoh-Admin/desktop/";
  const repoRoot = "/Tapoh-Admin/";

  function getRelativePath() {
    return window.location.pathname.split(repoRoot)[1] || "";
  }

  function redirectToCorrectVersion() {
    const width = window.innerWidth;
    let path = getRelativePath();

    // Mobile portrait ≤480px
    if (width <= 480) {
      if (!window.location.href.includes("/mobile/")) {
        // If currently on desktop, map path to mobile version
        // Remove "desktop/" prefix if present
        path = path.replace(/^desktop\//, "");
        window.location.href = mobileURL + path;
      }
    } 
    // Desktop (width > 480px)
    else {
      if (window.location.href.includes("/mobile/")) {
        // Remove mobile/ prefix, add desktop/ prefix
        path = path.replace(/^mobile\//, "");
        window.location.href = desktopURL + path;
      }
    }
  }

  // Initial redirect after 2.5 seconds
  setTimeout(redirectToCorrectVersion, 2500);

  // Monitor resize and orientation change
  window.addEventListener("resize", redirectToCorrectVersion);
  window.addEventListener("orientationchange", redirectToCorrectVersion);
})();
