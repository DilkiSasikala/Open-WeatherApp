function toggleMode(cssFile, cssLinkIndex) {
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    console.log(oldlink);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    console.log(newlink);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
