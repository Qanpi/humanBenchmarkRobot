if (window.confirm("You really wanna do this?")) {
    let containerElement;
    let targetElement; 

    let intervalId;

    const refreshRate = 120;
    const waitLength = 1000;

    function triggerMouseDown() {
        targetElement.dispatchEvent(new Event("mousedown", {bubbles: true}));
    }

    function setup() {
        containerElement = document.getElementsByClassName("e6yfngs0")[0];
        targetElement = containerElement.firstElementChild;

        intervalId = setInterval(loop, 1000 / refreshRate);
    }

    function loop() {
        if(targetElement) {
            triggerMouseDown();
            targetElement = containerElement.firstElementChild;
        } else clearInterval(intervalId);
    }

    setTimeout(setup, waitLength);
}