




window.addEventListener ("keydown", function (event) {
	const code = event.keyCode;
	document.getElementById(code).setAttribute("class", "keyPress");
	function BeepBeep() {
		 const audio = document.querySelector(`audio[data-key="${code}"]`);
		 audio.currentTime = 0;
		 audio.play()
	};
	BeepBeep();
	
});

window.addEventListener ("keyup", function (event) {
	document.getElementById(event.keyCode).setAttribute("class", "key")
})


