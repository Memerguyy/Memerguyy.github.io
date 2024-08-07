// LINK TO ORIGINAL PASTEBIN OF MUSIC PLAYER!!!!!
// https://pastebin.com/6N9PwJGk
// if not for this person i would be dead as hell honestly

let volSlider = document.querySelector(".volSlider")

let track_name = document.querySelector(".songtitle");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
let loop_btn = document.querySelector(".loop-track");

let seek_slider = document.querySelector(".seek_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isMusicPlaying = false;
let trackLooping = true;
let updateTimer;

// create new audio element
let curr_track = document.getElementById("music");
console.log(curr_time)

//
// DEFINE YOUR SONGS HERE!!!!!
// MORE THAN FOUR SONGS CAN BE ADDED!!
// JUST ADD ANOTHER BRACKET WITH NAME AND PATH
// CATBOX.MOE IS RECOMMENDED FOR UPLOADING MP3 FILES
let track_list = [
    {
        name: "Deltarune OST: 28 - Hip Shop",
        path: "https://files.catbox.moe/n92z99.mp3"
    },
    {
        name: "Ghost Hack (feat. Cling Ring)",
        path: "https://files.catbox.moe/zirj8a.mp3"
    },
    {
        name: "Goreshit - Fine night",
        path: "https://files.catbox.moe/uwaak6.mp3"
    },
    {
        name: "availax & pikaro - NYUTOPIA",
        path: "https://files.catbox.moe/ems1dq.mp3"
    },
    {
        name: "Yem - Memories I Can't Get Back",
        path: "https://files.catbox.moe/t7zqoe.mp3"
    },
    {
        name: "Yem - Crushed Lunar Pill",
        path: "https://files.catbox.moe/q9v95b.mp3"
    },
    {
        name: "lhk - NIGHTMARE TECHNICIAN",
        path: "https://files.catbox.moe/62zev9.mp3"
    },
    {
        name: "bye2 - Aortic Pressure Valve",
        path: "https://files.catbox.moe/dvt0k4.mp3"        
    },
    {
        name: "vervid! - behind this broken smile",
        path: "https://files.catbox.moe/qdk0rp.mp3"
    },
    {
        name: "vervid! - i never existed",
        path: "https://files.catbox.moe/lb15rz.mp3"
    }


];

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();

    // load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();

    // update details of the track
    track_name.innerHTML = "playing " + (track_index + 1) + " of " + track_list.length + ": " + track_list[track_index].name;

    // set an interval of 1000 milliseconds for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
}

// reset values
function resetValues() {
    curr_time.textContent = "0:00";
    total_duration.textContent = "0:00";
    curr_time.currentTime = 0;
    playTrack()
}

// checks if song is playing
function playpauseTrack() {
    if (!isMusicPlaying == true) {
        playTrack();
    } else {
        pauseTrack();
    }
}

// plays track when play button is pressed
function playTrack() {
    curr_track.play();
    isMusicPlaying = true;

    // replace icon with the pause icon
    playpause_btn.innerHTML = '<button><i class="fas fa-pause"></i></button>';
}

// pauses track when pause button is pressed
function pauseTrack() {
    curr_track.pause();
    isMusicPlaying = false;

    // replace icon with the play icon
    playpause_btn.innerHTML = '<button><i class="fas fa-play"></i></button>';
}

// moves to the next track
function nextTrack() {
    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0;
    loadTrack(track_index);
    playTrack();
}

// moves to the previous track
function prevTrack() {
    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length;
    loadTrack(track_index);
    playTrack();
}

function loopTrack() {
    if (trackLooping == true) {
        curr_track.removeEventListener("ended", nextTrack)
        curr_track.addEventListener("ended", resetValues)
        console.log("Looping has been enabled! \n\ntrackLooping bool status: " + trackLooping)
        loop_btn.innerHTML = '<button style="background-color: grey;"><i class="fa-solid fa-rotate" aria-hidden="true"></i></button>'
        trackLooping = !trackLooping
    } else if (trackLooping == false){
        console.log("Looping disabled :( \n\ntrackLooping bool status: " + trackLooping)
        loop_btn.innerHTML = '<button><i class="fa-solid fa-rotate" aria-hidden="true"></i></button>'
        curr_track.removeEventListener("ended", resetValues)
        curr_track.addEventListener("ended", nextTrack)
        trackLooping = !trackLooping
    }
}

function volume() {
    curr_track.volume = volSlider.value / 100
}

// seeker slider
function seekTo() {
    var seekto = curr_track.duration * (seek_slider.value / 100)
    curr_track.currentTime = seekto;
}

function seekUpdate() {
    let seekPosition = 0;

    // check if the current track duration is a legible number
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;
        // calculate the time left and the total duration
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        // adding a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = durationMinutes; }

        if (seekPosition == 100) {nextTrack()}

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

// load the first track in the tracklist
loadTrack(track_index);
playTrack()