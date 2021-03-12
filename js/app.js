// Selector

const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Fetch Data 

const songs = [
    {name: "music1", title: "fearless", artist: "Chris Linton"},
    {name: "music2", title: "invisible", artist: "Julius Dreisig"},
    {name: "music3", title: "fade", artist: "Alain Walker"},
];

let isPlaying = false;

// Play Function 
const playMusic = () => {
    isPlaying = true;
    music.play(); 
    play.classList.replace("fa-play", "fa-pause");  
    img.classList.add("anime");
};

// Pause Function 
const pauseMusic = () => {
    isPlaying = false;
    music.pause(); 
    play.classList.replace("fa-pause", "fa-play");  
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic();
});

// Change Music Data 

const loadSong = (songs) => {
    title.textContent = songs.title; 
    artist.textContent = songs.artist;
    music.src = `/music/${songs.name}.mp3`;
    img.src = `/images/${songs.title}.jpg`;
}

let songIndex = 0;
// Next Song 
const nextSong = () => {
    //loop in songs
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

// Prev Song
const prevSong = () => {
    //loop in songs
     songIndex = (songIndex - 1 + songs.length) % songs.length;
     loadSong(songs[songIndex]);
     playMusic();
}

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);
