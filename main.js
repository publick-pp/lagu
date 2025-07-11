const lagu =[
    {judul:"dandellions", src:"l-dandelions.mp3", penyanyi:"ruth b", cover:"l-dandelions.jpeg",},
    {judul:"lover", src:"l-lover.mp3", penyanyi:"taylor swift",cover:"l-lover.jpeg",},
    {judul:"tally", src:"l-tally.mp3", penyanyi:"blackpink",cover:"l-tally.jpeg",},
];

let currentSong = 0;
const judul=document.getElementById("judul");
const audio=document.getElementById("audio");
const progress=document.getElementById("progress");
const prev=document.getElementById("prev"); 
const next=document.getElementById("next");
const play=document.getElementById("play");
constcover=document.getElementById("cover");
const penyanyi=document.getElementById("penyanyi");

function loadlagu(index) {
    audio.src = lagu[index].src;
    judul.textContent = lagu[index].judul;
    penyanyi.textContent = lagu[index].penyanyi;
    cover.src = lagu[index].cover;
}

function playlagu() {
    audio.play();
    play.textContent = "⏸️";
}
function pauselagu() {
    audio.pause();
    play.textContent = "▶️";
}
play.addEventListener("click", () => {
    if (audio.paused) {
        playlagu();
    } else {
        pauselagu();
    }
});
next.addEventListener("click", () => {
    currentSong = (currentSong + 1) % lagu.length;
    loadlagu(currentSong);
    playlagu();
});
prev.addEventListener("click", () => {
    currentSong = (currentSong - 1 + lagu.length) % lagu.length;
    loadlagu(currentSong);
    playlagu();
}); 
loadlagu(currentSong);
audio.addEventListener("timeupdate", () => {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
});
progress.addEventListener('input', () => {
    audio.currentTime = progress.value;
});