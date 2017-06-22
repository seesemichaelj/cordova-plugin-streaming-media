
"use strict";

function StreamingMedia() {
	jQuery.ajax({
		"url": "http://vjs.zencdn.net/6.1.0/video.js",
		"dataType": "script",
		"async": true,
		"success": () => {
		}
	});

	const videoTag = "<video style=\"display: none;\" id=\"streamingMediaVideo\" data-setup=\"{}\" controls=\"\"></video>";
	$("body").append(videoTag);
}

const playAudio = (url, options) => {
	//
};

const pauseAudio = (options) => {
	//
};

const resumeAudio = (options) => {
	//
};

const stopAudio = (options) => {
	//
};

const playVideo = (url, options) => {
	$("#streamingMediaVideo").show();
	let player = videojs("streamingVideoPlayer");
	player.src(url);
	player.play();
};

module.exports = {
	"playAudio": playAudio,
	"pauseAudio": pauseAudio,
	"resumeAudio": resumeAudio,
	"stopAudio": stopAudio,
	"playVideo": playVideo
};

require("cordova/exec/proxy").add("StreamingMedia", module.exports);