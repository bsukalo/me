let icons = document.getElementsByClassName("socials");
let sidebar = document.querySelector(".sidebar");

function onStart() {
	sidebar.classList.add("slide-in");
}

for (let i = 0; i < icons.length; i++) {
	icons[i].addEventListener("mouseover", function () {
		icons[i].style.opacity = "80%";
	});
	icons[i].addEventListener("mouseout", function () {
		icons[i].style.opacity = "40%";
	});
}

if (!sessionStorage.getItem("hasVisited")) {
	setTimeout(function () {
		onStart();
	}),
		100;
	sessionStorage.setItem("hasVisited", true);
}

setTimeout(function () {
	sidebar.style.left = "0px";
}),
	1600;

function openSidebar() {
	sidebar.style.left = "0px";
}

function closeSidebar() {
	sidebar.style.left = "-600px";
}
