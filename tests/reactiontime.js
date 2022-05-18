if (window.confirm("You really wanna do this?")) {
    const mainElement = document.getElementsByClassName("view-splash e18o0sx0 css-saet2v e19owgy77")[0];
    let intervalId;

    const refreshRate = 120;
    const waitLength = 1000;

    function triggerMouseDown(restartInterval = false) {
        mainElement.dispatchEvent(new Event("mousedown", {bubbles: true}));
        if (restartInterval) intervalId = setInterval(loop, 1000 / refreshRate)
    }

    function setup() {
        triggerMouseDown();
        intervalId = setInterval(loop, 1000 / refreshRate)
    }

    function loop() {
        if (mainElement.className.includes("go")) {
            triggerMouseDown();
        } else if (mainElement.className.includes("res")) {
            clearInterval(intervalId);
            setTimeout(_ => triggerMouseDown(true), waitLength);
        }
    }

    setTimeout(setup, waitLength);
}

