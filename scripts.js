let icons = document.getElementsByClassName("socials");
let sidebar = document.querySelector(".sidebar");
let stretchables = document.querySelectorAll(".stretchable");
let items = document.querySelectorAll(".menu-item");
let pages = document.querySelectorAll(".page");
let io = 0;

for (let i = 0; i < icons.length; i++) {
	icons[i].addEventListener("mouseover", function () {
		icons[i].style.opacity = "100%";
	});
	icons[i].addEventListener("mouseout", function () {
		icons[i].style.opacity = "60%";
	});
}

function openSidebar() {
	sidebar.style.left = "0px";
	stretchables.forEach((element) => {
		element.style.setProperty("left", "300px");
	});
}

function closeSidebar() {
	sidebar.style.left = "-300px";
	stretchables.forEach((element) => {
		element.style.setProperty("left", "0px");
	});
}

$(".open-sidebar").click(function () {
	io ^= 1;
	if (io) {
		openSidebar();
	} else {
		closeSidebar();
	}
});

$(".close-sidebar").click(function () {
	io = 0;
});

$(function selectPage() {
	items.forEach((item) => {
		$(item).on("click", function () {
			pages.forEach((page) => {
				for (let i = 0; i < pages.length; i++) {
					console.log(pages[i].classList);
					pages[i].classList.remove("active");
				}
				console.log("." + item.getAttribute("name") + ".page");
				$("." + item.getAttribute("name") + ".page").addClass("active");
			});
			for (let i = 0; i < items.length; i++) {
				items[i].classList.remove("selected-item");
			}
			$(this).addClass("selected-item");
		});
	});
});
