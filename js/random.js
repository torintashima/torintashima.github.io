window.onload = function() {
    var titles = [
        "Fingerstyle air guitarist.",
        "Sweater horn inventor.",
        "Crazy fox dude.",
        "Laundry basketball player.",
        "Shower opera singer.",
        "Two-time 6-7-10 split converter."
    ];
    var n = Math.floor(Math.random() * titles.length);
    document.getElementById("third").innerText = titles[n];
}