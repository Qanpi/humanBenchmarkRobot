if (window.confirm("You really wanna do this?")) {
    let containerElement = document.getElementsByClassName("letters")[0];
    let children = containerElement.children; 

    let intervalId;

    const refreshRate = 60;
    const waitLength = 1000;

    function triggerKeyDown(char) {
        event = new KeyboardEvent("keydown", {bubbles: true, key: char});
        containerElement.dispatchEvent(event);
    }

    function type() {
        for (let i=0; i<children.length; i++) {
            triggerKeyDown(children[i].textContent);
        }
    }

    type();
}