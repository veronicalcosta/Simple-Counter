let count = 0;

function increase() {
    count++;
    document.getElementById("counter").innerText = count;
}

function decrease() {
    count--;
    document.getElementById("counter").innerText = count;
}

function reset() {
    count = 0;
    document.getElementById("counter").innerText = count;
}
