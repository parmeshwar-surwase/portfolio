alert("Welcome!");
function updateTime() {
    const now = new Date();
    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);
;