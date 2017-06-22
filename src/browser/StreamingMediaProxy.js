
"use strict";

const exec = (success, error, opts) => {
	//
};

const playAudio = (success, error, opts) => {
	//
};

module.exports = {
	"exec": exec
};

require("cordova/exec/proxy").add("StreamingMedia", module.exports);