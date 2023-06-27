let icons = document.getElementsByClassName("socials");
let sidebar = document.querySelector(".sidebar");
let shrinkables = document.querySelectorAll(".shrinkable");

/*
function onStart() {
	sidebar.classList.add("sidebar-on-launch");
	text.classList.add("main-on-launch");
}

setTimeout(function () {
	sidebar.style.left = "0px";
}),
	1500;
*/

for (let i = 0; i < icons.length; i++) {
	icons[i].addEventListener("mouseover", function () {
		icons[i].style.opacity = "100%";
	});
	icons[i].addEventListener("mouseout", function () {
		icons[i].style.opacity = "60%";
	});
}

if (!sessionStorage.getItem("hasVisited")) {
	setTimeout(function () {
		onStart();
	}),
		100;
	sessionStorage.setItem("hasVisited", true);
}

function openSidebar() {
	sidebar.style.left = "0px";
	shrinkables.forEach((element) => {
		element.style.setProperty("left", "300px");
	});
}

function closeSidebar() {
	sidebar.style.left = "-300px";
	shrinkables.forEach((element) => {
		element.style.setProperty("left", "0px");
	});
}
