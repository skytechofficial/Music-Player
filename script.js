let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
var audioList = [
  {
    songName: "Warriyaao - Mortals[NCS Release]",
    filePath: "./1.mp3",
    coverPath: "./1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "./2.mp3",
    coverPath: "./2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Realease]-320k",
    filePath: "./3.mp3",
    coverPath: "./3.jpg",
  },
  {
    songName: "Different Heaven & EHIDE",
    filePath: "./4.mp3",
    coverPath: "./4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning",
    filePath: "./5.mp3",
    coverPath: "./5.jpg",
  },
  {
    songName: "Rabba - Salem-e-Ishq",
    filePath: "./6.mp3",
    coverPath: "./6.jpg",
  },
  {
    songName: "Sakhiyan - Salem-e-Ishq",
    filePath: "./7.mp3",
    coverPath: "./7.jpg",
  },
  {
    songName: "Bhula Dena - Salem-e-Ishq",
    filePath: "./8.mp3",
    coverPath: "./8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salem-e-Ishq",
    filePath: "./9.mp3",
    coverPath: "./9.jpg",
  },
  {
    songName: "Na Jaana - Salem-e-Ishq",
    filePath: "./10.mp3",
    coverPath: "./10.jpg",
  },
];
let music = Array.from(document.querySelectorAll(".music"));

music.forEach((element, i) => {
  console.log(element);
  element.getElementsByTagName("img")[0].src = audioList[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText =
    audioList[i].songName;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("ri-pause-circle-line");
      element.classList.add("ri-play-circle-line");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      audioElement.currentTime = 0;
      songIndex = parseInt(e.target.id);
      if (audioElement.paused && audioElement.currentTime <= 0) {
        audioElement.src = `./${songIndex + 1}.mp3`;
        audioElement.play();
        e.target.classList.remove("ri-play-circle-line");
        e.target.classList.add("ri-pause-circle-line");
        // gif.style.opacity = 1;
      } else {
        audioElement.pause();
        e.target.classList.remove("ri-pause-circle-line");
        e.target.classList.add("ri-pause-circle-line");
        audioElement.currentTime = audioElement.currentTime;
        // gif.style.opacity = 0;
      }
    });
  }
);
