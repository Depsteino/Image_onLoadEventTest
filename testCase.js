var img = document.querySelector('#img');
var btn = document.querySelector('#button');
var msg = document.querySelector('#msg');
var pass = document.querySelector('#pass');
var show = document.querySelector('#test');
var counter = 0;

img.onload = function loaded() {
	counter++;
	if (counter <= 1) {
		document.body.style.backgroundColor = "white";
		show.style.display = 'none';
	} else if (counter == 2) {
		pass.src = "assets/fire_ON.gif"
		msg.innerHTML = "Turn OFF"
		show.style.display = 'block';
	} else if (counter == 3) {
		pass.src = ""
		msg.innerHTML = "Turn ON"
		show.style.display = 'none';
	} else {
		pass.src = "assets/fire_ON.gif"
		msg.innerHTML = "Finished"
		show.style.display = 'block';
	}

}

img.src = 'assets/torch_OFF.png';

function loadTorchImg() {
	img.src = 'assets/torch_OFF.png';
	if (counter <= 3)
		text.innerHTML = 'onLoad event has been loaded ' + counter + " times";
	if (counter == 3)
		text.innerHTML = 'onLoad event max number has reached ' + counter + " times";
}