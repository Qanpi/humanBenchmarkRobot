whitelistPaths = ["/tests/reactiontime", "/tests/aim", "/tests/typing", "/tests/hearing"];

browser.webNavigation.onHistoryStateUpdated.addListener(details => checkUrl(details.url));
browser.webNavigation.onCompleted          .addListener(details => checkUrl(details.url));
    
function checkUrl(_url) {
    const url = new URL(_url);

    if (url.hostname != "humanbenchmark.com") return;
    else if (!whitelistPaths.includes(url.pathname)) return;

    const fileLocation = url.pathname + ".js"
    console.log(fileLocation);
    browser.tabs.executeScript(null, {file:fileLocation});
}

function onSuccess(result) {
    console.log("Code succesfully executed.");
}

function onError(error) {
    console.error("Code ran into an error:" + error);
}