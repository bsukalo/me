function onStart() {
	document.getElementById("sidebar").classList.add("slide-in");
}
setInterval(function () {
	onStart();
}),
	250;
setInterval(function () {
	document.getElementById("sidebar").style.left = "0px";
}),
	1750;
