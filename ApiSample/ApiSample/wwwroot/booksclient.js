document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("button1").onclick = function () {
        makeRequest();
    };
});

async function makeRequest() {
    let response = await fetch("https://localhost:44397/api/Books");
    let json = await response.json();
}