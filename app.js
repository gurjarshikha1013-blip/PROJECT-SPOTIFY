
// Initailize the Variables
let songIndex = 0;
let audioElement = new Audio('fav-song/Tum-Prem-Ho-Reprise-｜-Lyrical-Video-｜-RadhaKrishn-｜-MOhit-Lalwani-｜-Surya-Raj-Kamal-｜-Bharat-Kamal-Feoea8FQTI0-140-audio-only-1733716479id.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let myGif = document.getElementById('gif');
let songItems =  Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementsByClassName("masterSongName")[0];


let songs = [
    { songName: "Tum Prem Ho🦚🪷", filePath: "fav-song/Tum-Prem-Ho-Reprise-｜-Lyrical-Video-｜-RadhaKrishn-｜-MOhit-Lalwani-｜-Surya-Raj-Kamal-｜-Bharat-Kamal-Feoea8FQTI0-140-audio-only-1733716479id.mp3", coverPath: " images/tum_cover.jpg" },
    { songName: "Char Kadam💏", filePath: "fav-song/Chaar Kadam Pk 128 Kbps.mp3", coverPath:"images/kadam-cover.avif" },
    { songName: "Hona Tha Pyaar💕", filePath: "fav-song/Atif_Aslam_-_Hona_Tha_Pyaar_bol_-_(mp3.pm).mp3", coverPath: " images/hona-tha-cover.jpg" },
    { songName: "Pal Pal 🔥", filePath: "fav-song/Afusic_-_Pal_Pal_(mp3.pm).mp3", coverPath: " images/pal cover.jpg" },
    { songName: "Aakh Ye Taalibaani 👀", filePath: "fav-song/Aakh Ye Taalibaani Manish Sonipat Aala 128 Kbps.mp3", coverPath: " images/talibaani-cover.jpg" },
    { songName: "Casa Casa 🍾", filePath: "fav-song/Casa_Tupka_Anthemo_1.mp3", coverPath: " images/casa-cover.jpg" },
    { songName: "Banger 🪩", filePath: "fav-song/Banger_1.mp3", coverPath: " images/banger-cover.jpg" },
]

songItems.forEach((element,i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

// handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        myGif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        myGif.style.opacity = 0;

    }
})

// listen to event 

audioElement.addEventListener('timeupdate', () => {
//update seekbar

progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllplays = () =>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
element.classList.add('fa-play-circle');
element.classList.remove('fa-pause-circle');

})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e) =>{
makeAllplays();
index = parseInt(e.target.id);

e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src = songs[index].filePath;
audioElement.currentTime = 0 ; 
audioElement.play();
masterSongName.innerText = songs[index].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

myGif.style.opacity=1;

    })
})