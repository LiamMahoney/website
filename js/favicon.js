(() => {
    // checking if the browser is set to dark mode and adjusting favicon accordingly
    onUpdate(window.matchMedia('(prefers-color-scheme: dark)'));
})();



function onUpdate(matcher) {
    /**
     * Setting the favicon based on the OS light/dark mode setting
     * 
     * @param {obj} matcher: return object of window.matchMedia
     */

    if (matcher.matches) {
        darkModeIcon = document.createElement("link");
        darkModeIcon.setAttribute("href", "./pics/thumbs-up-dark-mode.png");
        darkModeIcon.setAttribute("rel", "icon");
        document.head.append(darkModeIcon);
    } else {
        lightModeIcon = document.createElement("link");
        lightModeIcon.setAttribute("href", "./pics/thumbs-up-light-mode.png");
        lightModeIcon.setAttribute("rel", "icon");
        document.head.append(lightModeIcon);
    }
}