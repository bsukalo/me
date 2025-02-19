let icons = document.getElementsByClassName("socials");
let sidebar = document.querySelector(".sidebar");
let stretchables = document.querySelectorAll(".stretchable");
let items = document.querySelectorAll(".menu-item");
let navItems = document.querySelectorAll(".nav-menu-item");
let pages = document.querySelectorAll(".page");
let activePage = ".home.page";
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

function updateBodyHeight() {
	const activePage = document.querySelector(".active");
	if (activePage) {
		const wrapper = activePage.querySelector('[class*="-wrapper"]');
		if (wrapper) {
			document.body.style.height = `${wrapper.offsetHeight + 320}px`;
		}
	}
}

updateBodyHeight();

// Update on page change
const observer = new MutationObserver(updateBodyHeight);
observer.observe(document.body, {
	subtree: true,
	attributes: true,
	attributeFilter: ["class"],
});

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
	let isAnimating = false; // Flag to track animation status
	let activePage = null; // Variable to store the active page
	let dict = { home: 0, resume: 1, projects: 2 };

	items.forEach((item) => {
		$(item).on("click", function () {
			if (!isAnimating) {
				isAnimating = true;
				const targetPage = "." + item.getAttribute("name") + ".page";

				if (activePage === targetPage) {
					isAnimating = false;
					return;
				}
				pages.forEach((page) => {
					page.classList.remove("active");
				});

				activePage = targetPage;
				$(activePage).fadeOut(100, function () {
					$(activePage).addClass("active");
					$(activePage).fadeIn(100, function () {
						isAnimating = false;
					});
				});
				for (let i = 0; i < items.length; i++) {
					items[i].classList.remove("selected-item");
				}
				$(this).addClass("selected-item");
				for (let i = 0; i < navItems.length; i++) {
					navItems[i].classList.remove("selected-item");
				}
				$(navItems[dict[item.getAttribute("name")]]).addClass(
					"selected-item"
				);
			}
		});
	});
	navItems.forEach((item) => {
		$(item).on("click", function () {
			if (!isAnimating) {
				isAnimating = true;
				const targetPage = "." + item.getAttribute("name") + ".page";

				if (activePage === targetPage) {
					isAnimating = false;
					return;
				}
				pages.forEach((page) => {
					page.classList.remove("active");
				});

				activePage = targetPage;
				$(activePage).fadeOut(100, function () {
					$(activePage).addClass("active");
					$(activePage).fadeIn(100, function () {
						isAnimating = false;
					});
				});
				for (let i = 0; i < navItems.length; i++) {
					navItems[i].classList.remove("selected-item");
				}
				$(this).addClass("selected-item");
				for (let i = 0; i < items.length; i++) {
					items[i].classList.remove("selected-item");
				}
				$(items[dict[item.getAttribute("name")]]).addClass(
					"selected-item"
				);
			}
		});
	});
});
