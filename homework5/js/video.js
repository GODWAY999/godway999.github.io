// Add js here.

// Page Load
let video_node = document.getElementsByClassName("video")[0];
video_node.autoplay = false;
video_node.loop = false;
video_node.load();


//Play Button
document.getElementById("play").addEventListener("click", () => video_node.play());


//Pause Button
document.getElementById("pause").addEventListener("click", () => video_node.pause());


//Slow Down
document.getElementById("slower").addEventListener("click", () => {
    switch (video_node.playbackRate) {
        case 2.0: video_node.playbackRate = 1.0; break;
        case 1.0: video_node.playbackRate = 0.5; break;
        case 0.5: alert("Video is at slowest speed!"); break;
    }
});


//Speed Up
document.getElementById("faster").addEventListener("click", () => {
    switch (video_node.playbackRate) {
        case 2.0: alert("Video is at fastest speed!"); break;
        case 1.0: video_node.playbackRate = 2.0; break;
        case 0.5: video_node.playbackRate = 1.0; break;
    }
});


//Skip Ahead
document.getElementById("skip").addEventListener("click", () => {
    video_node.currentTime += 15;
    if (video_node.currentTime === video_node.duration) video_node.load();
});


// Mute
document.getElementById("mute").addEventListener("click", () => {
    if (video_node.muted) {
        document.getElementById("mute").innerHTML = "Mute";
        document.getElementById("slider").value = 100;
        document.getElementById("volume").innerHTML = "100";
    }else{
        document.getElementById("mute").innerHTML = "Unmute";
        document.getElementById("slider").value = 0;
        document.getElementById("volume").innerHTML = "0";
    }
    video_node.muted = !video_node.muted;
});


// Volume Slider
document.getElementById("volume").innerHTML = "100";
document.getElementById("slider").addEventListener("change", (e) => {
    video_node.volume = e.target.value / 100.0;
    document.getElementById("volume").innerHTML = e.target.value.toString();
})